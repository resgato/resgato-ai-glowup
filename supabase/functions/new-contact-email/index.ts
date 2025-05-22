import { serve as denoServe } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from 'https://esm.sh/resend@2.0.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Validate required fields
const requiredFields = [
  'businessName',
  'name',
  'email',
  'phone'
]

function validateRequiredFields(body: any) {
  const missingFields = requiredFields.filter(field => !body[field])
  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(', ')}`)
  }
}

// Validate email format
function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format')
  }
}

// Define error types
interface EmailError {
  message: string;
  [key: string]: any;
}

interface DatabaseError {
  message: string;
  [key: string]: any;
}

// Function to validate required fields and email format
function validateInput(data: any): { isValid: boolean; error?: string } {
  const requiredFields = ['businessName', 'name', 'email', 'phone']
  const missingFields = requiredFields.filter(field => !data[field])
  
  if (missingFields.length > 0) {
    return { 
      isValid: false, 
      error: `Missing required fields: ${missingFields.join(', ')}` 
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return { isValid: false, error: 'Invalid email format' }
  }

  return { isValid: true }
}

export const handler = async (
  req: Request,
  deps: { supabase?: any; resend?: any } = {}
) => {
  // Validate environment variables (moved inside handler)
  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  const resendApiKey = Deno.env.get('RESEND_API_KEY')

  if (!supabaseUrl || !supabaseServiceKey || !resendApiKey) {
    throw new Error('Missing required environment variables')
  }

  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  // Validate authorization header
  const authHeader = req.headers.get('Authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Missing or invalid authorization header',
        timestamp: new Date().toISOString()
      }),
      { 
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }

  const token = authHeader.split(' ')[1]
  if (token !== supabaseServiceKey) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Invalid authorization token',
        timestamp: new Date().toISOString()
      }),
      { 
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }

  try {
    // Create Supabase client
    const supabase = deps.supabase ?? createClient(supabaseUrl, supabaseServiceKey)
    
    // Create Resend client
    const resend = deps.resend ?? new Resend(resendApiKey)

    // Validate request method
    if (req.method !== 'POST') {
      throw new Error('Method not allowed')
    }

    // Get and validate request body
    let body
    try {
      body = await req.json()
    } catch (e) {
      throw new Error('Invalid JSON in request body')
    }

    // Log the received body for debugging
    console.log('Received body:', body)

    // Validate required fields
    validateRequiredFields(body)
    validateEmail(body.email)

    // Extract relevant information from the audit submission
    const {
      businessName,
      name,
      email,
      phone
    } = body

    // Validate email format
    validateEmail(email)

    // Create email content
    const emailContent = `
      <h2>New Marketing Audit Lead</h2>
      
      <h3>Business Information</h3>
      <p><strong>Business Name:</strong> ${businessName}</p>
      <p><strong>Contact Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
    `

    // Send email using Resend
    let emailData
    try {
      const { data, error: emailError } = await resend.emails.send({
        from: 'Resgato Marketing <marketing@resgato.com>',
        to: 'help@resgato.com',
        subject: `New Marketing Audit Lead: ${businessName}`,
        html: emailContent,
        reply_to: email
      })

      if (emailError) {
        throw emailError as EmailError
      }
      emailData = data
    } catch (emailError) {
      console.error('Email error:', emailError)
      throw new Error(`Failed to send email: ${(emailError as EmailError).message}`)
    }

    // Try to insert into database
    try {
      const { data: existingLead, error: checkError } = await supabase
        .from('marketing_audit_leads')
        .select('id')
        .eq('email', email)
        .single()

      if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "no rows returned"
        throw checkError
      }

      if (existingLead) {
        return new Response(
          JSON.stringify({
            success: false,
            error: 'A lead with this email already exists',
            timestamp: new Date().toISOString()
          }),
          { 
            status: 409,
            headers: { 'Content-Type': 'application/json' }
          }
        )
      }

      const { data, error } = await supabase
        .from('marketing_audit_leads')
        .insert([{
          business_name: businessName,
          name: name,
          email: email,
          phone: phone,
          email_sent: true,
          email_sent_at: new Date().toISOString()
        }])
        .select()
        .single()

      if (error) {
        console.error('Database error:', error)
        throw error
      }

      return new Response(
        JSON.stringify({
          success: true,
          data,
          timestamp: new Date().toISOString()
        }),
        { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    } catch (error) {
      console.error('Database error:', error)
      const dbError = error as DatabaseError
      return new Response(
        JSON.stringify({
          success: false,
          error: dbError.message || 'Failed to store submission in database',
          timestamp: new Date().toISOString()
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

  } catch (error) {
    console.error('Function error:', error)
    
    // Determine appropriate status code
    let statusCode = 400
    const errorMessage = (error as Error).message
    if (errorMessage.includes('Method not allowed')) {
      statusCode = 405
    } else if (errorMessage.includes('Missing required environment variables')) {
      statusCode = 500
    }

    return new Response(
      JSON.stringify({ 
        success: false,
        error: errorMessage,
        timestamp: new Date().toISOString()
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: statusCode,
      },
    )
  }
}

// For Deno deploy/Edge: default export for serve
export default function main() {
  denoServe(handler)
}

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const supabaseUrl = Deno.env.get('SUPABASE_URL') ?? ''
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get the raw request body
    const rawBody = await req.text()
    console.log('Raw request body:', rawBody)

    // Parse the body
    const body = JSON.parse(rawBody)
    console.log('Parsed body:', body)

    // Extract relevant information from the audit submission
    const {
      business_name,
      business_website,
      business_phone,
      business_email,
      business_address,
      business_city,
      business_state,
      business_zip,
      marketing_goals,
      current_marketing_channels,
      monthly_marketing_budget,
      target_audience,
      competitors,
      additional_notes
    } = body

    // Create email content
    const emailContent = `
      New Local Business Marketing Audit Submission

      Business Information:
      Name: ${business_name}
      Website: ${business_website}
      Phone: ${business_phone}
      Email: ${business_email}
      Address: ${business_address}
      City: ${business_city}
      State: ${business_state}
      ZIP: ${business_zip}

      Marketing Information:
      Goals: ${marketing_goals}
      Current Channels: ${current_marketing_channels}
      Monthly Budget: ${monthly_marketing_budget}
      Target Audience: ${target_audience}
      Competitors: ${competitors}

      Additional Notes:
      ${additional_notes}
    `

    // Send email using Supabase Edge Function
    const { data: emailData, error: emailError } = await supabase.functions.invoke('send-email', {
      body: {
        to: 'help@resgato.com',
        subject: `New Marketing Audit: ${business_name}`,
        text: emailContent,
        html: emailContent.replace(/\n/g, '<br>')
      }
    })

    if (emailError) {
      console.error('Email error:', emailError)
      throw emailError
    }

    return new Response(
      JSON.stringify({ success: true, data: emailData }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
}) 
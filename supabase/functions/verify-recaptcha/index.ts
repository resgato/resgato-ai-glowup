import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface RecaptchaVerificationRequest {
  token: string
  action?: string
}

interface RecaptchaVerificationResponse {
  success: boolean
  score?: number
  action?: string
  challenge_ts?: string
  hostname?: string
  'error-codes'?: string[]
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }

  try {
    // Get reCAPTCHA secret key from environment
    const recaptchaSecretKey = Deno.env.get('RECAPTCHA_SECRET_KEY')
    if (!recaptchaSecretKey) {
      throw new Error('RECAPTCHA_SECRET_KEY environment variable is not set')
    }

    // Parse request body
    const body: RecaptchaVerificationRequest = await req.json()
    const { token, action } = body

    if (!token) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'reCAPTCHA token is required' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Verify reCAPTCHA token with Google
    const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify'
    const formData = new FormData()
    formData.append('secret', recaptchaSecretKey)
    formData.append('response', token)

    const verificationResponse = await fetch(verificationUrl, {
      method: 'POST',
      body: formData,
    })

    if (!verificationResponse.ok) {
      throw new Error(`reCAPTCHA verification request failed: ${verificationResponse.status}`)
    }

    const verificationResult: RecaptchaVerificationResponse = await verificationResponse.json()

    // Check if verification was successful
    if (!verificationResult.success) {
      console.error('reCAPTCHA verification failed:', verificationResult['error-codes'])
      return new Response(
        JSON.stringify({
          success: false,
          error: 'reCAPTCHA verification failed',
          errorCodes: verificationResult['error-codes']
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Check score (for reCAPTCHA v3, score should be between 0.0 and 1.0)
    const score = verificationResult.score || 0
    const minScore = 0.5 // Adjust this threshold as needed

    if (score < minScore) {
      console.warn(`reCAPTCHA score too low: ${score}`)
      return new Response(
        JSON.stringify({
          success: false,
          error: 'reCAPTCHA score too low',
          score: score
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Check action if provided
    if (action && verificationResult.action !== action) {
      console.warn(`reCAPTCHA action mismatch: expected ${action}, got ${verificationResult.action}`)
      return new Response(
        JSON.stringify({
          success: false,
          error: 'reCAPTCHA action mismatch',
          expectedAction: action,
          receivedAction: verificationResult.action
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Verification successful
    return new Response(
      JSON.stringify({
        success: true,
        score: score,
        action: verificationResult.action,
        challenge_ts: verificationResult.challenge_ts,
        hostname: verificationResult.hostname
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})



import { serve } from "https://deno.land/std/http/server.ts";
import { Resend } from "npm:resend";

// Initialize Resend with the API key, making sure to handle it properly
const resendApiKey = Deno.env.get("RESEND_API_KEY");
if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in environment variables");
}
const resend = new Resend(resendApiKey);

// reCAPTCHA verification constants
const RECAPTCHA_SECRET_KEY = Deno.env.get("RECAPTCHA_SECRET_KEY") || "6LdrTT0rAAAAAHkuNTcn26tLuIGdOzpq65W-T3KL"; // Production secret key
const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

// Define CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

/**
 * Verifies a reCAPTCHA token
 * @param token The reCAPTCHA token to verify
 * @returns Whether the token is valid and the score
 */
async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number }> {
  try {
    const formData = new URLSearchParams();
    formData.append('secret', RECAPTCHA_SECRET_KEY);
    formData.append('response', token);

    const response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    console.log("reCAPTCHA verification response:", data);

    return {
      success: data.success === true,
      score: data.score,
    };
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return { success: false };
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, company, phone, recaptchaToken } = await req.json();

    console.log(`Received contact form submission from ${name} (${email})`);
    
    // Validate required fields
    if (!name || !email || !message) {
      throw new Error("Missing required fields: name, email, and message are required");
    }
    
    // Verify reCAPTCHA if token is provided
    if (recaptchaToken) {
      const verification = await verifyRecaptcha(recaptchaToken);
      
      if (!verification.success) {
        console.error("reCAPTCHA verification failed");
        throw new Error("CAPTCHA verification failed. Please try again.");
      }
      
      // Check the score - 0.0 is likely bot, 1.0 is likely human
      // Recommended threshold is 0.5, but can be adjusted
      if (verification.score !== undefined && verification.score < 0.5) {
        console.warn(`Suspicious activity detected: reCAPTCHA score ${verification.score}`);
        throw new Error("Your submission was flagged as potential spam. Please try again later.");
      }
      
      console.log(`reCAPTCHA score: ${verification.score}`);
    } else {
      // For backward compatibility - allow submissions without token but log it
      console.warn("Form submitted without reCAPTCHA token");
    }
    
    const emailResult = await resend.emails.send({
      from: "contact@resgato.com",
      to: "help@resgato.com",
      subject: "New Contact Form Submission - Resgato",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    console.log("Email sent successfully:", emailResult);

    return new Response(JSON.stringify({ success: true }), { 
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      } 
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error.message 
    }), { 
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      } 
    });
  }
});

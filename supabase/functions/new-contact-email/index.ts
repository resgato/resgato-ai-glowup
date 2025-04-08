
import { serve } from "https://deno.land/std/http/server.ts";
import { Resend } from "npm:resend";

// Initialize Resend with the API key, making sure to handle it properly
const resendApiKey = Deno.env.get("RESEND_API_KEY");
if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in environment variables");
}
const resend = new Resend(resendApiKey);

// Define CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message, company, phone } = await req.json();

    console.log(`Received contact form submission from ${name} (${email})`);
    
    // Validate required fields
    if (!name || !email || !message) {
      throw new Error("Missing required fields: name, email, and message are required");
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

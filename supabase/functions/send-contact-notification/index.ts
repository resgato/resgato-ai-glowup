
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, phone, message } = await req.json();

    // In a real implementation, you would use a service like Resend, SendGrid, etc.
    // to send the actual email. For now, we'll just log the data.
    console.log("Contact notification email would be sent with:");
    console.log({ name, email, company, phone, message });

    // To implement email sending, you would need to add a service like Resend:
    // const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    // const { data, error } = await resend.emails.send({
    //   from: "Your Website <no-reply@yourdomain.com>",
    //   to: ["admin@yourdomain.com"],
    //   subject: "New Contact Form Submission",
    //   html: `<p>You received a new message from ${name}:</p>
    //          <p>Email: ${email}</p>
    //          <p>Company: ${company || 'Not provided'}</p>
    //          <p>Phone: ${phone || 'Not provided'}</p>
    //          <p>Message: ${message}</p>`
    // });

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});


import { serve } from "https://deno.land/std/http/server.ts";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

serve(async (req) => {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "alerts@yourdomain.com", // Resend requires verified domain
      to: "you@yourdomain.com",
      subject: "New Contact Submission",
      html: `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Message:</strong><br>${message}
      `,
    });

    return new Response("Sent", { status: 200 });
  } catch (e) {
    return new Response("Error sending email", { status: 500 });
  }
});

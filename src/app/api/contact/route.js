import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "janaalabed0101@gmail.com",
      reply_to: email,
      subject: `New message from ${name}`,
      text: message,
    });
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }
}

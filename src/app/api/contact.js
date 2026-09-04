import { Resend } from "resend";
export default async function sendToResend({ req, res }) {
  if (req.method != "post") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }
  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "janaalabed0101@gmail.com",
      reply_to: email,
      subject: `New message from ${name}`,
      text: message,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send" });
  }
}

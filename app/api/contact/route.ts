import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(req: Request) {
  const formData = await req.formData();
  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const subject = (formData.get("subject") as string) || "Portfolio contact";
  const message = (formData.get("message") as string) || "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: true, note: "RESEND_API_KEY not set. Configure to send emails." });
  }

  await resend.emails.send({
    from: "portfolio@hemanth.dev",
    to: ["hemanth@example.com"],
    subject: `[Portfolio] ${subject}`,
    reply_to: email,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  return NextResponse.json({ ok: true });
}

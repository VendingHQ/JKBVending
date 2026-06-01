import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, phone, message } = await req.json();

    await resend.emails.send({
      from: "J-K-B Vending <noreply@jkbvending.com>",
      to: "john@jkbvending.com",
      subject: `New Lead: ${company || name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Company</strong></td><td>${company || "Not provided"}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone || "Not provided"}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message || "None"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

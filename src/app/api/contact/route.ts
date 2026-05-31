import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, city, employees, message } = body;

    if (!name || !email || !company) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "J-K-B Vending <onboarding@resend.dev>",
      to: "john@jkbvending.com",
      subject: `New Lead: ${company} — ${city || "DFW"}`,
      html: `
        <h2>New Lead from jkbvending.com</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Company</td><td style="padding:8px;">${company}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Phone</td><td style="padding:8px;">${phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">City</td><td style="padding:8px;">${city || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Employees</td><td style="padding:8px;">${employees || "Not provided"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;color:#555;">Message</td><td style="padding:8px;">${message || "None"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

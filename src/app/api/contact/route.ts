import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { Resend } from "resend";

const recipient = process.env.CONTACT_FORM_TO_EMAIL ?? "pervesmahedi@gmail.com";
const sender =
  process.env.CONTACT_FORM_FROM_EMAIL ??
  "Portfolio contact form <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact form delivery is not configured: RESEND_API_KEY is missing.");
      return NextResponse.json(
        { error: "Contact delivery is temporarily unavailable." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const { name, email, company, budget, service, message } = parsed.data;
    const result = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `New contact request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Service: ${service || "Not provided"}`,
        `Budget: ${budget || "Not provided"}`,
        "",
        "Project details:",
        message,
      ].join("\n"),
      html: `
        <h2>New contact request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || "Not provided")}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget || "Not provided")}</p>
        <h3>Project details</h3>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
    });

    if (result.error) {
      console.error("Resend contact form error:", result.error);
      return NextResponse.json(
        { error: "Could not deliver your message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

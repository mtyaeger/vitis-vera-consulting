import { NextResponse } from "next/server";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, workflow, outcome } = body as Record<string, unknown>;

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(workflow) ||
    !isNonEmptyString(outcome)
  ) {
    return NextResponse.json({ error: "Please complete all four fields." }, { status: 400 });
  }

  if (name.length > 100 || email.length > 254 || workflow.length > 2000 || outcome.length > 1200) {
    return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || "mark@vitisvera.com";

  if (!apiKey || !fromEmail) {
    console.error("Contact email is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL.");
    return NextResponse.json({ error: "Email delivery is temporarily unavailable." }, { status: 503 });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeWorkflow = escapeHtml(workflow.trim()).replaceAll("\n", "<br />");
  const safeOutcome = escapeHtml(outcome.trim()).replaceAll("\n", "<br />");

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email.trim(),
      subject: "New Vitis Vera context intake",
      html: `
        <h1>New Vitis Vera context intake</h1>
        <p><strong>Name</strong><br />${safeName}</p>
        <p><strong>Email</strong><br />${safeEmail}</p>
        <p><strong>Workflow / problem</strong><br />${safeWorkflow}</p>
        <p><strong>Better outcome</strong><br />${safeOutcome}</p>
      `,
      text: `New Vitis Vera context intake\n\nName\n${name.trim()}\n\nEmail\n${email.trim()}\n\nWorkflow / problem\n${workflow.trim()}\n\nBetter outcome\n${outcome.trim()}`,
    }),
  });

  if (!response.ok) {
    const deliveryError = await response.text();
    console.error("Resend delivery failed:", response.status, deliveryError);
    return NextResponse.json({ error: "Your context could not be sent." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}

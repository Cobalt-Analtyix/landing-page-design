import { NextResponse } from "next/server";

import { getSql } from "@/lib/db";
import { CONTACT_EMAIL } from "@/lib/constants";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = { name: 120, company: 160, email: 200, phone: 40, message: 4000 };

function field(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const name = field(record, "name");
  const company = field(record, "company");
  const email = field(record, "email");
  const phone = field(record, "phone");
  const message = field(record, "message");

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and a message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email so we can reply." },
      { status: 400 }
    );
  }

  if (
    name.length > LIMITS.name ||
    company.length > LIMITS.company ||
    email.length > LIMITS.email ||
    phone.length > LIMITS.phone ||
    message.length > LIMITS.message
  ) {
    return NextResponse.json(
      { error: "One of the fields is too long. Please shorten it and try again." },
      { status: 400 }
    );
  }

  try {
    const sql = getSql();
    await sql`
      insert into contact_submissions (name, company, email, phone, message)
      values (${name}, ${company || null}, ${email}, ${phone || null}, ${message})
    `;
  } catch (error) {
    console.error("Failed to record contact submission", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  await sendNotification({ name, company, email, phone, message });

  return NextResponse.json({ ok: true });
}

type Submission = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

async function sendNotification(submission: Submission) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const to = process.env.CONTACT_INBOX || CONTACT_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Cobalt Analytix <noreply@cobaltanalytix.com>";
  const subjectWho = submission.company
    ? `${submission.name} · ${submission.company}`
    : submission.name;

  const lines = [
    `Name:    ${submission.name}`,
    `Company: ${submission.company || "—"}`,
    `Email:   ${submission.email}`,
    `Phone:   ${submission.phone || "—"}`,
    "",
    "Message:",
    submission.message,
  ];

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: submission.email,
        subject: `New enquiry — ${subjectWho}`,
        text: lines.join("\n"),
      }),
    });

    if (!response.ok) {
      console.error(
        "Resend notification failed",
        response.status,
        await response.text().catch(() => "")
      );
    }
  } catch (error) {
    // The submission is already saved; a failed email must not fail the request.
    console.error("Resend notification error", error);
  }
}

import { NextResponse } from "next/server";

import { getSql } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LIMITS = { name: 120, company: 160, email: 254, phone: 40, message: 4000 };

function field(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const limited = await rateLimit(request, "contact", { limit: 5, windowSeconds: 3600 });
  if (limited) return limited;

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

  // Honeypot: real visitors never fill this hidden field, so pretend success and store nothing.
  if (field(record, "website")) {
    return NextResponse.json({ ok: true });
  }

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
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to record contact submission", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

import { getSql } from "@/lib/db";
import { rateLimit } from "@/lib/rate-limit";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAIL_MAX_LENGTH = 254;

export async function POST(request: Request) {
  const limited = await rateLimit(request, "waitlist", { limit: 10, windowSeconds: 3600 });
  if (limited) return limited;

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const email =
    typeof body === "object" && body !== null && "email" in body
      ? String((body as { email: unknown }).email).trim()
      : "";

  if (!email || email.length > EMAIL_MAX_LENGTH || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Enter a valid email to continue." },
      { status: 400 }
    );
  }

  try {
    const sql = getSql();
    await sql`insert into waitlist_signups (email) values (${email}) on conflict (email) do nothing`;
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to record waitlist signup", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

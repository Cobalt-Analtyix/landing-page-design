import { NextResponse } from "next/server";

import { getSql } from "@/lib/db";

// Fixed-window limiter stored in Postgres so the count is shared across serverless instances.
// Returns a 429 response when the caller is over the limit, otherwise null.
export async function rateLimit(
  request: Request,
  name: string,
  { limit, windowSeconds }: { limit: number; windowSeconds: number },
) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Math.floor(Date.now() / 1000);
  const windowStart = now - (now % windowSeconds);

  try {
    const sql = getSql();
    const rows = await sql`
      insert into rate_limits (key, window_start, count)
      values (${`${name}:${ip}`}, ${windowStart}, 1)
      on conflict (key, window_start) do update set count = rate_limits.count + 1
      returning count
    `;

    // Occasionally drop expired windows so the table stays small.
    if (Math.random() < 0.01) {
      await sql`delete from rate_limits where window_start < ${now - 86400}`;
    }

    if (rows[0].count > limit) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429, headers: { "Retry-After": String(windowStart + windowSeconds - now) } },
      );
    }
  } catch (error) {
    // Don't block real visitors if the limiter itself fails.
    console.error("Rate limiter failed", error);
  }

  return null;
}

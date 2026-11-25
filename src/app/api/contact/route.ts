import { NextResponse } from "next/server";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO || "pritanjan.shome@gmail.com";
const FROM = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";

// Best-effort, in-memory limit: 5 messages per hour per IP.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 3_600_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/\r/g, "").trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this field.
  if (clean(body.website, 50)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 200);
  const context = clean(body.context, 300);
  const message = clean(body.message, 4000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // Not configured yet: the form falls back to the visitor's email app.
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  const text = [
    "New message from the portfolio contact form",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    context ? `Working on: ${context}` : "",
    "",
    "Message:",
    message,
  ]
    .filter((l, i, a) => l !== "" || a[i - 1] !== "")
    .join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

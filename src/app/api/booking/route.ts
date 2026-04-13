import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_EVENT_TYPES = ["Wedding", "Private Party", "Community Event", "Live Show", "Collaboration"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value
    .trim()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const { allowed, retryAfterSeconds } = rateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: `Too many requests. Please try again in ${retryAfterSeconds} seconds.` },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  const name = sanitize(raw.name);
  const email = sanitize(raw.email);
  const date = sanitize(raw.date);
  const eventType = sanitize(raw.eventType);
  const message = sanitize(raw.message);

  // Required fields
  if (!name || name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: "Name must be between 2 and 100 characters." }, { status: 400 });
  }

  if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }

  // Optional but validated if provided
  if (date && !DATE_REGEX.test(date)) {
    return NextResponse.json({ error: "Invalid date format." }, { status: 400 });
  }

  if (eventType && !ALLOWED_EVENT_TYPES.includes(eventType)) {
    return NextResponse.json({ error: "Invalid event type." }, { status: 400 });
  }

  if (message && message.length > 2000) {
    return NextResponse.json({ error: "Message must be under 2000 characters." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "peronguyen2510@gmail.com",
    subject: `New Booking Inquiry from ${name}`,
    html: `
      <h2>New Booking Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Event Date:</strong> ${date || "Not specified"}</p>
      <p><strong>Event Type:</strong> ${eventType || "Not specified"}</p>
      <p><strong>Message:</strong><br/>${message || "No message provided."}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

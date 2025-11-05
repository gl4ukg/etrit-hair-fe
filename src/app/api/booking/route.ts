// app/api/booking/route.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'nodejs';
// Ensure this route is never cached
export const dynamic = 'force-dynamic';

const BookingSchema = z.object({
  name: z.string().min(2).max(120).trim(),
  email: z.string().email().max(254).trim(),
  phone: z.string().max(40).optional().default(''),
  date: z.string().max(40).optional().default(''),
  time: z.string().max(40).optional().default(''),
  service: z
    .enum(['Haircut', 'Color', 'Makeup', 'Consultation'])
    .or(z.string().min(2).max(80))
    .transform((s) => s.trim()),
  message: z.string().max(5000).optional().default(''),
  // optional captcha token from client
  captchaToken: z.string().optional(),
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// In-memory micro rate limiter (swap for Redis in prod)
const hits = new Map<string, { count: number; ts: number }>();
function rateLimit(ip: string, limit = 10, windowMs = 60_000) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > windowMs) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count++;
  if (rec.count > limit) return true;
  return false;
}

async function getTransport() {
  const nodemailer = (await import('nodemailer')).default;
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass || Number.isNaN(port)) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // set true only for 465
    auth: { user, pass },
    pool: true,
  });
}

async function verifyCaptcha(token?: string) {
  const secret = process.env.CAPTCHA_SECRET; // reCAPTCHA/HCaptcha secret
  if (!secret || !token) return true; // treat as disabled if not configured
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as { success?: boolean; score?: number };
    return !!data.success && (data.score ?? 0.9) >= 0.5;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  try {
    if (req.method !== 'POST') {
      return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
    }

    // crude size guard
    const contentLength = Number(req.headers.get('content-length') || '0');
    if (contentLength > 500_000) {
      return NextResponse.json({ message: 'Payload too large' }, { status: 413 });
    }

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0';
    if (rateLimit(ip)) {
      return NextResponse.json({ message: 'Too many requests' }, { status: 429 });
    }

    const raw = await req.json();
    const parsed = BookingSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Invalid input', issues: parsed.error.issues },
        { status: 400 },
      );
    }
    const { name, email, phone, date, time, service, message, captchaToken } = parsed.data;

    const captchaOk = await verifyCaptcha(captchaToken);
    if (!captchaOk) {
      return NextResponse.json({ message: 'Captcha verification failed' }, { status: 400 });
    }

    const esc = (s: string) => escapeHtml(s);
    const html = `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${esc(name)}</p>
      <p><strong>Email:</strong> ${esc(email)}</p>
      <p><strong>Phone:</strong> ${esc(phone || '-')}</p>
      <p><strong>Preferred date:</strong> ${esc(date || '-')}</p>
      <p><strong>Preferred time:</strong> ${esc(time || '-')}</p>
      <p><strong>Service:</strong> ${esc(service)}</p>
      <p><strong>Message:</strong><br/>${message ? esc(message).replace(/\n/g, '<br/>') : '-'}</p>
      <hr/>
      <p><em>IP:</em> ${esc(ip)}</p>
    `.trim();

    const text = [
      `New Booking Request`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || '-'}`,
      `Preferred date: ${date || '-'}`,
      `Preferred time: ${time || '-'}`,
      `Service: ${service}`,
      `Message:`,
      message || '-',
    ].join('\n');

    const from = process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@example.com';
    const to = process.env.SMTP_TO || process.env.SMTP_USER || 'owner@example.com';

    // defend against header injection in subject
    const safeSubject = `Booking request from ${name}`.replace(/[\r\n]/g, ' ');

    const transport = await getTransport();
    if (transport) {
      await transport.sendMail({
        from,
        to,
        subject: safeSubject,
        html,
        text,
        replyTo: email, // so you can reply directly
        headers: { 'X-Booking-Source-IP': ip },
      });
    } else {
      console.warn('[booking] Transport not configured. Would send:', {
        to,
        subject: safeSubject,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[booking] Error:', err);
    return NextResponse.json({ message: 'Internal error' }, { status: 500 });
  }
}

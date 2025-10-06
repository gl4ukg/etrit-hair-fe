import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Lazy import nodemailer only when needed to avoid SSR issues
async function getTransport() {
  const nodemailer = (await import('nodemailer')).default;
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: { user, pass },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const phone = String(body.phone || '').trim();
    const date = String(body.date || '').trim();
    const time = String(body.time || '').trim();
    const service = String(body.service || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !service) {
      return NextResponse.json(
        { message: 'Missing required fields: name, email, service' },
        { status: 400 }
      );
    }

    const html = `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || '-'}</p>
      <p><strong>Preferred date:</strong> ${date || '-'}</p>
      <p><strong>Preferred time:</strong> ${time || '-'}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br/>${message ? message.replace(/\n/g, '<br/>') : '-'}</p>
    `;

    const from = process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@example.com';
    const to = process.env.SMTP_TO || process.env.SMTP_USER || 'owner@example.com';

    const transport = await getTransport();

    if (transport) {
      await transport.sendMail({
        from,
        to,
        subject: `Booking request from ${name}`,
        html,
      });
    } else {
      // Fallback: log payload so requests are still accepted in dev
      console.log('[booking] Email transport not configured. Payload:', body);
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('[booking] Error:', err);
    return NextResponse.json({ message: 'Internal error' }, { status: 500 });
  }
}

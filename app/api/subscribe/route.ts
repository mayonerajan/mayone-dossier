import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic server-side validation
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY || !AUDIENCE_ID) {
      // Misconfiguration: fail safe, do not leak which var is missing
      console.error('Resend env vars not set');
      return NextResponse.json({ error: 'Subscription is temporarily unavailable.' }, { status: 503 });
    }

    const { error } = await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Could not subscribe. Please try again.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('Subscribe route error:', err);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}

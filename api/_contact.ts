/**
 * Shared contact-form logic for both runtimes:
 *  - `api/contact.ts`  -> Vercel serverless function in production
 *  - `vite.config.ts`  -> dev-server middleware for local testing
 *
 * Delivery is handled by Resend (https://resend.com). Credentials are read from
 * environment variables only; nothing is hard-coded.
 */

export type ContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>

export type ContactResult = {
  status: number
  body: { ok: boolean; message: string; errors?: ContactErrors }
}

const RESEND_ENDPOINT = 'https://api.resend.com/emails'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i

const LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 160 },
  subject: { min: 2, max: 120 },
  message: { min: 10, max: 4000 },
}

export function validateContact(input: Partial<ContactPayload>): ContactErrors {
  const errors: ContactErrors = {}
  const name = (input.name ?? '').trim()
  const email = (input.email ?? '').trim()
  const subject = (input.subject ?? '').trim()
  const message = (input.message ?? '').trim()

  if (name.length < LIMITS.name.min) errors.name = 'Please enter your name.'
  else if (name.length > LIMITS.name.max) errors.name = 'That name is a little too long.'

  if (!email) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.'
  else if (email.length > LIMITS.email.max) errors.email = 'That email address is too long.'

  if (subject.length < LIMITS.subject.min) errors.subject = 'Please add a short subject.'
  else if (subject.length > LIMITS.subject.max) errors.subject = 'That subject is too long.'

  if (message.length < LIMITS.message.min) errors.message = 'Please write at least a sentence or two.'
  else if (message.length > LIMITS.message.max) errors.message = 'Please keep the message under 4000 characters.'

  return errors
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildEmail(payload: Required<ContactPayload>) {
  const safeName = escapeHtml(payload.name)
  const safeEmail = escapeHtml(payload.email)
  const safeSubject = escapeHtml(payload.subject)
  const safeMessage = escapeHtml(payload.message).replace(/\n/g, '<br />')

  return {
    text: [
      `New message from the portfolio contact form.`,
      ``,
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Subject: ${payload.subject}`,
      ``,
      payload.message,
      ``,
      `— Sent from peternyagaka.vercel.app`,
    ].join('\n'),
    html: `
      <div style="font-family:Inter,Segoe UI,Helvetica,Arial,sans-serif;color:#171717;line-height:1.6;">
        <p style="margin:0 0 16px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#B08D45;">
          Portfolio contact form
        </p>
        <h1 style="margin:0 0 20px;font-size:22px;font-weight:600;">${safeSubject}</h1>
        <table style="border-collapse:collapse;font-size:14px;margin-bottom:20px;">
          <tr><td style="padding:2px 12px 2px 0;color:#666666;">Name</td><td>${safeName}</td></tr>
          <tr><td style="padding:2px 12px 2px 0;color:#666666;">Email</td><td>${safeEmail}</td></tr>
        </table>
        <div style="padding:16px 0;border-top:1px solid #E8E5DF;border-bottom:1px solid #E8E5DF;font-size:15px;">
          ${safeMessage}
        </div>
        <p style="margin-top:20px;font-size:12px;color:#666666;">Sent from peternyagaka.vercel.app</p>
      </div>
    `,
  }
}

async function sendWithResend(payload: Required<ContactPayload>) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return null

  const to = process.env.CONTACT_TO_EMAIL || 'peternyagaka5@gmail.com'
  const from = process.env.CONTACT_FROM_EMAIL || 'Peter Nyagaka Portfolio <onboarding@resend.dev>'
  const { text, html } = buildEmail(payload)

  const response = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `[Portfolio] ${payload.subject}`,
      text,
      html,
      reply_to: payload.email,
    }),
  })

  return response
}

export async function handleContactRequest(rawBody: string): Promise<ContactResult> {
  let parsed: Partial<ContactPayload> & { website?: string } = {}

  try {
    parsed = rawBody ? JSON.parse(rawBody) : {}
  } catch {
    return { status: 400, body: { ok: false, message: 'The request body was not valid JSON.' } }
  }

  // Honeypot: real users never see or fill this field.
  if (parsed.website) {
    return { status: 200, body: { ok: true, message: 'Message received.' } }
  }

  const errors = validateContact(parsed)
  if (Object.keys(errors).length > 0) {
    return {
      status: 422,
      body: { ok: false, message: 'Please fix the highlighted fields.', errors },
    }
  }

  const payload: Required<ContactPayload> = {
    name: String(parsed.name).trim(),
    email: String(parsed.email).trim(),
    subject: String(parsed.subject).trim(),
    message: String(parsed.message).trim(),
  }

  let response: Response | null = null
  try {
    response = await sendWithResend(payload)
  } catch (error) {
    console.error('[contact] Resend request failed', error)
    return {
      status: 502,
      body: { ok: false, message: 'Could not reach the email service. Please try again shortly.' },
    }
  }

  if (response === null) {
    // Credentials are not configured on this deployment. Nothing is faked.
    return {
      status: 503,
      body: {
        ok: false,
        message:
          'Email delivery is not configured on this deployment yet. Please reach me directly at peternyagaka5@gmail.com.',
      },
    }
  }

  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    console.error('[contact] Resend responded with', response.status, detail)
    return {
      status: 502,
      body: { ok: false, message: 'The email service rejected the message. Please try again shortly.' },
    }
  }

  return { status: 200, body: { ok: true, message: "Message sent. I'll reply as soon as I can." } }
}

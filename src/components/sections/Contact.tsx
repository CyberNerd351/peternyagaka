import { useState, type FormEvent } from 'react'
import { AlertCircle, Check, Loader2, Mail, MapPin, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcon'
import { siteConfig } from '../../data/siteConfig'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { validateContactFields, type ContactFieldErrors, type ContactFields } from '../../utils/validateContact'
import { cn } from '../../utils/cn'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const emptyFields: ContactFields = { name: '', email: '', subject: '', message: '' }

const contactDetails = [
  { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'peter-n-99a0931b5', href: siteConfig.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: 'CyberNerd351', href: siteConfig.github },
  { icon: MapPin, label: 'Location', value: siteConfig.locationDetail, href: undefined },
]

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-error">
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const [fields, setFields] = useState<ContactFields>(emptyFields)
  const [errors, setErrors] = useState<ContactFieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')
  const [honeypot, setHoneypot] = useState('')

  function update<K extends keyof ContactFields>(key: K, value: string) {
    setFields((current) => ({ ...current, [key]: value }))
    if (errors[key]) setErrors((current) => ({ ...current, [key]: undefined }))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validateContactFields(fields)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle')
      setFeedback('')
      return
    }

    setStatus('submitting')
    setFeedback('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, website: honeypot }),
      })
      const contentType = response.headers.get('content-type') ?? ''
      const data = (contentType.includes('application/json')
        ? await response.json().catch(() => ({}))
        : {}) as {
        ok?: boolean
        message?: string
        errors?: ContactFieldErrors
      }

      if (!contentType.includes('application/json')) {
        setStatus('error')
        setFeedback('The contact endpoint did not respond as expected. Please email me directly.')
        return
      }

      if (response.ok && data.ok) {
        setStatus('success')
        setFeedback(data.message ?? "Message sent. I'll reply as soon as I can.")
        setFields(emptyFields)
        return
      }

      setStatus('error')
      setFeedback(data.message ?? 'Something went wrong. Please try again, or email me directly.')
      if (data.errors) setErrors(data.errors)
    } catch {
      setStatus('error')
      setFeedback('Could not reach the server. Please check your connection, or email me directly.')
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-paper py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something useful."
          description="I'm interested in meaningful engineering opportunities, interesting projects and conversations with people building practical technology."
        />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <ul className="border-t border-line">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  const content = (
                    <span className="flex items-start gap-4">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                      <span>
                        <span className="block font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                          {detail.label}
                        </span>
                        <span className="mt-1 block text-base text-text">{detail.value}</span>
                      </span>
                    </span>
                  )

                  return (
                    <li key={detail.label} className="border-b border-line py-5">
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="group block transition-colors duration-300 hover:text-accent"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  )
                })}
              </ul>

              <p className="mt-8 text-sm leading-relaxed text-muted">
                I read everything and reply as quickly as I can. If it is urgent, email is the
                fastest way to reach me.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <form onSubmit={onSubmit} noValidate className="border-t border-line pt-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field id="name" label="Name" error={errors.name}>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={fields.name}
                      onChange={(event) => update('name', event.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={cn('field', errors.name && 'field-error')}
                      placeholder="Your name"
                    />
                  </Field>

                  <Field id="email" label="Email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={fields.email}
                      onChange={(event) => update('email', event.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={cn('field', errors.email && 'field-error')}
                      placeholder="you@example.com"
                    />
                  </Field>
                </div>

                <Field id="subject" label="Subject" error={errors.subject} className="mt-6">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={fields.subject}
                    onChange={(event) => update('subject', event.target.value)}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    className={cn('field', errors.subject && 'field-error')}
                    placeholder="What is this about?"
                  />
                </Field>

                <Field id="message" label="Message" error={errors.message} className="mt-6">
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={fields.message}
                    onChange={(event) => update('message', event.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={cn('field resize-y', errors.message && 'field-error')}
                    placeholder="Tell me about the project, the role, or the problem."
                  />
                </Field>

                {/* Honeypot — hidden from people, tempting to bots. */}
                <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(event) => setHoneypot(event.target.value)}
                  />
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-solid group disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        Sending
                        <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.8} />
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5" strokeWidth={1.6} />
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="link-underline font-label text-[0.6875rem] uppercase tracking-[0.16em] text-muted"
                  >
                    Or email me directly
                  </a>
                </div>

                {feedback && (
                  <p
                    role="status"
                    className={cn(
                      'mt-6 flex items-start gap-3 border px-4 py-3.5 text-sm',
                      status === 'success' ? 'border-gold/50 bg-wash text-text' : 'alert-error',
                    )}
                  >
                    {status === 'success' ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
                    ) : (
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.8} />
                    )}
                    {feedback}
                  </p>
                )}

                <p className="mt-6 font-label text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                  Delivery runs through Resend. 
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

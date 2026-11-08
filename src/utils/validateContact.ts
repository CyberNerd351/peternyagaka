export type ContactFields = {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactFieldErrors = Partial<Record<keyof ContactFields, string>>

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i

/** Client-side mirror of the server rules in api/_contact.ts. */
export function validateContactFields(fields: ContactFields): ContactFieldErrors {
  const errors: ContactFieldErrors = {}

  if (fields.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!fields.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = 'Please enter a valid email address.'
  if (fields.subject.trim().length < 2) errors.subject = 'Please add a short subject.'
  if (fields.message.trim().length < 10) errors.message = 'Please write at least a sentence or two.'

  return errors
}

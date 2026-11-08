import type { VercelRequest, VercelResponse } from '@vercel/node'
import { handleContactRequest } from './_contact'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, message: 'Method not allowed.' })
  }

  const rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body ?? {})

  try {
    const result = await handleContactRequest(rawBody)
    return res.status(result.status).json(result.body)
  } catch (error) {
    console.error('[contact] unexpected error', error)
    return res.status(500).json({ ok: false, message: 'Unexpected server error.' })
  }
}

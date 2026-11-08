import { useEffect, useState } from 'react'
import { siteConfig } from '../data/siteConfig'

type CvState = 'checking' | 'available' | 'missing'

/**
 * Checks whether the CV actually exists at its public path.
 *
 * When the PDF has not been uploaded the download control switches to a mail
 * request instead of pointing at a file that would 404. Drop the PDF into
 * public/documents/ and the real download comes back on its own.
 *
 * The check runs once per page load and is shared by every component that asks.
 */
let cached: Promise<CvState> | null = null

function checkCv(): Promise<CvState> {
  if (!cached) {
    cached = fetch(siteConfig.cv.path, { method: 'HEAD' })
      .then((response) => {
        // A hosting fallback serves index.html for missing files, so a 200 on
        // its own is not proof the PDF exists.
        const contentType = response.headers.get('content-type') ?? ''
        return response.ok && !contentType.includes('text/html') ? 'available' : 'missing'
      })
      .catch(() => 'missing')
  }
  return cached
}

export function useCv() {
  const [state, setState] = useState<CvState>(siteConfig.cv.available ? 'available' : 'checking')

  useEffect(() => {
    if (siteConfig.cv.available) return
    let cancelled = false

    checkCv().then((result) => {
      if (!cancelled) setState(result)
    })

    return () => {
      cancelled = true
    }
  }, [])

  return {
    state,
    isAvailable: state === 'available',
    href: state === 'missing' ? `mailto:${siteConfig.email}?subject=CV%20request` : siteConfig.cv.path,
    label: state === 'missing' ? 'Request CV' : 'Download CV',
  }
}

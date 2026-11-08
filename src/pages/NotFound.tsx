import { Link } from 'react-router-dom'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { siteConfig } from '../data/siteConfig'

export function NotFound() {
  useDocumentMeta({
    title: `Page not found — ${siteConfig.name}`,
    description: 'The page you were looking for does not exist.',
    path: '404',
  })

  return (
    <section className="grid min-h-[70vh] place-items-center bg-paper px-5 pt-[4.5rem]">
      <div className="text-center">
        <p className="eyebrow-gold">404</p>
        <h1 className="mt-5 text-display-sm text-text">This page does not exist.</h1>
        <p className="mx-auto mt-5 max-w-prose text-pretty leading-relaxed text-muted">
          The link may be out of date. The selected work lives on the homepage, and everything is
          linked from there.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="btn-solid">
            Back home
          </Link>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            Browse GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

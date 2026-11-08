import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcon'
import { siteConfig } from '../../data/siteConfig'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="surface-band">
      <div className="shell py-16 sm:py-20">
        <div className="flex flex-col gap-12 border-b border-band-line pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-4xl text-band-fg sm:text-5xl">{siteConfig.name}</p>
            <p className="mt-3 font-label text-[0.6875rem] uppercase tracking-[0.18em] text-accent">
              {siteConfig.role} / {siteConfig.roleSecondary}
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-label text-[0.75rem] uppercase tracking-[0.14em] text-band-muted transition-colors hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" strokeWidth={1.5} />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-label text-[0.75rem] uppercase tracking-[0.14em] text-band-muted transition-colors hover:text-accent"
              >
                <LinkedinIcon className="h-4 w-4" strokeWidth={1.5} />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 font-label text-[0.75rem] uppercase tracking-[0.14em] text-band-muted transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg text-band-muted">{siteConfig.footer.closing}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-label text-[0.6875rem] uppercase tracking-[0.14em] text-band-muted">
            <span>&copy; {year} {siteConfig.name}</span>
            <Link to="/#projects" className="transition-colors hover:text-accent">
              Selected work
            </Link>
            <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-accent">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

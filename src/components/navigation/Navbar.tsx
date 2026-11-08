import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcon'
import { siteConfig } from '../../data/siteConfig'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useCv } from '../../hooks/useCv'
import { ThemeToggle } from '../ui/ThemeToggle'
import { cn } from '../../utils/cn'

const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'contact']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const cv = useCv()
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ease-editorial',
          scrolled || open ? 'border-line bg-paper' : 'border-transparent bg-paper/95',
        )}
      >
        <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
          <Link
            to="/"
            className="group flex items-baseline gap-2 font-label text-[0.75rem] font-medium uppercase tracking-[0.22em] text-text transition-colors hover:text-accent"
          >
            <span>{siteConfig.wordmark}</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            {[
              { id: 'home', label: 'Home', href: '/#home' },
              { id: 'about', label: 'About', href: '/#about' },
              { id: 'experience', label: 'Experience', href: '/#experience' },
              { id: 'projects', label: 'Projects', href: '/#projects' },
              { id: 'skills', label: 'Skills', href: '/#skills' },
              { id: 'contact', label: 'Contact', href: '/#contact' },
            ].map((item) => (
              <Link
                key={item.id}
                to={item.href}
                data-active={isHome && active === item.id}
                className="link-underline font-label text-[0.75rem] uppercase tracking-[0.14em] text-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <ThemeToggle />
            <a
              href={cv.href}
              download={cv.isAvailable ? siteConfig.cv.fileName : undefined}
              rel="noreferrer"
              className="link-underline font-label text-[0.75rem] uppercase tracking-[0.14em] text-text"
              title={cv.isAvailable ? undefined : siteConfig.cv.note}
            >
              {cv.label}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Peter Nyagaka on GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.6} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Peter Nyagaka on LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.6} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <span className="relative block h-3 w-6">
              <span
                className={cn(
                  'absolute left-0 block h-px w-6 bg-text transition-all duration-300 ease-editorial',
                  open ? 'top-1.5 rotate-45' : 'top-0',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 block h-px w-6 bg-text transition-all duration-300 ease-editorial',
                  open ? 'top-1.5 -rotate-45' : 'top-3',
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 bg-paper pt-[4.5rem] lg:hidden"
      >
        <div className="shell flex h-full flex-col justify-between pb-10 pt-8">
          <nav aria-label="Mobile" className="flex flex-col">
            {[
              { id: 'home', label: 'Home', href: '/#home' },
              { id: 'about', label: 'About', href: '/#about' },
              { id: 'experience', label: 'Experience', href: '/#experience' },
              { id: 'projects', label: 'Projects', href: '/#projects' },
              { id: 'skills', label: 'Skills', href: '/#skills' },
              { id: 'contact', label: 'Contact', href: '/#contact' },
            ].map((item, index) => (
              <Link
                key={item.id}
                to={item.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${80 + index * 45}ms` }}
                className="group flex items-center justify-between border-b border-line py-5 font-display text-3xl text-text animate-rise-in"
              >
                {item.label}
                <ArrowUpRight className="h-5 w-5 text-accent opacity-0 transition-opacity group-hover:opacity-100" strokeWidth={1.4} />
              </Link>
            ))}
          </nav>

          <div className="space-y-6">
            <a
              href={cv.href}
              download={cv.isAvailable ? siteConfig.cv.fileName : undefined}
              rel="noreferrer"
              className="btn-solid w-full"
            >
              {cv.label}
            </a>
            <ThemeToggle variant="full" />
            <div className="flex items-center gap-6">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-label text-[0.75rem] uppercase tracking-[0.14em] text-muted"
              >
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="link-underline font-label text-[0.75rem] uppercase tracking-[0.14em] text-muted"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

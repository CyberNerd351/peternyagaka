import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcon'
import { images } from '../../data/images'
import { siteConfig } from '../../data/siteConfig'
import { useCv } from '../../hooks/useCv'
import { cn } from '../../utils/cn'
import { Reveal } from '../ui/Reveal'
import { SmartImage } from '../ui/SmartImage'

export function Hero() {
  const cv = useCv()

  return (
    <section id="home" className="relative overflow-hidden border-b border-line bg-paper pt-[4.5rem]">
      {/* Restrained editorial rule work — no gradients, no blobs. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="shell relative h-full">
          <div className="absolute inset-y-0 left-5 w-px bg-line/70 sm:left-8 lg:left-12" />
          <div className="absolute inset-y-0 right-5 w-px bg-line/70 sm:right-8 lg:right-12" />
        </div>
      </div>

      <div className="shell relative grid grid-cols-1 gap-16 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24 xl:py-28">
        <div className="lg:col-span-7 xl:col-span-7">
          <Reveal>
            <div className="flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-12 bg-gold" />
              <p className="eyebrow-gold">{siteConfig.hero.eyebrow}</p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-8 text-display text-balance text-text">
              {siteConfig.hero.headline.map((line, index) => (
                <span key={line} className="block">
                  {line}
                  {index === siteConfig.hero.headline.length - 1 && (
                    <span className="ml-2 text-accent">.</span>
                  )}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 max-w-prose text-pretty text-lg leading-relaxed text-muted sm:text-xl">
              {siteConfig.hero.intro}
            </p>
          </Reveal>

          {siteConfig.availability.show && (
            <Reveal delay={220}>
              <p className="mt-7 inline-flex items-center gap-3 border border-line bg-wash px-4 py-2.5 font-label text-[0.6875rem] uppercase tracking-[0.12em] text-muted">
                <span aria-hidden="true" className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold/40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                {siteConfig.availability.label}
              </p>
            </Reveal>
          )}

          <Reveal delay={280}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link to="/#projects" className="btn-solid group">
                Explore My Work
                <ArrowDown className="h-4 w-4 transition-transform duration-300 ease-editorial group-hover:translate-y-0.5" strokeWidth={1.6} />
              </Link>
              <Link to="/#contact" className="btn-outline">
                Get In Touch
              </Link>
              <a
                href={cv.href}
                download={cv.isAvailable ? siteConfig.cv.fileName : undefined}
                target={cv.isAvailable ? undefined : '_self'}
                rel="noreferrer"
                className="btn-outline group"
                title={cv.isAvailable ? undefined : siteConfig.cv.note}
              >
                {cv.label}
                <Download className="h-4 w-4" strokeWidth={1.6} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-10 flex items-center gap-7">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-label text-[0.6875rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" strokeWidth={1.5} />
                GitHub
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-label text-[0.6875rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
              >
                <LinkedinIcon className="h-4 w-4" strokeWidth={1.5} />
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-2 font-label text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                <MapPin className="h-4 w-4" strokeWidth={1.5} />
                {siteConfig.location}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 xl:col-span-5">
          <Reveal delay={120} className="lg:pl-6">
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-3 -top-3 hidden h-full w-full border border-gold/40 lg:block"
              />
              <div className="relative">
                <SmartImage
                  asset={images.profile}
                  monogram="PN"
                  ratio="aspect-[4/5]"
                  priority
                  className="border-line"
                />
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6">
              {siteConfig.summary.map((item) => (
                <div key={item.label}>
                  <dt className="font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-xl text-text">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      <div className="shell">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-5">
          <p className="font-label text-[0.625rem] uppercase tracking-[0.18em] text-muted">
            Selected work, in detail
          </p>
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 font-label text-[0.625rem] uppercase tracking-[0.18em] text-text transition-colors hover:text-accent"
          >
            Scroll to projects
            <ArrowUpRight
              className={cn('h-3.5 w-3.5 transition-transform duration-300 ease-editorial group-hover:-translate-y-0.5')}
              strokeWidth={1.6}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

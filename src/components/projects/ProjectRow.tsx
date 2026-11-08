import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcon'
import type { Project } from '../../data/projects'
import { Reveal } from '../ui/Reveal'
import { SmartImage } from '../ui/SmartImage'
import { StatusBadge } from '../ui/StatusBadge'
import { cn } from '../../utils/cn'
import { isDev } from '../../utils/isDev'

const monograms: Record<string, string> = {
  'cyber-inventory-system': 'CI',
  'butchery-management-system': 'BM',
  'busa-election-system': 'BE',
  'grab-hub': 'GH',
  'richwrld-fashion-collections': 'RW',
  'applied-data-science-notebooks': 'DS',
}

type ProjectRowProps = {
  project: Project
  index: number
  /** Flips the image to the left on large screens. */
  reversed?: boolean
}

export function ProjectRow({ project, index, reversed = false }: ProjectRowProps) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <Reveal>
      <article
        className={cn(
          'group grid grid-cols-1 gap-8 border-t border-line py-14 lg:grid-cols-12 lg:gap-12 lg:py-20',
        )}
      >
        <div
          className={cn(
            'flex flex-col justify-center lg:col-span-6 xl:col-span-6',
            reversed ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6',
          )}
        >
          <div className="flex items-center gap-4">
            <span className="font-display text-3xl text-accent">{number}</span>
            <span aria-hidden="true" className="h-px w-8 bg-line" />
            <span className="font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
              {project.category}
            </span>
          </div>

          <h3 className="mt-6 text-balance">
            <Link
              to={`/projects/${project.slug}`}
              className="font-display text-4xl text-text transition-colors duration-300 ease-editorial group-hover:text-accent sm:text-5xl lg:text-[3.25rem]"
            >
              {project.name}
            </Link>
          </h3>

          <p className="mt-5 max-w-prose text-pretty text-lg leading-relaxed text-muted">
            {project.tagline}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
            {project.technologies.length > 6 && (
              <li className="tag">+{project.technologies.length - 6}</li>
            )}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              to={`/projects/${project.slug}`}
              className="link-underline font-label text-[0.6875rem] uppercase tracking-[0.16em] text-text"
            >
              Read the case study
              <ArrowRight className="h-3.5 w-3.5 text-accent" strokeWidth={1.6} />
            </Link>

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-label text-[0.6875rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-3.5 w-3.5" strokeWidth={1.6} />
              Repository
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-label text-[0.6875rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
              >
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.6} />
                Live demo
              </a>
            )}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <StatusBadge status={project.status} />
            <span className="font-label text-[0.625rem] uppercase tracking-[0.14em] text-muted">
              {project.year}
            </span>
          </div>
        </div>

        <div className={cn('lg:col-span-6', reversed ? 'lg:order-1' : 'lg:order-2')}>
          <Link
            to={`/projects/${project.slug}`}
            className="relative block overflow-hidden"
            aria-label={`${project.name} case study`}
          >
            <SmartImage
              asset={project.image}
              monogram={monograms[project.slug] ?? 'PN'}
              ratio="aspect-[8/5]"
              className="border-line transition-colors duration-500 ease-editorial group-hover:border-gold/60"
              imageClassName="transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center border border-white/40 bg-black/70 text-band-fg opacity-0 transition-opacity duration-300 ease-editorial group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
            </span>
          </Link>
          {isDev && (
            <p className="mt-3 font-label text-[0.625rem] uppercase tracking-[0.14em] text-muted">
              {project.image.src}
            </p>
          )}
        </div>
      </article>
    </Reveal>
  )
}

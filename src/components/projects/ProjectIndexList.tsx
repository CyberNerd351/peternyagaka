import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../ui/BrandIcon'
import type { Project } from '../../data/projects'
import { Reveal } from '../ui/Reveal'
import { StatusBadge } from '../ui/StatusBadge'

/** Compact index rows for the projects that are not given a full feature slot. */
export function ProjectIndexList({ items, startIndex }: { items: Project[]; startIndex: number }) {
  return (
    <div className="border-t border-line">
      {items.map((project, index) => (
        <Reveal key={project.slug} delay={index * 60}>
          <Link
            to={`/projects/${project.slug}`}
            className="group grid grid-cols-1 gap-4 border-b border-line py-8 transition-colors duration-300 ease-editorial hover:bg-wash md:grid-cols-12 md:items-center md:gap-8 md:py-9"
          >
            <div className="md:col-span-1">
              <span className="font-display text-2xl text-accent">
                {String(startIndex + index + 1).padStart(2, '0')}
              </span>
            </div>

            <div className="md:col-span-5">
              <h3 className="font-display text-2xl text-text transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-1.5 font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                {project.category}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-muted md:col-span-4">{project.tagline}</p>

            <div className="flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
              <StatusBadge status={project.status} />
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-muted transition-all duration-300 ease-editorial group-hover:-translate-y-0.5 group-hover:text-accent"
                strokeWidth={1.6}
              />
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  )
}

export function ProjectRepoFooter({ project }: { project: Project }) {
  return (
    <a
      href={project.repoUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 font-label text-[0.625rem] uppercase tracking-[0.14em] text-muted transition-colors hover:text-accent"
    >
      <GithubIcon className="h-3.5 w-3.5" strokeWidth={1.6} />
      {project.repoUrl.replace('https://github.com/', '')}
    </a>
  )
}

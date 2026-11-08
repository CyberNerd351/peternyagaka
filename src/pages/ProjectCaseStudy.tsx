import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import { GithubIcon } from '../components/ui/BrandIcon'
import { getAdjacentProjects, getProject } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { isDev } from '../utils/isDev'
import { Reveal } from '../components/ui/Reveal'
import { SmartImage } from '../components/ui/SmartImage'
import { StatusBadge } from '../components/ui/StatusBadge'
import { NotFound } from './NotFound'

const monograms: Record<string, string> = {
  'cyber-inventory-system': 'CI',
  'butchery-management-system': 'BM',
  'busa-election-system': 'BE',
  'grab-hub': 'GH',
  'richwrld-fashion-collections': 'RW',
  'applied-data-science-notebooks': 'DS',
}

function CaseSection({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Reveal>
      <section className="border-t border-line py-12 first:border-t-0 first:pt-0">
        <div className="flex items-baseline gap-4">
          <span className="font-display text-xl text-accent">{number}</span>
          <h2 className="font-display text-3xl text-text sm:text-4xl">{title}</h2>
        </div>
        <div className="mt-6 max-w-prose space-y-5 text-pretty leading-relaxed text-muted">{children}</div>
      </section>
    </Reveal>
  )
}

export function ProjectCaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)

  const jsonLd = useMemo(() => {
    if (!project) return undefined
    return {
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      name: project.name,
      description: project.shortDescription,
      codeRepository: project.repoUrl,
      programmingLanguage: project.technologies,
      author: { '@type': 'Person', name: siteConfig.name, url: siteConfig.siteUrl },
      dateCreated: project.year,
    }
  }, [project])

  useDocumentMeta({
    title: project ? `${project.name} — ${siteConfig.name}` : `Project not found — ${siteConfig.name}`,
    description: project?.shortDescription,
    path: project ? `projects/${project.slug}` : 'projects',
    jsonLd,
  })

  if (!project) return <NotFound />

  const { previous, next } = getAdjacentProjects(project.slug)

  return (
    <article className="pt-[4.5rem]">
      {/* Header */}
      <header className="border-b border-line bg-paper">
        <div className="shell py-14 sm:py-16 lg:py-20">
          <Link
            to="/#projects"
            className="group inline-flex items-center gap-2 font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 ease-editorial group-hover:-translate-x-0.5" strokeWidth={1.6} />
            All projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="eyebrow-gold">{project.category}</span>
            <span aria-hidden="true" className="h-px w-8 bg-line" />
            <span className="font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
              {project.year}
            </span>
          </div>

          <h1 className="mt-5 text-balance text-display-sm text-text">{project.name}</h1>

          <p className="mt-6 max-w-3xl text-pretty text-xl leading-relaxed text-muted">{project.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <StatusBadge status={project.status} />
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line px-4 py-2.5 font-label text-[0.625rem] uppercase tracking-[0.14em] text-text transition-colors duration-300 hover:border-gold hover:text-accent"
            >
              <GithubIcon className="h-3.5 w-3.5" strokeWidth={1.6} />
              View repository
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-gold/50 px-4 py-2.5 font-label text-[0.625rem] uppercase tracking-[0.14em] text-accent transition-colors duration-300 hover:bg-gold hover:text-band-fg"
              >
                <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.6} />
                Live demo
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Hero image */}
      <div className="shell py-12 sm:py-14">
        <Reveal>
          <SmartImage
            asset={project.image}
            monogram={monograms[project.slug] ?? 'PN'}
            ratio="aspect-[16/9]"
            priority
            className="border-line"
          />
          {isDev && (
            <p className="mt-3 font-label text-[0.625rem] uppercase tracking-[0.14em] text-muted">
              {project.image.src}
            </p>
          )}
        </Reveal>
      </div>

      {/* Body */}
      <div className="shell grid grid-cols-1 gap-14 pb-20 lg:grid-cols-12 lg:gap-16 lg:pb-28">
        <div className="lg:col-span-8">
          <CaseSection number="01" title="The problem">
            <p>{project.problem}</p>
          </CaseSection>

          <CaseSection number="02" title="The solution">
            <p>{project.solution}</p>
          </CaseSection>

          <CaseSection number="03" title="How it works">
            <ol className="space-y-4">
              {project.howItWorks.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="mt-0.5 font-display text-sm text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection number="04" title="Technical architecture">
            <p>{project.architecture.length} layers, each with one job:</p>
            <ul className="mt-2 space-y-6 border-l border-gold/40 pl-6">
              {project.architecture.map((layer) => (
                <li key={layer.label} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.6875rem] top-2 h-1.5 w-1.5 rounded-full bg-gold"
                  />
                  <p className="font-label text-[0.75rem] uppercase tracking-[0.1em] text-text">
                    {layer.label}
                  </p>
                  <p className="mt-2">{layer.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                Technologies
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </CaseSection>

          <CaseSection number="05" title="Implementation decisions">
            <ul className="space-y-4">
              {project.decisions.map((decision) => (
                <li key={decision} className="flex gap-4">
                  <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                  <span>{decision}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection number="06" title="Challenges and trade-offs">
            <ul className="space-y-4">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-4">
                  <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-muted/60" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection number="07" title="What I would do next">
            <ul className="space-y-4">
              {project.next.map((item) => (
                <li key={item} className="flex gap-4">
                  <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CaseSection>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <Reveal delay={80}>
            <div className="lg:sticky lg:top-28">
              <div className="border-t border-line pt-6">
                <p className="font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                  Status
                </p>
                <div className="mt-4">
                  <StatusBadge status={project.status} />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{project.statusNote}</p>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                  My contribution
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{project.contribution}</p>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                  At a glance
                </p>
                <dl className="mt-4 space-y-3">
                  {project.evidence.map((item) => (
                    <div key={item.label} className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                      <dt className="text-sm text-muted">{item.label}</dt>
                      <dd className="text-right text-sm text-text">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">Links</p>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 text-sm text-text transition-colors hover:text-accent"
                    >
                      <span className="inline-flex items-center gap-2">
                        <GithubIcon className="h-3.5 w-3.5" strokeWidth={1.6} />
                        GitHub repository
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </a>
                  </li>
                  {project.liveUrl ? (
                    <li>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between gap-3 text-sm text-text transition-colors hover:text-accent"
                      >
                        <span className="inline-flex items-center gap-2">
                          <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.6} />
                          Live demonstration
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                      </a>
                    </li>
                  ) : (
                    <li className="text-sm text-muted">{project.liveNote}</li>
                  )}
                </ul>
              </div>

              <div className="mt-8 border border-line bg-wash p-6">
                <p className="font-display text-xl text-text">Want the short version?</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Email me and I will walk you through the architecture and the decisions behind it.
                </p>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`About ${project.name}`)}`}
                  className="btn-outline mt-5 w-full"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </Reveal>
        </aside>
      </div>

      {/* Adjacent projects */}
      <nav aria-label="Other projects" className="border-t border-line bg-wash">
        <div className="shell grid grid-cols-1 gap-px sm:grid-cols-2">
          {previous && (
            <Link
              to={`/projects/${previous.slug}`}
              className="group flex flex-col justify-between gap-3 py-10 pr-6 transition-colors duration-300 hover:bg-paper sm:border-r sm:border-line"
            >
              <span className="inline-flex items-center gap-2 font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" strokeWidth={1.6} />
                Previous
              </span>
              <span className="font-display text-3xl text-text transition-colors group-hover:text-accent">
                {previous.name}
              </span>
            </Link>
          )}
          {next && (
            <Link
              to={`/projects/${next.slug}`}
              className="group flex flex-col justify-between gap-3 py-10 text-left sm:pl-8 sm:text-right"
            >
              <span className="inline-flex items-center gap-2 font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted sm:justify-end">
                Next
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.6} />
              </span>
              <span className="font-display text-3xl text-text transition-colors group-hover:text-accent">
                {next.name}
              </span>
            </Link>
          )}
        </div>
      </nav>
    </article>
  )
}

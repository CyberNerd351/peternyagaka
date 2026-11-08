import { featuredProjects, projects } from '../../data/projects'
import { ProjectIndexList } from '../projects/ProjectIndexList'
import { ProjectRow } from '../projects/ProjectRow'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { siteConfig } from '../../data/siteConfig'

export function Projects() {
  const featured = featuredProjects
  const rest = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="scroll-mt-24 border-b border-line bg-paper py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected work"
          title="Selected work."
          description="Different problems. Different systems. One consistent interest in building software that works."
          action={
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="link-underline font-label text-[0.6875rem] uppercase tracking-[0.16em] text-text"
            >
              See every repository on GitHub
            </a>
          }
        />

        <div className="mt-14 lg:mt-16">
          {featured.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} reversed={index % 2 === 1} />
          ))}
          <div className="border-t border-line" />
        </div>

        {rest.length > 0 && (
          <div className="mt-20 lg:mt-24">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h3 className="font-display text-3xl text-text sm:text-4xl">Also built</h3>
                <p className="font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                  Smaller scopes, same standards
                </p>
              </div>
            </Reveal>

            <div className="mt-8">
              <ProjectIndexList items={rest} startIndex={featured.length} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

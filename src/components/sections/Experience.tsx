import { Briefcase, GraduationCap, Award, Users } from 'lucide-react'
import { experience, kindLabels, type ExperienceEntry } from '../../data/experience'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { SmartImage } from '../ui/SmartImage'

const initials: Record<string, string> = {
  'saiket-systems': 'SS',
  'egerton-university': 'EU',
  modcom: 'MI',
  'wecncode-egerton': 'WE',
}

const kindIcons = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
  community: Users,
} as const

function TimelineRow({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const Icon = kindIcons[entry.kind]

  return (
    <Reveal delay={index * 70}>
      <article className="group grid grid-cols-1 gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-10 md:py-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
            <span className="font-label text-[0.625rem] uppercase tracking-[0.16em] text-muted">
              {kindLabels[entry.kind]}
            </span>
          </div>
          <p className="mt-4 font-display text-2xl text-text">{entry.period}</p>
          <p className="mt-1.5 text-sm text-muted">{entry.location}</p>
          {entry.image && (
            <SmartImage
              asset={entry.image}
              monogram={initials[entry.id] ?? 'PN'}
              ratio="aspect-square"
              showFallbackCaption={false}
              className="mt-5 w-14 border-line"
            />
          )}
        </div>

        <div className="md:col-span-8">
          <h3 className="font-display text-3xl text-text sm:text-4xl">{entry.title}</h3>
          <p className="mt-2 font-label text-[0.75rem] uppercase tracking-[0.14em] text-accent">
            {entry.organisation}
          </p>

          <p className="mt-5 max-w-prose text-pretty leading-relaxed text-muted">{entry.summary}</p>

          {entry.highlights.length > 0 && (
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {entry.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2 h-px w-4 shrink-0 bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {entry.placeholder && (
            <p className="mt-6 inline-block border border-dashed border-line bg-wash px-4 py-3 text-sm italic text-muted">
              {entry.placeholder}
            </p>
          )}
        </div>
      </article>
    </Reveal>
  )
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-line bg-paper py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Experience & Education"
          title="Where I have studied, and where I have worked."
          description="Formal education, professional training and the internship work I have done so far."
        />

        <div className="mt-14">
          {experience.map((entry, index) => (
            <TimelineRow key={entry.id} entry={entry} index={index} />
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  )
}

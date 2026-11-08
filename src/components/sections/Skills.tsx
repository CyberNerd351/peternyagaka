import { engineeringInterests, levelLabels, skillGroups, type SkillLevel } from '../../data/skills'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const markers: Record<SkillLevel, string> = {
  regular: 'bg-gold',
  familiar: 'border border-gold/50 bg-transparent',
  exploring: 'border border-dashed border-band-muted bg-transparent',
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-band py-20 text-band-fg sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolkit."
          description="The tools I reach for, and how well I know them. No percentages — they are impossible to read honestly, so every tool is labelled as something I use regularly, something I am familiar with, or something I am still working through."
          tone="dark"
        />

        <Reveal delay={80}>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-y border-band-line py-5">
            {(Object.keys(levelLabels) as SkillLevel[]).map((level) => (
              <span key={level} className="inline-flex items-center gap-2.5">
                <span aria-hidden="true" className={`h-2 w-2 ${markers[level]}`} />
                <span className="font-label text-[0.625rem] uppercase tracking-[0.16em] text-band-muted">
                  {levelLabels[level]}
                </span>
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 60}>
              <div>
                <h3 className="flex items-center gap-3 font-label text-[0.6875rem] uppercase tracking-[0.18em] text-accent">
                  <span aria-hidden="true" className="h-px w-6 bg-gold/50" />
                  {group.label}
                </h3>

                <ul className="mt-5 space-y-3">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="group flex items-center gap-3">
                      <span aria-hidden="true" className={`h-1.5 w-1.5 shrink-0 ${markers[skill.level]}`} />
                      <span className="text-[0.9375rem] text-band-fg/90">{skill.name}</span>
                      <span
                        aria-hidden="true"
                        className="mx-1 h-px flex-1 bg-band-line transition-colors duration-500 ease-editorial group-hover:bg-gold/40"
                      />
                      <span className="font-label text-[0.5625rem] uppercase tracking-[0.14em] text-band-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {levelLabels[skill.level]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-16 border-t border-band-line pt-10">
            <p className="font-label text-[0.625rem] uppercase tracking-[0.18em] text-accent">
              Also interested in
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-3">
              {engineeringInterests.map((interest) => (
                <li
                  key={interest}
                  className="border border-band-line px-3.5 py-2 text-sm text-band-fg/85 transition-colors duration-300 hover:border-gold/60 hover:text-accent"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

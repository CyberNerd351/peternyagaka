import { images } from '../../data/images'
import { siteConfig } from '../../data/siteConfig'
import { isDev } from '../../utils/isDev'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { SmartImage } from '../ui/SmartImage'

const currently = [
  'Studying Applied Computer Science at Egerton University, class of 2029',
  'Building offline-first business software in Python and Flask',
  'Working through data science and machine learning notebooks in my own time',
  'Reading about application security and how systems fail',
  'Open to internships, freelance work and collaboration',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line bg-wash py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHeading eyebrow="About" title={siteConfig.about.heading} />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SmartImage
                  asset={images.about}
                  monogram="PN"
                  ratio="aspect-[4/5]"
                  className="border-line"
                />
                {isDev && (
                  <p className="mt-4 font-label text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                    {siteConfig.about.imageCaption}
                  </p>
                )}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <div className="space-y-6 text-lg leading-relaxed text-muted">
                <p className="text-xl leading-relaxed text-text sm:text-2xl sm:leading-relaxed">
                  I got into software the unglamorous way: someone had a problem, and nothing
                  on the market quite fitted it.
                </p>

                <p>
                  The first serious program I wrote was for a small cyber shop that could not
                  tell you what it had in stock or what it had earned. That became{' '}
                  <a
                    href="https://github.com/CyberNerd351/CyberInventorySystem"
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-text"
                  >
                    a full inventory and point-of-sale system
                  </a>
                  , and it taught me more about schema design, transactions and writing for a
                  real user than any tutorial had.
                </p>

                <p>
                  Since then I have built in both directions. On the backend I work mostly in
                  Python and Flask: relational schemas, REST APIs, authentication, and the
                  unglamorous parts — making sure a sale either saves completely or not at all,
                  that a cashier cannot do an administrator's job, and that a bad restore does
                  not destroy the only copy of a day's takings. On the frontend I build React
                  applications that consume those APIs, and I care that they work properly on
                  the phone someone actually owns.
                </p>

                <p>
                  Most of my projects start by watching a real process and asking why it is
                  still manual. A butchery selling meat by weight. A student election run on
                  paper. A shop that cannot depend on the internet being up. I like problems
                  with awkward constraints, because the constraints are where the engineering
                  actually happens.
                </p>

                <p>
                  I am studying towards a Bachelor of Applied Computer Science at Egerton
                  University, expecting to graduate in 2029, and I hold a full-stack
                  development certification from Modcom Institute of Technology. Beyond what I
                  have already shipped, I spend time on{' '}
                  <span className="text-text">artificial intelligence</span>,{' '}
                  <span className="text-text">data science</span> and{' '}
                  <span className="text-text">application security</span> — mostly by working
                  through datasets myself and reading about how systems break.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <blockquote className="mt-12 border-l-2 border-gold pl-6">
                <p className="font-display text-2xl leading-snug text-text sm:text-3xl">
                  "I would rather ship one system a shop opens every morning than five demos
                  nobody ever opens."
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 border-t border-line pt-8">
                <p className="eyebrow text-accent">Currently</p>
                <ul className="mt-5 space-y-3">
                  {currently.map((item) => (
                    <li key={item} className="flex gap-4 text-base text-muted">
                      <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

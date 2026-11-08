import { Bike, Car, Compass, Puzzle, ShieldCheck, Sparkles } from 'lucide-react'
import { images } from '../../data/images'
import { isDev } from '../../utils/isDev'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { SmartImage } from '../ui/SmartImage'

const interests = [
  {
    icon: Compass,
    title: 'Travelling',
    detail: 'New places change how I think about a problem. I come back with better questions.',
  },
  {
    icon: Bike,
    title: 'Cycling and driving',
    detail: 'Long rides and long drives are where most of my half-finished designs get sorted out.',
  },
  {
    icon: Puzzle,
    title: 'Taking things apart',
    detail: 'I like understanding how a thing actually works before I trust it, software or otherwise.',
  },
  {
    icon: Sparkles,
    title: 'Solving technical problems',
    detail: 'A bug I cannot explain is more interesting to me than one I have already fixed.',
  },
  {
    icon: ShieldCheck,
    title: 'AI, data science and security',
    detail: 'Where I am putting my reading time: models, datasets, and the ways systems get broken.',
  },
  {
    icon: Car,
    title: 'Building in public',
    detail: 'My repositories keep the messy middle as well as the finished parts. It is all on GitHub.',
  },
]

export function Personality() {
  return (
    <section id="personality" className="scroll-mt-24 border-b border-line bg-wash py-20 sm:py-24 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Personality"
          title="Outside the code."
          description="The parts of me that do not fit in a technology list, and end up shaping how I build things anyway."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="grid grid-cols-2 gap-4">
                <SmartImage
                  asset={images.gallery.workspace}
                  monogram="WS"
                  ratio="aspect-[3/4]"
                  className="border-line"
                />
                <div className="mt-8">
                  <SmartImage
                    asset={images.gallery.coding}
                    monogram="CD"
                    ratio="aspect-[3/4]"
                    className="border-line"
                  />
                </div>
              </div>
              {isDev && (
                <p className="mt-4 font-label text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                  
                </p>
              )}
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={60}>
              <p className="text-xl leading-relaxed text-text sm:text-2xl sm:leading-relaxed">
                I am not only the code I push. I ride, I drive, I travel when I can, and I take
                things apart to see what makes them tick.
              </p>
              <p className="mt-6 leading-relaxed text-muted">
                Those habits are not separate from my work. Riding and driving give me the time
                to think a design through properly. Travelling reminds me that software is used
                by people in circumstances I have not personally had. Taking things apart is
                honestly just the same instinct that makes me read a library's source before I
                depend on it.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {interests.map((interest, index) => {
                const Icon = interest.icon
                return (
                  <Reveal key={interest.title} delay={100 + index * 50}>
                    <div className="group border-t border-line pt-5">
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                        <h3 className="font-display text-xl text-text">{interest.title}</h3>
                      </div>
                      <p className="mt-2.5 pl-7 text-sm leading-relaxed text-muted">{interest.detail}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

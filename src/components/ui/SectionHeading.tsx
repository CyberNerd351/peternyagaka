import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  id?: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  tone?: 'light' | 'dark'
  className?: string
  /** Renders the title at hero-ish scale for the opening section. */
  size?: 'default' | 'large'
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  tone = 'light',
  className,
  size = 'default',
}: SectionHeadingProps) {
  return (
    <Reveal className={cn('max-w-3xl', className)}>
      <header id={id} className="scroll-mt-28">
        <div className="flex items-center gap-4">
          <span aria-hidden="true" className="h-px w-10 shrink-0 bg-gold" />
          <span className={cn('eyebrow', tone === 'dark' ? 'text-accent' : 'text-muted')}>{eyebrow}</span>
        </div>

        <h2
          className={cn(
            'mt-6 text-balance',
            size === 'large' ? 'text-display' : 'text-display-sm',
            tone === 'dark' ? 'text-band-fg' : 'text-text',
          )}
        >
          {title}
        </h2>

        {description && (
          <div
            className={cn(
              'mt-6 max-w-prose text-pretty text-lg leading-relaxed',
              tone === 'dark' ? 'text-band-muted' : 'text-muted',
            )}
          >
            {description}
          </div>
        )}

        {action && <div className="mt-8">{action}</div>}
      </header>
    </Reveal>
  )
}

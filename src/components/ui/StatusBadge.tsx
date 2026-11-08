import { cn } from '../../utils/cn'
import type { ProjectStatus } from '../../data/projects'

const styles: Record<ProjectStatus, string> = {
  Live: 'border-gold/50 text-accent',
  Complete: 'border-line text-muted',
  Active: 'border-line text-muted',
  Paused: 'border-line text-muted',
  Practice: 'border-line text-muted',
}

const dotStyles: Record<ProjectStatus, string> = {
  Live: 'bg-gold',
  Complete: 'bg-gold/60',
  Active: 'bg-gold/60',
  Paused: 'bg-muted/50',
  Practice: 'bg-muted/50',
}

export function StatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 border px-2.5 py-1 font-label text-[0.625rem] uppercase tracking-[0.14em]',
        styles[status],
        className,
      )}
    >
      <span aria-hidden="true" className={cn('h-1.5 w-1.5 rounded-full', dotStyles[status])} />
      {status}
    </span>
  )
}

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../utils/cn'

type ThemeToggleProps = {
  className?: string
  /** 'icon' for the navigation bar, 'full' for the mobile menu. */
  variant?: 'icon' | 'full'
}

export function ThemeToggle({ className, variant = 'icon' }: ThemeToggleProps) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme'

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-pressed={isDark}
        className={cn(
          'btn-outline group w-full justify-between',
          className,
        )}
      >
        <span>{isDark ? 'Light theme' : 'Dark theme'}</span>
        {isDark ? (
          <Sun className="h-4 w-4 text-accent" strokeWidth={1.6} />
        ) : (
          <Moon className="h-4 w-4 text-accent" strokeWidth={1.6} />
        )}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={label}
      title={label}
      className={cn(
        'flex h-9 w-9 items-center justify-center border border-line text-muted transition-colors duration-300 ease-editorial hover:border-gold hover:text-accent',
        className,
      )}
    >
      <span aria-hidden="true" className="relative block h-4 w-4">
        <Sun
          className={cn(
            'absolute inset-0 h-4 w-4 transition-all duration-300 ease-editorial',
            isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100',
          )}
          strokeWidth={1.6}
        />
        <Moon
          className={cn(
            'absolute inset-0 h-4 w-4 transition-all duration-300 ease-editorial',
            isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0',
          )}
          strokeWidth={1.6}
        />
      </span>
    </button>
  )
}

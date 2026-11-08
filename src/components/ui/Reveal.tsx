import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { cn } from '../../utils/cn'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  /** Milliseconds. Stagger lists by passing 80 * index. */
  delay?: number
  variant?: 'rise' | 'fade'
  className?: string
}

/**
 * A single IntersectionObserver-driven entrance animation.
 * Nothing animates until the element is in view, and the reduced-motion
 * preference short-circuits the whole thing in CSS.
 */
export function Reveal({ children, as: Tag = 'div', delay = 0, variant = 'rise', className }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  // Without IntersectionObserver there is nothing to observe: show it immediately.
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === 'undefined',
  )

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [visible])

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
      className={cn(variant === 'rise' ? 'reveal' : 'reveal-fade', className)}
    >
      {children}
    </Tag>
  )
}

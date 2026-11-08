import { useEffect, useState } from 'react'

/**
 * Highlights the navigation item for whichever section is currently in view.
 * Uses a single shared IntersectionObserver rather than a scroll listener.
 */
export function useActiveSection(sectionIds: string[], offset = 120): string {
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return

    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio)
          } else {
            visible.delete(entry.target.id)
          }
        }

        if (visible.size === 0) return

        // Prefer the section closest to the top of the viewport.
        const best = [...visible.entries()].sort((a, b) => {
          const aTop = Math.abs((document.getElementById(a[0])?.getBoundingClientRect().top ?? 0) - offset)
          const bTop = Math.abs((document.getElementById(b[0])?.getBoundingClientRect().top ?? 0) - offset)
          return aTop - bTop
        })

        if (best[0]) setActive(best[0][0])
      },
      { rootMargin: `-${offset}px 0px -55% 0px`, threshold: [0, 0.15, 0.35, 0.6] },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [sectionIds, offset])

  return active
}

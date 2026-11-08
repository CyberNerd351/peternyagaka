import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Handles anchor navigation the way a single-page site should:
 *  - '/#projects' scrolls to the section, both on load and after navigation
 *  - a plain route change goes back to the top
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section exists after a route change.
      const id = hash.slice(1)
      requestAnimationFrame(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
        window.scrollTo({ top: 0 })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}

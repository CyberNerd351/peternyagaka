import { useCallback, useEffect, useState } from 'react'

/**
 * Light and dark theme, shared across every component that asks.
 *
 * The initial value is written to `<html data-theme>` by an inline script in
 * index.html before first paint, so there is no flash of the wrong theme. This
 * module only keeps that value in sync afterwards.
 */

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'pn-theme'
const THEME_COLOR: Record<Theme, string> = {
  light: '#ffffff',
  dark: '#111111',
}

function readTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  const attr = document.documentElement.getAttribute('data-theme')
  return attr === 'dark' ? 'dark' : 'light'
}

function apply(theme: Theme) {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', theme)
  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLOR[theme])
}

let current: Theme = readTheme()
const listeners = new Set<(theme: Theme) => void>()

function setTheme(next: Theme) {
  if (next === current) return
  current = next
  apply(next)
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Private browsing or a sandboxed frame: the choice just will not persist.
  }
  listeners.forEach((listener) => listener(next))
}

export function useTheme() {
  const [theme, setLocal] = useState<Theme>(current)

  useEffect(() => {
    listeners.add(setLocal)

    // Enable the colour transition only after the first paint, so the page does
    // not fade in from the wrong background.
    const id = window.setTimeout(() => document.body.classList.add('theme-ready'), 60)

    return () => {
      listeners.delete(setLocal)
      window.clearTimeout(id)
    }
  }, [])

  const toggle = useCallback(() => setTheme(current === 'dark' ? 'light' : 'dark'), [])

  return { theme, toggle, setTheme }
}

/**
 * Follows the operating system while the visitor has not made an explicit
 * choice. Called once from the app root.
 */
export function useSystemThemeSync() {
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')

    const onChange = (event: MediaQueryListEvent) => {
      let stored: string | null = null
      try {
        stored = localStorage.getItem(STORAGE_KEY)
      } catch {
        stored = null
      }
      if (stored === 'light' || stored === 'dark') return
      setTheme(event.matches ? 'dark' : 'light')
    }

    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])
}

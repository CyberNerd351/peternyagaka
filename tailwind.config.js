/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  // Dark mode is driven by [data-theme] on <html>, set before first paint by a
  // small inline script in index.html.
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      /*
       * Every colour resolves to a CSS variable, so light and dark are the same
       * components with a different token set. The palette stays white, black
       * and gold in both themes.
       *
       *   paper / wash   page and alternate-band backgrounds
       *   text / muted   primary and secondary foregrounds
       *   line           borders and hairlines
       *   gold           accent (light gold in dark mode for legibility)
       *   band*          the inverted dark band (skills, footer, solid buttons)
       */
      colors: {
        paper: 'rgb(var(--bg-rgb) / <alpha-value>)',
        wash: 'rgb(var(--bg-alt-rgb) / <alpha-value>)',
        text: 'rgb(var(--fg-rgb) / <alpha-value>)',
        muted: 'rgb(var(--fg-muted-rgb) / <alpha-value>)',
        line: 'rgb(var(--border-rgb) / <alpha-value>)',
        gold: 'rgb(var(--gold-rgb) / <alpha-value>)',
        'gold-light': 'rgb(var(--gold-light-rgb) / <alpha-value>)',
        /* Text-only gold. #B08D45 on white is 3.1:1, so small labels use a
           deepened #8A6D2F in light mode (4.9:1) and #D4B878 in dark (9.8:1). */
        accent: 'rgb(var(--gold-text-rgb) / <alpha-value>)',
        band: 'rgb(var(--band-rgb) / <alpha-value>)',
        'band-fg': 'rgb(var(--band-fg-rgb) / <alpha-value>)',
        'band-muted': 'rgb(var(--band-muted-rgb) / <alpha-value>)',
        'band-line': 'rgb(var(--band-border-rgb) / <alpha-value>)',
        error: 'rgb(var(--error-rgb) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        label: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.75rem, 8.5vw, 6.25rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-sm': ['clamp(2rem, 5.5vw, 3.75rem)', { lineHeight: '1.04', letterSpacing: '-0.015em' }],
        label: ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.18em' }],
      },
      maxWidth: {
        shell: '80rem',
        prose: '38rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'rise-in': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-rule': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'rise-in': 'rise-in 0.75s cubic-bezier(0.22, 1, 0.36, 1) both',
        'draw-rule': 'draw-rule 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
}

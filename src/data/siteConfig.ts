/**
 * siteConfig.ts
 * -----------------------------------------------------------------------------
 * The single source of truth for identity, links, SEO and anything else that is
 * reused across the site. Edit this file first when your details change.
 */

export const siteConfig = {
  name: 'Peter Nyagaka',
  shortName: 'Peter',
  wordmark: 'PETER NYAGAKA',
  role: 'Computer Scientist',
  roleSecondary: 'Full-Stack Developer',
  roleLabel: 'Computer Scientist / Full-Stack Developer',

  location: 'Kenya',
  locationDetail: 'Nairobi, Kenya',

  email: 'peternyagaka5@gmail.com',
  github: 'https://github.com/CyberNerd351',
  linkedin: 'https://www.linkedin.com/in/peter-n-99a0931b5/',

  /** Canonical production domain. Used for SEO, sitemap and structured data. */
  siteUrl: 'https://peternyagaka.vercel.app/',

  /**
   * Availability label shown in the hero. Set `show` to false to hide the pill,
   * or rewrite `label` whenever your situation changes.
   */
  availability: {
    show: true,
    label: 'Open to internships, freelance work and collaboration',
  },

  /**
   * Hero headline. Written as an array so the line breaks stay deliberate on
   * wide screens instead of collapsing into one long string.
   */
  hero: {
    eyebrow: 'Computer Scientist / Full-Stack Developer',
    headline: ['Building software for', 'problems worth solving'],
    intro:
      "I'm Peter Nyagaka, a Computer Science student and Full-Stack Developer based in Kenya. I enjoy building practical software, understanding how systems work and turning ideas into applications people can actually use.",
  },

  /** Recruiter-facing snapshot used in the hero summary strip. */
  summary: [
    { label: 'Based in', value: 'Kenya' },
    { label: 'Studying', value: 'Applied Computer Science' },
    { label: 'Class of', value: '2029' },
    { label: 'Public repositories', value: '27' },
  ],

  about: {
    heading: 'More than just writing code.',
    image: '/images/about.jpg',
    imageAlt: 'Peter Nyagaka at his desk, working through a problem on his laptop.',
    imageCaption: '',
  },

  cv: {
    /** Place a PDF at public/documents/Peter-Nyagaka-CV.pdf to activate. */
    path: '/documents/Peter-Nyagaka-CV.pdf',
    fileName: 'Peter-Nyagaka-CV.pdf',
    available: true,
    note: 'Add your CV to public/documents/Peter-Nyagaka-CV.pdf, then set `available: true`.',
  },

  seo: {
    title: 'Peter Nyagaka — Computer Scientist & Full-Stack Developer in Kenya',
    description:
      'Peter Nyagaka is a Computer Science student and full-stack developer in Kenya. He builds offline-first business systems, REST APIs and React applications — including inventory, point-of-sale and election platforms.',
    keywords: [
      'Peter Nyagaka',
      'Peter Nyagaka Developer',
      'Peter Nyagaka Computer Scientist',
      'Full-Stack Developer Kenya',
      'Software Developer Kenya',
      'Python Flask developer Kenya',
      'React developer Kenya',
    ],
    ogImage: '/images/og-image.png',
    locale: 'en_KE',
  },

  footer: {
    closing: 'Built with curiosity, intention and code.',
  },
} as const

export const navLinks = [
  { id: 'home', label: 'Home', href: '/#home' },
  { id: 'about', label: 'About', href: '/#about' },
  { id: 'experience', label: 'Experience', href: '/#experience' },
  { id: 'projects', label: 'Projects', href: '/#projects' },
  { id: 'skills', label: 'Skills', href: '/#skills' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
] as const

export type SiteConfig = typeof siteConfig

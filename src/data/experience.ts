import { experienceImages } from './images'

/**
 * experience.ts
 * -----------------------------------------------------------------------------
 * The timeline on the homepage.
 *
 * Anything still unknown is marked with `placeholder` instead of being invented.
 * Delete the `placeholder` field once you have filled the real detail in and the
 * hint disappears from the page.
 */

export type ExperienceEntry = {
  id: string
  kind: 'work' | 'education' | 'certification' | 'community'
  title: string
  organisation: string
  location: string
  period: string
  /** Short, factual description of the role or programme. */
  summary: string
  /** Bullet points. Leave empty if you have nothing verified to claim yet. */
  highlights: string[]
  /** Muted hint rendered on the page until you replace it with real detail. */
  placeholder?: string
  image?: (typeof experienceImages)[keyof typeof experienceImages]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'saiket-systems',
    kind: 'work',
    title: 'Full-Stack Developer Intern',
    organisation: 'Saiket Systems',
    location: 'Remote',
    period: 'November 2025',
    summary:
      'Remote full-stack development internship, working across both the front end and the back end of web applications.',
    highlights: [],
    placeholder:
      'I was incharge of creating full stack web applications that are both scalable and responsive.',
    image: experienceImages.saiketSystems,
  },
  {
    id: 'egerton-university',
    kind: 'education',
    title: 'Bachelor of Applied Computer Science',
    organisation: 'Egerton University',
    location: 'Njoro, Kenya',
    period: 'Expected 2029',
    summary:
      'Reading for a Bachelor of Applied Computer Science, expected to graduate in 2029. The degree gives me the theory; my own projects are where I test it against something real.',
    highlights: [],
    image: experienceImages.egertonUniversity,
  },
  {
    id: 'modcom',
    kind: 'certification',
    title: 'Full-Stack Development Certification',
    organisation: 'Modcom Institute of Technology',
    location: 'Kenya',
    period: 'January 2025 — May 2025',
    summary:
      'A full-time full-stack development programme covering frontend, backend, databases and version control, finished with a certification.',
    highlights: [
      'Modern frontend development: React, JavaScript ES6+, HTML5, CSS3 and Bootstrap',
      'Backend API engineering: Python, Flask, Django and RESTful endpoint design',
      'Relational databases: MySQL and SQLite, schema modelling and CRUD operations',
      'Practical software systems development and Git/GitHub version control',
    ],
    image: experienceImages.modcom,
  },
  {
    id: 'EUCOSSA-egerton',
    kind: 'community',
    title: 'Community Member',
    organisation: 'EUCOSSA Egerton University Chapter',
    location: 'Egerton University, Kenya',
    period: 'Ongoing',
    summary:
      'Part of the Egerton University chapter of EUCOSSA, a community for students in technology, supporting and taking part in its activities on campus.',
    highlights: [],
    placeholder: 'Took part in Stellar Hackaton',
    image: undefined,
  },
]

export const kindLabels: Record<ExperienceEntry['kind'], string> = {
  work: 'Experience',
  education: 'Education',
  certification: 'Certification',
  community: 'Community',
}

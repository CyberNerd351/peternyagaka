/**
 * skills.ts
 * -----------------------------------------------------------------------------
 * Skill groups shown in the Skills section.
 *
 * No proficiency percentages — they are impossible to read honestly. Every
 * technology is labelled with one of three levels instead, and each level is
 * explained to the reader beneath the grid. Change a level whenever you like;
 * the labels are yours to define.
 */

export type SkillLevel = 'regular' | 'familiar' | 'exploring'

export type SkillGroup = {
  id: string
  label: string
  skills: { name: string; level: SkillLevel }[]
}

export const levelLabels: Record<SkillLevel, string> = {
  regular: 'Regularly used',
  familiar: 'Familiar with',
  exploring: 'Currently exploring',
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'JavaScript', level: 'regular' },
      { name: 'Python', level: 'regular' },
      { name: 'SQL', level: 'regular' },
      { name: 'HTML', level: 'regular' },
      { name: 'CSS', level: 'regular' },
      { name: 'C', level: 'familiar' },
      { name: 'Kotlin', level: 'familiar' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React', level: 'regular' },
      { name: 'React Router', level: 'regular' },
      { name: 'Bootstrap', level: 'regular' },
      { name: 'Tailwind CSS', level: 'familiar' },
      { name: 'Chart.js', level: 'familiar' },
      { name: 'Framer Motion', level: 'familiar' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Flask', level: 'regular' },
      { name: 'REST API design', level: 'regular' },
      { name: 'Node.js', level: 'familiar' },
      { name: 'Express.js', level: 'familiar' },
      { name: 'FastAPI', level: 'exploring' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'SQLite', level: 'regular' },
      { name: 'MySQL', level: 'regular' },
      { name: 'Schema design', level: 'regular' },
      { name: 'MongoDB', level: 'exploring' },
    ],
  },
  {
    id: 'data',
    label: 'Data Science',
    skills: [
      { name: 'pandas', level: 'familiar' },
      { name: 'NumPy', level: 'familiar' },
      { name: 'Matplotlib', level: 'familiar' },
      { name: 'Seaborn', level: 'familiar' },
      { name: 'Scikit-learn', level: 'exploring' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools and Platforms',
    skills: [
      { name: 'Git', level: 'regular' },
      { name: 'GitHub', level: 'regular' },
      { name: 'VS Code', level: 'regular' },
      { name: 'Vercel', level: 'regular' },
      { name: 'NPM', level: 'regular' },
      { name: 'PNPM', level: 'familiar' },
      { name: 'Insomnia', level: 'familiar' },
      { name: 'Jupyter Notebook', level: 'familiar' },
      { name: 'pytest / unittest', level: 'familiar' },
      { name: 'Linux', level: 'familiar' },
      { name: 'Docker', level: 'exploring' },
    ],
  },
  {
    id: 'design',
    label: 'Design',
    skills: [
      { name: 'Figma', level: 'familiar' },
      { name: 'Canva', level: 'familiar' },
      { name: 'Adobe Illustrator', level: 'familiar' },
    ],
  },
]

export const engineeringInterests = [
  'Application security',
  'Software architecture',
  'Artificial intelligence',
  'Data science',
  'Systems that have to work offline',
]

import { useMemo } from 'react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { siteConfig } from '../data/siteConfig'
import { projects } from '../data/projects'
import { Hero } from '../components/sections/Hero'
import { About } from '../components/sections/About'
import { Experience } from '../components/sections/Experience'
import { Projects } from '../components/sections/Projects'
import { Skills } from '../components/sections/Skills'
import { Personality } from '../components/sections/Personality'
import { Contact } from '../components/sections/Contact'

export function Home() {
  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: `mailto:${siteConfig.email}`,
      jobTitle: `${siteConfig.role} and ${siteConfig.roleSecondary}`,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'KE',
        addressLocality: 'Nairobi',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Egerton University',
      },
      sameAs: [siteConfig.github, siteConfig.linkedin],
      knowsAbout: [
        'Full-stack web development',
        'Python',
        'Flask',
        'React',
        'REST APIs',
        'SQLite',
        'MySQL',
        'Point of sale systems',
        'Inventory management systems',
      ],
      makesOffer: projects.slice(0, 4).map((project) => ({
        '@type': 'CreativeWork',
        name: project.name,
        url: project.repoUrl,
        description: project.shortDescription,
      })),
    }),
    [],
  )

  useDocumentMeta({ path: '/', jsonLd })

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Personality />
      <Contact />
    </>
  )
}

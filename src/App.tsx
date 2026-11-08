import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/navigation/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollManager } from './components/layout/ScrollManager'
import { Home } from './pages/Home'
import { ProjectCaseStudy } from './pages/ProjectCaseStudy'
import { NotFound } from './pages/NotFound'
import { useSystemThemeSync } from './hooks/useTheme'

export default function App() {
  useSystemThemeSync()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-gold focus:bg-paper focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>

      <ScrollManager />
      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIBuild from './components/WhatIBuild';
import Skills from './components/Skills';
import Philosophy from './components/Philosophy';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import BeyondInterface from './components/BeyondInterface';
import DevelopmentJourney from './components/DevelopmentJourney';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Toast from './components/Toast';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const showToast = (message) => {
    setToastMessage(message);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 dark:bg-[#0a0d14] dark:text-slate-100 flex flex-col selection:bg-indigo-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <WhatIBuild />
        <Skills />
        <Philosophy />
        <FeaturedProject onOpenModal={handleOpenModal} />
        <Projects onOpenModal={handleOpenModal} />
        <BeyondInterface />
        <DevelopmentJourney />
        <GitHubSection />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseModal}
      />

      {/* Floating Scroll To Top */}
      <ScrollToTop />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />
    </div>
  );
}

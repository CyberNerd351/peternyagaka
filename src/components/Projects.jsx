import React, { useState } from 'react';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projects, projectFilterTabs } from '../data/projects';

export default function Projects({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.filterCategories && p.filterCategories.includes(activeFilter));

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-xs font-mono font-medium text-indigo-700 dark:text-indigo-400 mb-3 border border-indigo-200/60 dark:border-indigo-800/60">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Software Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Selected Projects
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl">
            A selection of systems and applications I've built while exploring software engineering, business automation, and practical problem solving.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-[#101726] border border-slate-200 dark:border-slate-800">
            {projectFilterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-white dark:bg-[#1f2d47] text-slate-900 dark:text-white shadow-sm font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>

        {/* Footnote on verified code */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-50 dark:bg-[#101726]/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span>Every project represents real architecture, real data modeling, and practical code.</span>
          </div>
          <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
            GitHub @CyberNerd351
          </span>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Github, ArrowRight, ExternalLink, FileText, Layers, Smartphone, Server, ShoppingBag, Vote, Building2 } from 'lucide-react';

const categoryIcons = {
  "Business Systems": Building2,
  "Financial / Student Support": Smartphone,
  "Election Management": Vote,
  "E-Commerce": ShoppingBag,
  "Sports E-Commerce": ShoppingBag,
};

export default function ProjectCard({ project, onOpenModal }) {
  const Icon = categoryIcons[project.category] || Layers;

  return (
    <div className="group rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-lg dark:hover:shadow-indigo-950/20 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between">
      
      {/* Card Header & Category */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-[#162035] text-indigo-600 dark:text-indigo-400">
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
              {project.category}
            </span>
          </div>

          {project.badge && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1.5">
          {project.title}
        </h3>
        
        <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-medium mb-3">
          {project.tagline}
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
          {project.shortDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/90 text-slate-500 dark:text-slate-400">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 group-hover:underline"
        >
          <span>System Breakdown</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label={`View ${project.title} on GitHub`}
              title="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors"
              aria-label={`Live Demo for ${project.title}`}
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

    </div>
  );
}

import React from 'react';
import { Github, ArrowRight, Database, Server, Smartphone, Layout, CheckCircle, Terminal, Layers } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const navOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Identity & Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 text-xs font-mono text-indigo-700 dark:text-indigo-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-subtle" />
              <span>Rich.Com</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span>@CyberNerd351</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-4">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Peter Nyagaka</span>.
            </h1>

            {/* Professional Subheading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-6 tracking-tight">
              Full-Stack Developer &amp; Computer Scientist
            </h2>

            {/* Core Mission Statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-8">
              I build practical web applications, business systems, APIs, and mobile applications that turn real problems into usable software.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] transition-all shadow-md shadow-indigo-600/25 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-mono text-sm font-medium text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-800 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <Github className="w-4 h-4 text-slate-900 dark:text-white" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Restrained Micro-Credibility Line */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800/80 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                Building
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-indigo-500" />
                Learning
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
                Solving
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-500" />
                Improving
              </span>
            </div>

          </div>

          {/* Right Column: Clean Software Architecture Visual Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 p-6 shadow-xl shadow-slate-200/50 dark:shadow-black/40">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 ml-2">
                    architecture.blueprint
                  </span>
                </div>
                <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  Full-Stack Architecture
                </span>
              </div>

              {/* Visual System Stack Diagram */}
              <div className="space-y-3">
                
                {/* Layer 1: Client Interfaces */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                      <Layout className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                        User Interface Layer
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        React.js SPA &bull; Kotlin Android Mobile
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 font-semibold">
                    Client
                  </span>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center items-center py-0.5 text-slate-400 dark:text-slate-600 font-mono text-xs">
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800">
                    REST API &bull; JSON &bull; JWT Auth
                  </span>
                </div>

                {/* Layer 2: Application / Logic */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                        Service &amp; Business Logic
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Python &bull; Flask &bull; Django &bull; REST Endpoints
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-semibold">
                    Server
                  </span>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center items-center py-0.5 text-slate-400 dark:text-slate-600 font-mono text-xs">
                  <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-800">
                    ACID Transactions &bull; SQL Queries
                  </span>
                </div>

                {/* Layer 3: Database & Storage */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                        Relational Persistence
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        MySQL &bull; SQLite &bull; SQLAlchemy ORM
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 font-semibold">
                    Storage
                  </span>
                </div>

              </div>

              {/* Bottom System Meta Badge */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  Practical Systems Engineering
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                  Verified Stack
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

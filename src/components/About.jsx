import React from 'react';
import { User, Code, Database, Smartphone, Terminal, Cpu, CheckCircle2 } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-xs font-mono font-medium text-indigo-700 dark:text-indigo-400 mb-3 border border-indigo-200/60 dark:border-indigo-800/60">
            <User className="w-3.5 h-3.5" />
            <span>Profile &amp; Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Developer Identity & Attribute Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Developer Emblem Card */}
            <div className="rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 dark:bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Terminal className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Peter Nyagaka
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
                    Rich.Com &bull; @CyberNerd351
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Full-Stack &amp; Systems Developer
                  </span>
                </div>
              </div>

              {/* 4 Info Badges */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/60 dark:border-slate-800">
                  <div className="text-slate-400 dark:text-slate-500 font-mono text-[11px] mb-0.5">Focus</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">Software Development</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/60 dark:border-slate-800">
                  <div className="text-slate-400 dark:text-slate-500 font-mono text-[11px] mb-0.5">Primary Stack</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">React + Python + Flask</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/60 dark:border-slate-800">
                  <div className="text-slate-400 dark:text-slate-500 font-mono text-[11px] mb-0.5">Development Style</div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200">Practical &amp; System-Oriented</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/60 dark:border-slate-800">
                  <div className="text-slate-400 dark:text-slate-500 font-mono text-[11px] mb-0.5">GitHub Identity</div>
                  <div className="font-semibold font-mono text-indigo-600 dark:text-indigo-400">CyberNerd351</div>
                </div>
              </div>
            </div>

            {/* Quick Core Capabilities Card */}
            <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40">
              <div className="text-xs font-mono font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider mb-3">
                Core Competency Pillars
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Frontend single-page applications with React.js &amp; modern JS</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>RESTful API design, routing &amp; authentication in Python/Flask</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Relational data integrity &amp; transaction management in MySQL/SQLite</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>Native Android application development with Kotlin in Android Studio</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Narrative & Technical Stance */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-base leading-relaxed space-y-4">
              <p className="text-lg text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                I'm a computer scientist and full-stack developer who enjoys turning real-world operational problems into practical, maintainable software systems.
              </p>
              
              <p>
                My development work spans frontend web applications, backend APIs, database-driven architectures, business management software, and Android mobile applications. I work primarily with technologies such as <strong className="text-slate-900 dark:text-white font-semibold">React, JavaScript, Python, Flask, Django, SQL, MySQL, SQLite, and Kotlin</strong>.
              </p>

              <p>
                Rather than treating software as isolated frontend components or superficial styling, I approach development from a systems perspective. I like understanding how the pieces fit together from end to end: the merchant or user workflow, the API contracts, the transactional database rules, and the operational constraints that ensure software stays reliable.
              </p>

              <p>
                My projects are particularly grounded in real operational requirements—such as double-entry retail inventory ledgers, multi-seat student election systems, and student financial allocation tools.
              </p>
            </div>

            {/* Prominent Architectural Stance Quote Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#101726] border-l-4 border-l-indigo-600 border-y border-r border-slate-200 dark:border-slate-800 shadow-sm">
              <blockquote className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2">
                "I don't just build interfaces. I build systems."
              </blockquote>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-normal">
                From frontend state management to APIs, relational database schemas, and business rules, I focus on the layers that make software actually function in production.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

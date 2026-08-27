import React from 'react';
import { Milestone, ArrowDown, Code, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { developmentJourney } from '../data/experience';
import Education from './Education';

export default function DevelopmentJourney() {
  return (
    <section id="journey" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-xs font-mono font-medium text-indigo-700 dark:text-indigo-400 mb-3 border border-indigo-200/60 dark:border-indigo-800/60">
            <Milestone className="w-3.5 h-3.5" />
            <span>Growth &amp; Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Development Journey &amp; Training
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl">
            A continuous progression from core frontend interfaces to full-stack backend systems, relational databases, business automation, and mobile platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Col: Step-by-Step Technical Evolution Timeline */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-500" />
              <span>Technical Progression Timeline</span>
            </h3>

            <div className="relative border-l-2 border-indigo-200 dark:border-indigo-950/80 ml-3.5 space-y-8 pl-6">
              {developmentJourney.map((step, idx) => (
                <div key={step.stage} className="relative group">
                  
                  {/* Timeline Indicator Dot */}
                  <div className="absolute -left-[33px] top-1 w-6 h-6 rounded-full bg-white dark:bg-[#0a0d14] border-2 border-indigo-600 dark:border-indigo-500 flex items-center justify-center shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 shadow-sm transition-all group-hover:border-indigo-500/40">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        PHASE {step.stage}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Milestone
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                      {step.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {step.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Education Card & Resume Note */}
          <div className="lg:col-span-6 space-y-6">
            <Education />

            {/* Resume / Credibility Box */}
            <div className="p-6 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 space-y-3">
              <div className="text-xs font-mono font-bold text-indigo-900 dark:text-indigo-300 uppercase tracking-wider">
                Resume &amp; Technical Verification
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Full technical resume and portfolio documentation available upon request. All projects and certifications are verifiable on GitHub under <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">@CyberNerd351</span>.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  <span>Request full resume &amp; references &rarr;</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

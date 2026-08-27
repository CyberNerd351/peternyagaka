import React from 'react';
import { Target, Compass, Code, CheckCircle, ArrowRight } from 'lucide-react';
import { engineeringPrinciples } from '../data/experience';

const principleIcons = [Target, Compass, Code, CheckCircle];

export default function Philosophy() {
  return (
    <section className="py-16 md:py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-xs font-mono font-medium text-indigo-700 dark:text-indigo-400 mb-3 border border-indigo-200/60 dark:border-indigo-800/60">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Discipline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            How I Build
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A disciplined development workflow emphasizing understanding operational constraints and modeling data before writing code.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringPrinciples.map((p, idx) => {
            const Icon = principleIcons[idx];
            return (
              <div
                key={p.step}
                className="relative rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:border-indigo-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-400 dark:text-slate-500">
                      {p.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {p.title}
                  </h3>
                  <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                    {p.tagline}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { Layout, Building2, Server, Smartphone, Database, ArrowRight, Layers } from 'lucide-react';

const icons = {
  Layout: Layout,
  Building2: Building2,
  Server: Server,
  Smartphone: Smartphone,
  Database: Database,
};

const buildItems = [
  {
    icon: 'Building2',
    title: 'Business Systems',
    subtitle: 'Operations & POS Software',
    description: 'Software engineered around actual operational requirements: transaction-driven inventory tracking, point-of-sale checkouts, supplier ledgers, expense tracking, and immutable audit trails.',
    highlights: ['Transaction Ledgers', 'FIFO Valuation', 'Stock Alerts', 'Audit Trails'],
    color: 'emerald'
  },
  {
    icon: 'Layout',
    title: 'Web Applications',
    subtitle: 'Responsive Single-Page Apps',
    description: 'Interactive, fast web interfaces using React and modern JavaScript. Built with modular component architecture, accessible UI patterns, and robust state management.',
    highlights: ['React.js', 'Custom Hooks', 'Tailwind CSS', 'Responsive UI'],
    color: 'indigo'
  },
  {
    icon: 'Server',
    title: 'APIs & Backend Systems',
    subtitle: 'REST Services & Business Logic',
    description: 'Secure, lightweight RESTful services powered by Python and Flask. Designed with structured route handling, JWT authentication, CORS control, and rate limiting.',
    highlights: ['Python & Flask', 'RESTful Design', 'JWT Security', 'Flask-Limiter'],
    color: 'blue'
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Applications',
    subtitle: 'Native Android Development',
    description: 'Native Android applications engineered in Kotlin with Android Studio. Focuses on clean activity workflows, responsive layout design, and asynchronous API synchronization.',
    highlights: ['Kotlin', 'Android Studio', 'REST Client', 'Mobile UX'],
    color: 'cyan'
  },
  {
    icon: 'Database',
    title: 'Database-Driven Systems',
    subtitle: 'Relational Schemas & Integrity',
    description: 'Data architectures utilizing MySQL and SQLite. Structured with normalized schemas, foreign key constraints, indexes, and reliable transactional persistence.',
    highlights: ['MySQL & SQLite', 'SQLAlchemy ORM', 'Relational Schemas', 'ACID Rules'],
    color: 'amber'
  }
];

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="py-16 md:py-24 bg-slate-50/50 dark:bg-[#0c101b]/60 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-xs font-mono font-medium text-indigo-700 dark:text-indigo-400 mb-3 border border-indigo-200/60 dark:border-indigo-800/60">
            <Layers className="w-3.5 h-3.5" />
            <span>Scope of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            What I Build
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Software engineering spanning client interfaces, business process modeling, backend APIs, and relational persistence.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buildItems.map((item, idx) => {
            const IconComponent = icons[item.icon];
            return (
              <div
                key={item.title}
                className={`group rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md dark:hover:shadow-indigo-950/20 hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 ? 'md:col-span-2 lg:col-span-1 border-emerald-500/30 dark:border-emerald-500/30' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-[#162035] text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-medium mb-3">
                    {item.subtitle}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

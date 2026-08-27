import React from 'react';
import { Database, ShieldCheck, Cpu, Smartphone, Layers, Server, Code2, FileCheck2, Terminal } from 'lucide-react';
import ArchitectureDiagram from './ArchitectureDiagram';

const engineeringPillars = [
  {
    icon: Database,
    title: "Relational Database Modeling & ACID Rules",
    description: "Designing normalized database schemas with strict relational constraints, indexed foreign keys, and atomic transaction blocks to prevent inconsistent states.",
    technologies: "MySQL • SQLite • SQLAlchemy • Relational Normalization"
  },
  {
    icon: Server,
    title: "REST API Design & Endpoint Security",
    description: "Structuring stateless RESTful architectures with clear HTTP verb contracts, JWT token authentication, CORS configuration, and request rate-limiting.",
    technologies: "Python • Flask • REST Endpoints • JWT • Flask-Limiter"
  },
  {
    icon: Cpu,
    title: "Business Process Modeling & Ledger Logic",
    description: "Engineering real-world domain rules: double-entry stock transactions, FIFO valuation, gross vs net profit balancing, and tamper-evident audit logs.",
    technologies: "Transaction Ledgers • POS Systems • Profit Reconciliation"
  },
  {
    icon: Smartphone,
    title: "Mobile Client & Server Synchronization",
    description: "Building native Android user experiences in Kotlin that securely connect to backend REST APIs, handle offline states, and parse asynchronous payloads.",
    technologies: "Kotlin • Android Studio • REST Clients • JSON Parsing"
  }
];

export default function BeyondInterface() {
  return (
    <section id="engineering" className="py-16 md:py-24 bg-slate-50/50 dark:bg-[#0c101b]/60 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-xs font-mono font-medium text-indigo-700 dark:text-indigo-400 mb-3 border border-indigo-200/60 dark:border-indigo-800/60">
            <Cpu className="w-3.5 h-3.5" />
            <span>Systems Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Beyond the Interface
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl">
            Software development is more than visual presentation. I focus heavily on the underlying architecture: database modeling, API contracts, business rules, and transaction reliability.
          </p>
        </div>

        {/* 4 Engineering Deep Dive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {engineeringPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                    {pillar.technologies}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Visualizer Interactive Section */}
        <ArchitectureDiagram />

      </div>
    </section>
  );
}

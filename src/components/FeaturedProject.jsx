import React, { useState } from 'react';
import { 
  Building2, 
  Database, 
  ShieldCheck, 
  Receipt, 
  AlertTriangle, 
  FileText, 
  History, 
  ArrowRight, 
  Github, 
  Layers, 
  CheckCircle2, 
  TrendingUp, 
  RefreshCw 
} from 'lucide-react';
import { projects } from '../data/projects';

export default function FeaturedProject({ onOpenModal }) {
  const featured = projects.find(p => p.featured) || projects[0];
  const [activeTab, setActiveTab] = useState('ledger');

  const tabs = [
    { id: 'ledger', label: 'Transaction Ledger' },
    { id: 'pos', label: 'POS & Receipts' },
    { id: 'valuation', label: 'FIFO Valuation' },
    { id: 'audit', label: 'Audit Logging' },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800/80 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 mb-3 border border-emerald-200/60 dark:border-emerald-800/60">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Flagship System Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Cyber Inventory Management System
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-3xl">
            A transaction-driven business management system and POS architecture engineered for small Kenyan cyber cafes and retail merchants.
          </p>
        </div>

        {/* Featured Big Card */}
        <div className="rounded-3xl bg-white dark:bg-[#101726] border-2 border-indigo-500/30 dark:border-indigo-500/30 p-6 sm:p-8 lg:p-10 shadow-xl shadow-indigo-950/10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: System Specs & Value */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    Business Operations
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    Relational Data Integrity
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    SQLite + React
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                  Transaction-Based Stock &amp; Point of Sale
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  Engineered to prevent stock shrinkage, unrecorded cash transactions, and inventory discrepancies. Every single inventory change is modeled as an atomic transaction rather than an arbitrary numerical override.
                </p>
              </div>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
                  <Receipt className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">POS Checkout &amp; Receipts</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Instant customer billing and transaction logs</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Profit &amp; Expense Reconciliation</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Gross vs net margins after utilities &amp; supplies</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Low-Stock &amp; Loss Tracking</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Automated reorder triggers &amp; damage logs</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
                  <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Database Backup &amp; Restore</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">Resilient local snapshots &amp; recovery scripts</div>
                  </div>
                </div>
              </div>

              {/* Technologies List */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-2 font-medium">
                  Technologies &amp; Design Paradigms:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {featured.technologies.map(t => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <button
                  onClick={() => onOpenModal(featured)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
                >
                  <span>Inspect Complete Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              </div>

            </div>

            {/* Right Col: Interactive System Workflow Simulator */}
            <div className="lg:col-span-6 w-full">
              <div className="rounded-2xl bg-slate-900 dark:bg-[#0d1320] border border-slate-800 p-5 text-slate-200 shadow-inner">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-300">
                      System Module Inspector
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-indigo-400">
                    SQLite Ledger Engine
                  </span>
                </div>

                {/* Interactive Explorer Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 mb-4">
                  {tabs.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id)}
                      className={`px-2 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                        activeTab === t.id
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content Display */}
                <div className="rounded-xl bg-slate-950/90 border border-slate-800/90 p-4 font-mono text-xs space-y-3 min-h-[260px] flex flex-col justify-center">
                  
                  {activeTab === 'ledger' && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-indigo-400 border-b border-slate-800 pb-2">
                        <span className="font-bold">// ATOMIC TRANSACTION DISPATCH</span>
                        <span className="text-emerald-400 text-[10px]">STATUS: VERIFIED</span>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        Every stock delta creates an immutable entry in <code className="text-slate-200">inventory_transactions</code> table:
                      </p>
                      <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-300 space-y-1">
                        <div><span className="text-indigo-400">INSERT INTO</span> stock_ledger (sku, type, qty, cost, ts)</div>
                        <div className="text-slate-400">VALUES ('KB-USB-01', 'SALE', -1, 450.00, datetime('now'));</div>
                        <div className="text-emerald-400">// Automatic trigger verifies non-negative stock balance</div>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Prevents negative stock anomalies &amp; preserves audit trace</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'pos' && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-indigo-400 border-b border-slate-800 pb-2">
                        <span className="font-bold">// POINT OF SALE CHECKOUT</span>
                        <span className="text-indigo-400 text-[10px]">RECEIPT #CYB-2026-88</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-slate-300">
                        <div className="flex justify-between text-slate-400">
                          <span>ITEM</span>
                          <span>QTY &times; PRICE</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-800/80 pt-1">
                          <span>Flash Drive 32GB</span>
                          <span>1 &times; KES 850.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>A4 Document Color Print</span>
                          <span>12 &times; KES 20.00</span>
                        </div>
                        <div className="flex justify-between font-bold text-emerald-400 border-t border-slate-800 pt-1">
                          <span>TOTAL RECEIPT</span>
                          <span>KES 1,090.00</span>
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Customer receipt generated instantly with thermal-print ready formatting.
                      </div>
                    </div>
                  )}

                  {activeTab === 'valuation' && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-indigo-400 border-b border-slate-800 pb-2">
                        <span className="font-bold">// INVENTORY VALUATION ENGINE</span>
                        <span className="text-amber-400 text-[10px]">FIFO ANALYSIS</span>
                      </div>
                      <p className="text-slate-400 text-[11px]">
                        Computes real-time asset worth and true gross profit factoring supplier price fluctuations:
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded bg-slate-900 border border-slate-800">
                          <div className="text-slate-500 text-[10px]">Total Stock Cost</div>
                          <div className="font-bold text-slate-200">KES 142,500.00</div>
                        </div>
                        <div className="p-2 rounded bg-slate-900 border border-slate-800">
                          <div className="text-slate-500 text-[10px]">Est. Retail Value</div>
                          <div className="font-bold text-emerald-400">KES 210,800.00</div>
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Reconciles physical inventory value against operational overhead.
                      </div>
                    </div>
                  )}

                  {activeTab === 'audit' && (
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-indigo-400 border-b border-slate-800 pb-2">
                        <span className="font-bold">// IMMUTABLE AUDIT LOG</span>
                        <span className="text-emerald-400 text-[10px]">TAMPER-EVIDENT</span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-300">STOCK_IN [50x Cable Cat6]</span>
                          <span className="text-slate-500 text-[10px]">Today 09:14</span>
                        </div>
                        <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <span className="text-amber-400">STOCK_ADJUST [Damaged -1]</span>
                          <span className="text-slate-500 text-[10px]">Today 11:32</span>
                        </div>
                        <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex items-center justify-between">
                          <span className="text-emerald-400">DB_SNAPSHOT_BACKUP [OK]</span>
                          <span className="text-slate-500 text-[10px]">Today 18:00</span>
                        </div>
                      </div>
                      <div className="text-[10px] text-slate-500">
                        All operator overrides require categorised reasons and are stored permanently.
                      </div>
                    </div>
                  )}

                </div>

                {/* Footer Micro Bar */}
                <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Architecture: 3-Tier Web + Relational DB</span>
                  <span className="text-indigo-400 font-bold">Production-Minded</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

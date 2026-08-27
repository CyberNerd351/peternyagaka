import React, { useState } from 'react';
import { Database, Server, Smartphone, Layout, ArrowRight, ShieldCheck, Check, ArrowDown, Cpu, FileSpreadsheet } from 'lucide-react';

export default function ArchitectureDiagram() {
  const [selectedFlow, setSelectedFlow] = useState('inventory');

  return (
    <div className="rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 p-6 shadow-md">
      
      {/* Selector Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800/80 mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            System Flow Visualizer
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Interactive multi-tier architecture &amp; data flow diagrams
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-[#162035] border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setSelectedFlow('inventory')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
              selectedFlow === 'inventory'
                ? 'bg-white dark:bg-[#1f2d47] text-slate-900 dark:text-white shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Inventory Ledger Flow
          </button>
          <button
            onClick={() => setSelectedFlow('helb')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
              selectedFlow === 'helb'
                ? 'bg-white dark:bg-[#1f2d47] text-slate-900 dark:text-white shadow-sm font-bold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Mobile-to-API Allocation
          </button>
        </div>
      </div>

      {/* Flow 1: Inventory System Flow */}
      {selectedFlow === 'inventory' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
            
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 font-mono font-bold mb-2">
                  <span>01. CLIENT POS</span>
                  <Layout className="w-4 h-4" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Operator initiates sale or stock adjustment via React UI with SKU barcodes and itemized counts.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-mono text-slate-400">Payload: JSON Event</span>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-mono font-bold mb-2">
                  <span>02. VALIDATION</span>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Business rules check current stock thresholds, apply FIFO cost matching, and block negative balances.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-mono text-slate-400">Atomic Guard Rules</span>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-blue-600 dark:text-blue-400 font-mono font-bold mb-2">
                  <span>03. SQL LEDGER</span>
                  <Database className="w-4 h-4" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Single transaction writes immutable ledger row in SQLite, decrements SKU stock, and computes profit.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-mono text-slate-400">ACID Transaction Commit</span>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-amber-600 dark:text-amber-400 font-mono font-bold mb-2">
                  <span>04. RECEIPT &amp; AUDIT</span>
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Thermal-ready receipt formatted for client, daily cash balanced, and audit trail record locked.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-mono text-slate-400">Output: Receipt &amp; Log</span>
            </div>

          </div>

          <div className="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/50 text-xs font-mono text-indigo-900 dark:text-indigo-300 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Guarantees: Zero stock discrepancy, immutable history, non-destructive rollbacks.
            </span>
            <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">Cyber Shop POS Spec</span>
          </div>
        </div>
      )}

      {/* Flow 2: Smart HelbWallet Flow */}
      {selectedFlow === 'helb' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
            
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-cyan-600 dark:text-cyan-400 font-mono font-bold mb-2">
                  <span>01. KOTLIN APP</span>
                  <Smartphone className="w-4 h-4" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Student sets budget rules on Android device (e.g. 50% Tuition, 30% Living, 20% Emergency).
                </p>
              </div>
              <span className="mt-3 text-[10px] font-mono text-slate-400">Native Android UI</span>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400 font-mono font-bold mb-2">
                  <span>02. JWT REST API</span>
                  <Server className="w-4 h-4" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Flask backend validates bearer token, rate-limits requests, and checks student disbursement eligibility.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-mono text-slate-400">Flask + Flask-Limiter</span>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-mono font-bold mb-2">
                  <span>03. ALLOCATION LOGIC</span>
                  <Cpu className="w-4 h-4" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Mathematical partition engine splits incoming funds into dedicated sub-wallet balances atomically.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-mono text-slate-400">Financial Ledger Rules</span>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-blue-600 dark:text-blue-400 font-mono font-bold mb-2">
                  <span>04. MYSQL STORE</span>
                  <Database className="w-4 h-4" />
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Persists partition balances with relational foreign keys, timestamps, and payment tracking references.
                </p>
              </div>
              <span className="mt-3 text-[10px] font-mono text-slate-400">Normalized Relational Store</span>
            </div>

          </div>

          <div className="p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/50 text-xs font-mono text-indigo-900 dark:text-indigo-300 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Guarantees: Multi-platform state consistency, zero balance discrepancies, secured endpoints.
            </span>
            <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">Mobile + API Architecture</span>
          </div>
        </div>
      )}

    </div>
  );
}

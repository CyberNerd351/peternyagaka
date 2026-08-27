import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle, BookOpen } from 'lucide-react';
import { educationHistory } from '../data/experience';

export default function Education() {
  return (
    <div className="rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800/80">
        <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Formal Technical Training &amp; Certification
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Verified institutional programs and core curriculum
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {educationHistory.map((edu, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="text-base font-bold text-slate-900 dark:text-white">
                  {edu.institution}
                </div>
                <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                  {edu.credential}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800 self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                <span>{edu.period}</span>
              </div>
            </div>

            {/* Curriculum Focus */}
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Curriculum Focus &amp; Applied Work:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                {edu.focus.map((item, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>Status: Certified Full Stack Developer</span>
              </span>
              <span>Institution Verified</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import { Github, Mail, Code2, ArrowUp, Terminal } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#07090f] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-100 dark:border-slate-800/80 items-start">
          
          {/* Brand & Identity Column */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/10 dark:bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Peter Nyagaka
              </span>
              <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                / Rich.Com
              </span>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Full-Stack Developer &amp; Computer Scientist. Focused on practical web applications, business systems, APIs, and mobile platforms.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500">
              <Terminal className="w-3.5 h-3.5 text-indigo-500" />
              <span>GitHub: @CyberNerd351</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Sections
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#what-i-build" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                  What I Build
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Skills &amp; Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Selected Projects
                </a>
              </li>
              <li>
                <a href="#engineering" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Systems Engineering
                </a>
              </li>
              <li>
                <a href="#journey" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">
                  Development Journey
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              Connect
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors font-mono"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/CyberNerd351</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors font-mono break-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>{socialLinks.email}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
          <div>
            &copy; 2026 Peter Nyagaka. Built with React &amp; Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

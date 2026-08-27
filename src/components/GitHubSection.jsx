import React, { useState, useEffect } from 'react';
import { Github, ArrowUpRight, GitBranch, Star, Terminal, Code2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { fetchGitHubProfile, verifiedRepositories, fallbackProfile } from '../utils/github';
import { socialLinks } from '../data/socialLinks';

export default function GitHubSection() {
  const [profile, setProfile] = useState(fallbackProfile);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchGitHubProfile().then((res) => {
      if (mounted && res && res.data) {
        setProfile(res.data);
      }
      if (mounted) setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="github" className="py-16 md:py-24 bg-slate-50/50 dark:bg-[#0c101b]/60 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-xs font-mono font-medium text-indigo-700 dark:text-indigo-400 mb-3 border border-indigo-200/60 dark:border-indigo-800/60">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source &amp; Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            GitHub
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Explore the code behind my projects. All software systems are structured with clean version control and modular commits.
          </p>
        </div>

        {/* Profile Card & Repositories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Profile Badge */}
          <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center border border-slate-700 overflow-hidden shrink-0">
                  <Github className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {profile.name || "Peter Nyagaka"}
                  </h3>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    <span>@{profile.login || "CyberNerd351"}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {profile.bio || "Full-Stack Developer & Computer Scientist building practical software systems, business applications, and APIs."}
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#162035] border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs font-mono mb-6">
                <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                  <span className="text-slate-400 dark:text-slate-500">Public Repos</span>
                  <span className="font-bold">{profile.public_repos || 5}</span>
                </div>
                <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                  <span className="text-slate-400 dark:text-slate-500">Identity</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Rich.Com</span>
                </div>
                <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                  <span className="text-slate-400 dark:text-slate-500">Focus</span>
                  <span>Systems &amp; Full-Stack</span>
                </div>
              </div>
            </div>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-sm transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Column: Verified Repository Cards */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                Featured Repositories &amp; Source Code
              </span>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Public Repos</span>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {verifiedRepositories.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-indigo-500" />
                        <h4 className="text-sm font-bold font-mono text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {repo.name}
                        </h4>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      {repo.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {repo.language}
                    </span>
                    <span className="text-indigo-500 group-hover:underline">
                      Inspect Code &rarr;
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* GitHub Micro CTA Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#101726] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  More code. More experiments. More projects.
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Explore CyberNerd351 on GitHub for source code, commits, and architectural blueprints.
                </div>
              </div>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 transition-colors shrink-0"
              >
                <span>Visit GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

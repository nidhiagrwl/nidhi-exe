import React from 'react';
import CaseCard from '../components/CaseCard';
import { cases } from '../data/cases';

const Home = () => {
  return (
    <div className="min-h-screen p-4 sm:p-12 font-mono selection:bg-sky-400 selection:text-black">
      <header className="max-w-4xl mx-auto mb-16 border-b border-sky-900/40 pb-12">
        <div className="flex flex-col gap-2 mb-10">
          <div className="flex items-center gap-2 text-sky-400 text-[10px] font-bold tracking-[0.4em] uppercase">
             <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
             system_active
          </div>
          <h1 className="text-2xl sm:text-5xl font-semibold text-white uppercase tracking-tighter leading-none">
            Nidhi.exe — Debugging Life in Progress<span className="text-sky-400 animate-pulse">|</span>
          </h1>
          <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mt-2">v32.0.1 // nidhi_debugging_life.exe</p>
        </div>

        {/* About Section */}
        <section className="mb-12 card-blur border border-sky-500/10 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] text-sky-500 font-bold uppercase tracking-widest">Description_v2</span>
            <div className="h-[1px] flex-grow bg-sky-900/30"></div>
          </div>
          <div className="text-slate-200 text-sm sm:text-base space-y-4 leading-relaxed max-w-2xl font-sans sm:font-mono">
            <p>
              A running log of observations, assumptions that didn’t compile, discoveries, and bugs I found in production (a.k.a. life).
            </p>
            <p className="text-slate-400">Everything here is self-documented.</p>
            <div className="text-[10px] text-sky-500/60 uppercase font-bold tracking-widest pt-2 border-t border-sky-900/20">
              [!] WARNING: No guarantees of correctness. Some features may still be in beta.
            </div>
          </div>
        </section>

        {/* System Capabilities / Intro sequence */}
        <div className="card-blur border border-sky-500/5 p-6 rounded-lg opacity-80">
          <div className="text-sky-300 text-xs sm:text-sm space-y-2 leading-relaxed">
            <p className="flex items-center gap-2 font-semibold"><span className="text-sky-500">$</span> fetch system_capabilities</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 py-4">
              <p className="flex items-center gap-2 text-slate-400"><span className="text-emerald-500 text-[10px]">[✓]</span> observations</p>
              <p className="flex items-center gap-2 text-slate-400"><span className="text-emerald-500 text-[10px]">[✓]</span> discoveries</p>
              <p className="flex items-center gap-2 text-slate-400"><span className="text-rose-400 text-[10px]">[✓]</span> rants</p>
              <p className="flex items-center gap-2 text-slate-400"><span className="text-purple-400 text-[10px]">[✓]</span> sarcasm</p>
              <p className="flex items-center gap-2 text-slate-400"><span className="text-amber-400 text-[10px]">[✓]</span> mysteries</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs text-slate-500 font-semibold uppercase tracking-[0.4em]">Recently Investigated...</span>
          <div className="h-[1px] flex-grow bg-slate-900"></div>
        </div>
        
        <div className="flex flex-col gap-6">
          {cases.map((caseData) => (
            <CaseCard key={caseData.id} caseData={caseData} />
          ))}
        </div>
      </main>

      <footer className="max-w-4xl mx-auto mt-32 text-[10px] text-slate-700 uppercase tracking-[0.5em] text-center border-t border-sky-900/30 pt-12 pb-24">
        [ system_logs_end_transmission ]
      </footer>
    </div>
  );
};

export default Home;
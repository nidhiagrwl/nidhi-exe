import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { cases } from '../data/cases';
import StatusBadge from '../components/StatusBadge';

const CasePage = () => {
  const { id } = useParams();
  const caseData = cases.find(c => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-rose-500 font-bold uppercase tracking-[0.4em] animate-pulse">
        &gt; err_file_not_found: {id}
      </div>
    );
  }

  const LogBlock = ({ label, content, color = "text-slate-300" }) => (
    <div className="mb-12 group">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-4 w-1 bg-sky-500 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.8)] transition-all"></div>
        <span className="text-[11px] text-sky-500/60 font-bold uppercase tracking-[0.3em]">
          {label}
        </span>
      </div>
      <div className={`card-blur border border-sky-500/5 p-6 rounded-lg ${color} text-sm leading-relaxed shadow-xl whitespace-pre-wrap`}>
        {content}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-6 sm:p-12 md:p-24 selection:bg-sky-400 selection:text-black">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-16 border-b border-sky-900/40 pb-6">
          <Link to="/" className="text-sky-400 hover:text-white transition-colors text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
            <span className="text-xl">«</span> cd .. / root / logs
          </Link>
        </nav>

        <header className="mb-20">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <StatusBadge status={caseData.status} />
            <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-semibold">
              log_time: {caseData.timestamp}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-white uppercase tracking-tighter leading-none mb-10 shadow-sky-500/20">
            {caseData.title}
          </h1>
          {caseData.header?.badges?.length > 0 && (
  <div className="flex flex-wrap gap-3">
    {caseData.header.badges.map((badge, index) => (
      <div
        key={index}
        className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded font-semibold text-[10px] text-sky-400 uppercase tracking-widest"
      >
        {badge.label}:: {badge.value}
      </div>
    ))}
  </div>
)}
          {/* <div className="flex flex-wrap gap-3">
            <div className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded font-semibold text-[10px] text-sky-400 uppercase tracking-widest">
              Sarcasm:: {caseData.sarcasmLevel}
            </div>
            <div className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded font-semibold text-[10px] text-sky-400 uppercase tracking-widest">
              Signal:: {caseData.signalLevel}
            </div>
            <div className="inline-block px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded font-semibold text-[10px] text-sky-400 uppercase tracking-widest">
              Tolerance:: {caseData.abstractionTolerance}
            </div>
          </div> */}
        </header>

        <main className="space-y-4">
          {caseData.sections ? (
            caseData.sections.map((section, index) => (
              <LogBlock
                key={index}
                label={section.label}
                content={section.content}
                color={section.color || "text-slate-300"}
              />
            ))
          ) : (
            <>
              <LogBlock label="Trigger_Event" content={caseData.trigger} color="text-slate-100" />
              <LogBlock label="Investigation" content={caseData.investigation} />
              {/* Colors removed as requested */}
              <LogBlock label="Primary_Findings" content={caseData.findings} color="text-slate-100" />
              <LogBlock label="Final_Resolution" content={caseData.conclusion} color="text-slate-100" />
            </>
          )}
        </main>

        <footer className="mt-40 pt-16 border-t border-sky-900/40 flex flex-col items-center gap-8 pb-12">
          <Link to="/" className="w-full sm:w-auto text-center border-2 border-sky-500 text-sky-500 px-10 py-3 rounded text-xs font-black uppercase tracking-widest hover:bg-sky-500 hover:text-black transition-all">
            Terminate :: Return to Dashboard
          </Link>
          <div className="text-[9px] uppercase tracking-[1em] text-slate-700 font-semibold">
            End_of_session :: secure_log_encrypted
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CasePage;
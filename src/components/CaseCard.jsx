import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from './StatusBadge';

const CaseCard = ({ caseData }) => {
  return (
    <Link 
      to={`/case/${caseData.id}`}
      className="group block card-blur border border-sky-500/10 p-5 sm:p-7 rounded-xl hover:border-sky-500/40 hover:bg-slate-900/40 transition-all relative overflow-hidden shadow-lg shadow-black/40"
    >
      {/* Visual accent */}
      <div className="absolute left-0 top-0 w-1 h-0 bg-sky-500 group-hover:h-full transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.4)]" />
      
      <div className="flex justify-between items-center mb-5 border-b border-sky-900/20 pb-4">
        <StatusBadge status={caseData.status} />
        <span className="text-[10px] text-slate-500 font-medium uppercase tracking-widest bg-black/30 px-2 py-0.5 rounded">
          {caseData.readTime}
        </span>
      </div>
      
      <h3 className="text-lg sm:text-xl font-semibold text-slate-100 group-hover:text-sky-400 transition-colors mb-3 uppercase tracking-tighter">
        {caseData.title}
      </h3>

      {(caseData.trigger || (caseData.sections && caseData.sections[0]?.content) || caseData.investigation) && (
        <p className="text-sm text-slate-400 group-hover:text-slate-300 line-clamp-2 leading-relaxed mb-6 font-normal italic opacity-80 group-hover:opacity-100 transition-opacity">
          &gt; {caseData.trigger || (caseData.sections && caseData.sections[0]?.content) || caseData.investigation}
        </p>
      )}
      
      <div className="flex items-center justify-between text-[10px] uppercase font-semibold tracking-widest text-slate-600">
        <div className="flex items-center gap-2">
          <span className="text-sky-500 opacity-50">LOG:</span>
          <span>{caseData.id}</span>
        </div>
        <span className="text-sky-500/70 group-hover:text-sky-400 flex items-center gap-2">
          VIEW_SEQUENCE <span className="animate-bounce-x">→</span>
        </span>
      </div>
    </Link>
  );
};

export default CaseCard;
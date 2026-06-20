import React from 'react';

const StatusBadge = ({ status }) => {
  const getStatusConfig = (status) => {
    switch (status?.toLowerCase()) {
      case 'open':
        return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
      case 'in-progress':
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'closed':
      case 'resolved':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'wondering':
        return 'text-fuchsia-300 bg-fuchsia-500/10 border-fuchsia-400/20';
      case 'deprecated':
          return 'text-amber-300 bg-amber-500/10 border-amber-400/20';
      case 'rant':
          return 'text-rose-300 bg-rose-500/10 border-rose-400/20';
      default:
        return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  return (
    <span className={`px-2 py-0.5 rounded border text-[10px] font-mono font-medium uppercase tracking-wider ${getStatusConfig(status)}`}>
      {status || 'NULL'}
    </span>
  );
};

export default StatusBadge;
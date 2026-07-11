import React from 'react';

export default function SectionLabel({ label, index }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-pulse opacity-60">
        {String(index).padStart(2, '0')}
      </span>
      <div className="w-8 h-px bg-emerald-pulse/30" />
      <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-vellum">
        {label}
      </span>
    </div>
  );
}

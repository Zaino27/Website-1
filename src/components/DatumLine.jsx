import React, { useEffect, useState } from 'react';

export default function DatumLine() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress(window.scrollY / total);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 w-px h-full z-30 pointer-events-none hidden md:block">
      <div className="absolute left-4 top-0 w-px h-full bg-slate-core/30" />
      <div
        className="absolute left-4 top-0 w-px bg-emerald-pulse/40 transition-all duration-100"
        style={{ height: `${scrollProgress * 100}%` }}
      />
      <div
        className="absolute left-3 w-3 h-3 rounded-full border border-emerald-pulse/40 bg-obsidian transition-all duration-100"
        style={{ top: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-slate-core/50 bg-obsidian py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-pulse/60 block mb-4">
              Observatory
            </span>
            <p className="text-vellum text-sm leading-relaxed max-w-xs">
              A living research environment where mathematical ideas and computational structures are actively unfolding.
            </p>
          </div>

          <div>
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-pulse/60 block mb-4">
              Directory
            </span>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Research', path: '/research' },
                { label: 'Projects', path: '/projects' },
                { label: 'Publications', path: '/publications' },
                { label: 'Blog', path: '/blog' },
                { label: 'CV / Resume', path: '/cv' },
                { label: 'Contact', path: '/contact' },
              ].map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-mono text-[12px] tracking-wide text-vellum hover:text-bone transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-pulse/60 block mb-4">
              Terminal
            </span>
            <div className="font-mono text-[12px] text-vellum space-y-1">
              <p>researcher@observatory:~$</p>
              <Link to="/contact" className="text-emerald-pulse/60 hover:text-emerald-pulse transition-colors block">
                → initiate_contact()
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-slate-core/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[11px] text-vellum/40">
            © {new Date().getFullYear()} Observatory of Emergent Logic
          </span>
          <div className="flex items-center gap-6">
            <Link to="/home" className="font-mono text-[11px] text-vellum/40 hover:text-vellum transition-colors">
            Home
            </Link>
            <Link to="/cv" className="font-mono text-[11px] text-vellum/40 hover:text-vellum transition-colors">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

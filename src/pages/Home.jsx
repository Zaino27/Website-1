import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LatticeScene from '@/components/LatticeScene';
import { ArrowRight } from 'lucide-react';

const sections = [
  { label: 'Research', path: '/research', desc: 'Active investigations in mathematics and computation' },
  { label: 'Projects', path: '/projects', desc: 'Experimental structures and working systems' },
  { label: 'Publications', path: '/publications', desc: 'Formal contributions to the archive' },
  { label: 'Blog', path: '/blog', desc: 'Notes from the working journal' },
  { label: 'Interests', path: '/interests', desc: 'Curiosities, references, and inspirations' },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-obsidian overflow-hidden">
      {/* Hero section with lattice */}
      <section className="relative h-screen flex items-center justify-center">
        <LatticeScene className="opacity-40" />

        <div className="relative z-10 px-6 md:px-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="font-heading text-bone/15 text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6 select-none">
              Observatory
            </h1>
            <div className="relative">
              <h2 className="font-heading text-bone text-2xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
                Where inquiry is happening
              </h2>
              <p className="text-vellum text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                A living research environment at the intersection of mathematics,
                computation, and scientific inquiry. Structure emerges from exploration.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/research"
              className="group flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] uppercase text-emerald-pulse border border-emerald-pulse/30 px-6 py-3 hover:bg-emerald-pulse/10 transition-all duration-300"
            >
              Enter the Laboratory
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/cv"
              className="font-mono text-[12px] tracking-[0.1em] uppercase text-vellum hover:text-bone px-6 py-3 transition-colors"
            >
              View Resume →
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-vellum/30">
            Explore
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-vellum/30 to-transparent" />
        </motion.div>
      </section>

      {/* Directory section */}
      <section className="relative py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-pulse/60">01</span>
            <div className="w-8 h-px bg-emerald-pulse/30" />
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-vellum">Directory</span>
          </div>

          <div className="space-y-0">
            {sections.map((section, i) => (
              <motion.div
                key={section.path}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <Link
                  to={section.path}
                  className="group flex items-center justify-between py-6 border-b border-slate-core/30 hover:border-emerald-pulse/30 transition-all duration-500"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-[11px] text-vellum/30 w-6">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-heading text-bone text-xl md:text-2xl group-hover:text-emerald-pulse transition-colors duration-300">
                      {section.label}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block font-mono text-[12px] text-vellum/50 max-w-xs text-right group-hover:text-vellum transition-colors">
                      {section.desc}
                    </span>
                    <ArrowRight className="w-4 h-4 text-vellum/30 group-hover:text-emerald-pulse group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research identity strip */}
      <section className="py-32 px-6 md:px-10 border-t border-slate-core/20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="font-heading text-bone text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                The intersection of structure and discovery
              </h3>
              <p className="text-vellum leading-relaxed">
                This observatory investigates the emergent properties of mathematical
                and computational systems — where formal logic meets the unexpected,
                and where the patterns within complex structures reveal deeper principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-4">
                {['Mathematical Foundations', 'Computational Theory', 'Emergent Systems', 'Formal Logic'].map((area, i) => (
                  <div key={area} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-emerald-pulse/40 rounded-full" />
                    <span className="font-mono text-[13px] tracking-wide text-bone/70">{area}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

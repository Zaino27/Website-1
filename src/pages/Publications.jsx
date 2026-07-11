import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionLabel from '@/components/SectionLabel';

const PUB_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%201600%20900%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%27g%27%20x1%3D%270%27%20y1%3D%270%27%20x2%3D%271%27%20y2%3D%271%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23111827%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23064e3b%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%27r%27%20cx%3D%2750%25%27%20cy%3D%2745%25%27%20r%3D%2760%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%2334d399%27%20stop-opacity%3D%270.35%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%2334d399%27%20stop-opacity%3D%270%27/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%271600%27%20height%3D%27900%27%20fill%3D%27url%28%23g%29%27/%3E%0A%20%20%3Crect%20width%3D%271600%27%20height%3D%27900%27%20fill%3D%27url%28%23r%29%27/%3E%0A%20%20%3Cg%20fill%3D%27none%27%20stroke%3D%27%23d1d5db%27%20stroke-opacity%3D%270.18%27%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20780%20C%20220%20720%2C%20420%20820%2C%20640%20760%20S%201060%20710%2C%201600%20790%27%20stroke-width%3D%273%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20640%20C%20220%20580%2C%20420%20680%2C%20640%20620%20S%201060%20570%2C%201600%20650%27%20stroke-width%3D%272%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20500%20C%20220%20440%2C%20420%20540%2C%20640%20480%20S%201060%20430%2C%201600%20510%27%20stroke-width%3D%272%27/%3E%0A%20%20%3C/g%3E%0A%20%20%3Cg%20fill%3D%27%23f5f5f4%27%20fill-opacity%3D%270.9%27%20font-family%3D%27Inter%2C%20Arial%2C%20sans-serif%27%3E%0A%20%20%20%20%3Ctext%20x%3D%2780%27%20y%3D%27130%27%20font-size%3D%2772%27%20font-weight%3D%27700%27%3EObservatory%3C/text%3E%0A%20%20%20%20%3Ctext%20x%3D%2780%27%20y%3D%27210%27%20font-size%3D%2728%27%20fill-opacity%3D%270.72%27%3EBase44-free%20placeholder%20image%3C/text%3E%0A%20%20%3C/g%3E%0A%3C/svg%3E";

const publications = [
  {
    title: 'On the Emergence of Logical Structure in Minimal Formal Systems',
    venue: 'Journal of Symbolic Logic',
    year: '2025',
    type: 'Journal',
    abstract: 'We characterize a class of formal systems in which higher-order logical principles emerge from first-order interaction rules, establishing threshold conditions for logical phase transitions.'
  },
  {
    title: 'Persistent Homology of Distributed Computation Traces',
    venue: 'Proceedings of POPL',
    year: '2024',
    type: 'Conference',
    abstract: 'This paper introduces topological methods for analyzing the shape of execution traces in distributed systems, revealing structural invariants invisible to traditional analysis.'
  },
  {
    title: 'Categorical Foundations for Effectful Programming',
    venue: 'Mathematical Structures in Computer Science',
    year: '2024',
    type: 'Journal',
    abstract: 'A comprehensive categorical framework for modeling computational effects using graded monads and enriched functor categories.'
  },
  {
    title: 'Algorithmic Discovery of Lattice Symmetries',
    venue: 'Journal of Algebra',
    year: '2023',
    type: 'Journal',
    abstract: 'We present efficient algorithms for detecting automorphism groups of finite lattices, with applications to combinatorial optimization and crystal structure analysis.'
  },
  {
    title: 'Type-Theoretic Universes as Stages of Logical Emergence',
    venue: 'Workshop on Types and Logic (TYPES)',
    year: '2023',
    type: 'Workshop',
    abstract: 'A proposal for interpreting the hierarchy of type-theoretic universes as a formal model of logical emergence, connecting dependent type theory with complexity-theoretic stratification.'
  }
];

export default function Publications() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-obsidian">
        <section className="pt-32 pb-16 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <SectionLabel label="Publications" index={5} />
            <h1 className="font-heading text-bone text-4xl md:text-6xl tracking-tight leading-tight mb-8">
              The Archive
            </h1>
            <p className="text-vellum text-lg leading-relaxed max-w-2xl">
              Formal contributions to the record. Each entry represents a point
              where investigation crystallized into communicable form.
            </p>
          </div>
        </section>

        {/* Visual */}
        <section className="px-6 md:px-10 pb-16">
          <div className="max-w-5xl mx-auto">
            <img
              src={PUB_IMG}
              alt="Heavy stock vellum paper with ink-bleed patterns and old library shadows"
              className="w-full h-32 md:h-48 object-cover opacity-30"
            />
          </div>
        </section>

        {/* Publications list */}
        <section className="py-8 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group border-b border-slate-core/20 py-10"
              >
                <div className="flex items-start gap-6">
                  <div className="hidden md:flex flex-col items-end w-20 shrink-0 pt-1">
                    <span className="font-mono text-[13px] text-vellum/40">{pub.year}</span>
                    <span className={`font-mono text-[10px] tracking-[0.1em] uppercase mt-1 ${
                      pub.type === 'Journal' ? 'text-emerald-pulse/50' :
                      pub.type === 'Conference' ? 'text-bone/40' : 'text-vellum/30'
                    }`}>
                      {pub.type}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-bone text-lg md:text-xl leading-tight mb-2 group-hover:text-emerald-pulse/70 transition-colors">
                      {pub.title}
                    </h3>
                    <span className="font-mono text-[12px] text-vellum/50 italic block mb-3">
                      {pub.venue}
                    </span>
                    <span className="font-mono text-[11px] text-vellum/30 block mb-3 md:hidden">
                      {pub.year} · {pub.type}
                    </span>
                    <p className="text-vellum/60 text-sm leading-relaxed max-w-2xl">
                      {pub.abstract}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

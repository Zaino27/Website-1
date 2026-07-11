import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionLabel from '@/components/SectionLabel';

const RESEARCH_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%201600%20900%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%27g%27%20x1%3D%270%27%20y1%3D%270%27%20x2%3D%271%27%20y2%3D%271%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23111827%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23064e3b%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%27r%27%20cx%3D%2750%25%27%20cy%3D%2745%25%27%20r%3D%2760%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%2334d399%27%20stop-opacity%3D%270.35%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%2334d399%27%20stop-opacity%3D%270%27/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%271600%27%20height%3D%27900%27%20fill%3D%27url%28%23g%29%27/%3E%0A%20%20%3Crect%20width%3D%271600%27%20height%3D%27900%27%20fill%3D%27url%28%23r%29%27/%3E%0A%20%20%3Cg%20fill%3D%27none%27%20stroke%3D%27%23d1d5db%27%20stroke-opacity%3D%270.18%27%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20780%20C%20220%20720%2C%20420%20820%2C%20640%20760%20S%201060%20710%2C%201600%20790%27%20stroke-width%3D%273%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20640%20C%20220%20580%2C%20420%20680%2C%20640%20620%20S%201060%20570%2C%201600%20650%27%20stroke-width%3D%272%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20500%20C%20220%20440%2C%20420%20540%2C%20640%20480%20S%201060%20430%2C%201600%20510%27%20stroke-width%3D%272%27/%3E%0A%20%20%3C/g%3E%0A%20%20%3Cg%20fill%3D%27%23f5f5f4%27%20fill-opacity%3D%270.9%27%20font-family%3D%27Inter%2C%20Arial%2C%20sans-serif%27%3E%0A%20%20%20%20%3Ctext%20x%3D%2780%27%20y%3D%27130%27%20font-size%3D%2772%27%20font-weight%3D%27700%27%3EObservatory%3C/text%3E%0A%20%20%20%20%3Ctext%20x%3D%2780%27%20y%3D%27210%27%20font-size%3D%2728%27%20fill-opacity%3D%270.72%27%3EBase44-free%20placeholder%20image%3C/text%3E%0A%20%20%3C/g%3E%0A%3C/svg%3E";

const researchAreas = [
  {
    id: 'emergent-logic',
    title: 'Emergent Logic in Formal Systems',
    status: 'Active',
    description: 'Investigating how higher-order logical structures arise from the interaction of simple formal rules. The focus is on identifying phase transitions in complexity within deductive systems.',
    tags: ['Logic', 'Complexity', 'Emergence']
  },
  {
    id: 'topological-computation',
    title: 'Topological Methods in Computation',
    status: 'Active',
    description: 'Applying persistent homology and sheaf-theoretic methods to analyze the shape of computational processes. This work connects algebraic topology with the theory of distributed systems.',
    tags: ['Topology', 'Computation', 'Algebra']
  },
  {
    id: 'categorical-semantics',
    title: 'Categorical Semantics of Programming Languages',
    status: 'Ongoing',
    description: 'Developing categorical models for type systems that capture side effects, concurrency, and resource usage. The goal is a unified framework for reasoning about program behavior.',
    tags: ['Category Theory', 'Type Theory', 'Semantics']
  },
  {
    id: 'algorithmic-algebra',
    title: 'Algorithmic Algebraic Geometry',
    status: 'Exploratory',
    description: 'Building computational tools for exploring algebraic varieties and their symmetries. This work straddles pure mathematics and software engineering.',
    tags: ['Algebra', 'Geometry', 'Algorithms']
  }
];

export default function Research() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-obsidian">
        <section className="pt-32 pb-16 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <SectionLabel label="Research" index={3} />
            <h1 className="font-heading text-bone text-4xl md:text-6xl tracking-tight leading-tight mb-8">
              The Laboratory
            </h1>
            <p className="text-vellum text-lg leading-relaxed max-w-2xl">
              Active investigations at the boundaries of mathematics, logic, and computation.
              Each thread represents an open question — a direction where structure is still
              being discovered.
            </p>
          </div>
        </section>

        {/* Research image */}
        <section className="px-6 md:px-10 pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <img
                src={RESEARCH_IMG}
                alt="Abstract obsidian crystalline lattice structure with emerald light traces"
                className="w-full h-48 md:h-72 object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Research areas */}
        <section className="py-16 px-6 md:px-10">
          <div className="max-w-5xl mx-auto space-y-1">
            {researchAreas.map((area, i) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group border-b border-slate-core/20 py-10 hover:border-emerald-pulse/20 transition-colors duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] text-vellum/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-heading text-bone text-xl md:text-2xl group-hover:text-emerald-pulse/80 transition-colors">
                      {area.title}
                    </h3>
                  </div>
                  <span className={`font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1 border w-fit ${
                    area.status === 'Active' ? 'text-emerald-pulse border-emerald-pulse/30' :
                    area.status === 'Ongoing' ? 'text-bone/60 border-bone/20' :
                    'text-vellum border-vellum/20'
                  }`}>
                    {area.status}
                  </span>
                </div>
                <p className="text-vellum text-sm leading-relaxed md:pl-12 max-w-2xl mb-4">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2 md:pl-12">
                  {area.tags.map(tag => (
                    <span key={tag} className="font-mono text-[10px] tracking-wide text-vellum/40 border border-slate-core/30 px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Open questions */}
        <section className="py-24 px-6 md:px-10 border-t border-slate-core/20">
          <div className="max-w-5xl mx-auto">
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-pulse/60 block mb-8">
              Open Questions
            </span>
            <div className="space-y-6">
              {[
                'Can topological invariants serve as meaningful measures of computational complexity?',
                'What are the categorical obstructions to composable distributed computation?',
                'Is there a natural correspondence between type-theoretic universes and stages of logical emergence?'
              ].map((question, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="text-emerald-pulse/40 font-mono text-sm mt-0.5">?</span>
                  <p className="font-heading text-bone/70 text-lg italic">{question}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionLabel from '@/components/SectionLabel';
import { ExternalLink } from 'lucide-react';

const PROJECTS_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%201600%20900%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%27g%27%20x1%3D%270%27%20y1%3D%270%27%20x2%3D%271%27%20y2%3D%271%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23111827%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23064e3b%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%27r%27%20cx%3D%2750%25%27%20cy%3D%2745%25%27%20r%3D%2760%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%2334d399%27%20stop-opacity%3D%270.35%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%2334d399%27%20stop-opacity%3D%270%27/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%271600%27%20height%3D%27900%27%20fill%3D%27url%28%23g%29%27/%3E%0A%20%20%3Crect%20width%3D%271600%27%20height%3D%27900%27%20fill%3D%27url%28%23r%29%27/%3E%0A%20%20%3Cg%20fill%3D%27none%27%20stroke%3D%27%23d1d5db%27%20stroke-opacity%3D%270.18%27%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20780%20C%20220%20720%2C%20420%20820%2C%20640%20760%20S%201060%20710%2C%201600%20790%27%20stroke-width%3D%273%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20640%20C%20220%20580%2C%20420%20680%2C%20640%20620%20S%201060%20570%2C%201600%20650%27%20stroke-width%3D%272%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20500%20C%20220%20440%2C%20420%20540%2C%20640%20480%20S%201060%20430%2C%201600%20510%27%20stroke-width%3D%272%27/%3E%0A%20%20%3C/g%3E%0A%20%20%3Cg%20fill%3D%27%23f5f5f4%27%20fill-opacity%3D%270.9%27%20font-family%3D%27Inter%2C%20Arial%2C%20sans-serif%27%3E%0A%20%20%20%20%3Ctext%20x%3D%2780%27%20y%3D%27130%27%20font-size%3D%2772%27%20font-weight%3D%27700%27%3EObservatory%3C/text%3E%0A%20%20%20%20%3Ctext%20x%3D%2780%27%20y%3D%27210%27%20font-size%3D%2728%27%20fill-opacity%3D%270.72%27%3EBase44-free%20placeholder%20image%3C/text%3E%0A%20%20%3C/g%3E%0A%3C/svg%3E";

const projects = [
  {
    title: 'Lattice Explorer',
    year: '2025',
    description: 'An interactive visualization tool for exploring algebraic lattice structures. Supports Hasse diagrams, sublattice detection, and real-time manipulation of order relations.',
    tech: ['TypeScript', 'WebGL', 'Category Theory'],
    status: 'Released'
  },
  {
    title: 'ProofEngine',
    year: '2024',
    description: 'A lightweight formal verification engine designed for rapid prototyping of mathematical proofs. Built on a dependent type foundation with automated lemma search.',
    tech: ['Rust', 'Type Theory', 'Formal Methods'],
    status: 'Active'
  },
  {
    title: 'TopoStream',
    year: '2024',
    description: 'Real-time persistent homology computation for streaming data. Applies topological data analysis to evolving point clouds with sub-millisecond update cycles.',
    tech: ['C++', 'TDA', 'Stream Processing'],
    status: 'Active'
  },
  {
    title: 'CatSem',
    year: '2023',
    description: 'A categorical semantics framework for modeling effectful computations. Provides functorial translations between programming language constructs and mathematical categories.',
    tech: ['Haskell', 'Category Theory', 'PLT'],
    status: 'Archived'
  }
];

export default function Projects() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-obsidian">
        <section className="pt-32 pb-16 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <SectionLabel label="Projects" index={4} />
            <h1 className="font-heading text-bone text-4xl md:text-6xl tracking-tight leading-tight mb-8">
              The Workbench
            </h1>
            <p className="text-vellum text-lg leading-relaxed max-w-2xl">
              Computational artifacts and experimental structures. Each project is
              a working system that embodies a theoretical idea — tools built to think with.
            </p>
          </div>
        </section>

        {/* Projects grid */}
        <section className="py-8 px-6 md:px-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group border border-slate-core/30 p-8 hover:border-emerald-pulse/20 transition-all duration-500 bg-slate-core/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-vellum/40 block mb-2">
                      {project.year}
                    </span>
                    <h3 className="font-heading text-bone text-xl group-hover:text-emerald-pulse/80 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <span className={`font-mono text-[10px] tracking-[0.1em] uppercase px-2 py-0.5 border ${
                    project.status === 'Active' ? 'text-emerald-pulse/70 border-emerald-pulse/20' :
                    project.status === 'Released' ? 'text-bone/50 border-bone/15' :
                    'text-vellum/40 border-vellum/15'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-vellum text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="font-mono text-[10px] tracking-wide text-emerald-pulse/40 bg-moss-shadow/30 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Visual */}
        <section className="py-24 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <img
                src={PROJECTS_IMG}
                alt="Crystalline geometric structure floating in void with luminous lattice connections"
                className="w-full h-48 md:h-64 object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-vellum/30">
                  Experimental Surfaces
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

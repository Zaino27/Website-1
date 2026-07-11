import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionLabel from '@/components/SectionLabel';

const ABOUT_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%201600%20900%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%27g%27%20x1%3D%270%27%20y1%3D%270%27%20x2%3D%271%27%20y2%3D%271%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23111827%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23064e3b%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%27r%27%20cx%3D%2750%25%27%20cy%3D%2745%25%27%20r%3D%2760%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%2334d399%27%20stop-opacity%3D%270.35%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%2334d399%27%20stop-opacity%3D%270%27/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%271600%27%20height%3D%27900%27%20fill%3D%27url%28%23g%29%27/%3E%0A%20%20%3Crect%20width%3D%271600%27%20height%3D%27900%27%20fill%3D%27url%28%23r%29%27/%3E%0A%20%20%3Cg%20fill%3D%27none%27%20stroke%3D%27%23d1d5db%27%20stroke-opacity%3D%270.18%27%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20780%20C%20220%20720%2C%20420%20820%2C%20640%20760%20S%201060%20710%2C%201600%20790%27%20stroke-width%3D%273%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20640%20C%20220%20580%2C%20420%20680%2C%20640%20620%20S%201060%20570%2C%201600%20650%27%20stroke-width%3D%272%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20500%20C%20220%20440%2C%20420%20540%2C%20640%20480%20S%201060%20430%2C%201600%20510%27%20stroke-width%3D%272%27/%3E%0A%20%20%3C/g%3E%0A%20%20%3Cg%20fill%3D%27%23f5f5f4%27%20fill-opacity%3D%270.9%27%20font-family%3D%27Inter%2C%20Arial%2C%20sans-serif%27%3E%0A%20%20%20%20%3Ctext%20x%3D%2780%27%20y%3D%27130%27%20font-size%3D%2772%27%20font-weight%3D%27700%27%3EObservatory%3C/text%3E%0A%20%20%20%20%3Ctext%20x%3D%2780%27%20y%3D%27210%27%20font-size%3D%2728%27%20fill-opacity%3D%270.72%27%3EBase44-free%20placeholder%20image%3C/text%3E%0A%20%20%3C/g%3E%0A%3C/svg%3E";

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-obsidian">
        {/* Header */}
        <section className="pt-32 pb-16 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <SectionLabel label="About" index={2} />
            <h1 className="font-heading text-bone text-4xl md:text-6xl tracking-tight leading-tight mb-8">
              A quiet studio of<br />sustained inquiry
            </h1>
            <p className="text-vellum text-lg leading-relaxed max-w-2xl">
              This is not a biography page. It is a reflection on the principles
              that guide the work — the conviction that understanding emerges
              through patient, rigorous exploration of fundamental structures.
            </p>
          </div>
        </section>

        {/* Image */}
        <section className="px-6 md:px-10 pb-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative overflow-hidden"
            >
              <img
                src={ABOUT_IMG}
                alt="Abstract architectural shadows on brutalist concrete surface with geometric light patterns"
                className="w-full h-64 md:h-96 object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 px-6 md:px-10 border-t border-slate-core/20">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: 'Foundations',
                text: 'The work begins at the foundational level — with the axioms, definitions, and structures that underpin mathematical and computational thinking. Clarity at the base propagates upward.'
              },
              {
                title: 'Methodology',
                text: 'Inquiry here follows a dual path: formal proof and computational experiment. Theory informs implementation; implementation reveals what theory has not yet captured.'
              },
              {
                title: 'Philosophy',
                text: 'Mathematics is not discovered or invented — it is cultivated. The researcher is a gardener of logical structures, tending to formal systems with patience and precision.'
              }
            ].map((block, i) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
              >
                <h3 className="font-heading text-bone text-xl mb-4">{block.title}</h3>
                <p className="text-vellum text-sm leading-relaxed">{block.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Background */}
        <section className="py-24 px-6 md:px-10 border-t border-slate-core/20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-pulse/60 block mb-6">
                  Background
                </span>
                <p className="text-vellum leading-relaxed mb-6">
                  Trained at the intersection of pure mathematics and computer science,
                  with a focus on algebraic structures, formal logic, and the theory of computation.
                  The work has spanned academic research, computational tool-building, and
                  the kind of open-ended inquiry that refuses easy categorization.
                </p>
                <p className="text-vellum leading-relaxed">
                  The driving question has always been the same: what are the minimal structures
                  from which complex, meaningful behavior can emerge?
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-pulse/60 block mb-2">
                  Core Disciplines
                </span>
                {['Abstract Algebra', 'Computational Complexity', 'Category Theory', 'Formal Verification', 'Type Theory', 'Topological Data Analysis'].map((discipline) => (
                  <div key={discipline} className="flex items-center gap-3 group">
                    <div className="w-1 h-1 bg-emerald-pulse/40 group-hover:bg-emerald-pulse transition-colors rounded-full" />
                    <span className="font-mono text-[13px] text-bone/60 group-hover:text-bone transition-colors">
                      {discipline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

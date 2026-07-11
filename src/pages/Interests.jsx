import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionLabel from '@/components/SectionLabel';
import { interests } from '@/data/interests';

const INTERESTS_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20viewBox%3D%270%200%201600%20900%27%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3ClinearGradient%20id%3D%27g%27%20x1%3D%270%27%20y1%3D%270%27%20x2%3D%271%27%20y2%3D%271%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%23111827%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%23064e3b%27/%3E%0A%20%20%20%20%3C/linearGradient%3E%0A%20%20%20%20%3CradialGradient%20id%3D%27r%27%20cx%3D%2750%25%27%20cy%3D%2745%25%27%20r%3D%2760%25%27%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%270%25%27%20stop-color%3D%27%2334d399%27%20stop-opacity%3D%270.35%27/%3E%0A%20%20%20%20%20%20%3Cstop%20offset%3D%27100%25%27%20stop-color%3D%27%2334d399%27%20stop-opacity%3D%270%27/%3E%0A%20%20%20%20%3C/radialGradient%3E%0A%20%20%3C/defs%3E%0A%20%20%3Crect%20width%3D%271600%27%20height%3D%27900%27%20fill%3D%27url%28%23g%29%27/%3E%0A%20%20%3Crect%20width%3D%271600%27%20height%3D%27900%27%20fill%3D%27url%28%23r%29%27/%3E%0A%20%20%3Cg%20fill%3D%27none%27%20stroke%3D%27%23d1d5db%27%20stroke-opacity%3D%270.18%27%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20780%20C%20220%20720%2C%20420%20820%2C%20640%20760%20S%201060%20710%2C%201600%20790%27%20stroke-width%3D%273%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20640%20C%20220%20580%2C%20420%20680%2C%20640%20620%20S%201060%20570%2C%201600%20650%27%20stroke-width%3D%272%27/%3E%0A%20%20%20%20%3Cpath%20d%3D%27M0%20500%20C%20220%20440%2C%20420%20540%2C%20640%20480%20S%201060%20430%2C%201600%20510%27%20stroke-width%3D%272%27/%3E%0A%20%20%3C/g%3E%0A%20%20%3Cg%20fill%3D%27%23f5f5f4%27%20fill-opacity%3D%270.9%27%20font-family%3D%27Inter%2C%20Arial%2C%20sans-serif%27%3E%0A%20%20%20%20%3Ctext%20x%3D%2780%27%20y%3D%27130%27%20font-size%3D%2772%27%20font-weight%3D%27700%27%3EObservatory%3C/text%3E%0A%20%20%20%20%3Ctext%20x%3D%2780%27%20y%3D%27210%27%20font-size%3D%2728%27%20fill-opacity%3D%270.72%27%3EBase44-free%20placeholder%20image%3C/text%3E%0A%20%20%3C/g%3E%0A%3C/svg%3E";

export default function Interests() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <PageTransition>
      <div className="min-h-screen bg-obsidian">
        <section className="pt-32 pb-16 px-6 md:px-10">
          <div className="max-w-5xl mx-auto">
            <SectionLabel label="Interests" index={9} />
            <h1 className="font-heading text-bone text-4xl md:text-5xl tracking-tight leading-tight mb-8">
              The Cabinet of Curiosities
            </h1>
            <p className="text-vellum text-base leading-relaxed max-w-xl">
              Ideas, references, and fascinations that orbit the main research but
              resist formal categorization. The personal gallery of an inquiring mind.
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 md:px-10 pb-16">
          <div className="max-w-5xl mx-auto relative overflow-hidden">
            <img
              src={INTERESTS_IMG}
              alt="Deep space star trails with circular light streaks and emerald traces"
              className="w-full h-48 md:h-72 object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-50 hover:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30 pointer-events-none" />
          </div>
        </section>

        {/* Interests grid */}
        <section className="py-8 px-6 md:px-10">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {interests.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1, duration: 0.6 }}
              >
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-emerald-pulse/40 block mb-6">
                  {group.category}
                </span>
                <div className="space-y-6">
                  {group.items.map((item) => (
                    <Link
                      to={`/interests/${item.slug}`}
                      key={item.title}
                      className="group block cursor-pointer"
                      onMouseEnter={() => setHoveredItem(item.title)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <h4 className={`font-heading text-lg transition-colors duration-300 ${
                        hoveredItem === item.title ? 'text-emerald-pulse/70' : 'text-bone/80'
                      }`}>
                        {item.title}
                      </h4>
                      <p className={`text-sm leading-relaxed mt-1 transition-colors duration-300 ${
                        hoveredItem === item.title ? 'text-vellum' : 'text-vellum/40'
                      }`}>
                        {item.note}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

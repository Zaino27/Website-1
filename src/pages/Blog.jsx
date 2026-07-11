import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionLabel from '@/components/SectionLabel';

const blogPosts = [
  {
    title: 'Notes on Computational Irreducibility',
    date: 'June 2026',
    excerpt: 'Why some computations cannot be shortcut, and what this means for the limits of prediction in formal systems. A meditation on Wolfram, Chaitin, and the boundaries of mathematical knowledge.',
    tag: 'Theory'
  },
  {
    title: 'The Geometry of Proofs',
    date: 'April 2026',
    excerpt: 'Exploring the spatial metaphors that guide proof construction. When we say a proof is "elegant," are we responding to a geometric property? Notes from an ongoing investigation into proof topology.',
    tag: 'Mathematics'
  },
  {
    title: 'Building Tools for Thinking',
    date: 'February 2026',
    excerpt: 'Reflections on the craft of computational tool-making. The best tools do not just solve problems — they reshape the way problems are perceived. On notation, representation, and cognitive augmentation.',
    tag: 'Practice'
  },
  {
    title: 'Emergence Without Mysticism',
    date: 'December 2025',
    excerpt: 'A defense of emergence as a precise, formal concept. Against the tendency to treat emergent phenomena as irreducibly mysterious — and toward a mathematical framework for their analysis.',
    tag: 'Philosophy'
  },
  {
    title: 'On Category Theory as a Language of Connection',
    date: 'October 2025',
    excerpt: 'Category theory is often described as "abstract nonsense." But its power lies precisely in its abstraction — it reveals the deep structural connections between apparently unrelated domains.',
    tag: 'Mathematics'
  }
];

export default function Blog() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-obsidian">
        <section className="pt-32 pb-16 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="Blog" index={6} />
            <h1 className="font-heading text-bone text-4xl md:text-5xl tracking-tight leading-tight mb-8">
              The Notebook
            </h1>
            <p className="text-vellum text-base leading-relaxed max-w-xl">
              Working notes, half-formed thoughts, and reflections from the edge of understanding.
              Not polished arguments — but the raw material of inquiry.
            </p>
          </div>
        </section>

        {/* Blog entries */}
        <section className="py-8 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group border-b border-slate-core/15 py-12 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-vellum/30">
                    {post.date}
                  </span>
                  <span className="w-1 h-1 bg-vellum/20 rounded-full" />
                  <span className="font-mono text-[10px] tracking-[0.1em] uppercase text-emerald-pulse/40">
                    {post.tag}
                  </span>
                </div>

                <h2 className="font-heading text-bone text-xl md:text-2xl leading-tight mb-4 group-hover:text-emerald-pulse/70 transition-colors duration-300">
                  {post.title}
                </h2>

                <p className="text-vellum/60 text-[15px] leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>

                <div className="mt-4 font-mono text-[11px] text-vellum/20 group-hover:text-emerald-pulse/40 transition-colors">
                  Read entry →
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

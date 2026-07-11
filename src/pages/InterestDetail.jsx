import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import { findInterestBySlug } from '@/data/interests';

export default function InterestDetail() {
  const { slug } = useParams();
  const item = findInterestBySlug(slug);

  if (!item) {
    return <Navigate to="/interests" replace />;
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-obsidian">
        <section className="pt-32 pb-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/interests"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-vellum/50 hover:text-emerald-pulse transition-colors mb-12"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Interests
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-emerald-pulse/40 block mb-4">
                {item.category}
              </span>
              <h1 className="font-heading text-bone text-3xl md:text-5xl tracking-tight leading-tight mb-8">
                {item.title}
              </h1>
              <p className="text-vellum/60 text-lg italic leading-relaxed mb-10">
                {item.note}
              </p>
              <div className="w-12 h-px bg-emerald-pulse/30 mb-10" />
              <p className="text-vellum text-base leading-relaxed max-w-2xl">
                {item.body}
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionLabel from '@/components/SectionLabel';
import { Download } from 'lucide-react';

const education = [
  { degree: 'Ph.D. in Mathematics', institution: 'Institute for Advanced Study', years: '2019 – 2023', focus: 'Algebraic structures and emergent logic in formal systems' },
  { degree: 'M.Sc. in Computer Science', institution: 'ETH Zürich', years: '2017 – 2019', focus: 'Category theory and programming language semantics' },
  { degree: 'B.Sc. in Mathematics', institution: 'University of Cambridge', years: '2014 – 2017', focus: 'Pure mathematics with emphasis on algebra and topology' },
];

const experience = [
  { role: 'Research Scientist', org: 'Observatory of Emergent Logic', years: '2023 – Present', desc: 'Leading independent research on topological computation and categorical semantics.' },
  { role: 'Visiting Researcher', org: 'Max Planck Institute for Mathematics', years: '2022 – 2023', desc: 'Collaborative research on algorithmic algebraic geometry.' },
  { role: 'Graduate Research Assistant', org: 'Institute for Advanced Study', years: '2019 – 2023', desc: 'Doctoral research on logical emergence in minimal formal systems.' },
];

const awards = [
  'Outstanding Doctoral Dissertation Award, 2023',
  'Best Paper Award, POPL 2024',
  'Graduate Research Fellowship, 2019 – 2023',
  'Departmental Prize in Pure Mathematics, Cambridge, 2017',
];

const skills = [
  'Proof Assistants (Lean, Coq, Agda)',
  'Rust, Haskell, OCaml, Python',
  'Topological Data Analysis',
  'WebGL / Three.js',
  'LaTeX, Technical Writing',
  'Formal Verification',
];

export default function CV() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-obsidian">
        <section className="pt-32 pb-16 px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <SectionLabel label="Curriculum Vitae" index={7} />
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <h1 className="font-heading text-bone text-4xl md:text-5xl tracking-tight leading-tight mb-2">
                  Resume
                </h1>
                <p className="text-vellum text-base">
                  A formal record of education, positions, and contributions.
                </p>
              </div>
              <button className="flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] uppercase text-emerald-pulse border border-emerald-pulse/30 px-5 py-2.5 hover:bg-emerald-pulse/10 transition-all w-fit">
                <Download className="w-3.5 h-3.5" />
                Download PDF
              </button>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-12 px-6 md:px-10 border-t border-slate-core/20">
          <div className="max-w-4xl mx-auto">
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-pulse/60 block mb-8">
              Education
            </span>
            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8"
                >
                  <span className="font-mono text-[12px] text-vellum/40">{edu.years}</span>
                  <div>
                    <h3 className="font-heading text-bone text-lg">{edu.degree}</h3>
                    <p className="font-mono text-[13px] text-vellum/50 mb-1">{edu.institution}</p>
                    <p className="text-vellum/40 text-sm">{edu.focus}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-12 px-6 md:px-10 border-t border-slate-core/20">
          <div className="max-w-4xl mx-auto">
            <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-pulse/60 block mb-8">
              Experience
            </span>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8"
                >
                  <span className="font-mono text-[12px] text-vellum/40">{exp.years}</span>
                  <div>
                    <h3 className="font-heading text-bone text-lg">{exp.role}</h3>
                    <p className="font-mono text-[13px] text-vellum/50 mb-1">{exp.org}</p>
                    <p className="text-vellum/40 text-sm">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Skills */}
        <section className="py-12 px-6 md:px-10 border-t border-slate-core/20">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-pulse/60 block mb-8">
                Awards & Honors
              </span>
              <div className="space-y-3">
                {awards.map(award => (
                  <div key={award} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-emerald-pulse/30 rounded-full mt-2 shrink-0" />
                    <span className="text-vellum text-sm">{award}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-emerald-pulse/60 block mb-8">
                Technical Skills
              </span>
              <div className="space-y-3">
                {skills.map(skill => (
                  <div key={skill} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-emerald-pulse/30 rounded-full mt-2 shrink-0" />
                    <span className="font-mono text-[13px] text-bone/60">{skill}</span>
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

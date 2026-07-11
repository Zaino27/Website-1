import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SectionLabel from '@/components/SectionLabel';
import { Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-obsidian">
        <section className="pt-32 pb-16 px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <SectionLabel label="Contact" index={8} />
            <h1 className="font-heading text-bone text-4xl md:text-5xl tracking-tight leading-tight mb-8">
              Open Channel
            </h1>
            <p className="text-vellum text-base leading-relaxed max-w-xl">
              For collaboration inquiries, research discussions, or academic correspondence.
              This is a direct line to the researcher's desk.
            </p>
          </div>
        </section>

        <section className="py-8 px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            {/* Terminal-style header */}
            <div className="font-mono text-[12px] text-vellum/30 mb-8 space-y-1">
              <p>researcher@observatory:~$ initiate_contact()</p>
              <p className="text-emerald-pulse/40">→ channel open. awaiting transmission.</p>
            </div>

            {sent ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border border-emerald-pulse/20 p-12 text-center"
              >
                <div className="font-mono text-[12px] text-emerald-pulse/60 mb-4 space-y-1">
                  <p>→ transmission received</p>
                  <p>→ processing...</p>
                  <p>→ response queued</p>
                </div>
                <p className="text-bone text-lg font-heading mt-6">
                  Message received. A response will follow.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-vellum/50 block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b border-slate-core/40 py-3 text-bone text-sm focus:outline-none focus:border-emerald-pulse/40 transition-colors placeholder:text-vellum/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-vellum/50 block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-transparent border-b border-slate-core/40 py-3 text-bone text-sm focus:outline-none focus:border-emerald-pulse/40 transition-colors placeholder:text-vellum/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-vellum/50 block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-transparent border-b border-slate-core/40 py-3 text-bone text-sm focus:outline-none focus:border-emerald-pulse/40 transition-colors placeholder:text-vellum/20"
                    placeholder="Research inquiry, collaboration, or other"
                  />
                </div>

                <div>
                  <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-vellum/50 block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-slate-core/30 p-4 text-bone text-sm focus:outline-none focus:border-emerald-pulse/30 transition-colors placeholder:text-vellum/20 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 font-mono text-[12px] tracking-[0.1em] uppercase text-emerald-pulse border border-emerald-pulse/30 px-6 py-3 hover:bg-emerald-pulse/10 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  Transmit
                </button>
              </form>
            )}

            {/* Contact info */}
            <div className="mt-20 pt-12 border-t border-slate-core/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-emerald-pulse/40 block mb-2">Email</span>
                  <span className="font-mono text-[13px] text-bone/60">researcher@observatory.edu</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-emerald-pulse/40 block mb-2">Location</span>
                  <span className="font-mono text-[13px] text-bone/60">The Institute</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-emerald-pulse/40 block mb-2">Office Hours</span>
                  <span className="font-mono text-[13px] text-bone/60">By appointment</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const metrics = [
  { value: "2,00,000+", label: "automated interactions" },
  { value: "30–70%", label: "cost savings for clients" },
  { value: "40%", label: "increase in repeat orders" },
  { value: "24×7", label: "uninterrupted operations" },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#020617] via-black to-[#020617]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-4">Social Proof</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Results That Speak for Themselves</h2>
        </motion.div>

        {/* Social Proof Image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl shadow-cyan-900/30"
        >
          <div className="relative aspect-[16/9] w-full bg-slate-900/60">
            <Image
              src="/Social Proof — Human + Tech blended.jpg"
              alt="Social Proof — Human + Tech blended"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-cyan-400/20 bg-black/40 py-10 px-4 shadow-[0_0_35px_rgba(56,189,248,0.25)]"
            >
              <p className="text-3xl font-bold text-white mb-2">{metric.value}</p>
              <p className="text-slate-300 text-sm uppercase tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PhoneCall, MessageCircle } from "lucide-react";

const workflows = [
  {
    id: "callflow",
    title: "CallFlow AI",
    icon: <PhoneCall className="w-5 h-5 text-cyan-300" />,
    steps: [
      "Upload customer data or connect CRM",
      "Configure call purpose",
      "AI makes/receives calls automatically",
      "Dashboard shows call logs, success rate & insights",
    ],
  },
  {
    id: "orderflow",
    title: "OrderFlow",
    icon: <MessageCircle className="w-5 h-5 text-sky-300" />,
    steps: [
      "Customer messages on WhatsApp",
      "AI chatbot handles menu → customization → payment",
      "Order appears in dashboard",
      "Restaurant uses customer data for retention",
    ],
  },
];

export function HowGrowifyAIWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#020617] to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-4">Simple & Clear</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How GrowifyAI Works</h2>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
            Configure once, then let our AI agents handle every interaction end-to-end.
          </p>
        </motion.div>

        {/* Data flow process visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl shadow-cyan-900/30"
        >
          <div className="relative aspect-[16/9] w-full bg-slate-900/60">
            <Image
              src="/data-flow-process.jpg"
              alt="Data flow process: Data Collection, AI Processing, Insight Generation, and Real-World Impact"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-cyan-500/20 bg-black/40 p-8 shadow-[0_0_40px_rgba(56,189,248,0.2)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                  {workflow.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white">{workflow.title}</h3>
              </div>
              <div className="space-y-4">
                {workflow.steps.map((step, idx) => (
                  <div key={step} className="flex gap-4 items-start">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-400/40 text-sm text-cyan-200">
                      {idx + 1}
                    </span>
                    <p className="text-slate-200 text-sm md:text-base">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


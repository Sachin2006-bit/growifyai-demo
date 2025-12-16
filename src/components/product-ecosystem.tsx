"use client";

import Image from "next/image";
import { PhoneCall, Workflow, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import {
  MorphingCardStack,
  type CardData,
} from "@/components/morphing-card-stack";

const productCards: CardData[] = [
  {
    id: "callflow",
    title: "CallFlow AI",
    description:
      "Autonomous AI calling for inbound & outbound customer conversations.",
    icon: <PhoneCall className="w-6 h-6" />,
    color: "rgba(15,23,42,0.95)",
  },
  {
    id: "orderflow",
    title: "OrderFlow",
    description:
      "WhatsApp ordering that gives restaurants direct D2C orders and data ownership.",
    icon: <Workflow className="w-6 h-6" />,
    color: "rgba(8,47,73,0.95)",
  },
  {
    id: "dashboard",
    title: "Automation Dashboard",
    description:
      "One control center to track calls, orders, workflows & performance.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    color: "rgba(15,23,42,0.98)",
  },
];

export function ProductEcosystem() {
  return (
    <section id="automation-ecosystem" className="py-24 bg-gradient-to-b from-[#020617] via-black to-[#020617]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-4">
            What We Build
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Automation Ecosystem
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
            A powerful suite of AI systems that plug into your business and
            quietly replace manual work.
          </p>
        </motion.div>

        {/* Automation ecosystem visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-10 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-2xl shadow-purple-900/30"
        >
          <div className="relative aspect-[16/9] w-full bg-slate-900/60">
            <Image
              src="/automation-ecosystem.jpg"
              alt="Automation ecosystem showing CallFlow AI, OrderFlow, and Dashboard"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />
          </div>
        </motion.div>

        {/* Animated Morphing Card Stack directly under heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <MorphingCardStack cards={productCards} />
        </motion.div>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Clock, Database, Globe2 } from "lucide-react";
import { Timeline, type TimelineEntry } from "@/components/timeline";

const reasons: TimelineEntry[] = [
  {
    title: "Operational Costs Reduced by 75%",
    content: (
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="flex-1 space-y-2">
          <div className="inline-flex items-center gap-2 text-cyan-300 text-sm font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Profit-first automation</span>
          </div>
          <p className="text-slate-200 text-sm md:text-base">
            AI agents take over repetitive workflows like calling, order-taking, and customer
            handling so your team focuses only on high-value work.
          </p>
        </div>
        {/* Visualization slot */}
        <div className="relative h-64 md:h-80 w-full md:w-80 rounded-xl border border-cyan-500/30 bg-slate-900/60 overflow-hidden">
          <Image
            src={encodeURI("/Operational Costs Reduced by 75%.jpg")}
            alt="Operational Costs Reduced by 75%"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    ),
  },
  {
    title: "10× Efficiency & Productivity",
    content: (
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="flex-1 space-y-2">
          <div className="inline-flex items-center gap-2 text-cyan-300 text-sm font-semibold">
            <Zap className="w-4 h-4" />
            <span>Scale without extra headcount</span>
          </div>
          <p className="text-slate-200 text-sm md:text-base">
            Run thousands of calls and chats in parallel without hiring more staff, keeping SLAs
            predictable even on peak days.
          </p>
        </div>
        <div className="relative h-64 md:h-80 w-full md:w-80 rounded-xl border border-cyan-500/30 bg-slate-900/60 overflow-hidden">
          <Image
            src="/10× Efficiency & Productivity.jpg"
            alt="10× Efficiency & Productivity"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    ),
  },
  {
    title: "24/7 Autonomous Operations",
    content: (
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="flex-1 space-y-2">
          <div className="inline-flex items-center gap-2 text-cyan-300 text-sm font-semibold">
            <Clock className="w-4 h-4" />
            <span>Your business never sleeps</span>
          </div>
          <p className="text-slate-200 text-sm md:text-base">
            Calls, orders, reminders, and follow-ups continue around the clock so you capture
            every opportunity, even outside working hours.
          </p>
        </div>
        <div className="relative h-64 md:h-80 w-full md:w-80 rounded-xl border border-cyan-500/30 bg-slate-900/60 overflow-hidden">
          <Image
            src="/_247 Autonomous Operations.jpg"
            alt="24/7 Autonomous Operations"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    ),
  },
  {
    title: "Full Customer Data Ownership",
    content: (
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="flex-1 space-y-2">
          <div className="inline-flex items-center gap-2 text-cyan-300 text-sm font-semibold">
            <Database className="w-4 h-4" />
            <span>Own the relationship</span>
          </div>
          <p className="text-slate-200 text-sm md:text-base">
            GrowifyAI keeps data inside your stack so you build a compounding customer asset, not
            someone else&apos;s marketplace.
          </p>
        </div>
        <div className="relative h-64 md:h-80 w-full md:w-80 rounded-xl border border-cyan-500/30 bg-slate-900/60 overflow-hidden">
          <Image
            src="/Full Customer Data Ownership.jpg"
            alt="Full Customer Data Ownership"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    ),
  },
  {
    title: "Built for Bharat, Scalable to the World",
    content: (
      <div className="flex flex-col md:flex-row gap-4 items-start">
        <div className="flex-1 space-y-2">
          <div className="inline-flex items-center gap-2 text-cyan-300 text-sm font-semibold">
            <Globe2 className="w-4 h-4" />
            <span>Local-first, global-ready</span>
          </div>
          <p className="text-slate-200 text-sm md:text-base">
            Designed around Indian SME workflows, languages, and channels, with an architecture
            that scales across regions.
          </p>
        </div>
        <div className="relative h-64 md:h-80 w-full md:w-80 rounded-xl border border-cyan-500/30 bg-slate-900/60 overflow-hidden">
          <Image
            src="/Built for Bharat, Scalable to the World.jpg"
            alt="Built for Bharat, Scalable to the World"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    ),
  },
];

export function WhyGrowifyAI() {
  return (
    <section className="py-24 bg-[#020617]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-4">Investor Appeal</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Businesses Choose GrowifyAI</h2>
          <p className="text-base md:text-lg text-slate-300">
            Because true automation should create profit, not complexity.
          </p>
        </motion.div>

        <Timeline
          data={reasons}
          className="mt-8"
          lineColorFrom="from-cyan-500"
          lineColorVia="via-blue-500"
        />
      </div>
    </section>
  );
}


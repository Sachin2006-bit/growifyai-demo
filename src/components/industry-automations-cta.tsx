"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function IndustryAutomationsCTA() {
  return (
    <section
      id="industry-automations"
      className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-6">
            <div className="w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse mr-3"></div>
            <span className="text-sm text-white font-medium">
              Industry Automations
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            INDUSTRY AUTOMATIONS FOR BHARATH
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Unlock hyper-scalable automations — AI-driven calling, WhatsApp
            workflows, and high-ROI business automations to grow revenue and
            reduce operational cost.
          </p>

          <motion.a
            href="#automation-ecosystem"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("automation-ecosystem")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#00E5FF]/70 to-[#0080FF]/70 hover:from-[#0080FF]/80 hover:to-[#00E5FF]/80 rounded-full text-lg font-semibold text-white transition-all duration-300 opacity-90"
          >
            <span>Explore Automations</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


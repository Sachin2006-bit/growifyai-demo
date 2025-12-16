"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { WaitingListModal } from "@/components/waiting-list-modal";

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-black to-[#020617]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-cyan-400/30 bg-black/60 p-10 shadow-[0_0_45px_rgba(56,189,248,0.35)]"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
          <p className="text-base md:text-lg text-slate-300 mb-8">
            Let our AI run the operations so you can focus on growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 text-base rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 shadow-[0_10px_30px_rgba(56,189,248,0.35)]"
            >
              Book Live Demo
            </Button>
            <Button
              variant="ghost"
              onClick={() =>
                document.getElementById("automation-ecosystem")?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 text-base rounded-full border border-cyan-400/60 text-cyan-100 hover:bg-cyan-500/10"
            >
              Explore Automations
            </Button>
          </div>
        </motion.div>
      </div>
      <WaitingListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}


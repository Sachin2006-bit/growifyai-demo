"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WaitingListModal } from "@/components/waiting-list-modal";

const plans = [
  {
    name: "Starter",
    description: "For new businesses",
    price: "Pay as you go",
    features: ["AI calling up to 1,000 interactions", "WhatsApp ordering basics", "Email support"],
  },
  {
    name: "Growth",
    description: "For scaling operations",
    price: "Custom bundle",
    features: ["Unlimited AI workflows", "Advanced dashboards & insights", "Dedicated success manager"],
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Custom automation workflows",
    price: "Talk to us",
    features: ["Bespoke automations", "White-glove onboarding", "24/7 priority support"],
  },
];

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="pricing" className="py-24 bg-[#020617]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple & Transparent Pricing</h2>
            <p className="text-base md:text-lg text-slate-300">
              Pay only for what you use. Perfect for growing businesses.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-3xl border ${
                  plan.highlight ? "border-cyan-400/60 bg-black/70 shadow-[0_0_45px_rgba(56,189,248,0.35)]" : "border-white/10 bg-black/40"
                } p-8 text-left`}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400 mb-3">{plan.description}</p>
                <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                <p className="text-xl text-cyan-300 mb-6">{plan.price}</p>
                <ul className="space-y-3 text-slate-300 text-sm md:text-base mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full rounded-full border border-cyan-400/50 py-3 text-white hover:bg-cyan-500/20 transition-colors"
                >
                  {plan.name === "Enterprise" ? "Talk to Sales" : "Start Now"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WaitingListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}


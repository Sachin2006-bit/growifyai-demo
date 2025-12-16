"use client";

import { motion } from "framer-motion";

const useCases = [
  { icon: "🍽️", title: "Restaurants & Cafés", description: "Direct ordering, campaigns, repeat customers." },
  { icon: "🧑‍⚕️", title: "Hospitals & Clinics", description: "Appointment reminders, patient follow-ups, inbound queries." },
  { icon: "🏦", title: "Fintech & Banks", description: "KYC workflows, payment reminders, loan follow-ups, support calls." },
  { icon: "🧑‍💼", title: "Real Estate & Agencies", description: "Lead qualification, callback automation." },
  { icon: "🏫", title: "Education & Training", description: "Payment dues, parent updates, inquiry management." },
  { icon: "🛍️", title: "Local Businesses", description: "Support calls, product info, return handling." },
];

export function IndustryUseCases() {
  return (
    <section className="py-24 bg-[#020617]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-4">Use Cases</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Built for Every Industry</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {useCases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl border border-cyan-400/20 bg-black/30 p-6 backdrop-blur-lg"
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300 text-sm md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


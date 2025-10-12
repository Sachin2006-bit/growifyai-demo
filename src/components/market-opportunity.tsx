"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, BarChart3 } from "lucide-react";

export function MarketOpportunity() {
  const marketData = [
    {
      category: "Conversational AI Market (India)",
      current: 0.8,
      projected: 2.5,
      cagr: 25.8,
      color: "from-[#00E5FF] to-[#0080FF]"
    },
    {
      category: "Contact Center Software",
      current: 1.2,
      projected: 3.8,
      cagr: 26.1,
      color: "from-[#0080FF] to-[#8000FF]"
    },
    {
      category: "Voice Outsourcing Market",
      current: 2.1,
      projected: 6.2,
      cagr: 24.2,
      color: "from-[#8000FF] to-[#FF0080]"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300E5FF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-[#00E5FF] mr-2" />
            <span className="text-sm text-white font-medium">Market Opportunity</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            A{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              $35 Billion
            </span>{" "}
            Problem, A{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#0080FF] bg-clip-text text-transparent">
              $1.85 Billion
            </span>{" "}
            Opportunity
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            70% of business calls in India go unanswered or poorly handled. 
            An industry ripe for disruption — and we're leading it.
          </p>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-black rounded-3xl p-8 mb-16 border border-red-500/20"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">70%</h3>
              <p className="text-gray-400">of business calls go unanswered</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">₹20-30</h3>
              <p className="text-gray-400">per call in traditional centers</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">$35B</h3>
              <p className="text-gray-400">contact center market size</p>
            </div>
          </div>
        </motion.div>

        {/* Market Growth Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {marketData.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="glass-black rounded-2xl p-6 border border-white/10 hover:border-[#00E5FF]/50 transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{item.category}</h3>
              
              {/* Animated Bar Chart */}
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-400">
                  <span>2023</span>
                  <span>2028</span>
                </div>
                
                <div className="relative h-8 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.current / 6.2) * 100}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white">
                      ${item.current}B
                    </span>
                  </div>
                </div>
                
                <div className="relative h-8 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.projected / 6.2) * 100}%` }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full opacity-80`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-semibold text-white">
                      ${item.projected}B
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="text-2xl font-bold text-[#00E5FF]">{item.cagr}%</div>
                <div className="text-sm text-gray-400">CAGR</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 glass rounded-full">
            <div className="w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse mr-3"></div>
            <span className="text-white font-medium">Leading the disruption in India's AI market</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

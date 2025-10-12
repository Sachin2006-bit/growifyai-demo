"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Globe, DollarSign, Zap, CheckCircle, XCircle } from "lucide-react";

export function USPDifferentiators() {
  const features = [
    {
      icon: Globe,
      title: "Multilingual Mastery",
      description: "Supports 50+ Indian languages → pan-India reach",
      color: "from-[#00E5FF] to-[#0080FF]"
    },
    {
      icon: Brain,
      title: "Emotion-Aware AI",
      description: "Detects anger, stress, or confusion → empathetic responses",
      color: "from-[#0080FF] to-[#8000FF]"
    },
    {
      icon: DollarSign,
      title: "Cost-Efficiency",
      description: "Operates at 1/10th the cost of traditional call centers",
      color: "from-[#8000FF] to-[#FF0080]"
    },
    {
      icon: Zap,
      title: "Sector-Agnostic Scalability",
      description: "Works for banks, hospitals, SMEs → universal adoption",
      color: "from-[#FF0080] to-[#FF8000]"
    }
  ];

  const comparisonData = [
    {
      feature: "Voice Quality",
      growifyai: "Crystal Clear AI",
      traditional: "Human Variability",
      growifyaiScore: 95,
      traditionalScore: 70
    },
    {
      feature: "Emotion Awareness",
      growifyai: "Real-time Detection",
      traditional: "Limited Training",
      growifyaiScore: 90,
      traditionalScore: 40
    },
    {
      feature: "Languages",
      growifyai: "50+ Languages",
      traditional: "2-3 Languages",
      growifyaiScore: 100,
      traditionalScore: 20
    },
    {
      feature: "Cost per Call",
      growifyai: "₹2-5",
      traditional: "₹20-30",
      growifyaiScore: 100,
      traditionalScore: 10
    },
    {
      feature: "CRM Integration",
      growifyai: "Seamless API",
      traditional: "Manual Entry",
      growifyaiScore: 95,
      traditionalScore: 30
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
            <Brain className="w-4 h-4 text-[#00E5FF] mr-2" />
            <span className="text-sm text-white font-medium">Where We Stand Out</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#0080FF] bg-clip-text text-transparent">
              Indian Markets
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            While others struggle with language barriers and high costs, 
            we've built the perfect solution for India's diverse business landscape.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-black rounded-2xl p-6 border border-white/10 hover:border-[#00E5FF]/50 transition-all group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass-black rounded-3xl p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">GrowifyAI vs Traditional Call Centers</h3>
            <p className="text-gray-400">See why businesses are switching to AI-powered solutions</p>
          </div>

          <div className="space-y-6">
            {comparisonData.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-12 gap-4 items-center"
              >
                <div className="col-span-3">
                  <span className="text-white font-medium">{item.feature}</span>
                </div>
                
                <div className="col-span-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white">{item.growifyai}</span>
                  </div>
                  <div className="mt-2 relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.growifyaiScore}%` }}
                      transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-[#00E5FF] to-[#0080FF] rounded-full"
                    />
                  </div>
                </div>
                
                <div className="col-span-4">
                  <div className="flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-gray-400">{item.traditional}</span>
                  </div>
                  <div className="mt-2 relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.traditionalScore}%` }}
                      transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                    />
                  </div>
                </div>
                
                <div className="col-span-1 text-center">
                  <span className="text-lg font-bold text-[#00E5FF]">
                    {Math.round((item.growifyaiScore / item.traditionalScore) * 10) / 10}x
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
            className="mt-8 grid md:grid-cols-3 gap-6 text-center"
          >
            <div className="glass rounded-2xl p-4">
              <div className="text-2xl font-bold text-[#00E5FF] mb-1">90%</div>
              <div className="text-sm text-gray-400">Cost Reduction</div>
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="text-2xl font-bold text-[#00E5FF] mb-1">24/7</div>
              <div className="text-sm text-gray-400">Availability</div>
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="text-2xl font-bold text-[#00E5FF] mb-1">50+</div>
              <div className="text-sm text-gray-400">Languages</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

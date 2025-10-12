"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Target, ArrowRight } from "lucide-react";

export function GrowthBusinessModel() {
  const revenueStreams = [
    {
      title: "Subscription SaaS",
      price: "₹15k–₹50k/month",
      description: "Monthly recurring revenue for SMEs",
      icon: DollarSign,
      color: "from-[#00E5FF] to-[#0080FF]"
    },
    {
      title: "Pay-per-Use",
      price: "₹2–₹5 per call",
      description: "Flexible pricing for variable usage",
      icon: Target,
      color: "from-[#0080FF] to-[#8000FF]"
    },
    {
      title: "Premium Add-ons",
      price: "₹5k–₹15k/month",
      description: "CRM, custom voice, analytics",
      icon: TrendingUp,
      color: "from-[#8000FF] to-[#FF0080]"
    },
    {
      title: "Enterprise Licensing",
      price: "₹1L–₹5L/month",
      description: "Custom solutions for large clients",
      icon: Users,
      color: "from-[#FF0080] to-[#FF8000]"
    }
  ];

  const growthMilestones = [
    {
      year: "Year 1",
      clients: 100,
      revenue: 2,
      color: "from-[#00E5FF] to-[#0080FF]"
    },
    {
      year: "Year 2", 
      clients: 1000,
      revenue: 25,
      color: "from-[#0080FF] to-[#8000FF]"
    },
    {
      year: "Year 3",
      clients: 10000,
      revenue: 250,
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
            <span className="text-sm text-white font-medium">Scalable Revenue Engine</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built to{" "}
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#0080FF] bg-clip-text text-transparent">
              Scale Fast
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multiple revenue streams designed for rapid growth and sustainable profitability 
            in India's expanding AI market.
          </p>
        </motion.div>

        {/* Revenue Streams */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Revenue Streams</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-black rounded-2xl p-6 border border-white/10 hover:border-[#00E5FF]/50 transition-all group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${stream.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stream.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{stream.title}</h4>
                <div className="text-xl font-bold text-[#00E5FF] mb-2">{stream.price}</div>
                <p className="text-gray-400 text-sm">{stream.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growth Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass-black rounded-3xl p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">3-Year Growth Roadmap</h3>
            <p className="text-gray-400">From startup to market leader in India's AI space</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {growthMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white font-bold text-lg">{milestone.year}</span>
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-4">{milestone.year}</h4>
                
                {/* Animated Numbers */}
                <div className="space-y-4">
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                      viewport={{ once: true }}
                      className="text-3xl font-bold text-[#00E5FF] mb-1"
                    >
                      {milestone.clients.toLocaleString()}
                    </motion.div>
                    <div className="text-gray-400">Clients</div>
                  </div>
                  
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                      viewport={{ once: true }}
                      className="text-3xl font-bold text-[#0080FF] mb-1"
                    >
                      ₹{milestone.revenue} Cr
                    </motion.div>
                    <div className="text-gray-400">Revenue</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${((index + 1) / 3) * 100}%` }}
                      transition={{ duration: 1, delay: 1.4 + index * 0.2 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${milestone.color} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Growth Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-400">100 Clients</div>
              <ArrowRight className="w-6 h-6 text-[#00E5FF]" />
              <div className="text-sm text-gray-400">1,000 Clients</div>
              <ArrowRight className="w-6 h-6 text-[#0080FF]" />
              <div className="text-sm text-gray-400">10,000 Clients</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-6 text-center"
        >
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-bold text-[#00E5FF] mb-2">₹2 Cr</div>
            <div className="text-sm text-gray-400">Year 1 Revenue Target</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-bold text-[#0080FF] mb-2">₹25 Cr</div>
            <div className="text-sm text-gray-400">Year 2 Revenue Target</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-bold text-[#8000FF] mb-2">₹250 Cr</div>
            <div className="text-sm text-gray-400">Year 3 Revenue Target</div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-3xl font-bold text-[#FF0080] mb-2">125x</div>
            <div className="text-sm text-gray-400">Growth Multiplier</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

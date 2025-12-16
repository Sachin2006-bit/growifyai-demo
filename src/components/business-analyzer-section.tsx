"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Brain, BarChart3, Target, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import BusinessAnalyzerModal from "@/components/business-analyzer-modal";

export function BusinessAnalyzerSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-4 bg-black border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-6">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-sm text-white font-medium">
                  AI Business Analyzer
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get AI-Powered Business Analysis
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Analyze 7 key business metrics and receive a comprehensive, AI-generated action plan with prioritized recommendations.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">
                    Instant analysis of revenue, retention, CAC, working capital, inventory, efficiency, and productivity metrics.
                  </p>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">
                    Personalized action plans with immediate, medium-term, and long-term recommendations tailored to your business goals.
                  </p>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">
                    Projected ROI and quantified impact estimates to prioritize high-value initiatives.
                  </p>
                </li>
              </ul>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-6 text-lg"
              >
                <Brain className="w-5 h-5 mr-2" />
                Analyze My Business
              </Button>
            </div>

            {/* Right - Visual/Stats */}
            <div className="relative">
              {/* Glass Card with Metrics */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass rounded-2xl p-8 border border-purple-500/20"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 text-purple-400 mr-2" />
                  Key Metrics Analyzed
                </h3>

                <div className="space-y-4">
                  {/* Metric Cards */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Monthly Revenue</p>
                        <p className="text-lg font-semibold text-white">Analyzed</p>
                      </div>
                      <BarChart3 className="w-8 h-8 text-purple-400" />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Customer Metrics</p>
                        <p className="text-lg font-semibold text-white">Retention & CAC</p>
                      </div>
                      <Target className="w-8 h-8 text-purple-400" />
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">Operational Efficiency</p>
                        <p className="text-lg font-semibold text-white">Optimization Plans</p>
                      </div>
                      <Sparkles className="w-8 h-8 text-purple-400" />
                    </div>
                  </motion.div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                  <p className="text-sm text-purple-200">
                    <strong className="text-white">Powered by Gemini AI</strong>
                    <br />
                    Get instant, comprehensive business insights tailored to your specific goals.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Analyzer Modal */}
      <BusinessAnalyzerModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={(response) => {
          console.log("Analysis completed:", response);
        }}
      />
    </>
  );
}


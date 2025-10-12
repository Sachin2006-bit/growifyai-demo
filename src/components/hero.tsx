"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SplineScene, Spotlight } from "@/components/ui/spline-scene";
import { AICallDemo } from "@/components/ai-call-demo";
import { Play, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300E5FF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Content - Minimal & Premium */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 glass rounded-full mb-8"
              >
                <div className="w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse mr-3"></div>
                <span className="text-sm text-white font-medium">AI-Powered Voice Agents</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
              >
                Conversations, Not Calls —{" "}
                <span className="bg-gradient-to-r from-[#00E5FF] to-[#0080FF] bg-clip-text text-transparent">
                  GrowifyAI
                </span>
              </motion.h1>

              {/* Minimal Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl"
              >
                Multilingual, emotion-aware voice agents that qualify leads & schedule visits — at{" "}
                <span className="text-[#00E5FF] font-semibold">1/10th the cost</span>.
              </motion.p>

              {/* Single CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex justify-center lg:justify-start"
              >
                <Button 
                  size="lg" 
                  onClick={() => setIsDemoOpen(true)}
                  className="neon-glow-lg text-lg px-8 py-4 bg-gradient-to-r from-[#00E5FF] to-[#0080FF] hover:from-[#0080FF] hover:to-[#00E5FF] transition-all duration-300"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Test AI Agent Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Spline 3D Scene */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-[600px] glass-black rounded-3xl overflow-hidden">
                {/* Spotlight Effect */}
                <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="rgba(0, 229, 255, 0.1)"
                />
                
                {/* Spline 3D Scene */}
                <div className="relative z-10 w-full h-full">
                  <SplineScene 
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                  />
                </div>
                
                {/* Premium Overlay Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Floating Status */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-6 right-6 px-4 py-2 glass rounded-full flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white font-medium">Live Demo Ready</span>
                  </motion.div>
                  
                  {/* Bottom Gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Call Demo Modal */}
      {isDemoOpen && (
        <AICallDemo onClose={() => setIsDemoOpen(false)} />
      )}
    </>
  );
}
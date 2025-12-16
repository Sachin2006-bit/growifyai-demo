"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { SplineScene, Spotlight } from "@/components/ui/spline-scene";
import { ArrowRight, User, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import { WaitingListModal } from "@/components/waiting-list-modal";

export function Hero() {
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* User Profile Header */}
        {session && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-6 right-6 z-20"
          >
            <div className="flex items-center space-x-4 glass rounded-full px-4 py-2">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-[#00E5FF]" />
                <span className="text-sm text-white font-medium">
                  {session.user?.name}
                </span>
              </div>
              <Button
                onClick={() => signOut()}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}

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
            {/* Left Content - Redesigned Hero Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="w-full max-w-3xl mx-auto lg:mx-0 rounded-3xl p-6 md:p-10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_rgba(2,6,23,0.95))] border border-cyan-400/30 shadow-[0_0_45px_rgba(56,189,248,0.25)]">
                <div className="flex flex-col space-y-4">
                  {/* Pill Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="inline-flex items-center w-fit rounded-full border border-cyan-300/40 bg-black/40 px-4 py-1.5 text-xs font-medium text-slate-100"
                  >
                    <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]"></span>
                    Industry Automations
                  </motion.div>

                  {/* Brand Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <span className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-tight bg-gradient-to-r from-cyan-100 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                      GrowifyAI
                    </span>
                  </motion.div>

                  {/* Headline */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl md:text-3xl font-bold text-white leading-snug"
                  >
                    Automation That Powers the Future of Indian Businesses
                  </motion.h2>

                  {/* Sub-headline */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-base md:text-lg font-medium text-slate-300"
                  >
                    CallFlow AI • OrderFlow • Smart Industry Workflows
                  </motion.p>

                  {/* Value Paragraph */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-sm md:text-base text-slate-400 max-w-xl"
                  >
                    Transform operations, cut costs by up to 75%, and unlock 10× profitability using
                    next-generation AI automations built for Bharat.
                  </motion.p>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="pt-2 flex flex-col sm:flex-row gap-3 w-full"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto text-sm md:text-base font-semibold px-8 py-4 rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:shadow-[0_15px_45px_rgba(56,189,248,0.55)] hover:scale-[1.01] transition-transform duration-200"
                      onClick={() =>
                        document.getElementById("automation-ecosystem")?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Explore Automations
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="ghost"
                      onClick={() => setIsModalOpen(true)}
                      className="w-full sm:w-auto text-sm md:text-base font-semibold px-8 py-4 rounded-full border border-cyan-300/60 text-cyan-100 bg-transparent hover:bg-cyan-500/10 hover:border-cyan-200/80 transition-all duration-200"
                    >
                      Book Live Demo
                    </Button>
                  </motion.div>
                </div>
              </div>
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
      <WaitingListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
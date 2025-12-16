"use client";

import React from "react";
import { signIn, getSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Chrome, ArrowRight, Shield, Zap } from "lucide-react";

export default function SignIn() {
  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300E5FF' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#00E5FF] opacity-10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#0080FF] opacity-10 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-md mx-auto">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00E5FF] to-[#0080FF] rounded-2xl mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              GrowifyAI
            </h1>
            <p className="text-gray-400 text-lg">
              AI-Powered Voice Agents
            </p>
          </motion.div>

          {/* Sign In Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-black rounded-3xl p-8 border border-white/10"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-400">
                Sign in to access the AI Call Agent Demo
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-gray-300">
                <Shield className="w-5 h-5 text-[#00E5FF]" />
                <span className="text-sm">Secure authentication</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Zap className="w-5 h-5 text-[#00E5FF]" />
                <span className="text-sm">Instant access to demos</span>
              </div>
            </div>

            {/* Google Sign In Button */}
            <Button
              onClick={handleGoogleSignIn}
              size="lg"
              className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-4 rounded-xl transition-all duration-300 group"
            >
              <Chrome className="w-5 h-5 mr-3" />
              Continue with Google
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500">
                By signing in, you agree to our terms of service and privacy policy
              </p>
            </div>
          </motion.div>

          {/* Demo Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 text-sm mb-4">
              What you'll get access to:
            </p>
            <div className="flex justify-center space-x-6 text-xs text-gray-500">
              <span>🎯 Lead Qualification Demo</span>
              <span>📅 Appointment Booking Demo</span>
              <span>🤖 AI Voice Agents</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}





















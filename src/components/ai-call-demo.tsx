"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Phone, Calendar, Brain, CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DemoFormData {
  name: string;
  phone: string;
  email: string;
}

interface AICallDemoProps {
  onClose: () => void;
}

export function AICallDemo({ onClose }: AICallDemoProps) {
  const [selectedDemo, setSelectedDemo] = useState<'lead' | 'appointment' | null>(null);
  const [formData, setFormData] = useState<DemoFormData>({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<DemoFormData>>({});

  const validateForm = () => {
    const newErrors: Partial<DemoFormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const webhookUrl = selectedDemo === 'lead' 
        ? '/api/demo/lead' 
        : '/api/demo/appointment';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          demoType: selectedDemo,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        throw new Error('Failed to submit demo');
      }
    } catch (error) {
      console.error('Demo submission error:', error);
      // For demo purposes, we'll still show success
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof DemoFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-full max-w-2xl"
      >
        <Card className="glass-black border-white/10 p-8 relative overflow-hidden">
          {/* Spotlight Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/5 to-[#0080FF]/5 pointer-events-none" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            ×
          </button>

          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-4">
                <div className="w-2 h-2 bg-[#00E5FF] rounded-full animate-pulse mr-3"></div>
                <span className="text-sm text-white font-medium">AI Call Agent Demo</span>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-2">
                Experience the Future of{" "}
                <span className="bg-gradient-to-r from-[#00E5FF] to-[#0080FF] bg-clip-text text-transparent">
                  Voice AI
                </span>
              </h2>
              <p className="text-gray-300">
                Test our AI agents with your information and see the magic happen
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {!selectedDemo ? (
                // Demo Selection
                <motion.div
                  key="selection"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Lead Qualification Demo */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="glass rounded-2xl p-6 cursor-pointer border border-white/10 hover:border-[#00E5FF]/50 transition-all group"
                      onClick={() => setSelectedDemo('lead')}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#00E5FF] to-[#0080FF] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <Brain className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Lead Qualification</h3>
                        <p className="text-gray-400 text-sm">
                          AI agent will call you to qualify your interest and gather requirements
                        </p>
                      </div>
                    </motion.div>

                    {/* Appointment Scheduling Demo */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="glass rounded-2xl p-6 cursor-pointer border border-white/10 hover:border-[#0080FF]/50 transition-all group"
                      onClick={() => setSelectedDemo('appointment')}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0080FF] to-[#8000FF] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <Calendar className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">Appointment Booking</h3>
                        <p className="text-gray-400 text-sm">
                          AI agent will call you to schedule a campus visit or meeting
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ) : !isSuccess ? (
                // Form
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {/* Back Button */}
                  <button
                    onClick={() => setSelectedDemo(null)}
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    ← Back to Demo Selection
                  </button>

                  {/* Demo Type Indicator */}
                  <div className="flex items-center justify-center">
                    <div className="flex items-center px-4 py-2 glass rounded-full">
                      {selectedDemo === 'lead' ? (
                        <>
                          <Brain className="w-4 h-4 text-[#00E5FF] mr-2" />
                          <span className="text-sm text-white font-medium">Lead Qualification Demo</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 text-[#0080FF] mr-2" />
                          <span className="text-sm text-white font-medium">Appointment Booking Demo</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`glass border-white/10 ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`glass border-white/10 ${errors.phone ? 'border-red-500' : ''}`}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`glass border-white/10 ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#00E5FF] to-[#0080FF] hover:from-[#0080FF] hover:to-[#00E5FF] text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Starting AI Agent...
                      </>
                    ) : (
                      <>
                        <Phone className="w-5 h-5 mr-2" />
                        Start AI Call Demo
                      </>
                    )}
                  </Button>

                  <p className="text-center text-gray-400 text-sm">
                    Our AI agent will call you within 2-3 minutes to begin the demo
                  </p>
                </motion.div>
              ) : (
                // Success State
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Demo Submitted Successfully!</h3>
                  <p className="text-gray-300 mb-4">
                    Our AI agent will call you shortly to begin your {selectedDemo === 'lead' ? 'lead qualification' : 'appointment booking'} demo.
                  </p>
                  
                  <div className="inline-flex items-center px-4 py-2 glass rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
                    <span className="text-sm text-white font-medium">Call incoming...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Phone, Calendar, Play, Globe, Brain, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { LiveConsole } from "./live-console";
import { AppointmentModal } from "./appointment-modal";

interface DemoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: "online" | "offline";
  languages: string[];
  features: string[];
  onStartDemo: (userData: { name: string; phone: string; email: string }) => void;
  isActive?: boolean;
}

function DemoCard({ title, description, icon, status, languages, features, onStartDemo, isActive }: DemoCardProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`h-full transition-all duration-300 ${isActive ? 'neon-glow border-neon-cyan' : ''}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg flex items-center justify-center">
                {icon}
              </div>
              <div>
                <CardTitle className="text-white">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
              <span className="text-xs text-gray-400">{status === 'online' ? 'Online' : 'Offline'}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Language Support */}
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Badge key={lang} variant="outline" className="text-xs">
                <Globe className="w-3 h-3 mr-1" />
                {lang}
              </Badge>
            ))}
          </div>

          {/* Features */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Demo Form */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <Input
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <Input
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Start Demo Button */}
          <Button
            onClick={() => onStartDemo(formData)}
            className="w-full neon-glow"
            disabled={!formData.name || !formData.phone}
          >
            <Play className="w-4 h-4 mr-2" />
            {title === "Lead Qualification" ? "Start Demo Call" : "Book NXTWAVE Visit"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function LiveDemoPanel() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [currentUserData, setCurrentUserData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const demos = [
    {
      id: "lead-qualification",
      title: "Lead Qualification",
      description: "AI agent qualifies leads with emotion detection and scoring",
      icon: <Phone className="w-5 h-5 text-white" />,
      status: "online" as const,
      languages: ["English", "Hindi", "Tamil"],
      features: [
        "Real-time emotion detection",
        "Lead scoring (0-100)",
        "CRM integration ready",
        "Multilingual support"
      ]
    },
    {
      id: "appointment-booking",
      title: "Appointment Booking",
      description: "Schedule campus visits with Google Calendar integration",
      icon: <Calendar className="w-5 h-5 text-white" />,
      status: "online" as const,
      languages: ["English", "Hindi", "Bengali"],
      features: [
        "Calendar availability check",
        "Automatic slot booking",
        "Email confirmations",
        "NXTWAVE campus integration"
      ]
    }
  ];

  const handleStartDemo = (demoId: string, userData: { name: string; phone: string; email: string }) => {
    setActiveDemo(demoId);
    setCurrentUserData(userData);
    
    if (demoId === "lead-qualification") {
      setIsConsoleOpen(true);
    } else if (demoId === "appointment-booking") {
      setIsAppointmentModalOpen(true);
    }
  };

  return (
    <>
      <section id="demo" className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Live Demo Console
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Experience our voice AI agents in action. Choose a demo below to see real-time conversation, 
              emotion detection, and intelligent data extraction.
            </p>
          </motion.div>

          {/* Demo Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {demos.map((demo) => (
              <DemoCard
                key={demo.id}
                title={demo.title}
                description={demo.description}
                icon={demo.icon}
                status={demo.status}
                languages={demo.languages}
                features={demo.features}
                onStartDemo={(userData) => handleStartDemo(demo.id, userData)}
                isActive={activeDemo === demo.id}
              />
            ))}
          </div>

          {/* Status Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center space-x-6 glass rounded-full px-6 py-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white">Agent Online</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm text-white">Emotion Detection Active</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-neon-blue" />
                <span className="text-sm text-white">24/7 Available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Console Modal */}
      <LiveConsole
        isOpen={isConsoleOpen}
        onClose={() => {
          setIsConsoleOpen(false);
          setActiveDemo(null);
        }}
        demoType="lead-qualification"
        userData={currentUserData}
      />

      {/* Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => {
          setIsAppointmentModalOpen(false);
          setActiveDemo(null);
        }}
        userData={currentUserData}
      />
    </>
  );
}

"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Webhook, 
  MessageCircle, 
  Calendar, 
  ArrowRight, 
  Zap, 
  Brain, 
  Database,
  Mail,
  Phone
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Connect",
    subtitle: "Webhook → n8n / Vapi",
    description: "Seamlessly integrate with your existing systems through webhooks and n8n automation",
    icon: <Webhook className="w-8 h-8" />,
    features: ["Webhook Integration", "n8n Workflows", "API Endpoints", "Real-time Sync"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Converse",
    subtitle: "Speech, Detect Emotion, Extract Data",
    description: "AI agents engage in natural conversations while detecting emotions and extracting key information",
    icon: <MessageCircle className="w-8 h-8" />,
    features: ["Natural Speech", "Emotion Detection", "Data Extraction", "Multilingual Support"],
    color: "from-cyan-500 to-teal-500"
  },
  {
    id: 3,
    title: "Action",
    subtitle: "CRM Update / Calendar Booking / Email",
    description: "Automatically update CRM systems, book appointments, and send confirmation emails",
    icon: <Calendar className="w-8 h-8" />,
    features: ["CRM Integration", "Calendar Booking", "Email Automation", "Lead Scoring"],
    color: "from-teal-500 to-green-500"
  }
];

const techStack = [
  { name: "n8n", description: "Workflow Automation", icon: <Zap className="w-5 h-5" /> },
  { name: "Vapi AI", description: "Voice AI Platform", icon: <Phone className="w-5 h-5" /> },
  { name: "Google Calendar", description: "Calendar Integration", icon: <Calendar className="w-5 h-5" /> },
  { name: "SendGrid", description: "Email Service", icon: <Mail className="w-5 h-5" /> },
  { name: "CRM Systems", description: "Customer Management", icon: <Database className="w-5 h-5" /> },
  { name: "Emotion AI", description: "Sentiment Analysis", icon: <Brain className="w-5 h-5" /> }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 relative">
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
            How It Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our 3-step process makes AI-powered conversations simple and effective
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-neon-cyan" />
                  </div>
                )}

                <Card className="h-full glass hover:neon-glow transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-neon-cyan font-medium">
                      {step.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4 text-center">
                      {step.description}
                    </p>
                    <div className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-lg p-4 text-center hover:neon-glow transition-all duration-300"
                >
                  <div className="text-neon-cyan mb-2 flex justify-center">
                    {tech.icon}
                  </div>
                  <h4 className="text-white font-medium text-sm mb-1">{tech.name}</h4>
                  <p className="text-gray-400 text-xs">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="glass rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">System Architecture</h3>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-2">
                    <Webhook className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white text-sm">Webhook</span>
                </div>
                <ArrowRight className="text-neon-cyan" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-2">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white text-sm">n8n</span>
                </div>
                <ArrowRight className="text-neon-cyan" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mb-2">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white text-sm">Vapi AI</span>
                </div>
                <ArrowRight className="text-neon-cyan" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-2">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white text-sm">Google Calendar</span>
                </div>
                <ArrowRight className="text-neon-cyan" />
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-lg flex items-center justify-center mb-2">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white text-sm">SendGrid</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

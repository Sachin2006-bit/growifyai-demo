"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Building2, 
  GraduationCap, 
  Heart, 
  Truck, 
  TrendingUp, 
  DollarSign,
  Users,
  Clock,
  Globe,
  Zap
} from "lucide-react";

const useCases = [
  {
    id: "banking",
    title: "Banking & Finance",
    icon: <Building2 className="w-8 h-8" />,
    description: "Automate customer onboarding, loan applications, and support calls",
    features: [
      "KYC verification calls",
      "Loan application processing",
      "Credit card activation",
      "Account balance inquiries"
    ],
    metrics: {
      costSavings: "85%",
      callVolume: "10,000+",
      languages: "12",
      avgCallTime: "3.2 min"
    },
    color: "from-blue-500 to-cyan-500",
    roi: "340%"
  },
  {
    id: "education",
    title: "Education (NXTWAVE)",
    icon: <GraduationCap className="w-8 h-8" />,
    description: "Streamline admissions, campus visits, and student support",
    features: [
      "Campus visit scheduling",
      "Admission inquiries",
      "Course information",
      "Student support calls"
    ],
    metrics: {
      costSavings: "90%",
      callVolume: "5,000+",
      languages: "8",
      avgCallTime: "4.1 min"
    },
    color: "from-purple-500 to-pink-500",
    roi: "420%"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: <Heart className="w-8 h-8" />,
    description: "Automate appointment booking, patient follow-ups, and support",
    features: [
      "Appointment scheduling",
      "Prescription reminders",
      "Lab result notifications",
      "Insurance verification"
    ],
    metrics: {
      costSavings: "75%",
      callVolume: "15,000+",
      languages: "10",
      avgCallTime: "2.8 min"
    },
    color: "from-red-500 to-orange-500",
    roi: "280%"
  },
  {
    id: "logistics",
    title: "Logistics & E-commerce",
    icon: <Truck className="w-8 h-8" />,
    description: "Handle delivery updates, customer service, and order tracking",
    features: [
      "Delivery scheduling",
      "Order tracking calls",
      "Customer complaints",
      "Return processing"
    ],
    metrics: {
      costSavings: "80%",
      callVolume: "25,000+",
      languages: "15",
      avgCallTime: "2.5 min"
    },
    color: "from-green-500 to-emerald-500",
    roi: "380%"
  },
  {
    id: "sme",
    title: "SMEs & Startups",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "Affordable AI-powered customer service for growing businesses",
    features: [
      "Lead qualification",
      "Customer support",
      "Sales follow-ups",
      "Feedback collection"
    ],
    metrics: {
      costSavings: "95%",
      callVolume: "1,000+",
      languages: "6",
      avgCallTime: "3.5 min"
    },
    color: "from-yellow-500 to-orange-500",
    roi: "520%"
  }
];

const benefits = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Cost Reduction",
    description: "Up to 95% reduction in call center costs",
    value: "₹50-200 per call vs ₹500-1000 traditional"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 Availability",
    description: "Never miss a customer call again",
    value: "100% uptime with instant response"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multilingual Support",
    description: "Serve customers in their preferred language",
    value: "50+ languages supported"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Scalable Operations",
    description: "Handle unlimited concurrent calls",
    value: "No infrastructure limitations"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Instant Deployment",
    description: "Get started in minutes, not months",
    value: "Live in 24 hours"
  }
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-20 relative">
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
            Use Cases & Sectors
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transform your industry with AI-powered voice agents. See how different sectors 
            are achieving massive cost savings and improved customer experience.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass hover:neon-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-lg flex items-center justify-center`}>
                      <div className="text-white">
                        {useCase.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-white">{useCase.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        ROI: {useCase.roi}
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-gray-300">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {useCase.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-lg font-bold text-neon-cyan">{useCase.metrics.costSavings}</div>
                        <div className="text-xs text-gray-400">Cost Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-neon-cyan">{useCase.metrics.callVolume}</div>
                        <div className="text-xs text-gray-400">Calls/Month</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-neon-cyan">{useCase.metrics.languages}</div>
                        <div className="text-xs text-gray-400">Languages</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-neon-cyan">{useCase.metrics.avgCallTime}</div>
                        <div className="text-xs text-gray-400">Avg Duration</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Why Choose GrowifyAI?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-lg p-6 text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-neon-cyan mb-3 flex justify-center">
                  {benefit.icon}
                </div>
                <h4 className="text-white font-medium mb-2">{benefit.title}</h4>
                <p className="text-gray-300 text-sm mb-3">{benefit.description}</p>
                <div className="text-neon-cyan text-sm font-medium">{benefit.value}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Calculate Your Savings</h3>
          <p className="text-gray-300 mb-6">
            See how much you can save with GrowifyAI voice agents
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan mb-2">₹500</div>
              <div className="text-gray-300 text-sm">Traditional Call Cost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan mb-2">₹50</div>
              <div className="text-gray-300 text-sm">GrowifyAI Cost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300 text-sm">Savings</div>
            </div>
          </div>
          <div className="mt-6">
            <Badge variant="success" className="text-lg px-6 py-2">
              <TrendingUp className="w-5 h-5 mr-2" />
              Average ROI: 400%
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

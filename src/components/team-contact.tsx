"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Users, 
  Mail, 
  Phone, 
  MessageSquare, 
  Send,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Clock,
  CheckCircle
} from "lucide-react";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "CEO & Co-Founder",
    image: "/api/placeholder/150/150",
    bio: "Former Google AI researcher with 10+ years in conversational AI",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen"
  },
  {
    name: "Sarah Johnson",
    role: "CTO & Co-Founder", 
    image: "/api/placeholder/150/150",
    bio: "Ex-Microsoft engineer specializing in voice AI and NLP",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    github: "https://github.com/sarahjohnson"
  },
  {
    name: "Raj Patel",
    role: "Head of Product",
    image: "/api/placeholder/150/150",
    bio: "Product leader with experience scaling SaaS platforms",
    linkedin: "https://linkedin.com/in/rajpatel",
    twitter: "https://twitter.com/rajpatel"
  },
  {
    name: "Maria Garcia",
    role: "Head of Engineering",
    image: "/api/placeholder/150/150",
    bio: "Full-stack engineer with expertise in real-time systems",
    linkedin: "https://linkedin.com/in/mariagarcia",
    github: "https://github.com/mariagarcia"
  }
];

const contactMethods = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    description: "Get in touch for sales inquiries",
    contact: "hello@growifyai.com",
    action: "Send Email"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    description: "Speak with our sales team",
    contact: "+91 98765 43210",
    action: "Schedule Call"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Live Chat",
    description: "Chat with our support team",
    contact: "Available 24/7",
    action: "Start Chat"
  }
];

export function TeamAndContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interest: "demo"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        interest: "demo"
      });
    }, 3001);
  };

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            The minds behind GrowifyAI - AI experts, engineers, and entrepreneurs 
            passionate about revolutionizing customer communication.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass hover:neon-glow transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-1">{member.name}</h3>
                    <p className="text-neon-cyan text-sm mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      {member.linkedin && (
                        <a href={member.linkedin} className="text-gray-400 hover:text-neon-cyan transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} className="text-gray-400 hover:text-neon-cyan transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} className="text-gray-400 hover:text-neon-cyan transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Ready to transform your customer communication? Let&apos;s discuss how 
            GrowifyAI can help your business scale efficiently.
          </p>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass hover:neon-glow transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-neon-cyan mb-3 flex justify-center">
                      {method.icon}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{method.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{method.description}</p>
                    <p className="text-neon-cyan text-sm font-medium mb-3">{method.contact}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card className="glass">
            <CardHeader className="text-center">
              <CardTitle className="text-white">Request a Demo</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    We&apos;ve received your request and will contact you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">Email Address *</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">Company</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-300 mb-2 block">Phone Number</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXXXXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">Interest</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20"
                    >
                      <option value="demo">Request Demo</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="integration">Integration Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm text-gray-300 mb-2 block">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full neon-glow">
                    <Send className="w-4 h-4 mr-2" />
                    Send Request
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5 text-neon-cyan" />
                <span className="text-white">Bangalore, India</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5 text-neon-cyan" />
                <span className="text-white">24/7 Support Available</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Github className="w-5 h-5 text-neon-cyan" />
                <a href="https://github.com/growifyai" className="text-white hover:text-neon-cyan transition-colors">
                  Open Source
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

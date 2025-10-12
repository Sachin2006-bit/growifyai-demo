"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  ExternalLink,
  Shield,
  FileText,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "API Documentation", href: "#api" },
    { label: "Integrations", href: "#integrations" }
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#blog" }
  ],
  support: [
    { label: "Help Center", href: "#help" },
    { label: "Contact Support", href: "#support" },
    { label: "Status Page", href: "#status" },
    { label: "Community", href: "#community" }
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "GDPR", href: "#gdpr" }
  ]
};

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/growifyai", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/growifyai", label: "LinkedIn" },
  { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/growifyai", label: "Twitter" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">GrowifyAI</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transform your customer communication with AI-powered voice agents. 
                Scale efficiently, reduce costs, and deliver exceptional experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-semibold mb-4 capitalize">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 mb-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Customer Communication?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join hundreds of companies already using GrowifyAI to reduce costs 
            and improve customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-glow-lg">
              <Phone className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© 2024 GrowifyAI. All rights reserved.</span>
              <div className="flex items-center space-x-4">
                <a href="#privacy" className="hover:text-neon-cyan transition-colors flex items-center space-x-1">
                  <Shield className="w-4 h-4" />
                  <span>Privacy</span>
                </a>
                <a href="#terms" className="hover:text-neon-cyan transition-colors flex items-center space-x-1">
                  <FileText className="w-4 h-4" />
                  <span>Terms</span>
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="text-xs">
                <Heart className="w-3 h-3 mr-1 text-red-400" />
                Made with love in India
              </Badge>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>Powered by</span>
                <a 
                  href="https://github.com/growifyai" 
                  className="text-neon-cyan hover:text-neon-blue transition-colors flex items-center space-x-1"
                >
                  <Github className="w-4 h-4" />
                  <span>Open Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

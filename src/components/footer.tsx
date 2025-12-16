"use client";

import React, { useState } from "react";
import { Github, Linkedin, Twitter, X, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const footerLinks = {
  products: [
    { label: "CallFlow AI", href: "#callflow" },
    { label: "OrderFlow", href: "#orderflow" },
    { label: "Dashboard", href: "#dashboard" },
  ],
  industries: [
    { label: "Restaurants & Cafés", href: "#restaurants" },
    { label: "Healthcare", href: "#healthcare" },
    { label: "Real Estate", href: "#real-estate" },
    { label: "Education", href: "#education" },
  ],
  company: [
    { label: "Contact", href: "#contact", isContact: true },
  ],
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Terms", href: "#terms" },
  ],
};

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: "https://github.com/growifyai", label: "GitHub" },
  { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/growifyai", label: "LinkedIn" },
  { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/growifyai", label: "Twitter" },
];

export function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { label: string; href: string; isContact?: boolean }) => {
    if (link.isContact) {
      e.preventDefault();
      setIsContactModalOpen(true);
    }
  };

  return (
    <>
      <footer className="border-t border-white/5 bg-black/40 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <p className="text-2xl font-bold text-white mb-4">GrowifyAI</p>
              <p className="text-slate-300 mb-6">
                Automation infrastructure for Indian businesses. Run AI-powered calling, ordering,
                workflows, and dashboards from one futuristic platform.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} aria-label={social.label} className="text-slate-400 hover:text-cyan-300">
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-3">
              {Object.entries(footerLinks).map(([category, links], idx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <p className="text-white font-semibold mb-4 capitalize">{category}</p>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          onClick={(e) => handleContactClick(e, link)}
                          className="text-slate-400 text-sm hover:text-cyan-300 transition-colors cursor-pointer"
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

          <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-sm text-slate-500 gap-4">
            <span>© {new Date().getFullYear()} GrowifyAI. All rights reserved.</span>
            <span>Made for Bharat · Built with ambition.</span>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="relative w-full max-w-md bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-cyan-400/30 p-8 shadow-[0_0_60px_rgba(56,189,248,0.4)]">
                {/* Glowing effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 blur-xl opacity-50 -z-10" />
                
                {/* Close button */}
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Title */}
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Contact Us
                </h2>

                {/* Contact Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 border border-cyan-400/20">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Email</p>
                      <a
                        href="mailto:growifyai2006@gmail.com"
                        className="text-white hover:text-cyan-300 transition-colors break-all"
                      >
                        growifyai2006@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 border border-cyan-400/20">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 mb-1">Phone</p>
                      <a
                        href="tel:+919100982321"
                        className="text-white hover:text-cyan-300 transition-colors"
                      >
                        +91 9100982321
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

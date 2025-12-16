"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageSquare, X, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  
  const twilioNumber = "+1 415 523 8886";
  const joinCode = "join stairs-swing";
  const whatsappUrl = `https://wa.me/14155238886?text=${encodeURIComponent(joinCode)}`;

  const handleCopy = (text: string, itemName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(itemName);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <Card className="glass border-white/10 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              Connect to WhatsApp Sandbox
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300">
              To begin testing, connect to Twilio sandbox by sending a WhatsApp
              message from your device to the Twilio number.
            </p>

            {/* QR Code Image */}
            <div className="bg-white/5 rounded-lg p-4">
              <img
                src="/twilio-sandbox-qr.png"
                alt="Twilio WhatsApp Sandbox"
                className="w-full rounded-lg"
              />
              <p className="text-center text-sm text-gray-400 mt-2">
                Twilio WhatsApp Sandbox
              </p>
            </div>

            {/* Twilio Number */}
            <div className="bg-white/5 rounded-lg p-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Twilio Number
              </label>
              <div className="flex items-center justify-between">
                <code className="text-white font-mono text-lg">{twilioNumber}</code>
                <button
                  onClick={() => handleCopy(twilioNumber, "number")}
                  className="flex items-center space-x-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors"
                >
                  {copiedItem === "number" ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Join Code */}
            <div className="bg-white/5 rounded-lg p-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Join Code
              </label>
              <div className="flex items-center justify-between">
                <code className="text-white font-mono">{joinCode}</code>
                <button
                  onClick={() => handleCopy(joinCode, "code")}
                  className="flex items-center space-x-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors"
                >
                  {copiedItem === "code" ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Open WhatsApp Button */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] py-3">
                <MessageSquare className="w-5 h-5 mr-2" />
                Open WhatsApp
              </Button>
            </a>

            <Button
              onClick={onClose}
              variant="ghost"
              className="w-full border border-white/10 hover:bg-white/10"
            >
              Close
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}

export function WhatsAppAutomationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-6">
                <MessageSquare className="w-5 h-5 text-[#25D366] mr-2" />
                <span className="text-sm text-white font-medium">
                  WhatsApp Automation
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                WhatsApp Automation
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                Use WhatsApp as a profit center — automated lead flows, payment
                reminders, and smart answers that reduce manual follow-ups.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">
                    Turn conversations into conversions — automated qualification
                    and nurture.
                  </p>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">
                    Unfair advantage: 24/7 follow-ups, click-to-pay & catalogs,
                    lower CAC with personal outreach.
                  </p>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-gray-300">
                    Plug-and-play Twilio sandbox for fast demos and proofs of
                    concept.
                  </p>
                </li>
              </ul>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] px-8 py-6 text-lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Test WhatsApp Automation
              </Button>
            </div>

            {/* Right - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-32 h-32 text-[#25D366] mx-auto mb-6 opacity-20" />
                  <p className="text-gray-400 text-lg">
                    WhatsApp Automation Illustration
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <WhatsAppModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}


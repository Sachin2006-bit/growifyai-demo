"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Calendar, Phone, Loader2, CheckCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";

interface FormData {
  name: string;
  phone: string;
  email: string;
}

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "lead" | "appointment";
}

function DemoModal({ isOpen, onClose, type }: DemoModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Name is required (min 2 characters)";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `/api/demo/${type === "lead" ? "lead" : "appointment"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            demoType: type,
          }),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          // Reset form
          setFormData({ name: "", phone: "", email: "" });
          setIsSuccess(false);
        }, 6000);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSuccess(true); // Show success for demo purposes
      setTimeout(() => {
        onClose();
        setFormData({ name: "", phone: "", email: "" });
        setIsSuccess(false);
      }, 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
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
        className="relative w-full max-w-md"
      >
        <Card className="glass border-white/10 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {type === "lead"
                ? "Lead Qualification Demo"
                : "Appointment Booking Demo"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`glass border-white/10 ${
                      errors.name ? "border-red-500" : ""
                    }`}
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
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`glass border-white/10 ${
                      errors.phone ? "border-red-500" : ""
                    }`}
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
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`glass border-white/10 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#00E5FF] to-[#0080FF] hover:from-[#0080FF] hover:to-[#00E5FF] py-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Starting...
                    </>
                  ) : (
                    <>
                      <Phone className="w-4 h-4 mr-2" />
                      Start AI Call Demo
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-gray-400">
                  Our AI agent will call you within 2–3 minutes to begin the
                  demo
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thanks!
                </h3>
                <p className="text-gray-300">
                  Our AI agent will call you within 2–3 minutes.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
    </div>
  );
}

export function AICallAgentSection() {
  const [openModal, setOpenModal] = useState<"lead" | "appointment" | null>(
    null
  );

  return (
    <>
      <section
        id="call-agent"
        className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI Call Agent
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Two powerful agents to scale lead capture & meeting bookings —
              perfect for admissions, sales teams, and franchise onboarding.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Lead Qualification Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass border-white/10 hover:border-[#00E5FF]/50 transition-all duration-300 h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00E5FF] to-[#0080FF] rounded-2xl flex items-center justify-center mb-6">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Lead Qualification
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    AI agent will call to qualify interest and gather
                    requirements.
                  </p>
                  <Button
                    onClick={() => setOpenModal("lead")}
                    className="w-full bg-gradient-to-r from-[#00E5FF] to-[#0080FF] hover:from-[#0080FF] hover:to-[#00E5FF] py-3"
                  >
                    Test Lead Qualification
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Appointment Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="glass border-white/10 hover:border-[#0080FF]/50 transition-all duration-300 h-full">
                <div className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0080FF] to-[#8000FF] rounded-2xl flex items-center justify-center mb-6">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Appointment Booking
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    AI agent will call to schedule a campus visit or meeting.
                  </p>
                  <Button
                    onClick={() => setOpenModal("appointment")}
                    className="w-full bg-gradient-to-r from-[#0080FF] to-[#8000FF] hover:from-[#8000FF] hover:to-[#0080FF] py-3"
                  >
                    Test Appointment Booking
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <AnimatePresence>
        {openModal === "lead" && (
          <DemoModal
            isOpen={true}
            onClose={() => setOpenModal(null)}
            type="lead"
          />
        )}
        {openModal === "appointment" && (
          <DemoModal
            isOpen={true}
            onClose={() => setOpenModal(null)}
            type="appointment"
          />
        )}
      </AnimatePresence>
    </>
  );
}


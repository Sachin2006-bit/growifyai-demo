"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Phone, 
  Mail, 
  User, 
  X,
  Loader2,
  Play
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  userData: {
    name: string;
    phone: string;
    email: string;
  };
}

export function AppointmentModal({ isOpen, onClose, userData }: AppointmentModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [callStatus, setCallStatus] = useState<string>("");
  const [sessionId, setSessionId] = useState<string>("");

  const handleStartBooking = async () => {
    // Validate userData (no duplicate form needed)
    if (!userData.name || !userData.phone) {
      alert('Please fill in your name and phone number in the main form');
      return;
    }

    setIsLoading(true);
    setCallStatus('initiating');
    
    try {
      const response = await fetch('/api/demo/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          demoType: 'appointment_booking',
          user: userData, // Use userData directly, no duplicate form
          callbackUrl: `${window.location.origin}/api/webhook/agent-callback`
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('Appointment booking call initiated:', result);
        setSessionId(result.sessionId);
        setCallStatus('active');
        
        // Auto-end after 30 seconds (simulating call completion)
        setTimeout(() => {
          setCallStatus('completed');
          setIsLoading(false);
        }, 30000);
      } else {
        console.error('Failed to start appointment booking call:', result.error);
        setCallStatus('failed');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error starting appointment booking call:', error);
      setCallStatus('failed');
      setIsLoading(false);
    }
  };

  const resetModal = () => {
    setCallStatus("");
    setSessionId("");
    setIsLoading(false);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-md"
      >
        <Card className="glass border-neon-cyan/20">
          <CardHeader className="relative">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-white">Book NXTWAVE Visit</CardTitle>
                <CardDescription>Schedule your campus visit</CardDescription>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Call Status Indicator */}
            {sessionId && (
              <div className="flex items-center justify-center space-x-2 text-sm">
                <div className={`w-2 h-2 rounded-full ${
                  callStatus === 'initiating' ? 'bg-blue-400 animate-pulse' :
                  callStatus === 'active' ? 'bg-yellow-400 animate-pulse' :
                  callStatus === 'completed' ? 'bg-green-400' :
                  callStatus === 'failed' ? 'bg-red-400' :
                  'bg-gray-400'
                }`}></div>
                <span className="text-gray-300">
                  {callStatus === 'initiating' ? 'Initiating Call...' :
                   callStatus === 'active' ? 'Call Active - Agent Calling You' :
                   callStatus === 'completed' ? 'Call Completed Successfully!' :
                   callStatus === 'failed' ? 'Call Failed' :
                   'Ready to Book'}
                </span>
              </div>
            )}

            {/* User Information Display */}
            <div className="space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-medium text-white">Your Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">Name:</span>
                    <span className="text-white">{userData.name}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">Phone:</span>
                    <span className="text-white">{userData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300">Email:</span>
                    <span className="text-white">{userData.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleStartBooking}
              className="w-full neon-glow"
              disabled={!userData.name || !userData.phone || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {callStatus === 'initiating' ? 'Initiating Call...' : 
                   callStatus === 'active' ? 'Call Active' : 'Processing...'}
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Start Appointment Call
                </>
              )}
            </Button>

            {/* Info Text */}
            <div className="text-center text-xs text-gray-400">
              <p>Our AI agent will call you to schedule your campus visit</p>
              <p>Make sure your phone is ready to receive calls</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
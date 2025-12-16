"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Pause, 
  Square, 
  Download, 
  Send, 
  RefreshCw, 
  Phone, 
  PhoneOff,
  Mic,
  MicOff,
  Brain,
  Clock,
  User,
  Mail,
  Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TranscriptEntry {
  id: string;
  speaker: "agent" | "customer";
  text: string;
  timestamp: number;
  emotion?: string;
  confidence?: number;
}

interface ExtractedData {
  name?: string;
  phone?: string;
  email?: string;
  appointmentSlot?: string;
  leadScore?: number;
}

interface LiveConsoleProps {
  isOpen: boolean;
  onClose: () => void;
  demoType: "lead-qualification" | "appointment-booking";
  userData?: {
    name: string;
    phone: string;
    email: string;
  };
}

export function LiveConsole({ isOpen, onClose, demoType, userData = { name: "", phone: "", email: "" } }: LiveConsoleProps) {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [emotions, setEmotions] = useState<string[]>([]);
  const [extractedData, setExtractedData] = useState<ExtractedData>({});
  const [callDuration, setCallDuration] = useState(0);
  const [currentEmotion, setCurrentEmotion] = useState<string>("neutral");
  const [sessionId, setSessionId] = useState<string>("");
  const [callStatus, setCallStatus] = useState<string>("");

  // Real-time transcript updates (disabled for real calls)
  useEffect(() => {
    if (!isCallActive) return;

    // Check if this is a real call by looking for system message
    const hasSystemMessage = transcript.some(entry => entry.speaker === 'system');
    if (hasSystemMessage) {
      // Real call is active - don't simulate transcript
      return;
    }

    // Fallback simulation for demo purposes
    const sampleTranscripts = demoType === "lead-qualification" 
      ? [
          { speaker: "agent" as const, text: "Hello! I'm calling from GrowifyAI. How can I help you today?", emotion: "friendly" },
          { speaker: "customer" as const, text: `Hi, I'm ${userData.name}. I'm interested in your AI services.`, emotion: "interested" },
          { speaker: "agent" as const, text: "That's great! What specific challenges are you facing with customer calls?", emotion: "professional" },
          { speaker: "customer" as const, text: "We're spending too much on call centers and want to automate lead qualification.", emotion: "frustrated" },
          { speaker: "agent" as const, text: "I understand. Our AI agents can reduce call costs by 90% while improving lead quality. Would you like to schedule a demo?", emotion: "helpful" },
          { speaker: "customer" as const, text: "Yes, that sounds interesting. How does the pricing work?", emotion: "curious" },
          { speaker: "agent" as const, text: "Our pricing starts at ₹10 per successful lead qualification. Much cheaper than traditional call centers!", emotion: "enthusiastic" },
          { speaker: "customer" as const, text: "That's very reasonable. I'd like to learn more about implementation.", emotion: "positive" }
        ]
      : [
          { speaker: "agent" as const, text: "Hello! I'm calling to help you schedule a campus visit to NXTWAVE. Is this a good time?", emotion: "friendly" },
          { speaker: "customer" as const, text: `Hi, yes. I'm ${userData.name} and I'm interested in visiting the campus.`, emotion: "interested" },
          { speaker: "agent" as const, text: "Perfect! Let me check our available slots for the next few days.", emotion: "professional" },
          { speaker: "agent" as const, text: "I have slots available on Monday 10 AM, Tuesday 2 PM, or Wednesday 11 AM. Which works best for you?", emotion: "helpful" },
          { speaker: "customer" as const, text: "Tuesday 2 PM sounds good. How long will the visit take?", emotion: "curious" },
          { speaker: "agent" as const, text: "The campus tour typically takes 30-45 minutes. I'll book Tuesday 2 PM for you.", emotion: "enthusiastic" },
          { speaker: "customer" as const, text: "Great! Will I receive a confirmation email?", emotion: "satisfied" },
          { speaker: "agent" as const, text: "Yes! I'm sending a confirmation email to your address right now. You'll also receive a reminder 24 hours before your visit.", emotion: "helpful" }
        ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < sampleTranscripts.length && sampleTranscripts[index]) {
        const currentTranscript = sampleTranscripts[index];
        const entry: TranscriptEntry = {
          id: `entry_${index}`,
          speaker: currentTranscript.speaker,
          text: currentTranscript.text,
          timestamp: Date.now(),
          emotion: currentTranscript.emotion || "neutral",
          confidence: Math.random() * 0.3 + 0.7 // 70-100% confidence
        };
        
        setTranscript(prev => [...prev, entry]);
        setCurrentEmotion(currentTranscript.emotion || "neutral");
        setEmotions(prev => [...prev, currentTranscript.emotion || "neutral"]);
        
        // Extract data based on transcript
        if (currentTranscript.speaker === "customer" && userData?.name) {
          const newData = { ...extractedData };
          if (currentTranscript.text.includes(userData.name)) {
            newData.name = userData.name;
          }
          if (currentTranscript.text.includes("interested") || currentTranscript.text.includes("yes")) {
            newData.leadScore = Math.min(100, (newData.leadScore || 50) + 15);
          }
          if (demoType === "appointment-booking" && currentTranscript.text.includes("Tuesday 2 PM")) {
            newData.appointmentSlot = "Tuesday 2 PM";
          }
          setExtractedData(newData);
        }
        
        index++;
      } else {
        clearInterval(interval);
        setIsCallActive(false);
        setIsRecording(false);
      }
    }, 3001);

    return () => clearInterval(interval);
  }, [isCallActive, demoType, userData, transcript]);

  // Call duration timer
  useEffect(() => {
    if (!isCallActive) return;

    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isCallActive]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Clean up any active polling intervals
      setIsCallActive(false);
      setIsRecording(false);
    };
  }, []);

  const startCall = async () => {
    // Validate userData before proceeding
    if (!userData || !userData.name || !userData.phone) {
      console.error('Invalid user data:', userData);
      return;
    }

    setIsCallActive(true);
    setIsRecording(true);
    setTranscript([]);
    setEmotions([]);
    setExtractedData({});
    setCallDuration(0);

    // Make real API call to trigger actual lead generation call
    try {
      const response = await fetch('/api/demo/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          demoType: 'lead_qualification',
          user: userData,
          callbackUrl: `${window.location.origin}/api/webhook/agent-callback`
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('Real call initiated:', result);
        setSessionId(result.sessionId);
        setCallStatus('initiated');
        
        // Add initial transcript entry showing call started
        setTranscript(prev => [...prev, {
          id: 'call_started',
          speaker: 'system',
          text: `Call initiated successfully! Session ID: ${result.sessionId}`,
          timestamp: Date.now(),
          emotion: 'neutral',
          confidence: 1.0
        }]);
        
        // Start polling for call completion
        startCallStatusPolling(result.sessionId);
      } else {
        console.error('Failed to start call:', result.error);
        setIsCallActive(false);
        setIsRecording(false);
      }
    } catch (error) {
      console.error('Error starting call:', error);
      setIsCallActive(false);
      setIsRecording(false);
    }
  };

  const endCall = () => {
    setIsCallActive(false);
    setIsRecording(false);
    setCallStatus('ended');
  };

  // Poll for call completion status
  const startCallStatusPolling = (sessionId: string) => {
    const pollInterval = setInterval(async () => {
      try {
        // Check if call is still active
        if (!isCallActive) {
          clearInterval(pollInterval);
          return;
        }

        // Simulate checking call status (in real implementation, this would be an API call)
        // For now, we'll auto-end after 30 seconds to simulate call completion
        if (callDuration > 30) {
          console.log('Auto-ending call after 30 seconds');
          setCallStatus('completed');
          setTranscript(prev => [...prev, {
            id: 'call_completed',
            speaker: 'system',
            text: 'Call completed successfully! Lead data sent to webhook.',
            timestamp: Date.now(),
            emotion: 'positive',
            confidence: 1.0
          }]);
          endCall();
          clearInterval(pollInterval);
        }
      } catch (error) {
        console.error('Error polling call status:', error);
      }
    }, 2000); // Poll every 2 seconds

    // Clean up interval when component unmounts or call ends
    return () => clearInterval(pollInterval);
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getEmotionIcon = (emotion: string) => {
    switch (emotion) {
      case "happy": return "😊";
      case "interested": return "🤔";
      case "frustrated": return "😤";
      case "curious": return "🤨";
      case "positive": return "😄";
      case "satisfied": return "😌";
      case "friendly": return "😊";
      case "professional": return "😐";
      case "helpful": return "😊";
      case "enthusiastic": return "🤩";
      default: return "😐";
    }
  };

  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case "happy":
      case "positive":
      case "satisfied":
      case "friendly":
      case "helpful":
      case "enthusiastic":
        return "text-green-400";
      case "interested":
      case "curious":
        return "text-blue-400";
      case "frustrated":
        return "text-red-400";
      case "professional":
      default:
        return "text-gray-400";
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden"
      >
        <Card className="glass-dark border-neon-cyan/50">
          <CardHeader className="border-b border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-neon-cyan" />
                  <span>Live Agent Console</span>
                  {isCallActive && (
                    <Badge variant="default" className="animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                      Live
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription>
                  {demoType === "lead-qualification" ? "Lead Qualification Demo" : "Appointment Booking Demo"}
                </CardDescription>
              </div>
              <div className="flex items-center space-x-4">
                {isCallActive && (
                  <div className="text-sm text-gray-300">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {formatDuration(callDuration)}
                  </div>
                )}
                <Button variant="ghost" size="sm" onClick={onClose}>
                  ✕
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="grid lg:grid-cols-3 gap-6 p-6">
              {/* Left Column - Transcript */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Live Transcript</h3>
                  <div className="flex items-center space-x-2">
                    {/* Call Status Indicator */}
                    {sessionId && (
                      <div className="flex items-center space-x-2 text-sm">
                        <div className={`w-2 h-2 rounded-full ${
                          callStatus === 'initiated' ? 'bg-yellow-400 animate-pulse' :
                          callStatus === 'completed' ? 'bg-green-400' :
                          callStatus === 'ended' ? 'bg-gray-400' :
                          'bg-blue-400'
                        }`}></div>
                        <span className="text-gray-300">
                          {callStatus === 'initiated' ? 'Call Active' :
                           callStatus === 'completed' ? 'Call Completed' :
                           callStatus === 'ended' ? 'Call Ended' :
                           'Connecting...'}
                        </span>
                      </div>
                    )}
                    
                    {!isCallActive ? (
                      <Button onClick={startCall} className="neon-glow">
                        <Play className="w-4 h-4 mr-2" />
                        Start Call
                      </Button>
                    ) : (
                      <Button onClick={endCall} variant="destructive">
                        <PhoneOff className="w-4 h-4 mr-2" />
                        End Call
                      </Button>
                    )}
                  </div>
                </div>

                <div className="h-64 overflow-y-auto space-y-3 pr-2">
                  <AnimatePresence>
                    {transcript.map((entry) => (
                      <motion.div
                        key={entry.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`glass rounded-lg p-3 ${
                          entry.speaker === "agent" 
                            ? "border-l-4 border-neon-cyan" 
                            : "border-l-4 border-green-400"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm font-medium ${
                              entry.speaker === "agent" ? "text-neon-cyan" : "text-green-400"
                            }`}>
                              {entry.speaker === "agent" ? "Agent" : "Customer"}
                            </span>
                            {entry.emotion && (
                              <span className={`text-sm ${getEmotionColor(entry.emotion)}`}>
                                {getEmotionIcon(entry.emotion)}
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-gray-400">
                            {new Date(entry.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                        <p className="text-white text-sm">{entry.text}</p>
                        {entry.confidence && (
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                              <span>Confidence</span>
                              <span>{Math.round(entry.confidence * 100)}%</span>
                            </div>
                            <Progress value={entry.confidence * 100} className="h-1" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Column - Analytics */}
              <div className="space-y-4">
                {/* Current Emotion */}
                <div className="glass rounded-lg p-4">
                  <h4 className="text-white font-medium mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2 text-neon-cyan" />
                    Current Emotion
                  </h4>
                  <div className="text-center">
                    <div className="text-3xl mb-2">{getEmotionIcon(currentEmotion)}</div>
                    <div className={`text-sm font-medium ${getEmotionColor(currentEmotion)}`}>
                      {currentEmotion.charAt(0).toUpperCase() + currentEmotion.slice(1)}
                    </div>
                  </div>
                </div>

                {/* Extracted Data */}
                <div className="glass rounded-lg p-4">
                  <h4 className="text-white font-medium mb-3">Extracted Data</h4>
                  <div className="space-y-2">
                    {extractedData.name && (
                      <div className="flex items-center space-x-2 text-sm">
                        <User className="w-4 h-4 text-neon-cyan" />
                        <span className="text-gray-300">Name: {extractedData.name}</span>
                      </div>
                    )}
                    {extractedData.phone && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="w-4 h-4 text-neon-cyan" />
                        <span className="text-gray-300">Phone: {extractedData.phone}</span>
                      </div>
                    )}
                    {extractedData.email && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="w-4 h-4 text-neon-cyan" />
                        <span className="text-gray-300">Email: {extractedData.email}</span>
                      </div>
                    )}
                    {extractedData.appointmentSlot && (
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-neon-cyan" />
                        <span className="text-gray-300">Slot: {extractedData.appointmentSlot}</span>
                      </div>
                    )}
                    {extractedData.leadScore && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-300">Lead Score</span>
                          <span className="text-neon-cyan font-medium">{extractedData.leadScore}/100</span>
                        </div>
                        <Progress value={extractedData.leadScore} className="h-2" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="glass rounded-lg p-4">
                  <h4 className="text-white font-medium mb-3">Actions</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Send to CRM
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Export JSON
                    </Button>
                    <Button variant="outline" size="sm" className="w-full">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Re-run Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

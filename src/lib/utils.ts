import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Format as +91 XXXXXXXXXX for Indian numbers
  if (cleaned.length === 10) {
    return `+91 ${cleaned}`;
  } else if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2)}`;
  }
  
  return phone;
}

export function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function formatTime(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

export function calculateLeadScore(transcript: string, emotions: string[]): number {
  let score = 50; // Base score
  
  // Positive keywords
  const positiveKeywords = ['interested', 'yes', 'sure', 'definitely', 'great', 'excellent', 'perfect'];
  const negativeKeywords = ['not interested', 'no', 'maybe', 'later', 'busy'];
  
  const lowerTranscript = transcript.toLowerCase();
  
  // Check for positive keywords
  positiveKeywords.forEach(keyword => {
    if (lowerTranscript.includes(keyword)) {
      score += 10;
    }
  });
  
  // Check for negative keywords
  negativeKeywords.forEach(keyword => {
    if (lowerTranscript.includes(keyword)) {
      score -= 15;
    }
  });
  
  // Emotion-based scoring
  emotions.forEach(emotion => {
    switch (emotion.toLowerCase()) {
      case 'happy':
      case 'excited':
        score += 5;
        break;
      case 'neutral':
        score += 0;
        break;
      case 'angry':
      case 'frustrated':
        score -= 10;
        break;
      case 'sad':
        score -= 5;
        break;
    }
  });
  
  return Math.max(0, Math.min(100, score));
}

export function extractContactInfo(text: string): {
  name?: string;
  phone?: string;
  email?: string;
} {
  const result: { name?: string; phone?: string; email?: string } = {};
  
  // Extract email
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const emailMatch = text.match(emailRegex);
  if (emailMatch) {
    result.email = emailMatch[0];
  }
  
  // Extract phone number
  const phoneRegex = /(\+?91[\s-]?)?[6-9]\d{9}/;
  const phoneMatch = text.match(phoneRegex);
  if (phoneMatch) {
    result.phone = phoneMatch[0].replace(/\s/g, '');
  }
  
  // Extract name (simple heuristic - first capitalized word that's not common words)
  const commonWords = ['i', 'my', 'name', 'is', 'this', 'that', 'the', 'a', 'an', 'and', 'or', 'but'];
  const words = text.split(/\s+/);
  for (const word of words) {
    if (word.length > 2 && word[0] === word[0].toUpperCase() && !commonWords.includes(word.toLowerCase())) {
      result.name = word;
      break;
    }
  }
  
  return result;
}

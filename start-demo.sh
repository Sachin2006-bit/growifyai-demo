#!/bin/bash

# GrowifyAI Demo Quick Start Script
# For Hackathon Judges

echo "🚀 Starting GrowifyAI Call Agent Demo..."
echo "========================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file
if [ ! -f .env.local ]; then
    echo "⚙️  Creating environment file..."
    cp .env.example .env.local
    echo "✅ Environment file created. Edit .env.local with your values if needed."
fi

# Start development server
echo "🎯 Starting development server..."
echo "========================================"
echo "🌐 Demo will be available at: http://localhost:3001"
echo "📱 Mobile testing: Use your phone's browser"
echo "🎧 Audio: Enable microphone for full experience"
echo "========================================"
echo ""
echo "🎯 Demo Scenarios:"
echo "1. Lead Qualification: Enter name/phone → Start Demo Call"
echo "2. Appointment Booking: Fill form → Book NXTWAVE Visit"
echo "3. Mobile Experience: Test responsive design"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev

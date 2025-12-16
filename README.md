# GrowifyAI Call Agent Demo

A futuristic, production-ready React website showcasing AI-powered voice agents for lead qualification and appointment booking.

## 🚀 Features

- **Live Demo Console**: Interactive demos with real-time transcript and emotion detection
- **Appointment Booking**: Google Calendar integration for NXTWAVE campus visits
- **Lead Qualification**: AI-powered lead scoring with emotion analysis
- **Futuristic Design**: Glassmorphism, neon accents, and smooth animations
- **Mobile-First**: Responsive design with accessibility features
- **Production Ready**: TypeScript, error handling, and monitoring

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI, Lucide React
- **State Management**: Zustand
- **Backend**: Next.js API Routes
- **Integrations**: n8n, Vapi AI, Google Calendar, SendGrid

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/growifyai/demo-website.git
   cd growifyai-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your actual values.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3001](http://localhost:3001)

## 🔧 Configuration

### Required Environment Variables

```env
# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3001

# Agent Webhooks (n8n endpoints)
AGENT_DEFAULT_WEBHOOK_LEAD=https://your-n8n-instance.com/webhook/lead-demo
AGENT_DEFAULT_WEBHOOK_APPT=https://your-n8n-instance.com/webhook/appointment-demo

# Security
AGENT_WEBHOOK_TOKEN=your-webhook-token
AGENT_CALLBACK_SECRET=your-callback-secret

# Google Calendar
NXTWAVE_CALENDAR_ID=nxtwave@example.com
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}

# Email Service
SENDGRID_API_KEY=SG.your-api-key
SENDGRID_FROM_EMAIL=noreply@growifyai.com
```

### n8n Workflow Setup

1. **Create Lead Qualification Workflow**
   - Webhook trigger: `/webhook/lead-demo`
   - Vapi AI integration for voice calls
   - CRM integration for lead storage

2. **Create Appointment Booking Workflow**
   - Webhook trigger: `/webhook/appointment-demo`
   - Google Calendar API integration
   - SendGrid email notifications

## 🎯 Demo Scenarios

### Lead Qualification Demo
1. Enter name, phone, and email
2. Click "Start Demo Call"
3. Watch real-time transcript and emotion detection
4. View extracted data and lead score
5. Export results to CRM

### Appointment Booking Demo
1. Fill out visitor information
2. Click "Book NXTWAVE Visit"
3. Agent calls to confirm preferences
4. Select available time slot
5. Receive confirmation email

## 📱 API Endpoints

### Demo Endpoints
- `POST /api/demo/lead` - Start lead qualification demo
- `POST /api/demo/appointment` - Start appointment booking demo

### Webhook Endpoints
- `POST /api/webhook/agent-callback` - Receive agent callbacks
- `GET /api/webhook/agent-callback` - Webhook verification

## 🎨 Design System

### Colors
- Primary: `#00E5FF` (Neon Cyan)
- Secondary: `#0080FF` (Neon Blue)
- Background: Dark gradient with glassmorphism

### Typography
- Font: Inter (Google Fonts)
- Weights: 100-900 (Variable font)

### Components
- Glassmorphism cards with backdrop blur
- Neon glow effects on hover
- Smooth micro-animations
- Accessible focus states

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Manual Deployment
```bash
npm run build
npm start
```

### Docker
```bash
docker build -t growifyai-demo .
docker run -p 3001:3001 growifyai-demo
```

## 🧪 Testing

### Test Scenarios
1. **Friendly Lead**: Clear answers → High lead score
2. **Angry Customer**: Negative tone → Escalation flag
3. **Appointment Booking**: Campus visit → Calendar integration

### Simulated Mode
Set `NODE_ENV=development` to enable simulated responses when telephony is unavailable.

## 📊 Monitoring

- **Error Tracking**: Sentry integration
- **Analytics**: Google Analytics / Plausible
- **Performance**: Core Web Vitals monitoring
- **Uptime**: Health check endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.growifyai.com](https://docs.growifyai.com)
- **Email**: hello@growifyai.com
- **GitHub Issues**: [Report bugs](https://github.com/growifyai/demo-website/issues)

## 🎉 Acknowledgments

- Built for hackathon judges and demo purposes
- Inspired by futuristic AI interfaces
- Powered by open-source technologies

---

**Made with ❤️ by the GrowifyAI Team**
# GrowifyAI Demo Testing Guide

## 🧪 Testing Scenarios for Hackathon Judges

### 1. Lead Qualification Demo

#### Test Case 1: Friendly Lead
**Scenario**: Customer shows interest and answers clearly
**Expected Result**: High lead score (80-100), positive emotions detected

**Steps**:
1. Navigate to Lead Qualification card
2. Enter test data:
   - Name: "John Smith"
   - Phone: "+91 9876543210"
   - Email: "john@example.com"
3. Click "Start Demo Call"
4. Watch live console for:
   - Real-time transcript updates
   - Emotion detection (happy, interested)
   - Lead score calculation
   - Data extraction (name, phone, email)

**Success Criteria**:
- ✅ Call initiates within 30 seconds
- ✅ Transcript shows natural conversation
- ✅ Lead score > 80
- ✅ Emotions detected as positive
- ✅ Data extracted correctly

#### Test Case 2: Angry Customer
**Scenario**: Customer shows frustration
**Expected Result**: Low lead score (20-40), escalation flag

**Steps**:
1. Use test data:
   - Name: "Angry Customer"
   - Phone: "+91 9876543211"
2. Start demo call
3. Observe emotion detection for frustration/anger
4. Check for escalation handling

**Success Criteria**:
- ✅ Negative emotions detected
- ✅ Lead score < 40
- ✅ Escalation flag triggered
- ✅ Appropriate routing suggested

### 2. Appointment Booking Demo

#### Test Case 3: Campus Visit Booking
**Scenario**: Student wants to visit NXTWAVE campus
**Expected Result**: Successful appointment booking with email confirmation

**Steps**:
1. Navigate to Appointment Booking card
2. Enter visitor details:
   - Name: "Sarah Johnson"
   - Phone: "+91 9876543212"
   - Email: "sarah@example.com"
3. Click "Book NXTWAVE Visit"
4. Follow the booking flow:
   - Agent calls to confirm preferences
   - Select available time slot
   - Receive confirmation

**Success Criteria**:
- ✅ Call connects successfully
- ✅ Calendar integration works
- ✅ Available slots displayed
- ✅ Appointment confirmed
- ✅ Email sent to user

### 3. Technical Testing

#### Performance Tests
- **Page Load**: < 3 seconds
- **API Response**: < 2 seconds
- **Mobile Responsiveness**: All breakpoints work
- **Accessibility**: WCAG 2.1 AA compliance

#### Integration Tests
- **Webhook Callbacks**: Verify agent responses
- **Calendar API**: Test Google Calendar integration
- **Email Service**: Confirm SendGrid delivery
- **Error Handling**: Graceful failure modes

### 4. Demo Scripts for Judges

#### Quick Demo (5 minutes)
1. Show hero section with animated device mockup
2. Start Lead Qualification demo with friendly customer
3. Highlight real-time transcript and emotion detection
4. Show extracted data and lead score
5. Export to CRM functionality

#### Full Demo (15 minutes)
1. Complete Lead Qualification flow
2. Complete Appointment Booking flow
3. Show use cases and ROI calculations
4. Demonstrate mobile responsiveness
5. Show team and contact information

### 5. Troubleshooting

#### Common Issues
- **Call not connecting**: Check webhook URLs in environment
- **Calendar not loading**: Verify Google Calendar API credentials
- **Emails not sending**: Check SendGrid API key
- **Styling issues**: Clear browser cache

#### Debug Mode
Set `NODE_ENV=development` to enable:
- Simulated responses
- Detailed logging
- Error overlays
- Performance metrics

### 6. Success Metrics

#### User Experience
- ✅ Intuitive navigation
- ✅ Fast loading times
- ✅ Smooth animations
- ✅ Mobile-friendly design

#### Technical Performance
- ✅ Zero critical errors
- ✅ API response times < 2s
- ✅ 99.9% uptime
- ✅ Cross-browser compatibility

#### Business Value
- ✅ Clear value proposition
- ✅ Compelling ROI metrics
- ✅ Easy integration process
- ✅ Scalable architecture

## 🎯 Judge Evaluation Criteria

### Innovation (25%)
- Novel AI voice agent implementation
- Creative UI/UX design
- Unique problem-solving approach

### Technical Excellence (25%)
- Clean, maintainable code
- Robust error handling
- Performance optimization
- Security best practices

### Business Impact (25%)
- Clear market need
- Scalable business model
- Measurable ROI
- Competitive advantage

### Presentation (25%)
- Professional design
- Clear communication
- Smooth demo experience
- Comprehensive documentation

## 🚀 Ready for Demo!

The GrowifyAI Call Agent demo is production-ready with:
- ✅ Complete frontend with futuristic design
- ✅ Interactive demo console
- ✅ Backend API integration
- ✅ Webhook handling
- ✅ Mobile responsiveness
- ✅ Accessibility features
- ✅ Deployment configuration
- ✅ Comprehensive documentation

**Demo URL**: [https://growifyai-demo.vercel.app](https://growifyai-demo.vercel.app)

**Contact**: hello@growifyai.com

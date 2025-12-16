import { NextRequest, NextResponse } from 'next/server';
import { generateSessionId } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, demoType, agentWebhook, nxtwaveCalendarId, callbackUrl } = body;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, email' },
        { status: 400 }
      );
    }

    // Generate session ID
    const sessionId = generateSessionId();

    // Prepare webhook payload for agent (simplified like lead generation)
    const agentPayload = {
      sessionId,
      customer: {
        name,
        phone,
        email,
      },
      intent: 'appointment_booking_demo',
      callback_url: callbackUrl || `http://localhost:3001/api/webhook/agent-callback`,
      demoType: 'appointment_booking',
      metadata: {
        timestamp: new Date().toISOString(),
        source: 'growifyai_demo',
        userAgent: request.headers.get('user-agent'),
      }
    };

    // Default webhook URLs for demo (can be overridden)
    const defaultWebhookUrl = process.env.AGENT_DEFAULT_WEBHOOK_APPT || 
      'https://shannn.app.n8n.cloud/webhook/09d1214c-9830-42f4-8b3d-e54e417f50ef';

    const webhookUrl = agentWebhook || defaultWebhookUrl;

    // Call the agent webhook
    let agentResponse;
    try {
      console.log('📞 Appointment Booking: Sending webhook request to:', webhookUrl);
      console.log('📦 Webhook payload:', JSON.stringify(agentPayload, null, 2));
      console.log('🔑 Using webhook URL from env:', process.env.AGENT_DEFAULT_WEBHOOK_APPT || 'fallback URL');
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.AGENT_WEBHOOK_TOKEN || 'demo-token'}`,
        },
        body: JSON.stringify(agentPayload),
      });

      console.log('Webhook response status:', response.status);
      agentResponse = await response.json();
      console.log('Webhook response:', agentResponse);

      if (!response.ok) {
        throw new Error(`Agent webhook failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Agent webhook error:', error);
      
      // Return simulated response for demo purposes
      agentResponse = {
        success: true,
        sessionId,
        status: 'initiated',
        message: 'Appointment booking demo initiated (simulated)',
        estimatedWaitTime: '45 seconds',
        callId: `call_${sessionId}`,
        calendarIntegration: {
          status: 'connected',
          calendarId: 'nxtwave@example.com',
          availableSlots: [
            'Monday, Dec 16 - 10:00 AM',
            'Tuesday, Dec 17 - 2:00 PM',
            'Wednesday, Dec 18 - 11:00 AM',
            'Thursday, Dec 19 - 3:00 PM',
            'Friday, Dec 20 - 10:30 AM'
          ]
        }
      };
    }

    // Log the demo session
    console.log('Appointment booking demo started:', {
      sessionId,
      user: name,
      phone: phone,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      sessionId,
      status: 'initiated',
      message: 'Appointment booking demo started successfully',
      callId: agentResponse.callId || `call_${sessionId}`,
      estimatedWaitTime: agentResponse.estimatedWaitTime || '45 seconds',
      webhookUrl: webhookUrl,
      calendarIntegration: agentResponse.calendarIntegration || {
        status: 'connected',
        calendarId: 'nxtwave@example.com',
        availableSlots: [
          'Monday, Dec 16 - 10:00 AM',
          'Tuesday, Dec 17 - 2:00 PM',
          'Wednesday, Dec 18 - 11:00 AM',
          'Thursday, Dec 19 - 3:00 PM',
          'Friday, Dec 20 - 10:30 AM'
        ]
      },
      agentResponse,
    });

  } catch (error) {
    console.error('Appointment booking demo error:', error);
    return NextResponse.json(
      { error: 'Failed to start appointment booking demo' },
      { status: 500 }
    );
  }
}

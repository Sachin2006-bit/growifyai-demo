import { NextRequest, NextResponse } from 'next/server';
import { generateSessionId } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, demoType, agentWebhook, callbackUrl } = body;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, email' },
        { status: 400 }
      );
    }

    // Generate session ID
    const sessionId = generateSessionId();

    // Prepare webhook payload for agent
    const agentPayload = {
      sessionId,
      customer: {
        name,
        phone,
        email,
      },
      intent: 'lead_qualification_demo',
      callback_url: callbackUrl || `http://localhost:3001/api/webhook/agent-callback`,
      demoType: 'lead_qualification',
      metadata: {
        timestamp: new Date().toISOString(),
        source: 'growifyai_demo',
        userAgent: request.headers.get('user-agent'),
      }
    };

    // Default webhook URLs for demo (can be overridden)
    const defaultWebhookUrl = process.env.AGENT_DEFAULT_WEBHOOK_LEAD || 
      'https://shannn.app.n8n.cloud/webhook-test/09d1214c-9830-42f4-8b3d-e54e417f50ef';

    const webhookUrl = agentWebhook || defaultWebhookUrl;

    // Call the agent webhook
    let agentResponse;
    try {
      console.log('Sending webhook request to:', webhookUrl);
      console.log('Webhook payload:', JSON.stringify(agentPayload, null, 2));
      
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
        message: 'Demo call initiated (simulated)',
        estimatedWaitTime: '30 seconds',
        callId: `call_${sessionId}`,
      };
    }

    // Log the demo session
    console.log('Lead qualification demo started:', {
      sessionId,
      user: name,
      phone: phone,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      sessionId,
      status: 'initiated',
      message: 'Lead qualification demo started successfully',
      callId: agentResponse.callId || `call_${sessionId}`,
      estimatedWaitTime: agentResponse.estimatedWaitTime || '30 seconds',
      webhookUrl: webhookUrl,
      agentResponse,
    });

  } catch (error) {
    console.error('Lead qualification demo error:', error);
    return NextResponse.json(
      { error: 'Failed to start lead qualification demo' },
      { status: 500 }
    );
  }
}

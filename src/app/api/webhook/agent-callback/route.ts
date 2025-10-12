import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Verify webhook signature for security
function verifyWebhookSignature(payload: string, signature: string, secret: string): boolean {
  if (!secret) return true; // Skip verification in demo mode
  
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-webhook-signature') || '';
    const secret = process.env.AGENT_CALLBACK_SECRET || 'demo-secret';

    // Verify webhook signature
    if (!verifyWebhookSignature(body, signature, secret)) {
      console.error('Invalid webhook signature');
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const data = JSON.parse(body);
    const { sessionId, status, event, customer, transcript, emotions, extractedData } = data;

    console.log('Received webhook callback:', {
      sessionId,
      status,
      timestamp: new Date().toISOString(),
    });

    // Handle different callback types
    switch (status) {
      case 'call_started':
        return NextResponse.json({
          success: true,
          message: 'Call started notification received',
          sessionId,
          timestamp: new Date().toISOString(),
        });

      case 'transcript_update':
        // Store transcript update
        console.log('Transcript update:', {
          sessionId,
          transcript: transcript?.slice(-1), // Log only the latest entry
          emotions: emotions?.slice(-1),
        });
        
        return NextResponse.json({
          success: true,
          message: 'Transcript update received',
          sessionId,
          transcriptCount: transcript?.length || 0,
        });

      case 'emotion_detected':
        // Store emotion data
        console.log('Emotion detected:', {
          sessionId,
          emotion: emotions?.slice(-1),
          confidence: extractedData?.emotionConfidence,
        });
        
        return NextResponse.json({
          success: true,
          message: 'Emotion detection received',
          sessionId,
          emotion: emotions?.slice(-1),
        });

      case 'data_extracted':
        // Store extracted data
        console.log('Data extracted:', {
          sessionId,
          extractedData,
        });
        
        return NextResponse.json({
          success: true,
          message: 'Data extraction completed',
          sessionId,
          extractedData,
        });

      case 'appointment_booked':
        // Handle appointment booking completion
        console.log('Appointment booked:', {
          sessionId,
          event,
          customer,
        });

        // Here you would typically:
        // 1. Send confirmation email
        // 2. Update CRM
        // 3. Store in database
        
        return NextResponse.json({
          success: true,
          message: 'Appointment booking completed',
          sessionId,
          event,
          customer,
        });

      case 'call_completed':
        // Handle call completion
        console.log('Call completed:', {
          sessionId,
          duration: data.duration,
          finalTranscript: transcript?.length,
          finalEmotions: emotions?.length,
          extractedData,
        });

        // Store final results
        const finalResults = {
          sessionId,
          status: 'completed',
          duration: data.duration,
          transcript,
          emotions,
          extractedData,
          leadScore: extractedData?.leadScore || 0,
          timestamp: new Date().toISOString(),
        };

        // In a real implementation, you would store this in a database
        console.log('Final results stored:', finalResults);

        // Send lead qualification data to the external webhook
        try {
          const leadQualificationPayload = {
            sessionId,
            customer: customer,
            leadScore: extractedData?.leadScore || 0,
            transcript: transcript,
            emotions: emotions,
            extractedData: extractedData,
            duration: data.duration,
            timestamp: new Date().toISOString(),
            status: 'lead_qualified',
            source: 'growifyai_demo',
            action: 'end_call' // Signal to end the call
          };

          const webhookResponse = await fetch('https://sachinautomate76.app.n8n.cloud/webhook/09d1214c-9830-42f4-8b3d-e54e417f50ef', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(leadQualificationPayload),
          });

          if (webhookResponse.ok) {
            console.log('Lead qualification data sent to external webhook successfully');
            const webhookResult = await webhookResponse.json();
            console.log('Webhook response:', webhookResult);
            
            // Send call end signal to frontend via Server-Sent Events or WebSocket
            // For now, we'll include this in the response
            return NextResponse.json({
              success: true,
              message: 'Call completed successfully',
              sessionId,
              results: finalResults,
              webhookResponse: webhookResult,
              shouldEndCall: true // Signal frontend to end call
            });
          } else {
            console.error('Failed to send lead qualification data to external webhook:', webhookResponse.statusText);
          }
        } catch (webhookError) {
          console.error('Error sending lead qualification data to external webhook:', webhookError);
        }

      case 'call_failed':
        // Handle call failure
        console.error('Call failed:', {
          sessionId,
          error: data.error,
          reason: data.reason,
        });

        return NextResponse.json({
          success: false,
          message: 'Call failed',
          sessionId,
          error: data.error,
          reason: data.reason,
        });

      default:
        console.log('Unknown callback status:', status);
        return NextResponse.json({
          success: true,
          message: 'Callback received',
          sessionId,
          status,
        });
    }

  } catch (error) {
    console.error('Webhook callback error:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook callback' },
      { status: 500 }
    );
  }
}

// Handle GET requests for webhook verification
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const challenge = searchParams.get('challenge');
  
  if (challenge) {
    return NextResponse.json({ challenge });
  }
  
  return NextResponse.json({
    message: 'GrowifyAI Webhook Endpoint',
    status: 'active',
    timestamp: new Date().toISOString(),
  });
}

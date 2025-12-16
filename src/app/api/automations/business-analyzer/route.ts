import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface BusinessAnalyzerPayload {
  Monthly_Revenue: number;
  Customer_Retention_Rate: number;
  Customer_Acquisition_Cost: number;
  Working_Capital_Cycle_Days: number;
  Inventory_Turnover_Ratio: number;
  Operational_Efficiency_Ratio: number;
  Employee_Productivity: number;
  business_briefing: string;
  targeted_question: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: BusinessAnalyzerPayload = await request.json();
    const {
      Monthly_Revenue,
      Customer_Retention_Rate,
      Customer_Acquisition_Cost,
      Working_Capital_Cycle_Days,
      Inventory_Turnover_Ratio,
      Operational_Efficiency_Ratio,
      Employee_Productivity,
      business_briefing,
      targeted_question
    } = body;

    // Validate required fields
    if (
      Monthly_Revenue === undefined ||
      Customer_Retention_Rate === undefined ||
      Customer_Acquisition_Cost === undefined ||
      Working_Capital_Cycle_Days === undefined ||
      Inventory_Turnover_Ratio === undefined ||
      Operational_Efficiency_Ratio === undefined ||
      Employee_Productivity === undefined ||
      !targeted_question
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate unique job ID
    const jobId = `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Get Gemini API key from environment
    const apiKey = process.env.GEMINI_API_KEY || 'AIzaSyCMYHP_FG4UI5RGRs1PZo-RHxnOdJoEHkY';
    
    if (!apiKey) {
      console.warn('GEMINI_API_KEY not set, returning simulated response');
      
      // Return simulated response for demo purposes
      return NextResponse.json({
        success: true,
        jobId,
        report: `# Business Analysis Report\n\n## Executive Summary\n\nBased on your business metrics:\n- Monthly Revenue: ₹${Monthly_Revenue.toLocaleString('en-IN')}\n- Customer Retention Rate: ${Customer_Retention_Rate}%\n- Customer Acquisition Cost: ₹${Customer_Acquisition_Cost}\n- Working Capital Cycle: ${Working_Capital_Cycle_Days} days\n- Inventory Turnover: ${Inventory_Turnover_Ratio}\n- Operational Efficiency: ${Operational_Efficiency_Ratio}%\n- Employee Productivity: ₹${Employee_Productivity.toLocaleString('en-IN')}/month/employee\n\n## Your Question\n${targeted_question}\n\n## Analysis\n\n### Immediate Actions (0-30 days)\n1. **Optimize Customer Acquisition Cost**: Your CAC of ₹${Customer_Acquisition_Cost} represents ${((Customer_Acquisition_Cost / (Monthly_Revenue * Customer_Retention_Rate / 100 / 100)) * 100).toFixed(1)}% of customer lifetime value. Focus on reducing this by ${(Customer_Acquisition_Cost * 0.15).toFixed(0)}% through better targeting.\n\n2. **Improve Working Capital Cycle**: Your ${Working_Capital_Cycle_Days}-day cycle can be reduced to 35-40 days by negotiating better payment terms and improving inventory management.\n\n3. **Employee Productivity Enhancement**: Current productivity of ₹${Employee_Productivity.toLocaleString('en-IN')}/employee/month can be increased by 20-25% through automation and better training.\n\n### Medium-term Actions (1-3 months)\n1. Customer retention optimization\n2. Inventory turnover improvement\n3. Operational efficiency enhancements\n\n### Long-term Strategy (3-12 months)\n1. Revenue growth through diversified channels\n2. Technology integration for scalability\n3. Market expansion opportunities\n\n## Projected Impact\n\nImplementing these recommendations is projected to:\n- Increase monthly revenue by 25-40%\n- Reduce CAC by 15-20%\n- Improve working capital efficiency by 35%\n- Enhance overall profitability by 30-50%\n\n## Next Steps\n1. Schedule a detailed consultation\n2. Implement high-priority quick wins\n3. Develop a 90-day action plan\n4. Set up regular progress reviews`,
        timestamp: new Date().toISOString()
      });
    }

    // Initialize Gemini AI - Using Gemini 2.0 Flash Experimental
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });

    // Calculate derived metrics for more context
    const annualRevenue = Monthly_Revenue * 12;
    const ltvToCacRatio = (Monthly_Revenue * 12) / (Customer_Acquisition_Cost * 100); // Rough LTV estimate
    const inventoryDaysOnHand = 365 / Inventory_Turnover_Ratio;
    
    // Create the prompt with business metrics
    const prompt = `You are a TOP-TIER BUSINESS ANALYST with 20+ years of experience advising Fortune 500 companies and unicorn startups. You specialize in strategic growth, operational excellence, and ROI optimization. Your insights have helped businesses scale from ₹1 crore to ₹500+ crores.

**CLIENT BUSINESS METRICS (Current State Analysis):**

📊 **Revenue Metrics:**
- Monthly Revenue: ₹${Monthly_Revenue.toLocaleString('en-IN')}
- Annualized Revenue: ₹${annualRevenue.toLocaleString('en-IN')}
- Revenue Quality: Active business generating recurring income

👥 **Customer Metrics:**
- Customer Retention Rate: ${Customer_Retention_Rate}%
- Customer Acquisition Cost (CAC): ₹${Customer_Acquisition_Cost}
- Estimated Customer Lifetime Value (LTV): ₹${(Monthly_Revenue * Customer_Retention_Rate / 100).toLocaleString('en-IN')}
- LTV:CAC Ratio: ${ltvToCacRatio.toFixed(2)}:1

💰 **Financial Health:**
- Working Capital Cycle: ${Working_Capital_Cycle_Days} days
- Cash Flow Position: ${Working_Capital_Cycle_Days < 30 ? 'Strong - Good liquidity position' : Working_Capital_Cycle_Days < 60 ? 'Moderate - Monitor closely' : 'Challenging - Tight cash position'}

📦 **Operational Metrics:**
- Inventory Turnover Ratio: ${Inventory_Turnover_Ratio}x annually
- Days Inventory Held: ${inventoryDaysOnHand.toFixed(1)} days
- Operational Efficiency: ${Operational_Efficiency_Ratio}%

👔 **Human Capital:**
- Employee Productivity: ₹${Employee_Productivity.toLocaleString('en-IN')}/employee/month
- Revenue per Employee Ratio: ${(Monthly_Revenue / Employee_Productivity).toFixed(1)}

**CLIENT'S BUSINESS CONTEXT:**
${business_briefing ? `"${business_briefing}"` : "No additional business context provided."}

**CLIENT'S CRITICAL BUSINESS QUESTION:**
"${targeted_question}"

---

## YOUR ASSIGNMENT:

Provide a WORLD-CLASS, CONSULTING-GRADE business analysis that covers:

### 1. EXECUTIVE SUMMARY (200-300 words)
- Overall business health score (0-100 scale)
- Top 3 critical strengths
- Top 3 urgent weaknesses requiring immediate attention
- Single most important strategic insight

### 2. IMMEDIATE ACTIONS (Next 0-30 Days) - IMPLEMENT THIS WEEK
For each action provide:
- Specific step-by-step implementation
- Expected timeline
- Required resources/investment
- Expected outcome in rupees/percentage
- Priority ranking (Critical/High/Medium)

### 3. MEDIUM-TERM OPTIMIZATION (1-3 Months) - BUILD FOUNDATION
Provide 5-7 strategic initiatives that will:
- Improve operational efficiency by 15-25%
- Reduce costs by specific amounts
- Increase revenue through proven channels
- Each with ROI calculations

### 4. LONG-TERM STRATEGY (3-12 Months) - SCALE & DOMINATE
- Market expansion opportunities
- Revenue diversification strategies
- Technology automation roadmap
- Team scaling plan
- Projected revenue growth trajectory (quarterly milestones)

### 5. FINANCIAL PROJECTIONS & ROI ANALYSIS
- 12-month revenue projection by quarter
- Cost optimization projections
- Profit margin improvement forecast
- Payback period for recommended investments
- Expected overall business valuation increase

### 6. RISK ASSESSMENT & MITIGATION
- Top 5 business risks identified
- Probability and impact analysis
- Specific mitigation strategies for each
- Contingency plans

### 7. COMPETITIVE ADVANTAGE LEVERS
- What unique advantages to leverage NOW
- How to sustain competitive moat
- Positioning strategies

### 8. IMPLEMENTATION ROADMAP (90-Day Action Plan)
- Week-by-week action items (12 weeks)
- Resource allocation
- Success metrics (KPIs to track)
- Review checkpoints

### 9. CRITICAL NEXT STEPS (Start Today)
- First 3 things to do immediately
- Who needs to be involved
- Expected first week results

---

**ANALYSIS REQUIREMENTS:**
- Be EXTREMELY specific with numbers, percentages, and rupee amounts
- Reference industry benchmarks (Indian market context)
- Provide actionable, tested strategies
- Use markdown formatting for clarity
- Include emojis sparingly for visual break-up
- Write as if addressing the CEO directly
- Show confidence backed by data
- Challenge assumptions where appropriate
- Be concise yet comprehensive

**FORMATTING:**
Use proper markdown with ## for main sections, ### for subsections, **bold** for emphasis, and bullet points for clarity. Use Indian numbering (crores, lakhs) where appropriate.`;

    try {
      // Call Gemini API
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const report = response.text();

      console.log('Business analyzer report generated:', {
        jobId,
        timestamp: new Date().toISOString()
      });

      return NextResponse.json({
        success: true,
        jobId,
        report,
        timestamp: new Date().toISOString()
      });

    } catch (geminiError: any) {
      console.error('Gemini API error:', geminiError);
      
      // Return error response with helpful message
      return NextResponse.json({
        success: false,
        error: 'Failed to generate analysis',
        message: geminiError.message || 'Gemini API call failed',
        jobId
      }, { status: 500 });
    }

  } catch (error: any) {
    console.error('Business analyzer error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process business analysis',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to retrieve a report by jobId
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const jobId = searchParams.get('jobId');

  if (!jobId) {
    return NextResponse.json(
      { error: 'jobId parameter is required' },
      { status: 400 }
    );
  }

  // In a production system, you would retrieve the report from a database
  // For now, return a placeholder
  return NextResponse.json({
    success: false,
    message: 'Job retrieval not yet implemented. Reports are returned immediately in the POST response.',
    jobId
  });
}


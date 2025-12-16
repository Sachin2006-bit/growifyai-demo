# AI Business Analyzer

The AI Business Analyzer is a powerful tool that analyzes your business metrics and provides actionable insights using Google's Gemini AI.

## Features

- **7 Key Business Metrics**: Monthly revenue, customer retention, CAC, working capital cycle, inventory turnover, operational efficiency, and employee productivity
- **AI-Powered Analysis**: Uses Gemini 1.5 Flash to provide comprehensive business analysis
- **<Actionable Reports**: Get prioritized action plans with immediate, medium-term, and long-term recommendations
- **Projected Impact**: Quantified ROI and expected improvements
- **Fallback Support**: Works even without Gemini API key (simulated responses)

## Setup

### 1. Install Dependencies

```bash
npm install @google/generative-ai
```

### 2. Environment Variables

Add to your `.env.local` file:

```env
# Google Gemini API Key (optional - works without it for demo)
GEMINI_API_KEY=your-gemini-api-key-here
```

To get a Gemini API key:
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env.local` file

## Usage

### Basic Implementation

```tsx
import { useState } from 'react';
import BusinessAnalyzerModal from '@/components/business-analyzer-modal';

export default function MyPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSuccess = (response: any) => {
    console.log('Analysis completed:', response);
    // Handle success - response contains report, jobId, etc.
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Analyze My Business
      </button>
      
      <BusinessAnalyzerModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onSuccess={handleSuccess}
      />
    </>
  );
}
```

### Full Example with Success Handling

```tsx
'use client';

import { useState } from 'react';
import BusinessAnalyzerModal from '@/components/business-analyzer-modal';

interface AnalysisResult {
  success: boolean;
  jobId: string;
  report: string;
  timestamp: string;
}

export default function BusinessAnalyzerPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastReport, setLastReport] = useState<AnalysisResult | null>(null);

  const handleSuccess = (response: AnalysisResult) => {
    setLastReport(response);
    // Optionally close the modal
    // setIsOpen(false);
  };

  return (
    <div className="min-h-screen p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full font-semibold hover:shadow-lg transition-all"
      >
        🚀 Analyze My Business
      </button>

      {lastReport && (
        <div className="mt-8 p-6 bg-gray-900 border border-gray-700 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Last Analysis Report</h2>
          <div className="text-sm text-gray-400 mb-2">
            Job ID: {lastReport.jobId}
          </div>
          <div className="prose prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: lastReport.report.replace(/\n/g, '<br />') }} />
          </div>
        </div>
      )}

      <BusinessAnalyzerModal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onSuccess={handleSuccess}
      />
    </div>
  );
}
```

## API Endpoint

The component POSTs to `/api/automations/business-analyzer` with the following payload:

```json
{
  "Monthly_Revenue": 1200000,
  "Customer_Retention_Rate": 72.5,
  "Customer_Acquisition_Cost": 700,
  "Working_Capital_Cycle_Days": 45,
  "Inventory_Turnover_Ratio": 4.2,
  "Operational_Efficiency_Ratio": 78.5,
  "Employee_Productivity": 50000,
  "targeted_question": "How can I 3x revenue in 12 months without increasing CAC?"
}
```

### Response Format

```json
{
  "success": true,
  "jobId": "job_1234567890_abc123",
  "report": "# Business Analysis Report\n\n## Executive Summary\n...",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Field Descriptions

### Monthly_Revenue (INR)
- **Type**: Number (decimal)
- **Validation**: Must be >= 0
- **Example**: `1200000` (₹12,00,000)
- **Description**: Your monthly business revenue

### Customer_Retention_Rate (%)
- **Type**: Number (decimal)
- **Validation**: 0-100
- **Example**: `72.5` (72.5%)
- **Description**: Percentage of customers retained over a period

### Customer_Acquisition_Cost (INR)
- **Type**: Number (decimal)
- **Validation**: Must be >= 0
- **Example**: `700`
- **Description**: Cost to acquire one new customer

### Working_Capital_Cycle_Days
- **Type**: Number (integer)
- **Validation**: Must be >= 0
- **Example**: `45`
- **Description**: Number of days between paying suppliers and collecting from customers

### Inventory_Turnover_Ratio
- **Type**: Number (decimal)
- **Validation**: Must be > 0
- **Example**: `4.2`
- **Description**: How many times inventory is sold and replaced over a period

### Operational_Efficiency_Ratio (%)
- **Type**: Number (decimal)
- **Validation**: 0-100
- **Example**: `78.5` (78.5%)
- **Description**: Efficiency metric for operations

### Employee_Productivity (₹ per month / per employee)
- **Type**: Number (decimal)
- **Validation**: Must be >= 0
- **Example**: `50000`
- **Description**: Revenue per employee per month

### targeted_question
- **Type**: String
- **Validation**: Minimum 10 characters
- **Description**: Your specific business question or goal
- **Example**: "How can I 3x revenue in 12 months without increasing CAC?"

## Error Handling

The component handles various error scenarios:

- **Validation Errors**: Field-specific error messages appear below inputs
- **Network Errors**: Displayed as submit errors
- **Server Errors**: Assets user-friendly error messages

## Analytics Integration

The component includes Google Analytics tracking (optional):

```tsx
// Automatically tracks when analysis is submitted
if (window?.gtag) {
  window.gtag("event", "business_analyzer_submitted", {
    event_category: "automations",
    value: payload.Monthly_Revenue,
  });
}
```

## Styling

The component uses the project's existing Tailwind CSS classes and follows the design system:
- Dark theme with glassmorphism effects
- Cyan/Blue gradient buttons
- Slate color palette
- Responsive design (mobile-first)

## Limitations

1. **Demo Mode**: Without a valid Gemini API key, returns simulated responses
2. **Rate Limiting**: No built-in rate limiting (should be added for production)
3. **Job Retrieval**: GET endpoint for retrieving reports not fully implemented
4. **Storage**: Reports are not persisted in a database

## Future Enhancements

- [ ] Add database persistence for reports
- [ ] Implement job queue for async processing
- [ ] Add report export (PDF/CSV)
- [ ] Email report delivery
- [ ] Historical analysis tracking
- [ ] Custom metric configuration
- [ ] Multi-language support

## Troubleshooting

### "GEMINI_API_KEY not set" warning
- The component works in demo mode without a key
- For real AI analysis, add your Gemini API key to `.env.local`

### "Server error" on submit
- Check browser console for detailed error
- Verify API route is accessible: `/api/automations/business-analyzer`
- Check server logs for backend issues

### Form validation errors
- Ensure all fields are filled
- Check that numeric fields are valid numbers
- targeted_question must be at least 10 characters


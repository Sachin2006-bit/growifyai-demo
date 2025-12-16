"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Business Analyzer Modal Component
 * 
 * Props:
 * - open (bool)
 * - onClose (fn)
 * - onSuccess (fn) optional callback with response
 * 
 * Usage:
 * <BusinessAnalyzerModal open={open} onClose={() => setOpen(false)} />
 */

interface BusinessAnalyzerModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess?: (response: any) => void;
}

interface FormState {
  Monthly_Revenue: string;
  Customer_Retention_Rate: string;
  Customer_Acquisition_Cost: string;
  Working_Capital_Cycle_Days: string;
  Inventory_Turnover_Ratio: string;
  Operational_Efficiency_Ratio: string;
  Employee_Productivity: string;
  business_briefing: string;
  targeted_question: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function BusinessAnalyzerModal({ open, onClose, onSuccess }: BusinessAnalyzerModalProps) {
  const initialState: FormState = {
    Monthly_Revenue: "",
    Customer_Retention_Rate: "",
    Customer_Acquisition_Cost: "",
    Working_Capital_Cycle_Days: "",
    Inventory_Turnover_Ratio: "",
    Operational_Efficiency_Ratio: "",
    Employee_Productivity: "",
    business_briefing: "",
    targeted_question: "",
  };

  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);
      // prevent background scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      // reset when closing
      setForm(initialState);
      setErrors({});
      setLoading(false);
      setSuccessData(null);
    }
  }, [open]);

  // Basic validators
  const validate = (): boolean => {
    const e: FormErrors = {};
    
    // Monthly_Revenue: required, numeric >=0
    if (!form.Monthly_Revenue) {
      e.Monthly_Revenue = "Monthly revenue is required.";
    } else if (isNaN(Number(form.Monthly_Revenue)) || Number(form.Monthly_Revenue) < 0) {
      e.Monthly_Revenue = "Enter a valid non-negative number.";
    }

    // Customer_Retention_Rate: required, 0-100
    if (!form.Customer_Retention_Rate && form.Customer_Retention_Rate !== "0") {
      e.Customer_Retention_Rate = "Retention rate is required.";
    } else if (
      isNaN(Number(form.Customer_Retention_Rate)) ||
      Number(form.Customer_Retention_Rate) < 0 ||
      Number(form.Customer_Retention_Rate) > 100
    ) {
      e.Customer_Retention_Rate = "Enter a percentage between 0 and 100.";
    }

    // Customer_Acquisition_Cost: required numeric >=0
    if (!form.Customer_Acquisition_Cost && form.Customer_Acquisition_Cost !== "0") {
      e.Customer_Acquisition_Cost = "CAC is required.";
    } else if (isNaN(Number(form.Customer_Acquisition_Cost)) || Number(form.Customer_Acquisition_Cost) < 0) {
      e.Customer_Acquisition_Cost = "Enter a valid non-negative number.";
    }

    // Working_Capital_Cycle_Days: required integer >=0
    if (!form.Working_Capital_Cycle_Days && form.Working_Capital_Cycle_Days !== "0") {
      e.Working_Capital_Cycle_Days = "Working capital cycle is required.";
    } else if (
      isNaN(Number(form.Working_Capital_Cycle_Days)) ||
      Number(form.Working_Capital_Cycle_Days) < 0
    ) {
      e.Working_Capital_Cycle_Days = "Enter a valid number of days.";
    }

    // Inventory_Turnover_Ratio: required numeric >0
    if (!form.Inventory_Turnover_Ratio && form.Inventory_Turnover_Ratio !== "0") {
      e.Inventory_Turnover_Ratio = "Inventory turnover is required.";
    } else if (isNaN(Number(form.Inventory_Turnover_Ratio)) || Number(form.Inventory_Turnover_Ratio) <= 0) {
      e.Inventory_Turnover_Ratio = "Enter a positive number.";
    }

    // Operational_Efficiency_Ratio: required 0-100 (or 0-1) - accept percent 0-100
    if (!form.Operational_Efficiency_Ratio && form.Operational_Efficiency_Ratio !== "0") {
      e.Operational_Efficiency_Ratio = "Operational efficiency is required.";
    } else if (
      isNaN(Number(form.Operational_Efficiency_Ratio)) ||
      Number(form.Operational_Efficiency_Ratio) < 0 ||
      Number(form.Operational_Efficiency_Ratio) > 100
    ) {
      e.Operational_Efficiency_Ratio = "Enter a percentage between 0 and 100.";
    }

    // Employee_Productivity: required numeric >=0
    if (!form.Employee_Productivity && form.Employee_Productivity !== "0") {
      e.Employee_Productivity = "Employee productivity is required.";
    } else if (isNaN(Number(form.Employee_Productivity)) || Number(form.Employee_Productivity) < 0) {
      e.Employee_Productivity = "Enter a valid non-negative number.";
    }

    // business_briefing: optional but recommended if empty, min 20 chars if provided
    if (form.business_briefing && form.business_briefing.trim().length < 20) {
      e.business_briefing = "Please provide more details (min 20 characters) or leave empty.";
    }

    // targeted_question: required and length min 10 chars
    if (!form.targeted_question || form.targeted_question.trim().length < 10) {
      e.targeted_question = "Please describe your main question (min 10 characters).";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (key: keyof FormState, val: string) => {
    setForm((s) => ({ ...s, [key]: val }));
    // clear field error
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      // Build payload with the exact requested predictor keys
      const payload = {
        Monthly_Revenue: Number(form.Monthly_Revenue),
        Customer_Retention_Rate: Number(form.Customer_Retention_Rate),
        Customer_Acquisition_Cost: Number(form.Customer_Acquisition_Cost),
        Working_Capital_Cycle_Days: Number(form.Working_Capital_Cycle_Days),
        Inventory_Turnover_Ratio: Number(form.Inventory_Turnover_Ratio),
        Operational_Efficiency_Ratio: Number(form.Operational_Efficiency_Ratio),
        Employee_Productivity: Number(form.Employee_Productivity),
        business_briefing: form.business_briefing.trim(),
        targeted_question: form.targeted_question.trim(),
      };

      // send to your backend (server must call Gemini)
      const res = await fetch("/api/automations/business-analyzer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Server error");
      }

      const json = await res.json();
      setSuccessData(json);
      onSuccess?.(json);
      
      // example analytics hook — replace with your analytics
      try {
        if (typeof window !== 'undefined' && (window as any)?.gtag) {
          (window as any).gtag("event", "business_analyzer_submitted", {
            event_category: "automations",
            value: payload.Monthly_Revenue,
          });
        } else {
          console.log("analytics: business_analyzer_submitted", payload.Monthly_Revenue);
        }
      } catch (err) {
        // ignore analytics error
        console.warn("Analytics error:", err);
      }
    } catch (err: any) {
      console.error(err);
      setErrors((prev) => ({ ...prev, submit: err.message || "Failed to submit" }));
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="business-analyzer-title"
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onClose?.()}
        aria-hidden="true"
      />
      <div
        ref={modalRef}
        className="relative z-10 max-h-[90vh] overflow-auto w-full sm:w-[760px] bg-[#081019] border border-white/6 rounded-2xl p-6 md:p-8 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="business-analyzer-title" className="text-xl md:text-2xl font-semibold text-white">
              AI Business Analyzer
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Provide the 7 business predictors below and describe your main question. We'll analyze and return a prioritized action plan.
            </p>
          </div>

          <div>
            <button
              aria-label="Close dialog"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/3 hover:bg-white/5"
              onClick={() => onClose?.()}
            >
              ✕
            </button>
          </div>
        </div>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Monthly Revenue */}
            <label className="flex flex-col">
              <span className="text-sm text-slate-200">Monthly_Revenue (INR)</span>
              <input
                ref={firstInputRef}
                type="number"
                inputMode="decimal"
                min="0"
                step="any"
                value={form.Monthly_Revenue}
                onChange={(e) => handleChange("Monthly_Revenue", e.target.value)}
                placeholder="e.g. 1200000 (₹12,00,000)"
                className={`mt-2 px-3 py-2 rounded-lg bg-[#04121A] border ${
                  errors.Monthly_Revenue ? "border-red-400" : "border-white/6"
                } text-white placeholder:text-slate-500 focus:outline-none`}
                aria-invalid={!!errors.Monthly_Revenue}
                aria-describedby={errors.Monthly_Revenue ? "err-revenue" : undefined}
              />
              {errors.Monthly_Revenue && (
                <span id="err-revenue" className="text-xs text-red-400 mt-1">{errors.Monthly_Revenue}</span>
              )}
            </label>

            {/* Customer Retention Rate */}
            <label className="flex flex-col">
              <span className="text-sm text-slate-200">Customer_Retention_Rate (%)</span>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={form.Customer_Retention_Rate}
                onChange={(e) => handleChange("Customer_Retention_Rate", e.target.value)}
                placeholder="e.g. 72.5"
                className={`mt-2 px-3 py-2 rounded-lg bg-[#04121A] border ${
                  errors.Customer_Retention_Rate ? "border-red-400" : "border-white/6"
                } text-white`}
                aria-invalid={!!errors.Customer_Retention_Rate}
              />
              {errors.Customer_Retention_Rate && (
                <span className="text-xs text-red-400 mt-1">{errors.Customer_Retention_Rate}</span>
              )}
            </label>

            {/* CAC */}
            <label className="flex flex-col">
              <span className="text-sm text-slate-200">Customer_Acquisition_Cost (INR)</span>
              <input
                type="number"
                min="0"
                value={form.Customer_Acquisition_Cost}
                onChange={(e) => handleChange("Customer_Acquisition_Cost", e.target.value)}
                placeholder="e.g. 700"
                className={`mt-2 px-3 py-2 rounded-lg bg-[#04121A] border ${
                  errors.Customer_Acquisition_Cost ? "border-red-400" : "border-white/6"
                } text-white`}
                aria-invalid={!!errors.Customer_Acquisition_Cost}
              />
              {errors.Customer_Acquisition_Cost && (
                <span className="text-xs text-red-400 mt-1">{errors.Customer_Acquisition_Cost}</span>
              )}
            </label>

            {/* Working Capital Cycle Days */}
            <label className="flex flex-col">
              <span className="text-sm text-slate-200">Working_Capital_Cycle_Days</span>
              <input
                type="number"
                min="0"
                step="1"
                value={form.Working_Capital_Cycle_Days}
                onChange={(e) => handleChange("Working_Capital_Cycle_Days", e.target.value)}
                placeholder="e.g. 45"
                className={`mt-2 px-3 py-2 rounded-lg bg-[#04121A] border ${
                  errors.Working_Capital_Cycle_Days ? "border-red-400" : "border-white/6"
                } text-white`}
                aria-invalid={!!errors.Working_Capital_Cycle_Days}
              />
              {errors.Working_Capital_Cycle_Days && (
                <span className="text-xs text-red-400 mt-1">{errors.Working_Capital_Cycle_Days}</span>
              )}
            </label>

            {/* Inventory Turnover Ratio */}
            <label className="flex flex-col">
              <span className="text-sm text-slate-200">Inventory_Turnover_Ratio</span>
              <input
                type="number"
                min="0"
                step="any"
                value={form.Inventory_Turnover_Ratio}
                onChange={(e) => handleChange("Inventory_Turnover_Ratio", e.target.value)}
                placeholder="e.g. 4.2"
                className={`mt-2 px-3 py-2 rounded-lg bg-[#04121A] border ${
                  errors.Inventory_Turnover_Ratio ? "border-red-400" : "border-white/6"
                } text-white`}
                aria-invalid={!!errors.Inventory_Turnover_Ratio}
              />
              {errors.Inventory_Turnover_Ratio && (
                <span className="text-xs text-red-400 mt-1">{errors.Inventory_Turnover_Ratio}</span>
              )}
            </label>

            {/* Operational Efficiency Ratio */}
            <label className="flex flex-col">
              <span className="text-sm text-slate-200">Operational_Efficiency_Ratio (%)</span>
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                value={form.Operational_Efficiency_Ratio}
                onChange={(e) => handleChange("Operational_Efficiency_Ratio", e.target.value)}
                placeholder="e.g. 78.5"
                className={`mt-2 px-3 py-2 rounded-lg bg-[#04121A] border ${
                  errors.Operational_Efficiency_Ratio ? "border-red-400" : "border-white/6"
                } text-white`}
                aria-invalid={!!errors.Operational_Efficiency_Ratio}
              />
              {errors.Operational_Efficiency_Ratio && (
                <span className="text-xs text-red-400 mt-1">{errors.Operational_Efficiency_Ratio}</span>
              )}
            </label>

            {/* Employee Productivity */}
            <label className="flex flex-col">
              <span className="text-sm text-slate-200">Employee_Productivity (₹ per month / per employee)</span>
              <input
                type="number"
                min="0"
                step="any"
                value={form.Employee_Productivity}
                onChange={(e) => handleChange("Employee_Productivity", e.target.value)}
                placeholder="e.g. 50000"
                className={`mt-2 px-3 py-2 rounded-lg bg-[#04121A] border ${
                  errors.Employee_Productivity ? "border-red-400" : "border-white/6"
                } text-white`}
                aria-invalid={!!errors.Employee_Productivity}
              />
              {errors.Employee_Productivity && (
                <span className="text-xs text-red-400 mt-1">{errors.Employee_Productivity}</span>
              )}
            </label>
          </div>

          {/* Business Briefing - Optional but recommended */}
          <label className="flex flex-col">
            <span className="text-sm text-slate-200">
              Business Briefing (Optional - Helps us provide better insights)
            </span>
            <textarea
              value={form.business_briefing}
              onChange={(e) => handleChange("business_briefing", e.target.value)}
              rows={5}
              placeholder="Example: We are an e-commerce startup selling eco-friendly products in India. Founded in 2022, we have 10 employees and serve B2C customers across 15 states. Our products include organic groceries, sustainable fashion, and zero-waste lifestyle items. We face competition from established players like BigBasket and newer D2C brands. Our main challenges are customer acquisition in tier-2/3 cities and managing logistics costs."
              className={`mt-2 px-3 py-2 rounded-lg bg-[#04121A] border ${
                errors.business_briefing ? "border-red-400" : "border-white/6"
              } text-white placeholder:text-slate-500 text-sm`}
              aria-invalid={!!errors.business_briefing}
            />
            <p className="text-xs text-slate-400 mt-1">
              💡 Tip: Include industry, products/services, team size, target market, competition, and key challenges
            </p>
            {errors.business_briefing && (
              <span className="text-xs text-red-400 mt-1">{errors.business_briefing}</span>
            )}
          </label>

          {/* Question box */}
          <label className="flex flex-col">
            <span className="text-sm text-slate-200">Ask your priority question</span>
            <textarea
              value={form.targeted_question}
              onChange={(e) => handleChange("targeted_question", e.target.value)}
              rows={4}
              placeholder="Example: How can I 3x revenue in 12 months without increasing CAC?"
              className={`mt-2 px-3 py-2 rounded-lg bg-[#04121A] border ${
                errors.targeted_question ? "border-red-400" : "border-white/6"
              } text-white placeholder:text-slate-500`}
              aria-invalid={!!errors.targeted_question}
            />
            {errors.targeted_question && (
              <span className="text-xs text-red-400 mt-1">{errors.targeted_question}</span>
            )}
          </label>

          {/* submit error */}
          {errors.submit && <div className="text-sm text-red-400">{errors.submit}</div>}

          <div className="flex items-center gap-3 mt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold px-5 py-2 rounded-full shadow-lg disabled:opacity-60"
            >
              {loading ? "Analyzing..." : "Analyze My Business"}
            </button>

            <button
              type="button"
              onClick={() => {
                setForm(initialState);
                setErrors({});
              }}
              className="text-sm text-slate-300 hover:underline"
            >
              Reset
            </button>
          </div>
        </form>

        {/* success - Full Report Display */}
        {successData && successData.report && (
          <div className="mt-8 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Analysis Complete</h4>
                  <p className="text-xs text-slate-400">Job ID: {successData.jobId}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(successData.report || "");
                  alert("Report copied to clipboard!");
                }}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-white border border-white/10"
              >
                Copy Report
              </button>
            </div>

            {/* Report Content */}
            <div className="bg-[#04121A] rounded-lg p-6 border border-white/10 max-h-[60vh] overflow-y-auto">
              <div 
                className="prose prose-invert prose-sm max-w-none text-slate-200 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: successData.report.replace(/\n/g, '<br />').replace(/## /g, '<h2 class="text-2xl font-bold text-white mt-6 mb-3">').replace(/### /g, '<h3 class="text-xl font-semibold text-purple-300 mt-4 mb-2">').replace(/\*\*/g, '<strong class="text-white">') }}
              />
            </div>

            <button
              onClick={() => onClose?.()}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Close and Return
            </button>
          </div>
        )}

        {/* Loading state message */}
        {successData && !successData.report && (
          <div className="mt-6 p-4 rounded-md bg-blue-900/30 border border-blue-700 text-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <strong>Analysis in Progress...</strong>
                <div className="text-sm mt-1">Job ID: <code className="bg-black/25 px-2 py-0.5 rounded">{successData.jobId || successData.id || "—"}</code></div>
              </div>
            </div>
            <p className="text-sm mt-2 text-slate-300">
              Generating your comprehensive business analysis. Please wait...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


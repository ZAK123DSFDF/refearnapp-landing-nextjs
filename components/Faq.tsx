"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Can I try RefearnApp for free?",
    answer:
      "Yes! You can try RefearnApp completely free for 14 days. During your trial, you’ll have full access to all features—no credit card required. This allows you to explore the dashboard, set up your affiliate program, and understand how RefearnApp can help grow your SaaS.",
  },
  {
    question: "Which platforms does RefearnApp support?",
    answer:
      "RefearnApp currently supports Stripe and Paddle for subscription tracking and payment reporting. We’re actively working on adding more integrations to support a wider range of billing platforms in the future.",
  },
  {
    question: "How do I pay my affiliates?",
    answer:
      "At the moment, you can export a complete CSV payout file directly from your dashboard. This CSV contains all affiliate earnings for the selected period and can be used to send payments quickly and easily through PayPal. We plan to introduce additional payout options and automated payment flows in future updates to make the process even more seamless.",
  },
  {
    question: "Can I set how long affiliates get paid?",
    answer:
      "Absolutely. RefearnApp allows you to define how long an affiliate should continue receiving commissions. You can configure both the duration value and the time unit—days, weeks, or months—giving you complete flexibility over your commission structure.",
  },
];

export default function Faq() {
  // Track which FAQ is open. null means all are closed.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-slate-500 mt-4">
          Answers to the most common questions about RefearnApp.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="border-b border-slate-200">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full py-6 flex items-center justify-between text-left font-medium text-lg hover:text-blue-600 transition-all focus:outline-none group"
                >
                  <span className={isOpen ? "text-blue-600" : "text-slate-900"}>
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-6 text-slate-500 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

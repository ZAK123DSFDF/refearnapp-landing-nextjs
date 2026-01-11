"use client";

import { useState } from "react";
import { Rocket, Zap, Check, X, DollarSign } from "lucide-react";
import Link from "next/link";

const featuresList = [
  { name: "Unlimited affiliates signup", pro: true, ultimate: true },
  { name: "Unlimited revenue from affiliate", pro: true, ultimate: true },
  { name: "PayPal mass payout", pro: true, ultimate: true },
  { name: "Custom domain", pro: true, ultimate: true },
  { name: "Affiliate page customization", pro: true, ultimate: true },
  { name: "Integrate with Stripe and Paddle", pro: true, ultimate: true },
  { name: "Cookie attribution customization", pro: true, ultimate: true },
  { name: "Set commission durations", pro: true, ultimate: true },
  { name: "1 organization", pro: true, ultimate: false },
  { name: "Unlimited organizations", pro: false, ultimate: true },
  { name: "Up to 3 team member invitations", pro: true, ultimate: false },
  { name: "Unlimited team member invitations", pro: false, ultimate: true },
];

export default function Pricing() {
  const [billingMode, setBillingMode] = useState<"PURCHASE" | "SUBSCRIPTION">(
    "PURCHASE",
  );
  const [cycle, setCycle] = useState<"MONTHLY" | "YEARLY">("MONTHLY");

  const isSub = billingMode === "SUBSCRIPTION";

  const getProPrice = () => {
    if (!isSub) return { price: "$199", cycle: "one-time", save: 0 };
    return cycle === "MONTHLY"
      ? { price: "$25", cycle: "/ month", save: 0 }
      : { price: "$21", cycle: "/ month", save: 25 * 12 - 21 * 12 };
  };

  const getUltPrice = () => {
    if (!isSub) return { price: "$299", cycle: "one-time", save: 0 };
    return cycle === "MONTHLY"
      ? { price: "$40", cycle: "/ month", save: 0 }
      : { price: "$33", cycle: "/ month", save: 40 * 12 - 33 * 12 };
  };

  const renderFeatures = (isUltimatePlan: boolean) => {
    return featuresList
      .filter((f) => (isUltimatePlan ? f.ultimate : f.pro))
      .map((f, i) => {
        const isLimited =
          !isUltimatePlan &&
          (f.name.includes("1 organization") ||
            f.name.includes("3 team member"));
        return (
          <li
            key={i}
            className={`flex items-start gap-2 text-sm ${isLimited ? "text-red-400" : isUltimatePlan ? "text-slate-200" : "text-slate-600"}`}
          >
            {isLimited ? (
              <X size={16} className="shrink-0 mt-0.5" />
            ) : (
              <Check
                size={16}
                className={`${isUltimatePlan ? "text-blue-400" : "text-blue-600"} shrink-0 mt-0.5`}
              />
            )}
            <span>{f.name}</span>
          </li>
        );
      });
  };

  return (
    <section id="pricing" className="py-24 bg-slate-50/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg mb-12">
          Everything you need to launch and scale your affiliate program.
        </p>

        {/* Toggles */}
        <div className="flex flex-col items-center gap-8 mb-16 w-full">
          {/* Main Mode Toggle */}
          <div className="relative bg-slate-200/50 p-1 rounded-2xl flex border border-slate-200 w-full max-w-[340px] md:max-w-md overflow-visible">
            {/* Special Offer Tag */}
            <div className="absolute -top-4 -left-4 z-30">
              <span className="bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-lg shadow-lg -rotate-12 inline-block border-2 border-white uppercase">
                Special Offer
              </span>
            </div>

            <div
              className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-primary rounded-xl transition-transform duration-300 ease-in-out shadow-md ${isSub ? "translate-x-full" : "translate-x-0"}`}
            />
            <button
              onClick={() => setBillingMode("PURCHASE")}
              className={`relative z-10 flex-1 py-3 rounded-xl font-bold transition-colors duration-300 ${!isSub ? "text-primary-foreground" : "text-slate-600"}`}
            >
              One-Time
            </button>
            <button
              onClick={() => setBillingMode("SUBSCRIPTION")}
              className={`relative z-10 flex-1 py-3 rounded-xl font-bold transition-colors duration-300 ${isSub ? "text-primary-foreground" : "text-slate-600"}`}
            >
              Subscription
            </button>
          </div>

          {/* Sub-toggle (Monthly/Yearly) */}
          <div
            className={`transition-all duration-500 transform ${isSub ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none h-0"}`}
          >
            <div className="bg-slate-200/50 p-1 rounded-xl inline-flex border border-slate-200 text-sm relative min-w-[280px]">
              <div
                className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-primary rounded-lg transition-transform duration-300 ease-out ${cycle === "YEARLY" ? "translate-x-full" : "translate-x-0"}`}
              />
              <button
                onClick={() => setCycle("MONTHLY")}
                className={`relative z-10 flex-1 px-6 py-2 rounded-lg font-semibold transition-colors ${cycle === "MONTHLY" ? "text-primary-foreground" : "text-slate-500"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setCycle("YEARLY")}
                className={`relative z-10 flex-1 px-6 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${cycle === "YEARLY" ? "text-primary-foreground" : "text-slate-500"}`}
              >
                Yearly{" "}
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold uppercase ${cycle === "YEARLY" ? "bg-yellow-400 text-black" : "bg-emerald-100 text-emerald-700"}`}
                >
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          {/* Pro Card */}
          <div className="bg-white border border-slate-200 p-8 rounded-[2rem] w-full max-w-[340px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-left">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                  <Rocket size={20} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Pro</h3>
              </div>
              <div
                key={`${billingMode}-${cycle}-pro`}
                className="animate-fade-in flex items-baseline gap-1"
              >
                <span className="text-4xl font-bold text-slate-900">
                  {getProPrice().price}
                </span>
                <span className="text-slate-500 text-sm font-medium">
                  {getProPrice().cycle}
                </span>
              </div>
              <div
                className={`text-emerald-500 text-sm font-bold mt-1 h-5 flex items-center gap-1 transition-all duration-300 ${getProPrice().save > 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
              >
                <DollarSign size={14} /> Save ${getProPrice().save} / year
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {renderFeatures(false)}
            </ul>
            <Link
              href="/signup"
              className="block text-center w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
            >
              Start 14-Day Trial
            </Link>
          </div>

          {/* Ultimate Card */}
          <div className="bg-slate-900 text-white border-2 border-primary p-8 rounded-[2rem] w-full max-w-[340px] shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col text-left hover:scale-[1.02]">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-widest">
              Most Popular
            </div>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2 text-blue-400">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Zap size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white">Ultimate</h3>
              </div>
              <div
                key={`${billingMode}-${cycle}-ult`}
                className="animate-fade-in flex items-baseline gap-1"
              >
                <span className="text-4xl font-bold text-blue-400">
                  {getUltPrice().price}
                </span>
                <span className="text-slate-300 text-sm font-medium">
                  {getUltPrice().cycle}
                </span>
              </div>
              <div
                className={`text-emerald-400 text-sm font-bold mt-1 h-5 flex items-center gap-1 transition-all duration-300 ${getUltPrice().save > 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
              >
                <DollarSign size={14} /> Save ${getUltPrice().save} / year
              </div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">{renderFeatures(true)}</ul>
            <Link
              href="/signup"
              className="block text-center w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Start 14-Day Trial
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

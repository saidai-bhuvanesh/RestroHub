import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { landingData } from '../../../data/landingData';

export const PremiumPricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "Forever",
      desc: "Perfect for single small restaurants getting started.",
      features: ["1 Branch", "10 Tables", "QR Menu", "Basic Analytics"],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹1,999",
      period: "/month",
      desc: "The complete AI operating system for growing businesses.",
      features: [
        "5 Branches",
        "Unlimited Tables",
        "AI Sales Forecasting",
        "Advanced Analytics",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "Billed Annually",
      desc: "For multi-location restaurant chains.",
      features: [
        "Unlimited Branches",
        "Dedicated Manager",
        "Custom Integrations",
        "SLA Guarantee",
        "White-label options",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 relative z-10 border-t border-slate-200/50 dark:border-white/5 bg-white dark:bg-[#020617]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Start for free. Upgrade when you need the power of AI. No hidden
            fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center max-w-5xl mx-auto">
          {landingData.pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-[32px] p-8 transition-all duration-300 ${
                plan.popular
                  ? "glass-panel border-electric-blue shadow-[0_0_50px_rgba(37,99,235,0.2)] md:-translate-y-4 scale-105 z-10 bg-slate-900 dark:bg-white/5"
                  : "border border-slate-200 dark:border-white/10 bg-white dark:bg-transparent hover:-translate-y-2"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-electric-blue text-white text-xs font-bold rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-2 ${plan.popular ? "text-white" : "text-slate-900 dark:text-white"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${plan.popular ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}
              >
                {plan.desc}
              </p>

              <div className="mb-8">
                <span
                  className={`text-5xl font-black tracking-tight ${plan.popular ? "text-white" : "text-slate-900 dark:text-white"}`}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm font-medium ml-2 ${plan.popular ? "text-slate-300" : "text-slate-500 dark:text-slate-400"}`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 shrink-0 ${plan.popular ? "text-cyber-blue" : "text-electric-blue"}`}
                    />
                    <span
                      className={`text-sm font-medium ${plan.popular ? "text-slate-200" : "text-slate-700 dark:text-slate-300"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/admin"
                className={`flex items-center justify-center w-full gap-2 py-4 rounded-full font-bold transition-all ${
                  plan.popular
                    ? "bg-electric-blue text-white hover:bg-royal-blue shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]"
                    : "bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10"
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

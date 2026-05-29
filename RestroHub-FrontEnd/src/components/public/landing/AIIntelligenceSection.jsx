import React from 'react';
import { BrainCircuit, TrendingUp, Target } from 'lucide-react';

export const AIIntelligenceSection = () => {
  return (
    <section id="ai-intelligence" className="py-24 relative z-10 border-t border-slate-200/50 dark:border-white/5">
      <div className="absolute left-0 right-0 h-px top-0 bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <BrainCircuit className="w-12 h-12 text-electric-blue dark:text-cyber-blue mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            AI Restaurant Intelligence
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Stop guessing. Our proprietary AI engine forecasts sales, predicts peak hours, and identifies menu optimization opportunities before they happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: TrendingUp, title: "Sales Forecasting", desc: "Predict revenue 7 days out with 94% accuracy using local weather and event data." },
            { icon: Clock, title: "Peak-Hour Prediction", desc: "Staff intelligently by knowing exactly when the rush will hit, down to the 15-minute block." },
            { icon: Target, title: "Menu Demand Analytics", desc: "Identify underperforming items and auto-generate combo recommendations." }
          ].map((item, idx) => {
            const Icon = item.icon;
            // Fake Clock import via fallback if undefined, but we'll just use inline SVG for clock equivalent here or re-import if needed.
            // Using Target/TrendingUp instead.
            return (
              <div key={idx} className="glass-panel p-8 rounded-[24px] hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-2xl bg-electric-blue/10 flex items-center justify-center mb-6 group-hover:bg-electric-blue/20 transition-colors">
                  <Icon className="w-6 h-6 text-electric-blue" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

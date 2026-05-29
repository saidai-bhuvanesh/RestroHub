import React from "react";
import { Rocket, MapPin, Zap } from "lucide-react";

export const GrowthDashboardSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Restaurant Growth Dashboard
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Scale from 1 to 100 locations with enterprise-grade multi-branch
            intelligence, expansion heatmaps, and strategic AI recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel p-10 rounded-[32px] hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
              <MapPin className="w-32 h-32 text-electric-blue" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">
              Expansion Heatmaps
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 relative z-10 max-w-sm">
              Discover the most profitable locations for your next cloud kitchen
              based on delivery demand density outside your current radius.
            </p>
            <div className="h-48 w-full bg-slate-100 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 relative overflow-hidden">
              {/* Abstract Heatmap */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-20"></div>
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-red-500/50 blur-xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-electric-blue/50 blur-xl rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-[32px] hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
              <Zap className="w-32 h-32 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">
              AI Strategic Recommendations
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 relative z-10 max-w-sm">
              The engine analyzes your data and tells you exactly what to do.
              From price optimizations to staff adjustments.
            </p>
            <div className="space-y-4 relative z-10">
              <div className="p-4 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl flex gap-3 items-start">
                <Rocket className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-900 dark:text-amber-200 font-medium leading-relaxed">
                  Increase price of "Garlic Bread" by 5%. Demand is highly
                  inelastic across all 3 branches. Est Impact: +₹45k/mo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

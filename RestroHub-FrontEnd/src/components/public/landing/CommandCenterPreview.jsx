import React from "react";
import { Activity, Clock, Users, ArrowUpRight } from "lucide-react";

export const CommandCenterPreview = () => {
  return (
    <section id="command-center" className="py-16 md:py-24 lg:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:w-2/3">
          <h2 className="text-electric-blue dark:text-cyber-blue font-bold tracking-wide uppercase text-sm mb-3">
            Live Operations
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Realtime Command Center
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Monitor everything from live kitchen queues to live revenue pulses
            in one seamless, glassmorphic interface designed for elite
            operational awareness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-panel p-8 rounded-[28px] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] hover:border-electric-purple/50">
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Activity className="w-24 h-24 text-electric-cyan" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Live Order Feed
            </h4>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-sm">
              Sub-second synchronization across all branches and tables.
            </p>

            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      Order #{1024 + i}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-electric-blue dark:text-cyber-blue flex items-center gap-1">
                    ₹{850 + i * 120} <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-panel p-8 rounded-[28px] hover:-translate-y-2 transition-all duration-500 h-1/2 flex flex-col justify-center relative overflow-hidden hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] hover:border-electric-cyan/50 group">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-electric-cyan/20 blur-xl rounded-full group-hover:bg-electric-cyan/40 transition-colors"></div>
              <Clock className="w-8 h-8 text-electric-cyan mb-4 group-hover:animate-pulse" />
              <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-1">
                12m
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Avg Kitchen Queue
              </p>
            </div>

            <div className="glass-panel p-8 rounded-[28px] hover:-translate-y-2 transition-all duration-500 h-1/2 flex flex-col justify-center relative overflow-hidden hover:shadow-[0_0_50px_rgba(236,72,153,0.3)] hover:border-electric-pink/50 group">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-electric-pink/20 blur-xl rounded-full group-hover:bg-electric-pink/40 transition-colors"></div>
              <Users className="w-8 h-8 text-electric-pink mb-4 group-hover:animate-pulse" />
              <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-1">
                85%
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                Live Occupancy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

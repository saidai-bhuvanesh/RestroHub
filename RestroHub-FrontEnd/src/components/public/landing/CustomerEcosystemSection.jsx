import React from 'react';
import { LineChart } from 'lucide-react';
import { landingData } from '../../../data/landingData';

export const CustomerEcosystemSection = () => {
  return (
    <section id="ecosystem" className="py-16 md:py-24 lg:py-32 relative z-10 bg-slate-50/50 dark:bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-electric-blue dark:text-cyber-blue font-bold tracking-wide uppercase text-sm">
              Engagement
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Customer Engagement Ecosystem
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Turn first-time diners into lifelong regulars. Automatically build
              rich customer profiles, track loyalty, and analyze satisfaction
              across every branch.
            </p>

            <ul className="space-y-6">
              {landingData.ecosystemFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="mt-1 bg-electric-blue/10 rounded-full p-2">
                      <Icon className="w-5 h-5 text-electric-blue" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full relative">
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-rose-500/20 blur-[80px] rounded-full"></div>

            <div className="relative glass-panel rounded-[32px] p-8 border border-white/20 shadow-2xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Loyalty Pulse
                </h4>
                <LineChart className="w-5 h-5 text-electric-blue" />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      Repeat Rate
                    </p>
                    <p className="text-4xl font-black text-slate-900 dark:text-white mt-1">
                      42.8%
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 rounded-full text-sm font-bold">
                    +5.2%
                  </div>
                </div>

                {/* Simulated Chart */}
                <div className="h-32 w-full flex items-end justify-between gap-2 pt-6 border-b border-slate-200 dark:border-white/10">
                  {[40, 55, 45, 70, 65, 85, 90].map((h, i) => (
                    <div
                      key={i}
                      className="w-full bg-electric-blue/20 rounded-t-md relative group"
                    >
                      <div
                        className="absolute bottom-0 w-full bg-electric-blue rounded-t-md transition-all duration-500 group-hover:bg-cyber-blue"
                        style={{ height: `${h}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

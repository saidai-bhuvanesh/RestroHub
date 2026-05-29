import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60 dark:opacity-80">
        <div className="w-[800px] h-[800px] bg-electric-purple/20 dark:bg-electric-purple/30 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] bg-electric-cyan/20 dark:bg-cyber-neon/30 blur-[100px] rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute w-[700px] h-[700px] bg-electric-pink/10 dark:bg-cyber-magenta/20 blur-[120px] rounded-full animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-blue/20 bg-electric-blue/5 backdrop-blur-md mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-electric-blue dark:text-cyber-blue" />
          <span className="text-sm font-semibold text-slate-800 dark:text-blue-100 tracking-wide">
            Introducing Restroly Intelligence Engine 2.0
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black tracking-[-0.04em] leading-[0.95] text-slate-900 dark:text-white mb-8 animate-fade-in-up"
          style={{ animationDelay: "100ms" }}
        >
          Run your restaurant like a{" "}
          <span className="premium-gradient-text block mt-2 drop-shadow-[0_0_40px_rgba(168,85,247,0.5)]">
            Technology Company.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-12 animate-fade-in-up leading-[1.8]"
          style={{ animationDelay: "200ms" }}
        >
          The world’s most advanced AI-powered ecosystem for restaurant
          operations, analytics, growth forecasting, and seamless customer
          experiences.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <Link
            to="/admin"
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-electric-blue px-8 py-4 text-lg font-bold text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            <span>Deploy Ecosystem</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-white/40 transition-all"></div>
          </Link>

          <button className="group inline-flex items-center gap-3 rounded-full bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 px-8 py-4 text-lg font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 hover:border-electric-blue dark:hover:border-cyber-blue transition-all duration-300 hover:-translate-y-1">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-electric-blue dark:text-white group-hover:bg-electric-blue group-hover:text-white transition-colors">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </div>
            Watch Keynote
          </button>
        </div>
      </div>

      {/* Dashboard Preview Abstract */}
      <div
        className="relative mt-24 w-full max-w-6xl mx-auto px-6 animate-fade-in-up"
        style={{ animationDelay: "500ms" }}
      >
        <div className="aspect-[21/9] rounded-[2rem] glass-panel neon-border overflow-hidden bg-slate-900 relative flex items-center justify-center group hover:shadow-[0_0_80px_rgba(6,182,212,0.3)] transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 pointer-events-none"></div>
          {/* Abstract visual representation of a dashboard */}
          <div className="w-full h-full p-8 grid grid-cols-3 gap-6 opacity-80 group-hover:opacity-100 transition-opacity duration-700 relative z-10">
            <div className="col-span-2 flex flex-col space-y-6">
              {/* Top Header / Metrics */}
              <div className="flex justify-between items-center bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-electric-cyan/20 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-electric-cyan animate-pulse"></div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-bold tracking-wider mb-1">
                      TOTAL REVENUE
                    </div>
                    <div className="text-xl font-black text-white">
                      ₹1,24,500
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-16 bg-green-400/50 rounded-full"></div>
                  <div className="h-2 w-8 bg-electric-cyan/50 rounded-full"></div>
                </div>
              </div>

              {/* Main Chart Area */}
              <div className="flex-1 w-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-electric-cyan/20 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-electric-purple/10 blur-[50px] rounded-full pointer-events-none"></div>
                <div className="text-sm font-bold text-slate-300 mb-4 z-10">
                  Live Order Volume
                </div>

                {/* Fake Chart Lines */}
                <div className="flex-1 flex items-end justify-between gap-3 z-10">
                  {[30, 50, 40, 70, 60, 90, 80, 100, 85, 110, 95].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="w-full bg-electric-cyan/10 rounded-t-sm relative group cursor-pointer hover:bg-electric-cyan/30 transition-colors"
                      >
                        <div
                          className="absolute bottom-0 w-full bg-gradient-to-t from-electric-cyan to-electric-purple rounded-t-sm"
                          style={{ height: `${h}%` }}
                        ></div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Bottom Small Cards */}
              <div className="grid grid-cols-3 gap-4 h-24">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-center">
                  <div className="text-xs text-slate-400 mb-1">
                    Active Orders
                  </div>
                  <div className="text-lg font-bold text-white flex justify-between items-center">
                    42 <span className="text-green-400 text-xs">+12%</span>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-center">
                  <div className="text-xs text-slate-400 mb-1">
                    Avg Ticket Size
                  </div>
                  <div className="text-lg font-bold text-white flex justify-between items-center">
                    ₹850 <span className="text-green-400 text-xs">+5%</span>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-center">
                  <div className="text-xs text-slate-400 mb-1">
                    Kitchen Queue
                  </div>
                  <div className="text-lg font-bold text-white flex justify-between items-center">
                    12m <span className="text-rose-400 text-xs">-2m</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="flex flex-col space-y-6">
              <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden flex flex-col">
                <div className="text-sm font-bold text-slate-300 mb-6">
                  Recent Activity
                </div>
                <div className="space-y-4 flex-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-electric-purple/20 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-electric-purple animate-pulse"></div>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 w-3/4 bg-white/20 rounded-full mb-2"></div>
                        <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Neon Glow in Sidebar */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-electric-pink/20 blur-3xl rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-white font-medium shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-shadow cursor-pointer">
              Explore the Command Center
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

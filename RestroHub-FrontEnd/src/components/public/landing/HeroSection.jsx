import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center min-h-[90vh]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40 dark:opacity-60">
        <div className="w-[800px] h-[800px] bg-electric-blue/20 dark:bg-royal-blue/30 blur-[120px] rounded-full animate-blob"></div>
        <div className="absolute w-[600px] h-[600px] bg-cyan-400/20 dark:bg-cyber-blue/20 blur-[100px] rounded-full animate-blob animation-delay-2000"></div>
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
        <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black tracking-[-0.04em] leading-[0.95] text-slate-900 dark:text-white mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Run your restaurant like a{' '}
          <span className="premium-gradient-text block mt-2 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            Technology Company.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-12 animate-fade-in-up leading-[1.8]" style={{ animationDelay: '200ms' }}>
          The world’s most advanced AI-powered ecosystem for restaurant operations, analytics, growth forecasting, and seamless customer experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-6 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
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
      <div className="relative mt-24 w-full max-w-6xl mx-auto px-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
        <div className="aspect-[21/9] rounded-[2rem] glass-panel overflow-hidden border border-white/20 dark:border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] bg-slate-900 relative flex items-center justify-center group">
           <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 pointer-events-none"></div>
           {/* Abstract visual representation of a dashboard */}
           <div className="w-full h-full p-8 grid grid-cols-3 gap-6 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
             <div className="col-span-2 space-y-6">
                <div className="h-12 w-1/3 bg-white/5 rounded-xl animate-pulse"></div>
                <div className="h-64 w-full bg-gradient-to-br from-electric-blue/20 to-transparent border border-electric-blue/30 rounded-2xl"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-32 bg-white/5 rounded-xl"></div>
                  <div className="h-32 bg-white/5 rounded-xl"></div>
                  <div className="h-32 bg-white/5 rounded-xl"></div>
                </div>
             </div>
             <div className="space-y-6">
                <div className="h-[400px] w-full bg-white/5 rounded-2xl border border-white/10"></div>
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

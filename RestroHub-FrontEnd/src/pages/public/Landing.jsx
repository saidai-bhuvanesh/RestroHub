import React, { useState } from 'react';
import { PremiumNavbar } from '../../components/public/landing/PremiumNavbar';
import { HeroSection } from '../../components/public/landing/HeroSection';
import { CommandCenterPreview } from '../../components/public/landing/CommandCenterPreview';
import { AIIntelligenceSection } from '../../components/public/landing/AIIntelligenceSection';
import { CustomerEcosystemSection } from '../../components/public/landing/CustomerEcosystemSection';
import { GrowthDashboardSection } from '../../components/public/landing/GrowthDashboardSection';
import { IntegrationSection } from '../../components/public/landing/IntegrationSection';
import { TestimonialsSection } from '../../components/public/landing/TestimonialsSection';
import { PremiumPricing } from '../../components/public/landing/PremiumPricing';
import { PremiumFooter } from '../../components/public/landing/PremiumFooter';

const Landing = () => {
  const [activeLink, setActiveLink] = useState('#');

  return (
    <div className="min-h-screen bg-premium-dark text-slate-900 dark:text-slate-100 relative selection:bg-electric-blue/30 selection:text-electric-blue">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 z-50 noise-overlay pointer-events-none mix-blend-overlay opacity-[0.15]"></div>
      
      <PremiumNavbar activeLink={activeLink} setActiveLink={setActiveLink} />
      
      <main className="relative bg-white dark:bg-transparent transition-colors duration-500">
        <HeroSection />
        
        {/* Infinite Neon Marquee */}
        <div className="w-full bg-electric-cyan/10 border-y border-electric-cyan/20 py-4 overflow-hidden relative flex items-center shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
          <div className="flex w-max animate-marquee space-x-16 items-center">
             {[...Array(10)].map((_, i) => (
               <div key={i} className="flex items-center space-x-16">
                 <span className="text-electric-cyan/80 font-black tracking-widest uppercase text-sm">Trusted by 500+ Premium Restaurants</span>
                 <span className="text-electric-purple/50">✦</span>
                 <span className="text-electric-pink/80 font-black tracking-widest uppercase text-sm">Processing ₹10M+ Daily Volume</span>
                 <span className="text-electric-purple/50">✦</span>
               </div>
             ))}
          </div>
        </div>

        <CommandCenterPreview />
        <AIIntelligenceSection />
        <CustomerEcosystemSection />
        <GrowthDashboardSection />
        <IntegrationSection />
        <TestimonialsSection />
        <PremiumPricing />
      </main>

      <PremiumFooter />
    </div>
  );
};

export default Landing;
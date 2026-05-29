import React, { useState } from 'react';
import { PremiumNavbar } from '../../components/public/landing/PremiumNavbar';
import { HeroSection } from '../../components/public/landing/HeroSection';
import { CommandCenterPreview } from '../../components/public/landing/CommandCenterPreview';
import { AIIntelligenceSection } from '../../components/public/landing/AIIntelligenceSection';
import { CustomerEcosystemSection } from '../../components/public/landing/CustomerEcosystemSection';
import { GrowthDashboardSection } from '../../components/public/landing/GrowthDashboardSection';
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
        <CommandCenterPreview />
        <AIIntelligenceSection />
        <CustomerEcosystemSection />
        <GrowthDashboardSection />
        <PremiumPricing />
      </main>

      <PremiumFooter />
    </div>
  );
};

export default Landing;
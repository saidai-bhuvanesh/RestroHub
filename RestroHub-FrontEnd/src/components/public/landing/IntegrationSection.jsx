import React from 'react';

export const IntegrationSection = () => {
  const integrations = [
    { name: "Swiggy", icon: "S" },
    { name: "Zomato", icon: "Z" },
    { name: "Razorpay", icon: "R" },
    { name: "Stripe", icon: "St" },
    { name: "PetPooja", icon: "P" },
    { name: "DotPe", icon: "D" },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 relative z-10 border-t border-slate-200/50 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-electric-cyan dark:text-cyber-cyan font-bold tracking-wide uppercase text-sm mb-4">Ecosystem Integrations</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">
          Plays nice with your existing stack.
        </h3>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-16">
          Zero friction. Connect your POS, payment gateways, and delivery aggregators in one click.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
          {integrations.map((integration, idx) => (
            <div key={idx} className="group relative flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-24 md:h-24 glass-panel rounded-[24px] flex items-center justify-center text-3xl font-black text-slate-400 dark:text-slate-500 group-hover:text-electric-cyan transition-colors group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:-translate-y-2 duration-300">
                {integration.icon}
              </div>
              <span className="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-electric-cyan transition-colors">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

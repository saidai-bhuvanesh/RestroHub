import React from 'react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Restroly’s AI forecasting completely changed how we staff our weekends. We've cut labor costs by 18% while serving 30% more guests.",
      author: "Rajiv M.",
      role: "Owner, Spice Route Chain",
    },
    {
      quote: "The multi-branch command center is like having a superpower. I can see the live kitchen queue in Mumbai while sitting in my Delhi office.",
      author: "Priya S.",
      role: "Operations Director, The Cloud Kitchen Co.",
    },
    {
      quote: "Our customer repeat rate jumped from 22% to 41% in three months after enabling the automated loyalty ecosystem.",
      author: "Amit K.",
      role: "Founder, Burger Bros",
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 relative z-10 border-t border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Trusted by Top Operators
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the restaurant owners who are scaling faster with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-[32px] hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between">
              <div className="mb-8">
                <div className="flex gap-1 mb-6 text-electric-pink">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg font-medium leading-relaxed">
                  "{test.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-cyan to-electric-purple p-1">
                   <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center font-bold text-white">
                     {test.author.charAt(0)}
                   </div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">{test.author}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

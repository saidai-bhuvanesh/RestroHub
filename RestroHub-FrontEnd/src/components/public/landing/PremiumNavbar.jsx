import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@context/ThemeContext';
import { UtensilsCrossed, Menu, X, ChevronRight } from 'lucide-react';

export const PremiumNavbar = ({ activeLink, setActiveLink }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Intelligence', href: '#ai-intelligence' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl border-b border-gray-200/50 shadow-sm dark:bg-[#0a0f1e]/80 dark:border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-24'}`}>
          
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-electric-blue to-royal-blue shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all">
              <UtensilsCrossed className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Restro<span className="text-blue-600 dark:text-blue-500">ly</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 rounded-full bg-slate-100/50 dark:bg-white/5 px-6 py-2 backdrop-blur-md border border-slate-200/50 dark:border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`text-sm font-medium transition-all hover:text-electric-blue dark:hover:text-cyber-blue ${
                    activeLink === link.href ? 'text-electric-blue dark:text-cyber-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggle}
              className="p-2 text-slate-600 hover:text-electric-blue dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
            <Link to="/login" className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-electric-blue dark:hover:text-cyber-blue transition-colors">
              Log In
            </Link>
            <Link to="/admin" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white dark:bg-white/10 px-6 py-2.5 text-sm font-semibold text-slate-900 dark:text-white backdrop-blur-md border border-slate-200 dark:border-white/20 hover:border-electric-blue dark:hover:border-cyber-blue hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-electric-blue/0 via-electric-blue/10 to-electric-blue/0 group-hover:animate-shimmer-fast"></div>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-slate-900 dark:text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#020617] border-b border-slate-200 dark:border-white/10 p-6 absolute w-full backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-900 dark:text-white">
                {link.label}
              </a>
            ))}
            <hr className="border-slate-200 dark:border-white/10 my-2" />
            <Link to="/login" className="text-lg font-medium text-slate-900 dark:text-white">Log In</Link>
            <Link to="/admin" className="flex items-center justify-between text-lg font-bold text-electric-blue dark:text-cyber-blue">
              Get Started <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

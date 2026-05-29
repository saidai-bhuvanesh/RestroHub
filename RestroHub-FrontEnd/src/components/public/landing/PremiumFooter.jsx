import React from "react";
import { UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

export const PremiumFooter = () => (
  <footer className="relative border-t border-slate-200/50 bg-white dark:border-white/10 dark:bg-[#020617] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-electric-blue/5 pointer-events-none"></div>
    <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric-blue shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <UtensilsCrossed className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-extrabold text-slate-900 dark:text-white">
              Restro<span className="text-electric-blue">ly</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            The intelligent operating system for modern premium restaurants.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
            Platform
          </h4>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <a
                href="#command-center"
                className="hover:text-electric-blue transition-colors"
              >
                Command Center
              </a>
            </li>
            <li>
              <a
                href="#ai-intelligence"
                className="hover:text-electric-blue transition-colors"
              >
                AI Intelligence
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-electric-blue transition-colors"
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <a
                href="#"
                className="hover:text-electric-blue transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-electric-blue transition-colors"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-electric-blue transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
            Legal
          </h4>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li>
              <a
                href="#"
                className="hover:text-electric-blue transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-electric-blue transition-colors"
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-slate-200/50 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} Restroly Inc. All rights reserved.
        </p>
        <div className="flex gap-4">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse mt-1.5"></span>
          <span className="text-sm text-slate-500 dark:text-slate-500">
            All systems operational
          </span>
        </div>
      </div>
    </div>
  </footer>
);

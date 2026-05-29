import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';
import { Gift, Zap } from 'lucide-react';

export const PersonalizedOfferEngine = () => {
  const campaigns = [
    { target: 'Inactive > 30 days', offer: 'Free Dessert with any Main', estConversion: '14%', cost: '₹2,500' },
    { target: 'High Spenders', offer: 'Complimentary Wine Glass', estConversion: '45%', cost: '₹4,000' },
    { target: 'Weekend Regulars', offer: 'Early Access New Menu', estConversion: '60%', cost: '₹0' },
  ];

  return (
    <BaseAnalyticsCard title="AI Offer Recommendations" subtitle="Auto-generated based on segment behavior">
      <div className="space-y-4">
        {campaigns.map((camp, idx) => (
          <div key={idx} className="p-4 border border-indigo-100 bg-indigo-50/30 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded-full mb-2 inline-block">
                  Target: {camp.target}
                </span>
                <h4 className="font-semibold text-gray-800 text-sm flex items-center gap-2">
                  <Gift size={14} className="text-indigo-500" /> {camp.offer}
                </h4>
              </div>
              <button className="flex items-center gap-1 text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-indigo-700 transition-colors shadow-sm">
                <Zap size={12} /> Launch
              </button>
            </div>
            <div className="flex justify-between items-center mt-4 border-t border-indigo-100/50 pt-2 text-xs text-gray-500">
              <span>Est. Conversion: <span className="font-semibold text-gray-700">{camp.estConversion}</span></span>
              <span>Campaign Cost: <span className="font-semibold text-gray-700">{camp.cost}</span></span>
            </div>
          </div>
        ))}
      </div>
    </BaseAnalyticsCard>
  );
};

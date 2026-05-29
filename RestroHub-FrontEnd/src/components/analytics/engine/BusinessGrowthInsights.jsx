import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';
import { Lightbulb, Target, AlertTriangle } from 'lucide-react';

export const BusinessGrowthInsights = () => {
  const insights = [
    {
      icon: Lightbulb,
      color: 'text-yellow-500 bg-yellow-100',
      title: 'Menu Optimization Opportunity',
      description: 'Your "Paneer Tikka Masala" has high demand but low margin. Consider a 5% price increase; AI predicts less than 2% drop in volume.'
    },
    {
      icon: Target,
      color: 'text-blue-500 bg-blue-100',
      title: 'Customer Retention Target',
      description: 'Repeat customer rate dropped by 3% this week. A targeted SMS campaign to customers inactive for 14 days is recommended.'
    },
    {
      icon: AlertTriangle,
      color: 'text-red-500 bg-red-100',
      title: 'Inventory Alert',
      description: 'Based on upcoming forecasted demand, you will run out of "Mozzarella Cheese" by Saturday evening. Reorder immediately.'
    }
  ];

  return (
    <BaseAnalyticsCard title="AI Growth & Strategy Insights">
      <div className="space-y-4 mt-2">
        {insights.map((insight, idx) => (
          <div key={idx} className="flex gap-4 items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0">
            <div className={`p-2 rounded-lg shrink-0 ${insight.color}`}>
              <insight.icon size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">{insight.title}</h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">{insight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </BaseAnalyticsCard>
  );
};

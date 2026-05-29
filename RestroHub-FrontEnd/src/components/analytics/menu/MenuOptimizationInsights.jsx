import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';

export const MenuOptimizationInsights = () => {
  return (
    <BaseAnalyticsCard title="Menu Optimization Insights">
      <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
        <li>Increase price of <b>Garlic Bread</b> by 5% (high inelastic demand).</li>
        <li>Remove <b>Veg Sandwich</b> (low volume, high prep time).</li>
      </ul>
    </BaseAnalyticsCard>
  );
};

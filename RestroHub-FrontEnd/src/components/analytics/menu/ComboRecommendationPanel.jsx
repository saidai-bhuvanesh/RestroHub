import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';

export const ComboRecommendationPanel = () => {
  return (
    <BaseAnalyticsCard title="AI Combo Recommendations">
      <div className="space-y-3">
        <div className="p-3 bg-purple-50 rounded border border-purple-100">
          <h4 className="font-bold text-purple-800 text-sm">Spicy Veg Pizza + Coke</h4>
          <p className="text-xs text-purple-600">High co-occurrence. Bundle for 10% off to increase order value.</p>
        </div>
      </div>
    </BaseAnalyticsCard>
  );
};

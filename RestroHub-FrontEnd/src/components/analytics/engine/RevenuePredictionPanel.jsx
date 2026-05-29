import React from 'react';
import { BaseMetricPanel } from '../BaseMetricPanel';
import { TrendingUp } from 'lucide-react';

export const RevenuePredictionPanel = () => {
  // Mock prediction values
  const predictedRevenue = 145000;
  const currentPacing = 125000;
  
  return (
    <div className="space-y-4">
      <BaseMetricPanel 
        title="Predicted Weekly Revenue (AI)"
        value={predictedRevenue}
        previousValue={currentPacing}
        type="currency"
        currency="INR"
      />
      <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100 flex items-start gap-3">
        <TrendingUp className="text-emerald-500 mt-0.5 shrink-0" size={20} />
        <div>
          <h4 className="text-emerald-800 font-semibold text-sm">AI Revenue Insight</h4>
          <p className="text-emerald-600 text-xs mt-1">Based on upcoming local events and historical weekend trends, we project a 16% increase in dinner service revenue this Friday.</p>
        </div>
      </div>
    </div>
  );
};

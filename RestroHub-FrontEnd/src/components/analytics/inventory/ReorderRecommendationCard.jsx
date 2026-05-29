import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';
import { ShoppingCart } from 'lucide-react';

export const ReorderRecommendationCard = () => {
  const recommendations = [
    { item: 'All Purpose Flour', amount: '50 kg', supplier: 'Metro Wholesale', confidence: '98%' },
    { item: 'Canned Tomatoes', amount: '20 cases', supplier: 'FreshFarm Co.', confidence: '92%' },
  ];

  return (
    <BaseAnalyticsCard title="AI Reorder Recommendations">
      <div className="space-y-4">
        {recommendations.map((rec, idx) => (
          <div key={idx} className="flex justify-between items-center p-4 bg-blue-50/50 rounded-lg border border-blue-100">
            <div>
              <h4 className="font-semibold text-gray-800 text-sm">{rec.item}</h4>
              <p className="text-xs text-gray-500 mt-1">Suggested: {rec.amount} from {rec.supplier}</p>
            </div>
            <div className="text-right flex flex-col items-end">
              <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-full mb-2">
                {rec.confidence} Match
              </span>
              <button className="flex items-center gap-1 text-xs bg-white border border-gray-200 shadow-sm hover:bg-gray-50 px-3 py-1.5 rounded-md font-medium text-gray-700 transition-colors">
                <ShoppingCart size={12} /> Auto-Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </BaseAnalyticsCard>
  );
};

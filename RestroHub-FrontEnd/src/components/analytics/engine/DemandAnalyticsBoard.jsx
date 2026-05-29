import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';
import { motion } from 'framer-motion';

export const DemandAnalyticsBoard = () => {
  const trendingItems = [
    { name: 'Spicy Veg Pizza', trend: '+24%', count: 142 },
    { name: 'Cold Coffee', trend: '+18%', count: 189 },
    { name: 'Garlic Bread', trend: '+12%', count: 95 },
  ];

  const decliningItems = [
    { name: 'Tomato Soup', trend: '-15%', count: 24 },
    { name: 'Veg Sandwich', trend: '-8%', count: 41 },
  ];

  return (
    <BaseAnalyticsCard title="Menu Demand Shifts">
      <div className="grid grid-cols-2 gap-4">
        {/* Trending Up */}
        <div>
          <h4 className="text-xs font-semibold text-emerald-600 mb-3 uppercase tracking-wider">Rising Demand</h4>
          <div className="space-y-2">
            {trendingItems.map((item, i) => (
              <div key={i} className="flex justify-between items-center bg-gray-50 p-2 rounded text-sm">
                <span className="font-medium text-gray-700">{item.name}</span>
                <div className="text-right">
                  <span className="text-emerald-500 font-bold">{item.trend}</span>
                  <span className="text-gray-400 text-xs ml-2">({item.count})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Down */}
        <div>
          <h4 className="text-xs font-semibold text-rose-600 mb-3 uppercase tracking-wider">Declining Demand</h4>
          <div className="space-y-2">
            {decliningItems.map((item, i) => (
              <div key={i} className="flex justify-between items-center bg-gray-50 p-2 rounded text-sm">
                <span className="font-medium text-gray-700">{item.name}</span>
                <div className="text-right">
                  <span className="text-rose-500 font-bold">{item.trend}</span>
                  <span className="text-gray-400 text-xs ml-2">({item.count})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseAnalyticsCard>
  );
};

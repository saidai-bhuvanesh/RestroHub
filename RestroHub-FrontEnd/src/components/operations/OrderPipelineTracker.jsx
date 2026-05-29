import React from 'react';
import { BaseAnalyticsCard } from '../analytics/BaseAnalyticsCard';
import { motion } from 'framer-motion';

export const OrderPipelineTracker = () => {
  const stages = [
    { label: 'Received', count: 12, color: 'bg-blue-500' },
    { label: 'Preparing', count: 8, color: 'bg-yellow-500' },
    { label: 'Ready', count: 4, color: 'bg-green-500' },
    { label: 'Out for Delivery', count: 6, color: 'bg-purple-500' }
  ];

  const total = stages.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <BaseAnalyticsCard title="Order Pipeline Tracker" subtitle="Active orders by stage">
      <div className="mt-4">
        {/* Progress Bar */}
        <div className="flex h-4 rounded-full overflow-hidden bg-gray-100 mb-6">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ width: 0 }}
              animate={{ width: `${(stage.count / total) * 100}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={`${stage.color}`}
              title={`${stage.label}: ${stage.count}`}
            />
          ))}
        </div>
        
        {/* Legend */}
        <div className="grid grid-cols-2 gap-4">
          {stages.map((stage, i) => (
            <div key={i} className="flex items-center justify-between p-2 rounded bg-gray-50 border border-gray-100">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                <span className="text-xs font-medium text-gray-700">{stage.label}</span>
              </div>
              <span className="font-bold text-gray-900 text-sm">{stage.count}</span>
            </div>
          ))}
        </div>
      </div>
    </BaseAnalyticsCard>
  );
};

import React, { useState, useEffect } from 'react';
import { BaseAnalyticsCard } from '../analytics/BaseAnalyticsCard';
import { motion } from 'framer-motion';

const INITIAL_QUEUE = [
  { id: 'T-4', item: 'Spicy Veg Pizza', priority: 'high', waitTime: 12 },
  { id: 'T-7', item: 'Paneer Tikka', priority: 'medium', waitTime: 8 },
  { id: 'D-12', item: 'Cold Coffee (x2)', priority: 'low', waitTime: 3 },
];

export const KitchenQueueBoard = () => {
  const [queue, setQueue] = useState(INITIAL_QUEUE);

  // Simulate queue updates
  useEffect(() => {
    const timer = setInterval(() => {
      setQueue(prev => prev.map(item => ({ ...item, waitTime: item.waitTime + 1 })));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <BaseAnalyticsCard title="Active Kitchen Queue" subtitle={`${queue.length} items preparing`}>
      <div className="space-y-3">
        {queue.map((item) => (
          <motion.div 
            key={item.id}
            layout
            className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-10 rounded-full ${item.priority === 'high' ? 'bg-red-500' : item.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'}`} />
              <div>
                <span className="font-bold text-gray-800 text-sm">{item.id}</span>
                <p className="text-xs text-gray-600 font-medium">{item.item}</p>
              </div>
            </div>
            <div className="text-right">
              <span className={`text-sm font-bold ${item.waitTime > 15 ? 'text-red-600' : 'text-gray-700'}`}>
                {item.waitTime}m
              </span>
              <p className="text-[10px] text-gray-400 uppercase">Wait Time</p>
            </div>
          </motion.div>
        ))}
      </div>
    </BaseAnalyticsCard>
  );
};

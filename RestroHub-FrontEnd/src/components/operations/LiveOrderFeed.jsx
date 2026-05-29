import React from 'react';
import { BaseRealtimeFeed } from '../analytics/BaseRealtimeFeed';
import { timeAgo, getColorForStatus } from '../../utils/analytics/analyticsHelpers';

const MOCK_INITIAL_ORDERS = [
  { id: 'ORD-101', item: 'Spicy Veg Pizza, Garlic Bread', status: 'preparing', time: new Date(Date.now() - 300000).toISOString(), amount: 450 },
  { id: 'ORD-102', item: 'Paneer Tikka Masala', status: 'pending', time: new Date(Date.now() - 60000).toISOString(), amount: 320 },
];

export const LiveOrderFeed = () => {
  const fetchInitialData = async () => MOCK_INITIAL_ORDERS;
  
  const setupSubscription = (onNewItem) => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        onNewItem({
          id: `ORD-${Math.floor(Math.random() * 900) + 100}`,
          item: ['Margherita Pizza', 'Veg Burger', 'Pasta Alfredo', 'Cold Coffee'][Math.floor(Math.random() * 4)],
          status: 'pending',
          time: new Date().toISOString(),
          amount: Math.floor(Math.random() * 500) + 100
        });
      }
    }, 5000);
    return { unsubscribe: () => clearInterval(interval) };
  };

  return (
    <BaseRealtimeFeed
      title="Live Order Stream"
      fetchInitialData={fetchInitialData}
      setupSubscription={setupSubscription}
      maxItems={8}
      renderItem={(order) => (
        <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800 text-sm">{order.id}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${getColorForStatus(order.status)}`}>
                {order.status.toUpperCase()}
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-1">{order.item}</p>
          </div>
          <div className="text-right">
            <span className="font-bold text-gray-900 text-sm">₹{order.amount}</span>
            <p className="text-[10px] text-gray-400 mt-1">{timeAgo(order.time)}</p>
          </div>
        </div>
      )}
    />
  );
};

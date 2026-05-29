import React from 'react';
import { BaseRealtimeFeed } from '../analytics/BaseRealtimeFeed';
import { timeAgo, getColorForStatus } from '../../utils/analytics/analyticsHelpers';
import { liveOrderFeedMock } from '../../data/mock/analyticsData';

export const LiveOrderFeed = React.memo(() => {
  const fetchInitialData = async () => liveOrderFeedMock.slice(0, 2);
  
  const setupSubscription = (onNewItem) => {
    let index = 2;
    const interval = setInterval(() => {
      if (index < liveOrderFeedMock.length) {
        onNewItem(liveOrderFeedMock[index]);
        index++;
      } else {
        // Loop back for infinite mock stream
        index = 0;
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
});

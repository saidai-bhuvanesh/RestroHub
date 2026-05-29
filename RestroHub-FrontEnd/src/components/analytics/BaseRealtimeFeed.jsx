import React, { useEffect, useState, useRef } from 'react';
import { BaseAnalyticsCard } from './BaseAnalyticsCard';

export const BaseRealtimeFeed = ({ title, fetchInitialData, setupSubscription, renderItem, maxItems = 10, emptyMessage = "No activity." }) => {
  const [items, setItems] = useState([]);
  const subscriptionRef = useRef(null);

  useEffect(() => {
    // Initial fetch
    if (fetchInitialData) {
      Promise.resolve(fetchInitialData()).then(data => {
        if(data) setItems(data.slice(0, maxItems));
      });
    }

    // Subscribe to stream
    if (setupSubscription) {
      subscriptionRef.current = setupSubscription((newItem) => {
        setItems(prev => [newItem, ...prev].slice(0, maxItems));
      });
    }

    return () => {
      if (subscriptionRef.current && typeof subscriptionRef.current.unsubscribe === 'function') {
        subscriptionRef.current.unsubscribe();
      }
    };
  }, [fetchInitialData, setupSubscription, maxItems]);

  return (
    <BaseAnalyticsCard title={title} headerAction={<span className="flex h-3 w-3" role="status" aria-label="Live updates active"><span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span></span>}>
      <div className="space-y-3" role="feed" aria-live="polite">
          {items.length === 0 ? (
            <div className="text-sm text-gray-500 py-4 text-center">{emptyMessage}</div>
          ) : (
            items.map((item, index) => (
              <div
                key={item.id || index}
                className="animate-fade-in-up will-change-transform"
                role="article"
              >
                {renderItem(item)}
              </div>
            ))
          )}
      </div>
    </BaseAnalyticsCard>
  );
};

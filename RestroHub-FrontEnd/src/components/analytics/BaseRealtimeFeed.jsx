import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <BaseAnalyticsCard title={title} headerAction={<span className="flex h-3 w-3"><span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span></span>}>
      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {items.length === 0 ? (
            <div className="text-sm text-gray-500 py-4 text-center">{emptyMessage}</div>
          ) : (
            items.map((item, index) => (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, height: 0, scale: 0.95 }}
                animate={{ opacity: 1, height: 'auto', scale: 1 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                layout
              >
                {renderItem(item)}
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </BaseAnalyticsCard>
  );
};

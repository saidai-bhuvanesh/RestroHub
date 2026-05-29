import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';

export const PaymentMonitoringBoard = () => (
  <BaseAnalyticsCard title="Realtime Payment Feed">
    <div className="space-y-2 text-sm text-gray-700">
      <div className="flex justify-between bg-emerald-50 p-2 rounded"><span>Order #104</span><span>₹1,200 (UPI - Success)</span></div>
      <div className="flex justify-between bg-red-50 p-2 rounded"><span>Order #105</span><span>₹850 (Card - Failed)</span></div>
      <div className="flex justify-between bg-emerald-50 p-2 rounded"><span>Order #106</span><span>₹2,400 (Cash)</span></div>
    </div>
  </BaseAnalyticsCard>
);

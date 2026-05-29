import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';

export const DeliveryTimeline = () => (
  <BaseAnalyticsCard title="Delivery Timeline">
    <div className="space-y-2 text-sm text-gray-600">
      <div>Order #102: Preparing (10m)</div>
      <div>Order #101: Out for delivery (5m away)</div>
    </div>
  </BaseAnalyticsCard>
);

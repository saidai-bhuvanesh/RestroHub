import React from 'react';
import { LiveDeliveryTracker } from '../components/analytics/delivery/LiveDeliveryTracker';
import { DeliveryTimeline } from '../components/analytics/delivery/DeliveryTimeline';
import { ETAForecastCard } from '../components/analytics/delivery/ETAForecastCard';
import { DeliveryPerformancePanel } from '../components/analytics/delivery/DeliveryPerformancePanel';

export const DeliveryPlatformDashboard = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <div className="mb-8"><h1 className="text-2xl font-bold text-gray-900">Delivery Tracking</h1></div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8"><LiveDeliveryTracker /></div>
      <div className="lg:col-span-4"><ETAForecastCard /><div className="mt-6"><DeliveryTimeline /></div></div>
      <div className="lg:col-span-12"><DeliveryPerformancePanel /></div>
    </div>
  </div>
);

export default DeliveryPlatformDashboard;

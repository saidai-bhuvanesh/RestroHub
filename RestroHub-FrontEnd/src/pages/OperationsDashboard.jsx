import React from 'react';
import { motion } from 'framer-motion';
import { LiveOrderFeed } from '../components/operations/LiveOrderFeed';
import { KitchenQueueBoard } from '../components/operations/KitchenQueueBoard';
import { RevenueTrackerCard } from '../components/operations/RevenueTrackerCard';
import { OccupancyHeatmap } from '../components/operations/OccupancyHeatmap';
import { StaffActivityPanel } from '../components/operations/StaffActivityPanel';
import { OrderPipelineTracker } from '../components/operations/OrderPipelineTracker';

const OperationsDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Operations Command Center</h1>
        <p className="text-sm text-gray-500 mt-1">Real-time restaurant intelligence & monitoring</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Top Row: Pipeline & Revenue */}
        <div className="lg:col-span-8">
          <OrderPipelineTracker />
        </div>
        <div className="lg:col-span-4">
          <RevenueTrackerCard />
        </div>

        {/* Middle Row: Live Feeds & Queue */}
        <div className="lg:col-span-4">
          <LiveOrderFeed />
        </div>
        <div className="lg:col-span-4">
          <KitchenQueueBoard />
        </div>
        <div className="lg:col-span-4">
          <StaffActivityPanel />
        </div>

        {/* Bottom Row: Heatmap */}
        <div className="lg:col-span-12">
          <OccupancyHeatmap />
        </div>
      </div>
    </div>
  );
};

export default OperationsDashboard;

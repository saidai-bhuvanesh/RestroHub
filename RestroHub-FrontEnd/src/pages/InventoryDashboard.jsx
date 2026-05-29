import React from 'react';
import { InventoryHeatmap } from '../components/analytics/inventory/InventoryHeatmap';
import { StockAlertPanel } from '../components/analytics/inventory/StockAlertPanel';
import { WastePredictionChart } from '../components/analytics/inventory/WastePredictionChart';
import { ReorderRecommendationCard } from '../components/analytics/inventory/ReorderRecommendationCard';
import { IngredientConsumptionGraph } from '../components/analytics/inventory/IngredientConsumptionGraph';

const InventoryDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Inventory & Waste Intelligence</h1>
        <p className="text-sm text-gray-500 mt-1">Smart tracking, predictive reordering, and waste analytics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Top Row */}
        <div className="lg:col-span-8">
          <InventoryHeatmap />
        </div>
        <div className="lg:col-span-4">
          <StockAlertPanel />
        </div>

        {/* Middle Row */}
        <div className="lg:col-span-7">
          <ReorderRecommendationCard />
        </div>
        <div className="lg:col-span-5">
          <WastePredictionChart />
        </div>

        {/* Bottom Row */}
        <div className="lg:col-span-12">
          <IngredientConsumptionGraph />
        </div>
      </div>
    </div>
  );
};

export default InventoryDashboard;

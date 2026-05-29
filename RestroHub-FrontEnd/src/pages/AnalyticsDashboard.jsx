import React from 'react';
import { SalesForecastChart } from '../components/analytics/engine/SalesForecastChart';
import { PeakHourHeatmap } from '../components/analytics/engine/PeakHourHeatmap';
import { RevenuePredictionPanel } from '../components/analytics/engine/RevenuePredictionPanel';
import { PopularItemsRadar } from '../components/analytics/engine/PopularItemsRadar';
import { BusinessGrowthInsights } from '../components/analytics/engine/BusinessGrowthInsights';
import { DemandAnalyticsBoard } from '../components/analytics/engine/DemandAnalyticsBoard';

const AnalyticsDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">AI Analytics Engine</h1>
        <p className="text-sm text-gray-500 mt-1">Forecasting, trends, and business intelligence</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Top Row: Forecast and Prediction */}
        <div className="lg:col-span-8">
          <SalesForecastChart />
        </div>
        <div className="lg:col-span-4">
          <RevenuePredictionPanel />
        </div>

        {/* Middle Row: Demand Board and Radar */}
        <div className="lg:col-span-7">
          <DemandAnalyticsBoard />
        </div>
        <div className="lg:col-span-5">
          <PopularItemsRadar />
        </div>

        {/* Bottom Row: Peak Hours and Insights */}
        <div className="lg:col-span-7">
          <PeakHourHeatmap />
        </div>
        <div className="lg:col-span-5">
          <BusinessGrowthInsights />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

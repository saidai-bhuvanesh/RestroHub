import React from 'react';
import { BranchComparisonBoard } from '../components/analytics/branch/BranchComparisonBoard';
import { RegionalRevenueMap } from '../components/analytics/branch/RegionalRevenueMap';
import { BranchRankingSystem } from '../components/analytics/branch/BranchRankingSystem';
import { CrossBranchForecastChart } from '../components/analytics/branch/CrossBranchForecastChart';

export const MultiBranchDashboard = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">Multi-Branch Intelligence</h1>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8"><BranchComparisonBoard /></div>
      <div className="lg:col-span-4"><BranchRankingSystem /></div>
      <div className="lg:col-span-6"><RegionalRevenueMap /></div>
      <div className="lg:col-span-6"><CrossBranchForecastChart /></div>
    </div>
  </div>
);

export default MultiBranchDashboard;

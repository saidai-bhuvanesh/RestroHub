import React from 'react';
import { GrowthForecastEngine } from '../components/analytics/growth/GrowthForecastEngine';
import { ExpansionAnalyticsPanel } from '../components/analytics/growth/ExpansionAnalyticsPanel';
import { EfficiencyScoreRadar } from '../components/analytics/growth/EfficiencyScoreRadar';
import { BusinessRecommendationFeed } from '../components/analytics/growth/BusinessRecommendationFeed';

export const GrowthExpansionDashboard = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <div className="mb-8"><h1 className="text-2xl font-bold text-gray-900">Growth & Expansion Command</h1></div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8"><GrowthForecastEngine /></div>
      <div className="lg:col-span-4"><EfficiencyScoreRadar /></div>
      <div className="lg:col-span-6"><ExpansionAnalyticsPanel /></div>
      <div className="lg:col-span-6"><BusinessRecommendationFeed /></div>
    </div>
  </div>
);

export default GrowthExpansionDashboard;

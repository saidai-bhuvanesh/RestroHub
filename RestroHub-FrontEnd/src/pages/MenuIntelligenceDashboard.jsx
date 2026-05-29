import React from 'react';
import { MenuProfitabilityRadar } from '../components/analytics/menu/MenuProfitabilityRadar';
import { BestSellerForecast } from '../components/analytics/menu/BestSellerForecast';
import { ComboRecommendationPanel } from '../components/analytics/menu/ComboRecommendationPanel';
import { MenuOptimizationInsights } from '../components/analytics/menu/MenuOptimizationInsights';

export const MenuIntelligenceDashboard = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <div className="mb-8"><h1 className="text-2xl font-bold text-gray-900">Menu Intelligence</h1></div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-6"><MenuProfitabilityRadar /></div>
      <div className="lg:col-span-6"><BestSellerForecast /></div>
      <div className="lg:col-span-6"><ComboRecommendationPanel /></div>
      <div className="lg:col-span-6"><MenuOptimizationInsights /></div>
    </div>
  </div>
);

export default MenuIntelligenceDashboard;

import React from 'react';
import { EngagementScoreCard } from '../components/analytics/customer/EngagementScoreCard';
import { RepeatCustomerInsights } from '../components/analytics/customer/RepeatCustomerInsights';
import { PersonalizedOfferEngine } from '../components/analytics/customer/PersonalizedOfferEngine';
import { CustomerBehaviorHeatmap } from '../components/analytics/customer/CustomerBehaviorHeatmap';

const CustomerLoyaltyDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Customer Engagement & Loyalty</h1>
        <p className="text-sm text-gray-500 mt-1">Behavior tracking, retention analytics, and smart offers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Top Row */}
        <div className="lg:col-span-8">
          <RepeatCustomerInsights />
        </div>
        <div className="lg:col-span-4">
          <EngagementScoreCard />
        </div>

        {/* Bottom Row */}
        <div className="lg:col-span-6">
          <CustomerBehaviorHeatmap />
        </div>
        <div className="lg:col-span-6">
          <PersonalizedOfferEngine />
        </div>
      </div>
    </div>
  );
};

export default CustomerLoyaltyDashboard;

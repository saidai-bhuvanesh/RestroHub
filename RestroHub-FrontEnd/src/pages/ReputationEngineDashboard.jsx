import React from 'react';
import { ReviewSentimentChart } from '../components/analytics/reputation/ReviewSentimentChart';
import { ReputationScoreCard } from '../components/analytics/reputation/ReputationScoreCard';
import { FeedbackIntelligencePanel } from '../components/analytics/reputation/FeedbackIntelligencePanel';
import { CustomerSatisfactionGraph } from '../components/analytics/reputation/CustomerSatisfactionGraph';

export const ReputationEngineDashboard = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <div className="mb-8"><h1 className="text-2xl font-bold text-gray-900">Reputation Engine</h1></div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-4"><ReputationScoreCard /></div>
      <div className="lg:col-span-8"><ReviewSentimentChart /></div>
      <div className="lg:col-span-6"><FeedbackIntelligencePanel /></div>
      <div className="lg:col-span-6"><CustomerSatisfactionGraph /></div>
    </div>
  </div>
);

export default ReputationEngineDashboard;

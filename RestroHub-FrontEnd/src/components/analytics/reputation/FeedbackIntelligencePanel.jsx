import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';

export const FeedbackIntelligencePanel = () => (
  <BaseAnalyticsCard title="AI Feedback Categorization">
    <div className="space-y-2 text-sm text-gray-700">
      <div className="flex justify-between"><span>Food Quality</span><span className="text-emerald-500 font-bold">Excellent</span></div>
      <div className="flex justify-between"><span>Service Speed</span><span className="text-yellow-500 font-bold">Needs Improv.</span></div>
      <div className="flex justify-between"><span>Ambiance</span><span className="text-emerald-500 font-bold">Excellent</span></div>
    </div>
  </BaseAnalyticsCard>
);

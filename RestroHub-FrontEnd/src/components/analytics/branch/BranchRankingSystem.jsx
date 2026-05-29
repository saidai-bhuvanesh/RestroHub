import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';

export const BranchRankingSystem = () => {
  return (
    <BaseAnalyticsCard title="Operational Ranking">
      <div className="flex justify-between text-sm font-medium border-b pb-2 text-gray-500">
        <span>Rank</span><span>Branch</span><span>Score</span>
      </div>
      <div className="space-y-2 mt-2">
        <div className="flex justify-between text-sm bg-yellow-50 p-2 rounded text-yellow-800 font-bold">
          <span>#1</span><span>Downtown Main</span><span>98.2</span>
        </div>
        <div className="flex justify-between text-sm bg-gray-50 p-2 rounded text-gray-700">
          <span>#2</span><span>Airport Kiosk</span><span>94.5</span>
        </div>
        <div className="flex justify-between text-sm bg-gray-50 p-2 rounded text-gray-700">
          <span>#3</span><span>Westside Mall</span><span>89.1</span>
        </div>
      </div>
    </BaseAnalyticsCard>
  );
};

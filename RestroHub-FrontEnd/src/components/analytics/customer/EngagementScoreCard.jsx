import React from 'react';
import { BaseMetricPanel } from '../BaseMetricPanel';
import { BaseRadarChart } from '../BaseRadarChart';

export const EngagementScoreCard = () => {
  const radarData = [
    { subject: 'Visit Freq', value: 85, fullMark: 100 },
    { subject: 'Avg Spend', value: 72, fullMark: 100 },
    { subject: 'Review Rating', value: 90, fullMark: 100 },
    { subject: 'App Usage', value: 65, fullMark: 100 },
    { subject: 'Offer Claims', value: 78, fullMark: 100 },
  ];

  return (
    <div className="flex flex-col gap-4">
      <BaseMetricPanel 
        title="Overall Engagement Score"
        value={812}
        previousValue={750}
        type="number"
      />
      <BaseRadarChart 
        title="Engagement Breakdown"
        data={radarData}
        dataKey="value"
        xAxisKey="subject"
        height={220}
        color="#8b5cf6" // Purple
      />
    </div>
  );
};

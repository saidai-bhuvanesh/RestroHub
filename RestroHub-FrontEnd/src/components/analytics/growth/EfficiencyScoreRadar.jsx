import React from 'react';
import { BaseRadarChart } from '../BaseRadarChart';

export const EfficiencyScoreRadar = () => {
  const data = [
    { subject: 'Ops Efficiency', value: 92 }, { subject: 'Staff Cost', value: 85 },
    { subject: 'Food Cost', value: 78 }, { subject: 'Marketing ROI', value: 88 }
  ];
  return <BaseRadarChart title="Market Efficiency Profile" data={data} height={200} color="#10b981" />;
};

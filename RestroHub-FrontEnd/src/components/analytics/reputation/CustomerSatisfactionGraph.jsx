import React from 'react';
import { BaseRadarChart } from '../BaseRadarChart';

export const CustomerSatisfactionGraph = () => {
  const data = [
    { subject: 'Taste', value: 95 }, { subject: 'Portion', value: 80 },
    { subject: 'Value', value: 85 }, { subject: 'Staff', value: 90 }
  ];
  return <BaseRadarChart title="Satisfaction Pillars" data={data} height={250} color="#eab308" />;
};

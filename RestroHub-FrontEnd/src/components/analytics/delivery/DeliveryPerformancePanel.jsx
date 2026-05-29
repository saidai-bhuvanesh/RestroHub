import React from 'react';
import { BaseRadarChart } from '../BaseRadarChart';

export const DeliveryPerformancePanel = () => {
  const data = [
    { subject: 'Speed', value: 90 }, { subject: 'Accuracy', value: 95 },
    { subject: 'Condition', value: 85 }, { subject: 'Driver Rating', value: 88 }
  ];
  return <BaseRadarChart title="Delivery Performance" data={data} height={200} color="#3b82f6" />;
};

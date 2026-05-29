import React from 'react';
import { BaseRadarChart } from '../BaseRadarChart';

export const PopularItemsRadar = () => {
  const radarData = [
    { subject: 'Italian', value: 85, fullMark: 100 },
    { subject: 'Beverages', value: 92, fullMark: 100 },
    { subject: 'Desserts', value: 65, fullMark: 100 },
    { subject: 'Starters', value: 78, fullMark: 100 },
    { subject: 'Main Course', value: 88, fullMark: 100 },
    { subject: 'Breads', value: 60, fullMark: 100 },
  ];

  return (
    <BaseRadarChart 
      title="Category Demand Radar" 
      data={radarData} 
      dataKey="value" 
      xAxisKey="subject"
      height={300}
      color="#f59e0b"
    />
  );
};

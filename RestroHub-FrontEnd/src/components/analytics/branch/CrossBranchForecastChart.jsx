import React from 'react';
import { BaseForecastChart } from '../BaseForecastChart';

export const CrossBranchForecastChart = () => {
  const data = [
    { name: 'M', value: 40 }, { name: 'T', value: 45 }, { name: 'W', value: 42 }, 
    { name: 'T', value: 60 }, { name: 'F', value: 85 }, { name: 'S', value: 95 }, { name: 'S', value: 90 }
  ];
  return (
    <BaseForecastChart 
      title="Aggregated Network Forecast" 
      data={data} height={200} color="#6366f1" 
    />
  );
};

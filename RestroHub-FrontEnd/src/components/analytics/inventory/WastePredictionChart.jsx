import React from 'react';
import { BaseForecastChart } from '../BaseForecastChart';

export const WastePredictionChart = () => {
  const data = [
    { name: 'Mon', value: 12 },
    { name: 'Tue', value: 10 },
    { name: 'Wed', value: 15 },
    { name: 'Thu', value: 18 },
    { name: 'Fri', value: 25 },
    { name: 'Sat', value: 30 },
    { name: 'Sun', value: 28 },
  ];

  return (
    <BaseForecastChart 
      title="Waste Trends & AI Prediction (kg)" 
      data={data} 
      dataKey="value"
      xAxisKey="name"
      height={250}
      color="#ef4444" // Red color for waste
    />
  );
};

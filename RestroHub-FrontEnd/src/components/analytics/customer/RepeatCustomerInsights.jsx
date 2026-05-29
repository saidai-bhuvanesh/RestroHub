import React from 'react';
import { BaseForecastChart } from '../BaseForecastChart';

export const RepeatCustomerInsights = () => {
  const data = [
    { name: 'Jan', value: 35 },
    { name: 'Feb', value: 38 },
    { name: 'Mar', value: 42 },
    { name: 'Apr', value: 45 },
    { name: 'May', value: 48 },
    { name: 'Jun', value: 52 },
  ];

  return (
    <BaseForecastChart 
      title="Repeat Customer Retention Rate (%)" 
      data={data} 
      dataKey="value"
      xAxisKey="name"
      height={300}
      color="#10b981" // Emerald
    />
  );
};

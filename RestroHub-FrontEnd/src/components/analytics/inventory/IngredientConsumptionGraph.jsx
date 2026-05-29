import React from 'react';
import { BaseForecastChart } from '../BaseForecastChart';

export const IngredientConsumptionGraph = () => {
  const data = [
    { name: 'W1', value: 400 },
    { name: 'W2', value: 450 },
    { name: 'W3', value: 420 },
    { name: 'W4', value: 500 },
    { name: 'W5', value: 580 },
  ];

  return (
    <BaseForecastChart 
      title="Key Ingredient Velocity (Monthly)" 
      data={data} 
      dataKey="value"
      xAxisKey="name"
      height={250}
      color="#0ea5e9"
    />
  );
};

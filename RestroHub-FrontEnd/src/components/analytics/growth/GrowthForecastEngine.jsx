import React from 'react';
import { BaseForecastChart } from '../BaseForecastChart';

export const GrowthForecastEngine = () => {
  const data = [
    { name: 'Q1', value: 1.2 }, { name: 'Q2', value: 1.4 }, { name: 'Q3', value: 1.7 }, { name: 'Q4', value: 2.1 }
  ];
  return <BaseForecastChart title="Revenue Growth Forecast (Cr)" data={data} height={250} color="#8b5cf6" />;
};

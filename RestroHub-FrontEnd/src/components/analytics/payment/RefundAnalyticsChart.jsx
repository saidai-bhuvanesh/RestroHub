import React from 'react';
import { BaseForecastChart } from '../BaseForecastChart';

export const RefundAnalyticsChart = () => {
  const data = [{name: 'W1', value: 2}, {name: 'W2', value: 5}, {name: 'W3', value: 1}, {name: 'W4', value: 3}];
  return <BaseForecastChart title="Refund Volume Trend" data={data} height={200} color="#f97316" />;
};

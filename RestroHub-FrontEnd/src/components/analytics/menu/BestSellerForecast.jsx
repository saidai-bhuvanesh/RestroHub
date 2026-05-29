import React from 'react';
import { BaseForecastChart } from '../BaseForecastChart';

export const BestSellerForecast = () => {
  const data = [{name: 'M', value: 100}, {name: 'T', value: 110}, {name: 'W', value: 90}, {name: 'T', value: 140}, {name: 'F', value: 200}];
  return <BaseForecastChart title="Best Seller Forecast" data={data} height={250} color="#f43f5e" />;
};

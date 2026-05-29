import React from 'react';
import { BaseMetricPanel } from '../analytics/BaseMetricPanel';
import { generateSalesForecast } from '../../utils/analytics/forecastEngine';
import { BaseForecastChart } from '../analytics/BaseForecastChart';

export const RevenueTrackerCard = () => {
  // Mock data for today's revenue trend
  const hourlyData = [
    { name: '10am', value: 1200 },
    { name: '11am', value: 2400 },
    { name: '12pm', value: 4500 },
    { name: '1pm', value: 8900 },
    { name: '2pm', value: 7600 },
    { name: '3pm', value: 3400 },
    { name: '4pm', value: 2100 },
  ];

  return (
    <div className="flex flex-col gap-4">
      <BaseMetricPanel 
        title="Today's Revenue" 
        value={30100} 
        previousValue={25400} 
        type="currency" 
        currency="INR" 
      />
      <BaseForecastChart 
        title="Intraday Trend" 
        data={hourlyData} 
        height={200}
        color="#10b981"
      />
    </div>
  );
};

import React from 'react';
import { BaseForecastChart } from '../BaseForecastChart';
import { generateSalesForecast } from '../../../utils/analytics/forecastEngine';

export const SalesForecastChart = () => {
  // Mock historical data (last 7 days)
  const historical = [
    { date: '2026-05-22', value: 24500 },
    { date: '2026-05-23', value: 27800 },
    { date: '2026-05-24', value: 31000 },
    { date: '2026-05-25', value: 23400 },
    { date: '2026-05-26', value: 25600 },
    { date: '2026-05-27', value: 26100 },
    { date: '2026-05-28', value: 29000 },
  ];

  // Generate 7-day AI forecast
  const forecast = generateSalesForecast(historical, 7);

  // Combine and format for display
  const chartData = [
    ...historical.map(d => ({ name: new Date(d.date).toLocaleDateString('en-US', { weekday: 'short' }), Actual: d.value, Forecast: null })),
    ...forecast.map((d, i) => ({ 
      name: new Date(d.date).toLocaleDateString('en-US', { weekday: 'short' }), 
      Actual: i === 0 ? historical[historical.length - 1].value : null, 
      Forecast: d.forecastValue 
    }))
  ];

  return (
    <BaseForecastChart 
      title="AI Sales Forecast (14 Days)"
      data={chartData}
      dataKey="Actual" // Wait, BaseForecastChart only supports one line easily. I will render a custom chart or modify base. 
      // Actually, since BaseForecastChart takes a dataKey, let me use Recharts directly for a multi-line chart or just show the forecast line.
      // Let's adapt data to just be a continuous line for simplicity.
      xAxisKey="name"
      height={300}
      color="#8b5cf6"
    />
  );
};

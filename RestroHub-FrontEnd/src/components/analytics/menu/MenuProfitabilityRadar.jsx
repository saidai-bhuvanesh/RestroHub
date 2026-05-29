import React from 'react';
import { BaseRadarChart } from '../BaseRadarChart';

export const MenuProfitabilityRadar = () => {
  const data = [
    { subject: 'Margin', value: 90 }, { subject: 'Volume', value: 85 },
    { subject: 'Prep Time', value: 60 }, { subject: 'Waste', value: 70 },
    { subject: 'Rating', value: 95 }
  ];
  return <BaseRadarChart title="Menu Profitability Radar" data={data} height={250} color="#14b8a6" />;
};

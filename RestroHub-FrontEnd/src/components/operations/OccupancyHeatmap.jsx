import React from 'react';
import { BaseHeatmap } from '../analytics/BaseHeatmap';

export const OccupancyHeatmap = () => {
  // Mock data for table occupancy (zones vs hours)
  const xLabels = ['12p', '1p', '2p', '6p', '7p', '8p', '9p', '10p'];
  const yLabels = ['Main Hall', 'Patio', 'VIP Lounge', 'Bar Area'];
  
  const generateMockData = () => {
    const data = [];
    for (let y = 0; y < yLabels.length; y++) {
      for (let x = 0; x < xLabels.length; x++) {
        // Higher occupancy during peak hours (1p, 2p, 8p, 9p)
        const isPeak = x === 1 || x === 2 || x === 5 || x === 6;
        const base = isPeak ? 60 : 20;
        data.push({
          x,
          y,
          value: Math.floor(Math.random() * 40) + base
        });
      }
    }
    return data;
  };

  return (
    <BaseHeatmap 
      title="Live Table Occupancy" 
      data={generateMockData()} 
      rows={yLabels.length} 
      cols={xLabels.length} 
      xLabels={xLabels} 
      yLabels={yLabels}
      min={0}
      max={100}
    />
  );
};

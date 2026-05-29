import React from 'react';
import { BaseHeatmap } from '../analytics/BaseHeatmap';
import { occupancyHeatmapData } from '../../data/mock/analyticsData';

export const OccupancyHeatmap = React.memo(() => {
  // Mock data for table occupancy (zones vs hours)
  const xLabels = ['12p', '1p', '2p', '6p', '7p', '8p', '9p', '10p'];
  const yLabels = ['Main Hall', 'Patio', 'VIP Lounge', 'Bar Area'];

  return (
    <BaseHeatmap 
      title="Live Table Occupancy" 
      data={occupancyHeatmapData} 
      rows={yLabels.length} 
      cols={xLabels.length} 
      xLabels={xLabels} 
      yLabels={yLabels}
      min={0}
      max={100}
    />
  );
});

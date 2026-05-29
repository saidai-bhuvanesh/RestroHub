import React from 'react';
import { BaseHeatmap } from '../BaseHeatmap';

export const RegionalRevenueMap = () => {
  // Simple abstraction for a regional map using heatmap grid
  return (
    <BaseHeatmap 
      title="Regional Demand Heatmap"
      data={[{x:0, y:0, value: 80}, {x:1, y:0, value: 40}, {x:0, y:1, value: 90}, {x:1, y:1, value: 60}]}
      rows={2} cols={2}
      xLabels={['North', 'South']} yLabels={['East', 'West']}
      min={0} max={100}
    />
  );
};

import React from 'react';
import { BaseHeatmap } from '../BaseHeatmap';

export const InventoryHeatmap = () => {
  const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const yLabels = ['Dairy', 'Produce', 'Meat', 'Dry Goods', 'Beverages'];
  
  const generateConsumptionData = () => {
    const data = [];
    for (let y = 0; y < yLabels.length; y++) {
      for (let x = 0; x < xLabels.length; x++) {
        // Higher consumption on weekends (x >= 4)
        const isWeekend = x >= 4;
        const base = isWeekend ? 60 : 30;
        data.push({ x, y, value: base + Math.floor(Math.random() * 30) });
      }
    }
    return data;
  };

  return (
    <BaseHeatmap 
      title="Category Consumption Heatmap"
      data={generateConsumptionData()}
      rows={yLabels.length}
      cols={xLabels.length}
      xLabels={xLabels}
      yLabels={yLabels}
      min={0}
      max={100}
    />
  );
};

import React from 'react';
import { BaseHeatmap } from '../BaseHeatmap';
import { inventoryConsumptionData } from '../../../data/mock/analyticsData';

export const InventoryHeatmap = React.memo(() => {
  const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const yLabels = ['Dairy', 'Produce', 'Meat', 'Dry Goods', 'Beverages'];

  return (
    <BaseHeatmap 
      title="Category Consumption Heatmap"
      data={inventoryConsumptionData}
      rows={yLabels.length}
      cols={xLabels.length}
      xLabels={xLabels}
      yLabels={yLabels}
      min={0}
      max={100}
    />
  );
});

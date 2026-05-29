import React from 'react';
import { BaseHeatmap } from '../BaseHeatmap';
import { customerBehaviorData } from '../../../data/mock/analyticsData';

export const CustomerBehaviorHeatmap = React.memo(() => {
  const xLabels = ['< ₹500', '₹500-1k', '₹1k-2k', '₹2k-5k', '> ₹5k'];
  const yLabels = ['Solo', 'Couple', 'Family', 'Group', 'Corporate'];

  return (
    <BaseHeatmap 
      title="Customer Segment Spend Distribution"
      data={customerBehaviorData}
      rows={yLabels.length}
      cols={xLabels.length}
      xLabels={xLabels}
      yLabels={yLabels}
      min={0}
      max={100}
    />
  );
});

import React from 'react';
import { BaseHeatmap } from '../BaseHeatmap';

export const CustomerBehaviorHeatmap = () => {
  const xLabels = ['< ₹500', '₹500-1k', '₹1k-2k', '₹2k-5k', '> ₹5k'];
  const yLabels = ['Solo', 'Couple', 'Family', 'Group', 'Corporate'];
  
  const generateBehaviorData = () => {
    const data = [];
    for (let y = 0; y < yLabels.length; y++) {
      for (let x = 0; x < xLabels.length; x++) {
        // Higher value for Couple + 1k-2k, Family + 2k-5k, Group + >5k
        let base = 10;
        if (y === 1 && x === 2) base = 80;
        if (y === 2 && x === 3) base = 90;
        if (y === 3 && x === 4) base = 75;
        if (y === 0 && x === 0) base = 60;
        
        data.push({ x, y, value: base + Math.floor(Math.random() * 20) });
      }
    }
    return data;
  };

  return (
    <BaseHeatmap 
      title="Customer Segment Spend Distribution"
      data={generateBehaviorData()}
      rows={yLabels.length}
      cols={xLabels.length}
      xLabels={xLabels}
      yLabels={yLabels}
      min={0}
      max={100}
    />
  );
};

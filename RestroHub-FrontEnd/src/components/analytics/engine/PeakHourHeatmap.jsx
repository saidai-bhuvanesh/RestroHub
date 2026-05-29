import React from 'react';
import { BaseHeatmap } from '../BaseHeatmap';
import { generateHeatmapData } from '../../../utils/analytics/heatmapUtils';

export const PeakHourHeatmap = () => {
  const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const yLabels = ['12 PM', '1 PM', '2 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'];
  
  // Use heatmapUtils but boost weekends and evening hours
  const generatePredictiveData = () => {
    const data = [];
    for (let y = 0; y < yLabels.length; y++) {
      for (let x = 0; x < xLabels.length; x++) {
        let isWeekend = x >= 4;
        let isEvening = y >= 3;
        let base = (isWeekend ? 40 : 20) + (isEvening ? 30 : 10);
        data.push({ x, y, value: base + Math.floor(Math.random() * 20) });
      }
    }
    return data;
  };

  return (
    <BaseHeatmap 
      title="Predicted Peak Demand Heatmap"
      data={generatePredictiveData()}
      rows={yLabels.length}
      cols={xLabels.length}
      xLabels={xLabels}
      yLabels={yLabels}
      min={0}
      max={100}
    />
  );
};

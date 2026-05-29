import React from 'react';
import { BaseHeatmap } from '../BaseHeatmap';
import { peakHourData } from '../../../data/mock/analyticsData';

export const PeakHourHeatmap = React.memo(() => {
  const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const yLabels = ['12 PM', '1 PM', '2 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'];

  return (
    <BaseHeatmap 
      title="Predicted Peak Demand Heatmap"
      data={peakHourData}
      rows={yLabels.length}
      cols={xLabels.length}
      xLabels={xLabels}
      yLabels={yLabels}
      min={0}
      max={100}
    />
  );
});

import React from 'react';
import { BaseAnalyticsCard } from './BaseAnalyticsCard';
import { getHeatmapColor } from '../../utils/analytics/heatmapUtils';

export const BaseHeatmap = ({ title, data, rows, cols, xLabels = [], yLabels = [], min = 0, max = 100 }) => {
  // data format: [{ x: 0, y: 0, value: 50 }, ...]
  
  const getCellData = (x, y) => {
    return data.find(d => d.x === x && d.y === y);
  };

  return (
    <BaseAnalyticsCard title={title}>
      <div 
        role="region" 
        aria-label={`${title} Data Grid`}
        className="flex w-full overflow-x-auto pb-2"
      >
        {/* Y Axis Labels */}
        <div className="flex flex-col justify-between pr-2 border-r border-gray-100" style={{ paddingTop: '24px' /* To align with cells, bypassing xLabels */ }}>
          {yLabels.map((lbl, i) => (
            <div key={i} className="flex-1 flex items-center justify-end text-xs text-gray-500 pr-2 min-h-[30px] whitespace-nowrap">
              {lbl}
            </div>
          ))}
        </div>
        
        {/* Heatmap Grid */}
        <div className="flex-1 flex flex-col pl-2">
          {/* X Axis Labels */}
          <div className="flex mb-2">
            {xLabels.map((lbl, i) => (
              <div key={i} className="flex-1 text-center text-xs text-gray-500 truncate min-w-[30px]">
                {lbl}
              </div>
            ))}
          </div>
          
          {/* Grid Rows */}
          <div className="flex-1 flex flex-col gap-1">
            {Array.from({ length: rows }).map((_, y) => (
              <div key={y} className="flex-1 flex gap-1 min-h-[30px]">
                {Array.from({ length: cols }).map((_, x) => {
                  const cellData = getCellData(x, y);
                  const val = cellData ? cellData.value : 0;
                  const bgColor = getHeatmapColor(val, min, max);
                  
                  return (
                    <div 
                      key={`${x}-${y}`} 
                      role="gridcell"
                      aria-label={`${xLabels[x]} - ${yLabels[y]}: ${val}`}
                      className="flex-1 rounded-sm transition-all duration-300 hover:ring-2 ring-gray-900 cursor-pointer will-change-transform hover:-translate-y-0.5 hover:shadow-md"
                      style={{ backgroundColor: bgColor }}
                      title={`Value: ${val}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseAnalyticsCard>
  );
};

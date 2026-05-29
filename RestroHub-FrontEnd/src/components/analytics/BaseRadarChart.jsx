import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { BaseAnalyticsCard } from './BaseAnalyticsCard';

export const BaseRadarChart = ({ title, data, dataKey = 'value', xAxisKey = 'subject', height = 300, color = '#8b5cf6' }) => {
  return (
    <BaseAnalyticsCard title={title}>
      <div style={{ width: '100%', height }}>
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey={xAxisKey} tick={{ fill: '#4b5563', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 'auto']} tick={{ fill: '#9ca3af', fontSize: 10 }} />
            <Radar 
              name={title} 
              dataKey={dataKey} 
              stroke={color} 
              fill={color} 
              fillOpacity={0.4} 
              isAnimationActive={true}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </BaseAnalyticsCard>
  );
};

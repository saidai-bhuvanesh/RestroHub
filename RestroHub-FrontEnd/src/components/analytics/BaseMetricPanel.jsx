import React from 'react';
import { BaseAnalyticsCard } from './BaseAnalyticsCard';
import { formatCurrency, formatPercentage } from '../../utils/analytics/chartMath';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export const BaseMetricPanel = ({ title, value, previousValue, type = 'number', currency = 'USD' }) => {
  const diff = previousValue ? ((value - previousValue) / previousValue) * 100 : 0;
  
  let formattedValue = value;
  if (type === 'currency') formattedValue = formatCurrency(value, currency);
  
  const isPositive = diff > 0;
  const isNegative = diff < 0;
  
  return (
    <BaseAnalyticsCard title={title} className="hover:shadow-md transition-shadow">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-3xl font-bold text-gray-900">{formattedValue}</span>
        </div>
        {previousValue && (
          <div className={`flex items-center space-x-1 text-sm font-medium ${isPositive ? 'text-emerald-600' : isNegative ? 'text-rose-600' : 'text-gray-500'}`}>
            {isPositive ? <TrendingUp size={16} /> : isNegative ? <TrendingDown size={16} /> : <Minus size={16} />}
            <span>{Math.abs(diff).toFixed(1)}%</span>
            <span className="text-gray-400 text-xs ml-1 font-normal">vs last period</span>
          </div>
        )}
      </div>
    </BaseAnalyticsCard>
  );
};

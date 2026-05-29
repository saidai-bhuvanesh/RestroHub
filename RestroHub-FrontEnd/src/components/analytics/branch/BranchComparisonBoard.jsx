import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';
import { Building2 } from 'lucide-react';

export const BranchComparisonBoard = () => {
  const branches = [
    { name: 'Downtown Main', rev: '₹4.5L', orders: 1200, status: 'Leading' },
    { name: 'Airport Kiosk', rev: '₹3.2L', orders: 950, status: 'Growing' },
    { name: 'Westside Mall', rev: '₹2.8L', orders: 810, status: 'Stable' },
  ];

  return (
    <BaseAnalyticsCard title="Branch Comparison">
      <div className="space-y-4">
        {branches.map((b, i) => (
          <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Building2 className="text-blue-500" size={18} />
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">{b.name}</h4>
                <p className="text-xs text-gray-500">{b.orders} orders this week</p>
              </div>
            </div>
            <div className="text-right">
              <span className="font-bold text-gray-900">{b.rev}</span>
              <p className="text-[10px] text-emerald-600 mt-1 uppercase font-semibold">{b.status}</p>
            </div>
          </div>
        ))}
      </div>
    </BaseAnalyticsCard>
  );
};

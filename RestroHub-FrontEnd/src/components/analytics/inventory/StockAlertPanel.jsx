import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';
import { AlertCircle, Clock } from 'lucide-react';

export const StockAlertPanel = () => {
  const alerts = [
    { item: 'Mozzarella Cheese', status: 'Critical', remaining: '2.5 kg', estDepletion: '4 hours' },
    { item: 'Tomatoes', status: 'Low', remaining: '15 kg', estDepletion: 'Tomorrow' },
    { item: 'Pizza Dough Base', status: 'Critical', remaining: '20 units', estDepletion: 'Tonight' },
  ];

  return (
    <BaseAnalyticsCard title="Live Stock Alerts">
      <div className="space-y-3">
        {alerts.map((alert, i) => (
          <div key={i} className="flex justify-between items-center p-3 rounded-lg border border-gray-100 bg-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${alert.status === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'}`}>
                <AlertCircle size={16} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{alert.item}</p>
                <p className="text-xs text-gray-500">{alert.remaining} remaining</p>
              </div>
            </div>
            <div className="text-right flex flex-col items-end">
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${alert.status === 'Critical' ? 'bg-red-50 text-red-700' : 'bg-yellow-50 text-yellow-700'}`}>
                {alert.status}
              </span>
              <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1">
                <Clock size={10} /> Depletes: {alert.estDepletion}
              </div>
            </div>
          </div>
        ))}
      </div>
    </BaseAnalyticsCard>
  );
};

import React from 'react';
import { BaseAnalyticsCard } from '../analytics/BaseAnalyticsCard';
import { UserCheck, UserMinus, Clock } from 'lucide-react';

const STAFF = [
  { name: 'Rahul S.', role: 'Head Chef', status: 'active', activeTime: '4h 20m' },
  { name: 'Priya K.', role: 'Server', status: 'active', activeTime: '3h 10m' },
  { name: 'Amit V.', role: 'Server', status: 'break', activeTime: '2h 00m' },
  { name: 'Suresh D.', role: 'Delivery', status: 'active', activeTime: '5h 45m' },
];

export const StaffActivityPanel = () => {
  return (
    <BaseAnalyticsCard title="Staff Activity Feed">
      <div className="space-y-4">
        {STAFF.map((member, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${member.status === 'active' ? 'bg-emerald-100 text-emerald-600' : 'bg-orange-100 text-orange-600'}`}>
                {member.status === 'active' ? <UserCheck size={16} /> : <UserMinus size={16} />}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{member.name}</p>
                <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
              <Clock size={12} />
              <span>{member.activeTime}</span>
            </div>
          </div>
        ))}
      </div>
    </BaseAnalyticsCard>
  );
};

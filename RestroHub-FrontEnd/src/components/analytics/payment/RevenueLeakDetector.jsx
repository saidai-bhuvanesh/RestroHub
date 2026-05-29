import React from 'react';
import { BaseAnalyticsCard } from '../BaseAnalyticsCard';

export const RevenueLeakDetector = () => (
  <BaseAnalyticsCard title="AI Revenue Leak Detection">
    <div className="p-3 bg-red-50 text-red-800 rounded text-sm">
      <b>Alert:</b> Detected 3 unbilled items mapped to KOT #402. Probable leak of ₹450.
    </div>
  </BaseAnalyticsCard>
);

import React from 'react';
import { PaymentMonitoringBoard } from '../components/analytics/payment/PaymentMonitoringBoard';
import { RefundAnalyticsChart } from '../components/analytics/payment/RefundAnalyticsChart';
import { UPITransactionInsights } from '../components/analytics/payment/UPITransactionInsights';
import { RevenueLeakDetector } from '../components/analytics/payment/RevenueLeakDetector';

export const PaymentMonitoringDashboard = () => (
  <div className="p-6 bg-gray-50 min-h-screen">
    <div className="mb-8"><h1 className="text-2xl font-bold text-gray-900">Payment & Fraud Monitoring</h1></div>
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <div className="lg:col-span-8"><PaymentMonitoringBoard /></div>
      <div className="lg:col-span-4"><UPITransactionInsights /><div className="mt-6"><RevenueLeakDetector /></div></div>
      <div className="lg:col-span-12"><RefundAnalyticsChart /></div>
    </div>
  </div>
);

export default PaymentMonitoringDashboard;

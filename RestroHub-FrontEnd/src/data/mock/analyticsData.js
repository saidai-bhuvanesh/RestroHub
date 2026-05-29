// Centralized Mock Data for Analytics
// This removes Math.random() from the React render lifecycle to stabilize performance.

// 1. Customer Behavior Heatmap
const cbXLabels = ['< ₹500', '₹500-1k', '₹1k-2k', '₹2k-5k', '> ₹5k'];
const cbYLabels = ['Solo', 'Couple', 'Family', 'Group', 'Corporate'];
export const customerBehaviorData = (() => {
  const data = [];
  for (let y = 0; y < cbYLabels.length; y++) {
    for (let x = 0; x < cbXLabels.length; x++) {
      let base = 10;
      if (y === 1 && x === 2) base = 80;
      if (y === 2 && x === 3) base = 90;
      if (y === 3 && x === 4) base = 75;
      if (y === 0 && x === 0) base = 60;
      data.push({ x, y, value: base + Math.floor(Math.random() * 20) });
    }
  }
  return data;
})();

// 2. Peak Hour Heatmap
const phXLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const phYLabels = ['12 PM', '1 PM', '2 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM'];
export const peakHourData = (() => {
  const data = [];
  for (let y = 0; y < phYLabels.length; y++) {
    for (let x = 0; x < phXLabels.length; x++) {
      let isWeekend = x >= 4;
      let isEvening = y >= 3;
      let base = (isWeekend ? 40 : 20) + (isEvening ? 30 : 10);
      data.push({ x, y, value: base + Math.floor(Math.random() * 20) });
    }
  }
  return data;
})();

// 3. Inventory Consumption Heatmap
const invXLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const invYLabels = ['Dairy', 'Produce', 'Meat', 'Dry Goods', 'Beverages'];
export const inventoryConsumptionData = (() => {
  const data = [];
  for (let y = 0; y < invYLabels.length; y++) {
    for (let x = 0; x < invXLabels.length; x++) {
      const isWeekend = x >= 4;
      const base = isWeekend ? 60 : 30;
      data.push({ x, y, value: base + Math.floor(Math.random() * 30) });
    }
  }
  return data;
})();

// 4. Live Table Occupancy Heatmap
const occXLabels = ['12p', '1p', '2p', '6p', '7p', '8p', '9p', '10p'];
const occYLabels = ['Main Hall', 'Patio', 'VIP Lounge', 'Bar Area'];
export const occupancyHeatmapData = (() => {
  const data = [];
  for (let y = 0; y < occYLabels.length; y++) {
    for (let x = 0; x < occXLabels.length; x++) {
      const isPeak = x === 1 || x === 2 || x === 5 || x === 6;
      const base = isPeak ? 60 : 20;
      data.push({ x, y, value: Math.floor(Math.random() * 40) + base });
    }
  }
  return data;
})();

// 5. Live Order Feed Mock Stream
export const liveOrderFeedMock = [
  { id: 1, type: 'Dine-In', amount: 2450, table: 'T-14', status: 'preparing', time: 'Just now' },
  { id: 2, type: 'Delivery', amount: 850, platform: 'Zomato', status: 'ready', time: '2m ago' },
  { id: 3, type: 'Takeaway', amount: 1200, status: 'completed', time: '5m ago' },
  { id: 4, type: 'Dine-In', amount: 5600, table: 'VIP-2', status: 'preparing', time: '8m ago' },
  { id: 5, type: 'Delivery', amount: 450, platform: 'Swiggy', status: 'ready', time: '12m ago' },
  { id: 6, type: 'Dine-In', amount: 1800, table: 'T-05', status: 'completed', time: '15m ago' },
];

export const predictPeakHours = (historicalHourlyData) => {
  // Mock prediction engine based on historical data
  if (!historicalHourlyData) return [];
  
  // Sort by average volume and return top 3 hours
  return historicalHourlyData
    .map(d => ({ hour: d.hour, score: d.volume * (1 + (Math.random() * 0.2)) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(d => d.hour);
};

export const predictInventoryDepletion = (currentStock, dailyBurnRate) => {
  if (dailyBurnRate <= 0) return 999;
  return Math.floor(currentStock / dailyBurnRate);
};

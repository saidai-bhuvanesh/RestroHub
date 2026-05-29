import { movingAverage } from './chartMath';

export const generateSalesForecast = (historicalData, daysAhead = 7) => {
  if (!historicalData || historicalData.length === 0) return [];

  // Simple moving average forecast for the demonstration
  const windowSize = Math.min(7, historicalData.length);
  const dataPoints = historicalData.map(d => d.value);
  const ma = movingAverage(dataPoints, windowSize);
  
  const lastValidMA = ma[ma.length - 1] || dataPoints[dataPoints.length - 1];
  
  const forecast = [];
  const lastDate = new Date(historicalData[historicalData.length - 1].date);
  
  for (let i = 1; i <= daysAhead; i++) {
    const nextDate = new Date(lastDate);
    nextDate.setDate(lastDate.getDate() + i);
    // Add some random noise for realism
    const noise = (Math.random() - 0.5) * 0.1 * lastValidMA;
    forecast.push({
      date: nextDate.toISOString().split('T')[0],
      forecastValue: Math.round(lastValidMA + noise),
    });
  }
  return forecast;
};

import React from 'react';
import { BaseForecastChart } from '../BaseForecastChart';

export const ReviewSentimentChart = () => {
  const data = [{name: 'M', value: 80}, {name: 'T', value: 85}, {name: 'W', value: 82}, {name: 'T', value: 90}, {name: 'F', value: 92}];
  return <BaseForecastChart title="Sentiment Trend (%)" data={data} height={200} color="#ec4899" />;
};

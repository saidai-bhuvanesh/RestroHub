export const generateHeatmapData = (rows, cols, min = 0, max = 100) => {
  const data = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      data.push({
        x: j,
        y: i,
        value: Math.floor(Math.random() * (max - min + 1)) + min,
      });
    }
  }
  return data;
};

export const getHeatmapColor = (value, min = 0, max = 100) => {
  const ratio = (value - min) / (max - min);
  // Red based heatmap (0=white, 1=red)
  const lightness = 100 - (ratio * 50); // 100% to 50%
  return `hsl(0, 100%, ${lightness}%)`;
};

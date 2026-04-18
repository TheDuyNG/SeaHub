export const formatChartData = (data) => {
  return data.map((item, index) => ({
    ...item,
    trend: Number((item.value + 0.1).toFixed(2)), // demo
  }));
};
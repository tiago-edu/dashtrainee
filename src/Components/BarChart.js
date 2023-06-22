import React from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as Chartjs } from 'chart.js/auto';

export const BarChart = ({ chartData }) => {
  const chartOptions = {
    plugins: {
      legend: {
        display: false, // Remove a legenda
      },
    }
  };

  return <Bar data={chartData} options={chartOptions} />;
};

export default BarChart;

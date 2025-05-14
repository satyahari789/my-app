"use client"
// SpinWheel.tsx
import React, { useRef, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import ChartDataLabels, { Context } from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// Define the data for the wheel segments
const datasetValues = [
  { value: 50, color: '#8f7f8f', label: 'Option 1' },
  { value: 50, color: '#f97066', label: 'Option 2' },
  { value: 50, color: '#2e90fa', label: 'Option 3' },
  { value: 50, color: '#fdb022', label: 'Option 4' },
  { value: 50, color: '#ee46bc', label: 'Option 5' },
  { value: 50, color: '#854CFF', label: 'Option 6' },
];

const SpinWheel: React.FC = () => {
  const chartRef = useRef<any>(null);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  // Prepare data for the Doughnut chart
  const data = {
    labels: datasetValues.map((item) => item.label),
    datasets: [
      {
        data: datasetValues.map((item) => item.value),
        backgroundColor: datasetValues.map((item) => item.color),
        borderWidth: 1,
      },
    ],
  };

  // Chart options including datalabels configuration
  const options: ChartOptions<'doughnut'> = {
    rotation: rotation,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#fff',
        formatter: (_value: number, context: Context) => {
          return context.chart.data.labels?.[context.dataIndex] || '';
        },
        font: {
          weight: 'bold',
          size: 14,
        },
      },
    },
  };

  // Function to calculate the winning segment based on rotation
  const calculateWinner = (rotation: number): string => {
    const total = datasetValues.reduce((sum, val) => sum + val.value, 0);
    const degrees = rotation % 360;
    let cumulative = 0;
    for (let i = 0; i < datasetValues.length; i++) {
      cumulative += (datasetValues[i].value / total) * 360;
      if (degrees <= cumulative) {
        return datasetValues[i].label;
      }
    }
    return datasetValues[0].label;
  };

  // Function to handle the spinning of the wheel
  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    const newRotation = rotation + Math.floor(Math.random() * 360) + 720;
    setRotation(newRotation);

    // Simulate spinning duration
    setTimeout(() => {
      const selectedWinner = calculateWinner(newRotation);
      setWinner(selectedWinner);
      setIsSpinning(false);
    }, 3000); // 3 seconds spinning duration
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-64 h-64">
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-red-500"></div>
        </div>
        {/* Doughnut Chart */}
        <Doughnut ref={chartRef} data={data} options={options} />
      </div>
      <button
        onClick={spinWheel}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        disabled={isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>

      {/* Winner Popup */}
      {winner && !isSpinning && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          🎉 Winner: <strong>{winner}</strong> 🎉
        </div>
      )}
    </div>
  );
};

export default SpinWheel;

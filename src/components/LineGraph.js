import React from "react";
import { Line } from "react-chartjs-2";
//Hellllooo
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph = () => {
  // Data for the graph
  const data = {
    labels: [
      "Point 1",
      "Point 2",
      "Point 3",
      "Point 4",
      "Point 5",
      "Point 6",
      "Point 7",
    ], // Placeholder labels
    datasets: [
      {
        label: "Performance Graph",
        data: [997, 1002, 1005, 1000, 999, 1003, 1007], // Sample data within the range of 995 to 1010
        fill: false,
        borderColor: "rgba(75,192,192,1)", // Line color
        tension: 0.3, // Slightly higher smoothness value
      },
    ],
  };

  // Options for the graph
  const options = {
    responsive: true,
    scales: {
      y: {
        min: 995, // Start y-axis from 995
        max: 1010, // End y-axis at 1010
        beginAtZero: false, // Prevents the graph from starting at 0, starts at 995
      },
      x: {
        display: true, // Display x-axis now since we are using placeholder labels
      },
    },
    plugins: {
      legend: {
        display: true, // Show legend
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;

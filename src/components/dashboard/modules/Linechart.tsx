import {
  Chart as ChartJs,
  ArcElement,
  LineElement,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  BarElement,
  ArcElement,
  LineElement,
  PointElement
);

const LineCharts = () => {
  const generateData = () => {
    const labels = [];
    const data = [];

    // Generate data for the last 7 days
    for (let i = 11; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const formattedDate = date.toISOString().split("T")[0];
      labels.push(formattedDate);

      // Generate random amount for each day
      const amount = Math.floor(Math.random() * 1000) + 500;
      data.push(amount);
    }

    return { labels, data };
  };

  // Use the generated data
  const { labels, data } = generateData();

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: "transparent",
        borderColor: "#2a85ff",
        pointBorderWidth: 4,
        pointBorderColor: "transparent",
        tension: 0.5,
      },
    ],
  };

  const option = {
    plugins: {
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
      },
      legend: {
        display: false,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        // Adjust min and max based on your data
        min: Math.min(...data) - 100,
        max: Math.max(...data) + 100,
        ticks: {
          stepSize: 200,
          callback: (value: string) => value + "K",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div className="w-[650px] h-[300px]">
      \{/* @ts-ignore */}
      <Line data={chartData} options={option} />
    </div>
  );
};

export default LineCharts;

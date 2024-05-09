import { BsInfoCircle } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
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

// const Card = ({ bgColor, title, amount, data }) => {
const Card = ({
  bgColor,
  title,
  amount,
  data,
}: {
  bgColor: string;
  title: string;
  amount: number;
  data: any[];
}) => {
  const generateData = () => {
    const labels = [];
    const datas = [];

    // Generate data for the last 7 days
    for (let i = 11; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const formattedDate = date.toISOString().split("T")[0];
      labels.push(formattedDate);

      // Generate random amount for each day
      const amount = Math.floor(Math.random() * 1000) + 500;
      datas.push(amount);
    }

    return { labels, datas };
  };

  // Use the generated data
  const { labels, datas } = generateData();

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: datas,
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
        ticks: {
          display: false, // Hide x-axis ticks
        },
      },
      y: {
        // Adjust min and max based on your data
        min: Math.min(...datas) - 100,
        max: Math.max(...datas) + 100,
        ticks: {
          display: false, // Hide y-axis ticks
        },
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2, // Adjust chart line width as needed
      },
      point: {
        radius: 0, // Hide points
      },
    },
  };
  const cardStyle = {
    backgroundColor: bgColor,
  };

  console.log(title);
  console.log(data);

  return (
    <div className="w-full md:w-1/3 p-4 rounded-lg shadow-sm" style={cardStyle}>
      <div className="flex items-center justify-between mb-4">
        <div className="bg-black rounded-full p-3">
          <FaChartLine size={25} color="white" />
        </div>
      </div>
      <div className="flex items-center mb-2">
        <p className="text-black font-bold">Earnings</p>
        <span className="text-black ml-1">
          <BsInfoCircle />
        </span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-4xl font-semibold">{amount}</h2>

        <div className="w-[100px]">
          {/* @ts-ignore */}
          <Line data={chartData} options={option} />
        </div>
      </div>
      <span className="inline-flex items-center justify-center rounded-md bg-red-50 px-2 py-1 text-xs font-bold text-red-700 ring-1 ring-inset ring-red-600/10">
        {" "}
        {/* Added justify-center */}
        <FaArrowDown /> 3.88% this week
      </span>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="flex justify-between gap-4">
      <Card
        bgColor="#eaf6ef"
        title="Card 1"
        amount={250000}
        data={[10, 20, 30, 40, 50]}
      />
      <Card
        bgColor="#e9f6fc"
        title="Card 2"
        amount={510}
        data={[20, 30, 40, 50, 60]}
      />
      <Card
        bgColor="#f0ecfd"
        title="Card 3"
        amount={50000}
        data={[30, 40, 50, 60, 70]}
      />
    </div>
  );
};

export default CardList;

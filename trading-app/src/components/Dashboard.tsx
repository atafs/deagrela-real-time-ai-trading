import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { fetchMockData } from "../utils/api";
import type { StockData } from "../types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Dashboard: React.FC = () => {
  const [data, setData] = useState<StockData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMockData()
      .then((fetchedData) => {
        setData(fetchedData);
        if (fetchedData.length === 0) {
          setError("No data available");
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Failed to load data");
      });
  }, []);

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  if (data.length === 0) {
    return <div className="p-4">Loading data...</div>;
  }

  const chartData = {
    labels: data.map((d) => d.timestamp),
    datasets: [
      {
        label: "TSLA Price",
        data: data.map((d) => d.price),
        borderColor: "blue",
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl">Tesla Stock Dashboard</h2>
      <p>Current Price: ${data[data.length - 1]?.price || "N/A"}</p>
      <Line data={chartData} />
    </div>
  );
};

export default Dashboard;

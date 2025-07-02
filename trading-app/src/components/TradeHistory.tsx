import { useState } from "react";
import type { Trade } from "../types";

const TradeHistory: React.FC = () => {
  const [trades, setTrades] = useState<Trade[]>([
    {
      timestamp: "2025-07-01T10:00:00Z",
      action: "buy",
      price: 240,
      profitLoss: 0,
    },
    {
      timestamp: "2025-07-01T11:00:00Z",
      action: "sell",
      price: 260,
      profitLoss: 20,
    },
  ]);

  return (
    <div className="p-4">
      <h2 className="text-2xl">Trade History</h2>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Timestamp</th>
            <th className="border p-2">Action</th>
            <th className="border p-2">Price (£)</th>
            <th className="border p-2">Profit/Loss (£)</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, i) => (
            <tr key={i}>
              <td className="border p-2">{trade.timestamp}</td>
              <td className="border p-2">{trade.action}</td>
              <td className="border p-2">{trade.price}</td>
              <td className="border p-2">{trade.profitLoss}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradeHistory;

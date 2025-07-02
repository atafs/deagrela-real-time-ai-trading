export interface StockData {
  timestamp: string;
  price: number;
  volume: number;
}

export interface Trade {
  timestamp: string;
  action: string;
  price: number;
  profitLoss: number;
}

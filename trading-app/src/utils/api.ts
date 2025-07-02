import axios from "axios";
import type { StockData } from "../types";

export const fetchMockData = async (): Promise<StockData[]> => {
  const response = await axios.get<StockData[]>("/data/mock-tesla-data.json");
  return response.data;
};

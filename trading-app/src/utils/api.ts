import axios from "axios";
import type { StockData } from "../types";

export const fetchMockData = async (): Promise<StockData[]> => {
  try {
    const response = await axios.get<StockData[]>("/data/mock-tesla-data.json");
    if (!Array.isArray(response.data)) {
      console.error(
        "fetchMockData: Response data is not an array:",
        response.data
      );
      return [];
    }
    return response.data;
  } catch (error) {
    console.error("fetchMockData error:", error);
    return [];
  }
};

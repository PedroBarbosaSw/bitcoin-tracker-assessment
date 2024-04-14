import axios, { type AxiosInstance } from "axios";

const coingeckoApi = import.meta.env.VITE_COINGECKO_API_BASE_URL;

class ApiClient {
  static client: AxiosInstance;

  static init() {
    this.client = axios.create({
      baseURL: coingeckoApi,
      headers: {}, // No auth
    });
  }
}

export default ApiClient;
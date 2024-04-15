interface Coin {
  current_price: number;
  id: string;
  image: string;
  name: string;
  symbol: string;
  market_cap?: number;
  price_change_percentage_24h?: number;
}

interface CoinMarketPrice extends Omit<Coin, 'current_price' | 'image' | 'price_change_percentage_24h'> {
  market_data: {
    current_price: {
      [key: string]: number;
    };
    price_change_percentage_24h?: number;
  };
  image: {
    small: string;
  }
}

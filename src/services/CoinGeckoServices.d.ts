interface GetAllCoinsResponse {
  id: string
  image: string
  name: string
}

interface GetPricesResponse {
  [key: string]: { usd: number }
}

interface GetCoinsMarketsResponse {
  coins: Coin[]
}

import ApiClient from '@/config/axios-config'
import type { AxiosError } from 'axios'

export const CoinGeckoService = {
  GetCoinsMarkets: async (coinIds: string[]): Promise<Coin[]> => {
    const ids = coinIds.join(',')

    const { data } = await ApiClient.client.get('/coins/markets', {
      params: { vs_currency: 'usd', ids: ids }
    })

    return data
  },
  GetCoin: async (coinId: string): Promise<CoinMarketPrice> => {
    try {
      const { data } = await ApiClient.client.get(`/coins/${coinId}`)

      return data
    } catch (error) {
      throw new Error(`Failed to fetch coin: ${(error as AxiosError).message}`)
    }
  },
  GetHistoricalData: async (coinId: string, date: string): Promise<CoinMarketPrice> => {
    try {
      const { data } = await ApiClient.client.get(`/coins/${coinId}/history`, {
        params: {
          vs_currency: 'usd',
          date
        }
      })

      return data
    } catch (error) {
      throw new Error(`Failed to fetch historical prices: ${(error as AxiosError).message}`)
    }
  }
}

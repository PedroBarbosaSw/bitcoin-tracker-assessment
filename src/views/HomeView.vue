<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { CoinGeckoService } from '@/services/CoinGeckoService'
import { formatAsUSD } from '@/utils/formatUtils'
import { EyeIcon } from '@heroicons/vue/24/solid'
import PriceChangeIndicator from '@/components/PriceChangeIndicator.vue'

const coins = ref<Coin[]>([])

onMounted(() => {
  async function fetchCoins() {
    coins.value = await CoinGeckoService.GetCoinsMarkets([
      'bitcoin',
      'ethereum',
      'tether',
      'dacxi',
      'solana'
    ]);
  }

  fetchCoins();

  const intervalId = setInterval(fetchCoins, 10000);

  onUnmounted(() => {
    clearInterval(intervalId)
  })
});
</script>

<template>
  <main>
    <table class="w-full bg-white rounded-md">
      <caption class="p-4 font-semibold text-sm text-gray-900 bg-gray-100 caption-top">
        You can search by date by clicking in the coin you want
      </caption>

      <thead class="bg-gray-200">
        <tr class="text-left text-gray-900 text-sm">
          <th></th>
          <th scope="col" class="p-3 font-semibold sticky left-0 min-w-[120px]">Coin</th>
          <th class="p-3 font-semibold text-right">Price</th>
          <th class="p-3 font-semibold text-right">24h</th>
          <th class="p-3 font-semibold text-right">Market Cap</th>
        </tr>
      </thead>

      <tbody class="divide-y divide-gray-300">
        <tr v-for="coin in coins" :key="coin.id">
          <td class="pl-3">
            <router-link :to="{ name: 'coin', params: { coinId: coin.id } }">
              <EyeIcon class="w-5 text-gray-700 hover:cursor-pointer" />
            </router-link>
          </td>

          <td class="p-3 text-gray-700 hover:cursor-pointer sticky left-0 bg-white">
            <router-link :to="{ name: 'coin', params: { coinId: coin.id } }">
              <div class="flex items-center gap-2">
                <img :src="coin.image" width="24" height="24" class="max-h-6" />

                <div class="flex flex-col">
                  <span class="font-semibold text-base">{{ coin.name }}</span>
                  <small class="uppercase font-medium text-gray-500">{{ coin.symbol }}</small>
                </div>
              </div>
            </router-link>
          </td>

          <td class="p-3 font-normal text-sm text-gray-700 text-right">
            {{ formatAsUSD(coin.current_price) }}
          </td>

          <td class="p-3 font-normal text-sm text-gray-700">
            <price-change-indicator :priceChange="coin.price_change_percentage_24h || 0" />
          </td>

          <td class="p-3 font-normal text-sm text-gray-700 text-right">
            {{ formatAsUSD(coin.market_cap || 0) }}
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

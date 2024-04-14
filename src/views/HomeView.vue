<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { CoinGeckoService } from '@/services/CoinGeckoService';
import { formatAsUSD, formatPositiveDecimal } from '@/utils/formatUtils';
import { EyeIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid'

const coins = ref<Coin[]>([
  // { current_price: 64312, id: 'bitcoin', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400', name: 'Bitcoin', symbol: 'btc', market_cap: 1266025854655, price_change_percentage_24h: 0.5 },
  // { current_price: 3065.28, id: 'ethereum', image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628', name: 'Ethereum', symbol: 'eth', market_cap: 1266025854655, price_change_percentage_24h: 0.5 },
  // { current_price: 1.001, id: 'ethereum', image: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1696501661', name: 'Theter', symbol: 'tet', market_cap: 1266025854655, price_change_percentage_24h: 0.5 },
]);

onMounted(async () => {
  // setInterval(() => {
    // latestPrice.value = await fetchBitcoinPrice();
    coins.value = await CoinGeckoService.GetCoinsMarkets(['bitcoin', 'ethereum', 'tether']);
    // console.log('teste', teste);
    // coinsPrice.value = (await CoinGeckoService.GetPrices(['bitcoin', 'ethereum']));
  // }, 10000);
})
</script>

<template>
  <main class="max-w-7xl">
    <table class="w-full bg-white shadow-md">
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
        <tr
          v-for="coin in coins"
          :key="coin.id"
          class="hover:bg-gray-100"
        >
          <td class="pl-3">
            <router-link :to="{ name: 'coin', params: { coinId: coin.id} }">
              <EyeIcon class="w-5 text-gray-700 hover:cursor-pointer" />
            </router-link>
          </td>

          <td class="p-3 text-gray-700 hover:cursor-pointer sticky left-0">
            <router-link :to="{ name: 'coin', params: { coinId: coin.id} }">
              <div class="flex items-center gap-2">

                <img :src="coin.image" width="24" height="24" class="max-h-6" />
  
                <div class="flex flex-col">
                  <span class="font-semibold text-base">{{ coin.name }}</span>
                  <small class="uppercase font-medium text-gray-500">{{ coin.symbol }}</small>
                </div>
              </div>
            </router-link>
          </td>

          <td
            class="p-3 font-normal text-sm text-gray-700 text-right"
          >
            {{ formatAsUSD(coin.current_price) }}
          </td>

          <td
            class="p-3 font-normal text-sm text-gray-700"
          >
            <div
              :class="{'text-red-500': (coin.price_change_percentage_24h || 0) < 0, 'text-green-500': (coin.price_change_percentage_24h || 0) >= 0}"
              class="flex items-center justify-end font-medium"
            >
              <template v-if="(coin.price_change_percentage_24h || 0) < 0">
                <ChevronDownIcon class="inline-block w-4 h-4 mr-1" />
              </template>

              <template v-else>
                <ChevronUpIcon class="inline-block w-4 h-4 mr-1" />
              </template>

              {{ formatPositiveDecimal(coin.price_change_percentage_24h || 0) }}%
            </div>
          </td>

          <td
            class="p-3 font-normal text-sm text-gray-700 text-right"
          >
            {{ formatAsUSD(coin.market_cap || 0) }}
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

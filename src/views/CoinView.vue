<script setup lang="ts">
import { CoinGeckoService } from '@/services/CoinGeckoService';
import { formatDateToDDMMYYYY } from '@/utils/dateUtil';
import { formatAsUSD } from '@/utils/formatUtils';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
import PriceChangeIndicator from '@/components/PriceChangeIndicator.vue';

const route = useRoute();
const coinId = route.params.coinId as string;

const coin = ref<CoinMarketPrice>();
const selectedDate = ref('');

const fetchHistoricalData = async () => {
  if (selectedDate.value) {
    const historicalPrice = await CoinGeckoService.GetHistoricalData(
      coinId, formatDateToDDMMYYYY(selectedDate.value)
    );

    if (historicalPrice) {
      coin.value = historicalPrice;
    }
  }
};

onMounted(async () => {
  coin.value = await CoinGeckoService.GetCoin(coinId);
});
</script>

<template>
  <div class="p-4">
    <router-link to="/" class="flex items-center gap-2 text-gray-700 font-bold">
      <ArrowLeftIcon class="w-4" />

      Go back
    </router-link>

    <form class="flex flex-col gap-2 mt-4">
      <label for="date" class="text-gray-500">Select a date</label>

      <input
        type="date"
        v-model="selectedDate"
      >
  
      <button
        @click="fetchHistoricalData"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Search
      </button>
    </form>


    <div class="flex gap-2 items-center mt-6">
      <img :src="coin?.image.small" width="24" height="24" />
    
      <span class="font-bold text-gray-900 text-base">{{ coin?.name }}</span>
      <small class="uppercase font-normal text-gray-500">{{ coin?.symbol }} <span class="capitalize">price</span></small>
    </div>
  
    <div class="flex items-center gap-2 mt-2">
      <p class="text-3xl text-gray-900 font-bold">{{ formatAsUSD(coin?.market_data.current_price.usd as number) }}</p>
  
      <price-change-indicator v-if="!selectedDate" :priceChange="coin?.market_data.price_change_percentage_24h || 0" />
    </div>
  </div>
</template>

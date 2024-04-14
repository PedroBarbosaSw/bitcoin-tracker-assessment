<script setup lang="ts">
import { CoinGeckoService } from '@/services/CoinGeckoService';
import { formatDateToDDMMYYYY } from '@/utils/dateUtil';
import { formatAsUSD } from '@/utils/formatUtils';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const coinId = route.params.coinId as string;

const coin = ref<CoinWithMarketPrice>();
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

const formattedCoinPrice = computed(() => {
  if (!coin.value) return '';

  return formatAsUSD(coin.value.market_data.current_price.usd);
});

onMounted(async () => {
  const fetchedCoin = await CoinGeckoService.GetCoin(coinId);
  
  if (fetchedCoin) {
    coin.value = fetchedCoin;
  }
});
</script>

<template>
  <router-link to="/">Go back to Home</router-link>

  <h1>This is a coin page</h1>

  <input type="date" v-model="selectedDate">
  <button @click="fetchHistoricalData">Search</button>

  <p>This is the {{ $route.params.coinId }} coin and the value is {{ formattedCoinPrice }}</p>
</template>

<style>
  /* Add styles here */
</style>

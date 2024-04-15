<script setup lang="ts">
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/24/solid';

defineProps({
  priceChange: {
    type: Number,
    default: 0
  }
});
</script>

<template>
  <div
    :class="{
      'text-red-500': priceChange < 0,
      'text-green-500': priceChange >= 0
    }"
    class="flex items-center justify-end font-medium"
  >
    <template v-if="priceChange < 0">
      <ChevronDownIcon class="inline-block w-4 h-4 mr-1" />
    </template>

    <template v-else>
      <ChevronUpIcon class="inline-block w-4 h-4 mr-1" />
    </template>

    {{ priceChange }}%
  </div>
</template>


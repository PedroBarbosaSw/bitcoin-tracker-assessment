<template v-if="isLoading">
  <tr v-for="n in 4" :key="n" class="animate-pulse">
    <td class="p-3">
      <div class="h-5 bg-gray-300 rounded w-5"></div>
    </td>
    <td class="p-3">
      <div class="flex items-center gap-2">
        <div class="h-6 w-6 bg-gray-300 rounded"></div>
        <div>
          <div class="h-4 bg-gray-300 rounded w-24"></div>
          <div class="h-4 bg-gray-300 rounded w-16 mt-2"></div>
        </div>
      </div>
    </td>
    <td class="p-3">
      <div class="h-4 bg-gray-300 rounded w-12"></div>
    </td>
    <td class="p-3">
      <div class="h-4 bg-gray-300 rounded w-10"></div>
    </td>
    <td class="p-3">
      <div class="h-4 bg-gray-300 rounded w-16"></div>
    </td>
  </tr>
</template>

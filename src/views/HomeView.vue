<script setup lang="ts">
import CardCountries from "@/components/CardCountries.vue";
import FilterCountry from "@/components/FilterCountry.vue";
</script>

<template>
  <div class="px-4 py-4 bg-white dark:bg-slate-500 rounded-lg">
    <h1 class="mb-4 text-5xl dark:text-white">Countries</h1>
    <FilterCountry />
    <CardCountries />
  </div>
</template>

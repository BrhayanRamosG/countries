<template>
  <div class="px-4 py-4 bg-white dark:bg-slate-500 rounded-lg">
    <h1 class="mb-4 text-5xl dark:text-white">Search country</h1>
    <SearchCountry />
    <CardCountry />
  </div>
</template>

<script setup lang="ts">
import SearchCountry from "@/components/SearchCountry.vue";
import CardCountry from "@/components/CardCountry.vue";
</script>

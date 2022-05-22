<template>
  <footer class="bg-sky-600 dark:bg-sky-900 mt-auto text-white">
    <div class="px-2 py-2 text-center">
      <p>BRG {{ getYear }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const getYear = computed(() => {
  return new Date().getFullYear();
});
</script>

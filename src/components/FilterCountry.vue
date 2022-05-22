<template>
  <form @submit="filterCountry">
    <div class="col-span-6 sm:col-span-3">
      <label
        for="filter-filter"
        class="block font-medium dark:text-slate-200 text-gray-700 text-lg"
        >Filter countries</label
      >
      <select
        v-model="filter"
        id="filter-filter"
        name="filter-filter"
        class="px-2 py-2 dark:text-white dark:bg-slate-600 mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-2xl"
      >
        <option value="">Choose an option</option>
        <option v-for="(val, index) in options" :key="index" :value="val.value">
          {{ index + 1 }}- {{ val.name }}
        </option>
      </select>
    </div>
    <button
      type="submit"
      @click="filterCountry"
      class="block w-full shadow-sm mt-4 mb-4 bg-lime-500 hover:bg-lime-400 dark:bg-green-600 dark:text-white dark:hover:bg-green-500 px-2 py-2 sm:text-2xl rounded-md"
    >
      {{ getRegion.length > 0 ? `Filter by ${getRegion[0]?.name}` : "Filter" }}
    </button>
    <div v-if="!filter.trim() && !isFilter">
      <p class="text-red-600 dark:text-red-300 text-2xl">
        Field filter is empty.
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useCountryStore } from "../stores/country";
const store = useCountryStore();
const filter = ref("");
const isFilter = ref(false);
const options = [
  {
    value: "1",
    name: "America",
  },
  {
    value: "2",
    name: "Europe",
  },
  {
    value: "3",
    name: "Asia",
  },
  {
    value: "4",
    name: "Oceania",
  },
  {
    value: "5",
    name: "Africa",
  },
];

const filterCountry = (e: Event) => {
  e.preventDefault();
  if (!filter.value.trim()) {
    isFilter.value = false;
    alert("Choose a filter");
    return;
  }
  if (filter.value == "1") store.fetchRegion("ame");
  else if (filter.value == "2") store.fetchRegion("europe");
  else if (filter.value == "3") store.fetchRegion("asia");
  else if (filter.value == "4") store.fetchRegion("oceania");
  else if (filter.value == "5") store.fetchRegion("africa");
  isFilter.value = true;
  filter.value = "";
};

const getRegion = computed(() => {
  return options.filter((val) => val.value == filter.value);
});
</script>

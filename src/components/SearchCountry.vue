<template>
  <form @submit="searchCountry">
    <div class="col-span-6 sm:col-span-3">
      <label
        for="country-name"
        class="block font-medium dark:text-slate-200 text-gray-700 text-lg"
        >Country name</label
      >
      <input
        v-model="country"
        type="text"
        name="country-name"
        id="country-name"
        placeholder="Country name"
        class="px-2 py-2 mt-1 h-10 bg-slate-100 dark:text-white dark:bg-slate-600 dark:placeholder:text-slate-300 focus:ring-sky-500 focus:border-sky-500 block w-full shadow-sm sm:text-2xl border-gray-300 rounded-md"
      />
    </div>
    <button
      type="submit"
      @click="searchCountry"
      class="block w-full shadow-sm mt-4 mb-4 bg-lime-500 hover:bg-lime-400 dark:bg-green-600 dark:text-white dark:hover:bg-green-500 px-2 py-2 sm:text-2xl rounded-md"
    >
      Search
    </button>
    <div v-if="!country.trim() && !isSearch">
      <p class="text-red-600 dark:text-red-300 text-2xl">
        Field country name is empty.
      </p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCountryStore } from "../stores/country";
const store = useCountryStore();
const country = ref("");
const isSearch = ref(false);

const searchCountry = (e: Event) => {
  e.preventDefault();
  if (!country.value.trim()) {
    isSearch.value = false;
    alert("Type a country");
    return;
  }
  isSearch.value = true;
  store.fetchCountry(country.value);
  country.value = "";
};
</script>

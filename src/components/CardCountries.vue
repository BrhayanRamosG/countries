<template>
  <div class="rounded-md">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div
        class="px-4 py-4 text-black dark:text-white grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="(pais, index) in getCountries"
          :key="index"
          class="px-2 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 dark:hover:shadow-sky-400 hover:shadow-sky-600 bg-white dark:bg-slate-700 shadow-md shadow-slate-300 group"
        >
          <h3 class="mt-0 mb-2 text-xl font-medium">#{{ index + 1 }}</h3>
          <div class="w-full rounded-lg overflow-hidden">
            <img
              :src="pais.flags.svg"
              :alt="pais.flag"
              class="w-full h-auto object-center object-cover group-hover:opacity-75"
            />
          </div>
          <h3 class="mt-4 text-lg font-medium">
            Country: {{ pais.name.common }}
          </h3>
          <p class="mt-1 mb-4 text-base font-medium">
            Capital: {{ pais?.capital?.[0] }} <br />
            Region: {{ pais.region }}<br />
            Population:
            {{
              new Intl.NumberFormat("en-US", {
                maximumSignificantDigits: 3,
              }).format(pais.population)
            }}<br />
            Area:
            {{
              new Intl.NumberFormat("en-US", {
                maximumSignificantDigits: 3,
              }).format(pais.area)
            }}
            km <sup>2</sup><br />
          </p>

          <button
            class="flex px-2 py-2 mb-2 bg-black rounded-md text-lg text-white hover:bg-slate-500"
          >
            <MapIcon class="w-6 h-6 text-yellow-400" />
            <a :href="pais.maps.googleMaps" target="_BLANK">View map</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useCountryStore } from "../stores/country";
import { MapIcon } from "@heroicons/vue/solid";

const store = useCountryStore();

const getCountries = computed(() => {
  return store.getCountries;
});

onMounted(() => {
  store.fetchCountries();
});
</script>

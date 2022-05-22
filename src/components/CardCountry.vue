<template>
  <div class="bg-white text-black dark:bg-black dark:text-white rounded-md">
    <div class="bg-white dark:bg-slate-500">
      <div
        class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div class="grid grid-cols-1 gap-y-10">
          <div
            v-for="(pais, index) in getCountry.data"
            :key="index"
            class="group"
          >
            <div class="w-full rounded-lg overflow-hidden">
              <img
                :src="pais.flags.svg"
                :alt="pais.flag"
                class="w-full h-auto xl:h-auto object-center object-cover"
              />
            </div>
            <h3 class="mt-4 text-6xl font-medium">
              {{ pais.name.common }}
            </h3>
            <p class="mt-4 mb-4 text-2xl font-medium">
              Capital: {{ pais?.capital?.[0] }} <br />
              Region: {{ pais.region }} <br />
              Independent: {{ pais.independent }}<br />
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
              Start of week: {{ pais.startOfWeek }}<br />
              Demonym: {{ pais.demonyms?.eng?.m }} <br />
              FIFA: {{ pais.fifa }}<br />
            </p>
            <button
              class="flex px-2 py-2 mb-2 bg-black rounded-md text-lg text-white hover:bg-slate-700"
            >
              <MapIcon class="w-6 h-6 text-yellow-400" />
              <a :href="pais.maps.googleMaps" target="_BLANK">View map</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useCountryStore } from "../stores/country";
import { MapIcon } from "@heroicons/vue/solid";
const store = useCountryStore();

const getCountry = computed(() => {
  return store.getCountry;
});
</script>

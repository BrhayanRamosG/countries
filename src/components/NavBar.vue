<template>
  <Disclosure
    as="nav"
    class="sticky bg-sky-600 dark:bg-sky-900 text-white"
    v-slot="{ open }"
  >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
          <div>
            <button
              @click="changeTheme"
              :class="[
                !store.isDarkTheme ? 'hover:bg-sky-500' : 'hover:bg-sky-700',
                'px-2 py-2 rounded-2xl',
              ]"
            >
              <MoonIcon
                v-if="!store.isDarkTheme"
                class="w-6 h-6 text-yellow-200"
              />
              <SunIcon v-else class="w-6 h-6 text-yellow-400" />
            </button>
          </div>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  'text-white hover:bg-sky-500 dark:hover:bg-sky-700 hover:text-white',
                  'px-3 py-2 rounded-md text-lg font-medium',
                ]"
                >{{ item.name }}</RouterLink
              >
              <button
                @click="changeTheme"
                :class="[
                  !store.isDarkTheme ? 'hover:bg-sky-500' : 'hover:bg-sky-700',
                  'px-2 py-2 rounded-2xl',
                ]"
              >
                <MoonIcon
                  v-if="!store.isDarkTheme"
                  class="w-6 h-6 text-yellow-200"
                />
                <SunIcon v-else class="w-6 h-6 text-yellow-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :to="item.href"
          :class="[
            'text-white hover:bg-sky-500 dark:hover:bg-sky-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          >{{ item.name }}
        </RouterLink>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { SunIcon, MoonIcon } from "@heroicons/vue/solid";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

import { useCountryStore } from "../stores/country";
const store = useCountryStore();

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Search",
    href: "/search",
  },
];

onMounted(() => {
  store.checkThemeOnLoad();
});

const changeTheme = () => {
  store.changeTheme();
};
</script>

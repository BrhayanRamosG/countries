<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import FooterPage from "@/components/FooterPage.vue";
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main class="px-2 py-2 mx-2 my-2">
    <RouterView />
  </main>
  <FooterPage />
</template>

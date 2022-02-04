<template>
  <div
    class="relative flex flex-col min-h-screen bg-gradient-to-tr from-gray-900 to-gray-800"
  >
    <div
      class="absolute inset-0 bg-[url(https://snippets.alexandru.so/grid.svg)]"
    ></div>
    <!-- <Banner /> -->
    <Header />
    <NuxtPage class="z-10 overflow-x-hidden" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import "highlight.js/styles/atom-one-dark.css";
const route = useRoute();
const firstVisit = ref(true);

watch(
  route,
  (n) => {
    if (process.client) {
      if (firstVisit.value) {
        firstVisit.value = false;
        return;
      }
      window.scrollTo({top:0, behavior: "smooth"});
    }
  },
  { deep: true, immediate: true }
);
</script>

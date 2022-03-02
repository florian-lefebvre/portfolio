<template>
  <div class="relative">
    <div
      class="relative flex min-h-screen flex-col bg-gradient-to-tr from-gray-900 to-gray-800"
    >
      <div
        class="absolute inset-0 bg-[url(https://snippets.alexandru.so/grid.svg)]"
      ></div>
      <Banner />
      <Header />
      <NuxtPage class="z-10 overflow-x-hidden" />
      <Footer />
      <!-- <button
          class="fixed bottom-4 right-4 z-50 rounded-full bg-white px-4 py-2 font-semibold shadow-md transition-transform hover:scale-95"
          @click="$i18n.locale = $i18n.locale === 'en' ? 'fr' : 'en'"
        >
          {{ $i18n.locale }}
        </button> -->
      <BackToTop />
    </div>
    <transition name="loading">
      <LoadingScreen v-if="!mounted" />
    </transition>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const firstVisit = ref(true);
const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

watch(
  route,
  (n) => {
    if (process.client) {
      if (firstVisit.value) {
        firstVisit.value = false;
        return;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },
  { deep: true, immediate: true }
);
</script>

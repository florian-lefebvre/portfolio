<template>
  <div
    class="relative flex flex-col min-h-screen bg-gradient-to-tr from-gray-900 to-gray-800"
  >
    <div
      class="absolute inset-0 bg-[url(https://snippets.alexandru.so/grid.svg)]"
    ></div>
    <!-- <Banner /> -->
    <Header />
    <NuxtPage class="z-10 overflow-x-hidden"/>
    <Footer />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
watch(
  route,
  (n) => {
    if (process.client) {
      if (n.params.savePosition) {
        const isString: boolean = typeof n.params.savePosition === "string";
        window.scrollTo({
          top: parseInt(
            isString ? (n.params.position as string) : n.params.position[0]
          ),
          behavior: "smooth",
        });
      }
    }
  },
  { deep: true, immediate: true }
);
</script>

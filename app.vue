<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-tr from-gray-800 to-gray-900">
    <!-- <Banner /> -->
    <Header />
    <NuxtPage />
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

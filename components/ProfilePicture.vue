<template>
  <nuxt-link
    to="/"
    class="rounded-full focus:ring focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-900"
  >
    <img :src="url" alt="Profile picture" class="h-10 w-10 rounded-full" />
  </nuxt-link>
</template>

<script setup lang="ts">
const url = useCloudinary({
  path: "global/pp.jpg",
  id: "qx3inv",
});
</script>

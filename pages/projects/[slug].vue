<template>
  <div class="bg-blue-500 text-white">
    {{ route.params.slug }}
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

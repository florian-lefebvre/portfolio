<template>
  <div
    class="prose prose-invert max-w-none prose-img:w-full prose-img:rounded-lg"
    v-html="content"
  ></div>
</template>

<script setup lang="ts">
defineProps<{ content: string }>();
</script>

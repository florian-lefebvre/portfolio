<template>
  <Container>
    <!-- <pre class="bg-primary-900 text-white p-2 rounded-lg">{{ JSON.stringify(posts, null, 2) }}</pre> -->
    <div class="prose prose-invert">
      <component :is="posts[0].default" />
    </div>
  </Container>
</template>

<script setup lang="ts">
const posts = Object.values(import.meta.globEager("../../content/en/*.md"));
</script>

<template>
  <div class="max-w-[100vw] m-0 px-0 py-16">
    <!-- <pre class="bg-primary-900 text-white p-2 rounded-lg">{{ JSON.stringify(posts, null, 2) }}</pre> -->
    <Container>
      <div class="prose prose-invert max-w-none">
        <component :is="posts[0].default" />
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
const posts = Object.values(import.meta.globEager("../../content/en/*.md"));
</script>

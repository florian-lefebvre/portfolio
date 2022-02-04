<template>
  <div class="m-0 max-w-[100vw] px-0 py-16">
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

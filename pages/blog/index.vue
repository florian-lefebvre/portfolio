<template>
  <div>
    <div>
      <NuxtLink
        v-for="article in articles"
        :to="`/blog/${article.path}`"
        class="text-white"
        >{{ article.metadata.title }}</NuxtLink
      >
    </div>
    <div>
      <component :is="x[0].default" />
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = Object.values(
  import.meta.globEager("../../content/en/blog/*.md")
);
const articles = posts.map((post) => {
  return {
    path: post.default.__file.split("/").at(-1).split(".")[0],
    metadata: {
      title: post.title,
      description: post.desc,
    },
  };
});
const x = Object.values(import.meta.globEager("../../content/en/about.md"));
</script>

<template>
  <Container class="">
    <code class="bg-blue-600 text-white">
      {{ projects }}
    </code>
    <ProjectsSwiper />
  </Container>
</template>

<script setup lang="ts">
import projects from "~/data/projects";
useSeo({
  title: "Projects",
});
</script>

<template>
  <Container class="w-full py-16">
    <ProjectsSwiper />
  </Container>
</template>

<script setup lang="ts">
import projects from "~/data/projects";
useSeo({
  title: "Projects",
});
</script>

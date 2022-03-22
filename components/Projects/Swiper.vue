<template>
  <AppSwiper>
    <SwiperSlide v-for="project in projects.slice(0, 5)">
      <ProjectsCard :project="project" />
    </SwiperSlide>
  </AppSwiper>
</template>

<script setup lang="ts">
import projects from "~/data/projects";
</script>

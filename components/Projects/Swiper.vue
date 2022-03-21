<template>
  <AppSwiper>
    <SwiperSlide v-for="project in projects">
      <ProjectsCard :project="project" />
    </SwiperSlide>
  </AppSwiper>
</template>

<script setup lang="ts">
import projects from "~/data/projects";
</script>

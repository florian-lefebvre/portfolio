<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="(project, i) in projects"
      v-motion
      :initial="{
        opacity: 0,
        y: 20,
      }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 500,
          delay: i * 50,
        },
      }"
    >
      <ProjectsCard :project="project" detailed />
    </div>
  </div>
</template>

<script setup lang="ts">
import projects from "~/data/projects";
</script>

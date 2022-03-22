<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    <div v-for="(project, i) in projects">
      <ProjectsCard :project="project" detailed />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from "~/types";

defineProps<{ projects: Project[] }>();
</script>

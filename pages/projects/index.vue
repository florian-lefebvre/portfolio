<template>
  <Container class="w-full py-16">
    <ProjectsSwiper />
  </Container>
</template>

<script setup lang="ts">
import projects from "~/data/projects";
const { t } = useI18n();

useSeo({
  title: t("pages.projects.seo.title"),
  description: t("pages.projects.seo.description"),
});
</script>

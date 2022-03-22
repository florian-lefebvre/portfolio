<template>
  <div>
    <Container class="py-16 md:py-20">
      <h2
        class="title bg-gradient text-gradient inline-block font-semibold"
        v-motion
        :initial="{
          opacity: 0,
          y: 20,
        }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            duration: 400,
          },
        }"
      >
        {{ $t("pages.projects.title") }}
      </h2>
      <div class="text-gray-200 md:text-lg">
        <p
          class="max-w-3xl"
          v-motion
          :initial="{
            opacity: 0,
            y: 20,
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 400,
              delay: 200,
            },
          }"
        >
          {{ $t("pages.projects.description") }}
        </p>
        <div
          class="mt-16"
          v-motion
          :initial="{
            opacity: 0,
            y: 20,
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 400,
              delay: 400,
            },
          }"
        >
          <ProjectsFeatured :project="projects[0]" />
        </div>
      </div>
    </Container>
    <div class="bg-gray-900/50">
      <Container class="py-16 md:py-20">
        <ProjectsGrid />
      </Container>
    </div>
  </div>
</template>

<script setup lang="ts">
import projects from "~/data/projects";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

useSeo({
  title: t("pages.projects.seo.title"),
  description: t("pages.projects.seo.description"),
});
</script>

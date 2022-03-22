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
          <ProjectsFeatured :project="featured" />
        </div>
      </div>
    </Container>
    <div class="bg-gray-900/50">
      <Container class="py-16 md:py-20">
        <div class="relative rounded-lg">
          <div
            class="absolute top-0 left-0 bottom-0 z-20 w-4 bg-gradient-to-r from-gray-900/75 to-gray-900/0"
          ></div>
          <div
            class="absolute top-0 right-0 bottom-0 z-20 w-4 bg-gradient-to-l from-gray-900/75 to-gray-900/0"
          ></div>
          <div class="relative mb-8 flex space-x-2 overflow-x-scroll">
            <button
              type="button"
              v-for="tag in ['All', ...tags]"
              class="mb-2 flex-shrink-0 select-none rounded-md px-4 py-2 transition-colors"
              :class="
                selectedTag === tag
                  ? 'bg-gradient font-semibold text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              "
              @click="selectedTag = tag"
            >
              {{ tag }}
            </button>
          </div>
        </div>
        <ProjectsGrid :projects="filteredProjects" />
      </Container>
    </div>
  </div>
</template>

<script setup lang="ts">
import projects, { featured } from "~/data/projects";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const tags = [
  ...new Set(projects.map((project) => project.global.technologies).flat()),
].sort();

const selectedTag = ref<string>("All");

const filteredProjects = computed(() =>
  projects.filter((project) => {
    if (selectedTag.value === "All") {
      return true;
    }

    return project.global.technologies.includes(selectedTag.value);
  })
);

useSeo({
  title: t("pages.projects.seo.title"),
  description: t("pages.projects.seo.description"),
});
</script>

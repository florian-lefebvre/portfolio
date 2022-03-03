<template>
  <div>
    <Error404 v-if="error" />
    <Container v-else class="py-16">
      <div>HEADER</div>
      <div class="grid grid-cols-12 lg:gap-16 xl:gap-8">
        <div class="col-span-12 lg:col-span-8 xl:col-span-9">
          <img :src="project.global.imageUrl" class="" />
          <div
            class="prose prose-invert mt-10 max-w-none"
            v-html="details.content"
          ></div>
          <pre class="bg-blue-500 text-white">
        {{ project }}
      </pre
          >
        </div>
        <div
          class="col-span-12 h-96 space-y-8 bg-gray-900 lg:col-span-4 xl:col-start-10"
        ></div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ProjectLocale } from "~/types";
import projects from "~/data/projects";
const route = useRoute();
const { locale } = useI18n();
const project = projects.find(
  (project) => project.locales[locale.value].slug === route.params.slug
);
const error = project === undefined;
const details: ProjectLocale = project.locales[locale.value];
</script>

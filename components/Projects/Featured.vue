<template>
  <NuxtLink
    :to="`/projects/${project.locales[$i18n.locale].slug}`"
    class="group"
  >
    <div
      class="relative z-10 grid grid-cols-2 gap-6 transition-all group-hover:scale-95"
    >
      <img
        :src="project.global.imageUrl"
        class="w-full overflow-hidden rounded-lg border-2 border-gray-700/25 object-cover object-center"
        :alt="`${project.locales[$i18n.locale].name} thumbnail`"
        loading="lazy"
      />
      <div class="flex h-full flex-col">
        <div class="inline-block">
          <div
            class="bg-gradient mb-3 inline-block rounded-full px-3 py-1 text-sm text-white"
          >
            {{ project.locales[$i18n.locale].type }}
          </div>
        </div>
        <div class="mb-6 text-5xl font-semibold text-white">
          {{ project.locales[$i18n.locale].name }}
        </div>
        <div class="mb-4 text-gray-300 line-clamp-3">
          {{ project.locales[$i18n.locale].description }}
        </div>
        <div class="mt-auto text-gray-400">
          {{ project.global.technologies.join(", ") }}
        </div>
      </div>
    </div>
    <div
      class="absolute inset-0 scale-95 rounded-xl bg-gray-800/95 opacity-0 shadow transition-all group-hover:scale-x-100 group-hover:scale-y-105 group-hover:opacity-100"
    ></div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { Project } from "~/types";
defineProps<{ project: Project }>();
</script>

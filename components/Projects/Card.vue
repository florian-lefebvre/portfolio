<template>
  <NuxtLink
    :to="`/projects/${project.locales[$i18n.locale].slug}`"
    class="relative flex h-full flex-col overflow-visible rounded-xl bg-gray-800 text-white shadow-lg transition-all hover:scale-95 hover:shadow"
  >
    <div class="absolute top-3 left-3">
      <div class="bg-gradient rounded-full px-3 py-1 text-sm text-white">
        {{ project.locales[$i18n.locale].type }}
      </div>
    </div>
    <div class="p-1">
      <img
        :src="project.global.imageUrl"
        class="h-48 w-full overflow-hidden rounded-lg object-cover object-center"
        :alt="`${project.locales[$i18n.locale].name} thumbnail`"
        loading="lazy"
      />
    </div>
    <div class="flex h-full flex-col p-4">
      <div class="mb-2 text-xl font-semibold text-white">
        {{ project.locales[$i18n.locale].name }}
      </div>
      <div class="mb-4 text-gray-300 line-clamp-3">
        {{ project.locales[$i18n.locale].description }}
      </div>
      <div class="mt-auto text-sm text-gray-400" v-if="detailed">
        {{ project.global.technologies.join(", ") }}
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { Project } from "~/types";
defineProps<{ project: Project; detailed?: boolean }>();
</script>

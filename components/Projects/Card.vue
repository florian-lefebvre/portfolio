<template>
  <NuxtLink
    :to="`/projects/${project.locales[$i18n.locale].slug}`"
    class="group relative flex h-full flex-col overflow-hidden rounded-xl bg-gray-800 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-95 hover:shadow"
  >
    <div
      class="bg-gradient absolute inset-0 z-[15] flex translate-y-full items-center justify-center rounded-xl !bg-opacity-40 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
    >
      <div class="flex flex-col items-center">
        <EyeIcon class="h-16 w-16 text-white/80" />
        <div class="text-2xl font-semibold">
          {{ $t("global.projects.view") }}
        </div>
      </div>
    </div>
    <div class="absolute top-3 left-3 z-[14]">
      <div class="bg-gradient rounded-full px-3 py-1 text-sm text-white">
        {{ project.locales[$i18n.locale].type }}
      </div>
    </div>
    <div class="p-1">
      <img
        :src="project.global.imageUrl"
        class="h-48 w-full overflow-hidden rounded-lg object-cover object-center sm:h-64 md:h-48"
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
import { EyeIcon } from "@heroicons/vue/solid";
defineProps<{ project: Project; detailed?: boolean }>();
</script>

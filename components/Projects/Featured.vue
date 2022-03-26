<template>
  <NuxtLink
    :to="`/projects/${project.locales[$i18n.locale].slug}`"
    class="group"
  >
    <div
      class="relative z-10 grid gap-6 transition-all group-hover:scale-95 md:grid-cols-2"
    >
      <img
        ref="image"
        :src="project.global.imageUrl"
        class="max-h-full min-h-full min-w-full max-w-full overflow-hidden rounded-lg border-2 border-gray-700/25 object-cover object-center"
        :alt="`${project.locales[$i18n.locale].name} thumbnail`"
        :height="height"
        :width="width"
      />
      <div class="flex h-full flex-col">
        <div class="inline-block">
          <div
            class="bg-gradient mb-3 inline-block rounded-full px-3 py-1 text-sm text-white"
          >
            {{ project.locales[$i18n.locale].type }}
          </div>
        </div>
        <div class="mb-6 text-2xl font-semibold text-white md:text-5xl">
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

const image = ref<HTMLImageElement>();
const height = ref<number>();
const width = ref<number>();

const update = (): void => {
  height.value = image.value.height;
  width.value = image.value.width;
};

useWindowEventListener("resize", update);

onMounted(update);
</script>

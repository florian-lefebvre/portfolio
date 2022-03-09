<template>
  <AppSwiper>
    <SwiperSlide v-for="{ global: { imageUrl }, locales } in projects"
      ><NuxtLink
        :to="`/projects/${locales[$i18n.locale].slug}`"
        class="group relative block h-full overflow-hidden rounded-xl bg-gray-800 text-white shadow-lg transition-all hover:scale-95 hover:shadow"
      >
        <div
          class="absolute top-4 right-4 scale-75 rounded-lg border border-gray-700 bg-gray-800 p-2 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
        >
          <ArrowUpIcon class="h-6 w-6 rotate-45 text-gray-300" />
        </div>
        <div class="p-1">
          <img
            :src="imageUrl"
            class="h-48 w-full overflow-hidden rounded-lg object-cover object-center"
            :alt="`${locales[$i18n.locale].name} thumbnail`"
            loading="lazy"
          />
        </div>
        <div class="p-4">
          <div class="mb-2 text-xl font-semibold text-white">
            {{ locales[$i18n.locale].name }}
          </div>
          <div class="text-gray-300">
            {{ locales[$i18n.locale].description }}
          </div>
        </div>
      </NuxtLink></SwiperSlide
    >
  </AppSwiper>
</template>

<script setup lang="ts">
import projects from "~/data/projects";
import { ArrowUpIcon } from "@heroicons/vue/outline";
</script>

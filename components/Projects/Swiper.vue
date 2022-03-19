<template>
  <AppSwiper>
    <SwiperSlide v-for="{ global: { imageUrl }, locales } in projects"
      ><NuxtLink
        :to="`/projects/${locales[$i18n.locale].slug}`"
        class="relative block h-full overflow-visible rounded-xl bg-gray-800 text-white shadow-lg transition-all hover:scale-95 hover:shadow"
      >
        <div class="absolute top-3 left-3">
          <div class="bg-gradient rounded-full px-3 py-1 text-sm text-white">
            {{ locales[$i18n.locale].type }}
          </div>
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
          <div class="text-gray-300 line-clamp-3">
            {{ locales[$i18n.locale].description }}
          </div>
        </div>
      </NuxtLink></SwiperSlide
    >
  </AppSwiper>
</template>

<script setup lang="ts">
import projects from "~/data/projects";
</script>

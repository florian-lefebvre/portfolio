<template>
  <div>
    <Container class="py-16 md:py-20">
      <h2 class="title">
        {{ $t("pages.about.introduction.title1") }}
        <span class="bg-gradient text-gradient inline-block font-semibold">
          {{ $t("pages.about.introduction.title2") }}
        </span>
      </h2>
      <div class="text-gray-200 md:text-lg">
        <p class="mb-10 max-w-3xl">
          {{ $t("pages.about.introduction.shortDescription") }}
        </p>
        <div class="max-w-5xl">
          {{ $t("pages.about.introduction.longDescription") }}
        </div>
      </div>
    </Container>
    <div class="bg-gray-900/50">
      <Container class="py-16 md:py-20">
        <h2 class="title">
          {{ $t("pages.about.stack.title1") }}
          <span class="bg-gradient text-gradient inline-block font-semibold">
            {{ $t("pages.about.stack.title2") }}
          </span>
        </h2>
        <div class="text-gray-200 md:text-lg">
          <p class="mb-10 max-w-3xl">
            {{ $t("pages.about.stack.description") }}
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <div
            v-for="e in technologies"
            class="flex flex-col items-center justify-center rounded-lg bg-gray-800 p-6 text-white"
          >
            <TechIcon :technology="e" class="h-12 w-12" />
            <div class="mt-2 text-center font-semibold sm:text-xl">
              {{ e.title }}
            </div>
          </div>
        </div>
        <div class="mt-16 text-gray-200 md:text-lg">
          <p class="mb-10 max-w-3xl">
            {{ $t("pages.about.stack.otherTechnologies") }}
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <div
            v-for="e in otherTechnologies"
            class="flex flex-col items-center justify-center rounded-lg bg-gray-800 p-6 text-white"
          >
            <TechIcon :technology="e" class="h-12 w-12" />
            <div class="mt-2 text-center font-semibold sm:text-xl">
              {{ e.title }}
            </div>
          </div>
        </div>
        <div class="mt-16 text-gray-200 md:text-lg">
          <p class="mb-10 max-w-3xl">
            {{ $t("pages.about.stack.tools") }}
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <div
            v-for="e in tools"
            class="flex flex-col items-center justify-center rounded-lg bg-gray-800 p-6 text-white"
          >
            <TechIcon :technology="e" class="h-12 w-12" />
            <div class="mt-2 text-center font-semibold sm:text-xl">
              {{ e.title }}
            </div>
          </div>
        </div>
      </Container>
    </div>
    <Container class="py-16 md:py-20">
      <h2 class="title">
        {{ $t("pages.about.introduction.title1") }}
        <span class="bg-gradient text-gradient inline-block font-semibold">
          {{ $t("pages.about.introduction.title2") }}
        </span>
      </h2>
      <div class="text-gray-200 md:text-lg">
        <p class="mb-10 max-w-3xl">
          {{ $t("pages.about.introduction.shortDescription") }}
        </p>
        <div class="max-w-5xl">
          {{ $t("pages.about.introduction.longDescription") }}
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { technologies, otherTechnologies, tools } from "~/data/technologies";

useSeo({
  title: "About me",
});
</script>

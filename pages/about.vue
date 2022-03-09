<template>
  <div>
    <Container class="py-16 md:py-20">
      <h2
        class="title"
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
        {{ $t("pages.about.introduction.title1") }}
        <span class="bg-gradient text-gradient inline-block font-semibold">
          {{ $t("pages.about.introduction.title2") }}
        </span>
      </h2>
      <div class="text-gray-200 md:text-lg">
        <p
          class="mb-10 max-w-3xl"
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
          {{ $t("pages.about.introduction.shortDescription") }}
        </p>
        <div
          class="max-w-5xl"
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
          {{ $t("pages.about.introduction.longDescription") }}
        </div>
      </div>
    </Container>
    <div class="bg-gray-900/50">
      <Container class="py-16 md:py-20">
        <h2
          class="title"
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
          {{ $t("pages.about.stack.title1") }}
          <span class="bg-gradient text-gradient inline-block font-semibold">
            {{ $t("pages.about.stack.title2") }}
          </span>
        </h2>
        <div
          class="text-gray-200 md:text-lg"
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
          <p class="mb-10 max-w-3xl">
            {{ $t("pages.about.stack.description") }}
          </p>
        </div>
        <AboutTechnologiesList :technologies="technologies" />
        <div
          class="mt-16 text-gray-200 md:text-lg"
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
          <p class="mb-10 max-w-3xl">
            {{ $t("pages.about.stack.otherTechnologies") }}
          </p>
        </div>
        <AboutTechnologiesList :technologies="otherTechnologies" />
        <div
          class="mt-16 text-gray-200 md:text-lg"
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
          <p class="mb-10 max-w-3xl">
            {{ $t("pages.about.stack.tools") }}
          </p>
        </div>
        <AboutTechnologiesList :technologies="tools" />
      </Container>
    </div>
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
        {{ $t("pages.about.education.title") }}
      </h2>
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="(course, i) in $tm('pages.about.education.courses')"
          class="flex flex-col rounded-lg bg-gray-800 p-6 text-white"
          v-motion
          :initial="{
            opacity: 0,
            y: 20,
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              delay: (i as number) * 50,
            },
          }"
        >
          <div class="text-sm text-gray-400">
            {{ $rt(course.dates) }}
          </div>
          <div class="font-semibold sm:text-lg">
            {{ $rt(course.name) }}
          </div>
          <div class="mt-2 text-gray-300">
            {{ $rt(course.topic) }}
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { technologies, otherTechnologies, tools } from "~/data/technologies";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

useSeo({
  title: t("pages.about.seo.title"),
  description: t("pages.about.seo.description"),
});
</script>

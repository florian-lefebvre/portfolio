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
      <h2 class="title">
        {{ $t("pages.about.education.title") }}
      </h2>
      <div class="text-gray-200 md:text-lg">
        <p class="mb-10 max-w-3xl">
          {{ $t("pages.about.education.description") }}
        </p>
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

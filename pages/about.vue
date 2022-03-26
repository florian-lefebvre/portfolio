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
      <div class="space-y-10 text-gray-200 md:text-lg">
        <p
          class="max-w-3xl"
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
        <p
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
              delay: 600,
            },
          }"
        >
          <i18n-t
            tag="p"
            keypath="pages.about.introduction.music.description"
            scope="global"
          >
            <template v-slot:ohf>
              <NuxtLink
                target="_blank"
                :to="$t('pages.about.introduction.music.ohf.url')"
                class="bg-gradient animated-underline text-gradient relative font-semibold hover:text-white"
                >{{ $t("pages.about.introduction.music.ohf.name") }}
              </NuxtLink>
            </template>
            <template v-slot:rockBand>
              <NuxtLink
                target="_blank"
                :to="$t('pages.about.introduction.music.rockBand.url')"
                class="bg-gradient animated-underline text-gradient relative font-semibold hover:text-white"
                >{{ $t("pages.about.introduction.music.rockBand.name") }}
              </NuxtLink>
            </template>
          </i18n-t>
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
    <div
      class="py-16 md:py-20"
      :class="(i0 as number) % 2 === 0 ? '' : 'bg-gray-900/50'"
      v-for="(section, i0) in $tm('pages.about.sections')"
    >
      <Container>
        <h2
          class="title inline-block font-semibold"
          :class="(i0 as number) % 2 === 0 ? 'bg-gradient text-gradient' : 'text-white'"
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
          {{ $rt(section.title) }}
        </h2>
        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div
            v-for="(card, i1) in $tm(`pages.about.sections[${i0 as number}].cards`)"
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
                delay: (i1 as number) * 50,
              },
            }"
          >
            <div class="text-sm text-gray-400">
              {{ $rt(card.dates) }}
            </div>
            <div class="font-semibold sm:text-lg">
              {{ $rt(card.name) }}
            </div>
            <div class="mt-2 text-gray-300">
              {{ $rt(card.topic) }}
            </div>
          </div>
        </div>
      </Container>
    </div>
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

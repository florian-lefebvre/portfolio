<template>
  <div>
    <Container
      class="flex flex-col-reverse items-center py-16 md:py-20 lg:flex-row"
    >
      <div class="">
        <h1
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
          {{ $t("pages.home.introduction.title") }}
          <span
            class="bg-gradient text-gradient block font-semibold md:inline-block"
          >
            {{ $t("global.name") }}
          </span>
        </h1>
        <div
          class="max-w-xl text-gray-200 md:text-lg"
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
          <p class="mb-6">
            {{ $t("pages.home.introduction.short") }}
          </p>
          <i18n-t
            tag="p"
            class="mb-10"
            keypath="pages.home.introduction.description"
            scope="global"
          >
            <a
              target="_blank"
              href="https://ynotes.fr"
              class="bg-gradient animated-underline text-gradient relative font-semibold hover:text-white"
              >{{ $t("pages.home.introduction.descriptionLink") }}
            </a>
          </i18n-t>
        </div>
        <div class="block">
          <div
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
            <a href="#about" class="button-primary">
              {{ $t("pages.home.introduction.learnMore") }}
            </a>
          </div>
        </div>
        <div
          v-motion
          :initial="{
            opacity: 0,
          }"
          :visible="{
            opacity: 1,
            transition: {
              duration: 700,
              delay: 600,
            },
          }"
        >
          <a
            href="#about"
            class="mt-12 inline-flex animate-pulse items-center space-x-2 rounded-full text-gray-400 transition-all hover:animate-none hover:text-white focus:ring focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <ArrowCircleDownIcon class="h-10 w-10" />
            <div>{{ $t("pages.home.introduction.scrollDown") }}</div>
          </a>
        </div>
      </div>
      <div class="mb-16 block shrink-0 lg:mb-0 lg:ml-10">
        <HeroAtomAnimation
          v-motion
          :initial="{
            opacity: 0,
            y: 50,
          }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 750,
            },
          }"
        />
      </div>
    </Container>
    <div class="bg-gray-900/50">
      <Container class="py-16 md:py-20" id="about">
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
          {{ $t("pages.home.about.title1") }}
          <span class="bg-gradient text-gradient inline-block font-semibold">
            {{ $t("pages.home.about.title2") }}
          </span>
        </h2>
        <div class="max-w-3xl text-gray-200 md:text-lg">
          <p
            class="mb-10"
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
            {{ $t("pages.home.about.description") }}
          </p>
        </div>
        <div
          class="block"
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
          <nuxt-link to="/about" class="button-primary">
            {{ $t("pages.home.about.learnMore") }}
          </nuxt-link>
        </div>
        <div class="relative">
          <div
            class="inset-y-0 my-auto hidden h-0 w-full border-t-2 border-dashed border-gray-500 xl:absolute xl:block"
            v-motion
            :initial="{
              opacity: 0,
            }"
            :visible="{
              opacity: 1,
              transition: {
                duration: 600,
                delay: 800,
              },
            }"
          ></div>
          <div
            class="absolute inset-x-0 mx-auto block h-full w-0 border-l-2 border-dashed border-gray-500 sm:hidden"
            v-motion
            :initial="{
              opacity: 0,
            }"
            :visible="{
              opacity: 1,
              transition: {
                duration: 600,
                delay: 800,
              },
            }"
          ></div>
          <div
            class="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <div
              class="rounded-lg bg-gray-800 p-6 text-white"
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
                  delay: 500 + (i as number) * 50,
                },
              }"
              v-for="(card, i) in $tm('pages.home.about.cards')"
            >
              <i18n-t
                tag="div"
                class="mb-4 text-xl font-semibold"
                keypath="pages.home.about.cardsTitle"
                scope="global"
              >
                <span class="bg-gradient text-gradient">
                  {{ $rt(card.age) }}
                </span>
              </i18n-t>
              <div>
                {{ $rt(card.description) }}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <Container class="py-16 md:py-20">
      <h1 class="title">
        {{ $t("pages.home.projects.title1") }}
        <span
          class="bg-gradient text-gradient block font-semibold md:inline-block"
        >
          {{ $t("pages.home.projects.title2") }}
        </span>
      </h1>
      <div class="max-w-3xl text-gray-200 md:text-lg">
        <p class="mb-10">
          {{ $t("pages.home.projects.description") }}
        </p>
      </div>
      <div class="block">
        <NuxtLink to="/projects" class="button-primary">{{
          $t("pages.home.projects.viewAll")
        }}</NuxtLink>
      </div>
      <div class="mt-10">
        <ProjectsSwiper />
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ArrowCircleDownIcon } from "@heroicons/vue/outline";
const { t } = useI18n();

useSeo({
  title: t("pages.home.seo.title"),
  description: t("pages.home.seo.description", [
    t("pages.home.introduction.descriptionLink"),
  ]),
});
</script>

<template>
  <div class="z-10 bg-gray-800/50 py-16 md:py-20" id="contact">
    <Container>
      <h2 class="title">
        Get in
        <span
          class="bg-gradient text-gradient block font-semibold md:inline-block"
          >touch</span
        >
      </h2>
      <div class="max-w-3xl text-gray-200 md:text-lg">
        <p class="mb-10">
          If you wish to talk, or chat about an existing / upcoming project,
          feel free to reach out with any of the below methods.
        </p>
      </div>
      <div class="flex flex-col items-start space-y-6">
        <a
          v-for="link in social"
          :href="link.url(link.username)"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center space-x-4 text-gray-400 transition-colors hover:text-white"
        >
          <div class="h-8 w-8" v-html="link.icon"></div>
          <div>{{ link.username }}</div>
        </a>
      </div>
    </Container>
  </div>
  <div class="z-0 mt-auto bg-gray-900/50 backdrop-blur-md">
    <Container class="pt-16">
      <div ref="container">
        <div
          class="flex flex-col justify-center md:flex-row md:justify-between"
        >
          <div class="flex flex-col justify-start">
            <div class="mb-6 flex items-center justify-start space-x-4">
              <ProfilePicture />
              <div
                class="flex flex-col items-start justify-center font-semibold leading-5 text-gray-400"
              >
                <div>{{ firstName }}</div>
                <div>{{ lastName }}</div>
              </div>
            </div>
            <div class="mb-4 max-w-lg text-gray-400">
              {{ $t("global.meta.description") }}
            </div>
            <div class="flex items-center space-x-6">
              <a
                v-for="link in social"
                :href="link.url(link.username)"
                target="_blank"
                rel="noopener noreferrer"
                class="h-5 w-5 text-gray-400 transition-colors hover:text-white"
                v-html="link.icon"
              ></a>
            </div>
          </div>
          <div class="mt-12 flex space-x-16 md:ml-8 md:mt-0">
            <div v-for="category in categories">
              <div class="mb-2 font-semibold uppercase text-gray-600">
                {{ category.name }}
              </div>
              <div class="space-y-1">
                <nuxt-link
                  :to="link.url"
                  class="block text-gray-400 transition-colors hover:text-white"
                  v-for="link in category.links"
                >
                  {{ link.name }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="my-6 h-px bg-gray-600"></div>
        <p
          class="mx-auto text-center text-gray-400"
          v-html="$t('global.footer', { date: new Date().getFullYear() })"
        ></p>
        <div id="wcb" class="carbonbadge wcb-d my-6"></div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { FooterCategory } from "~/types";
const { firstName, lastName, fullName, social } = useMe();

const container = ref<HTMLElement>();
onMounted(() => {
  let badgeScript = document.createElement("script");
  badgeScript.setAttribute(
    "src",
    "https://unpkg.com/website-carbon-badges@1.1.1/b.min.js"
  );
  badgeScript.setAttribute("defer", "true");
  container.value?.appendChild(badgeScript);
});

const categories: FooterCategory[] = [
  {
    name: "Navigation",
    links: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "About me",
        url: "/about",
      },
      {
        name: "Projects",
        url: "/projects",
      },
      {
        name: "Blog",
        url: "/blog",
      },
    ],
  },
  {
    name: "Legal",
    links: [
      {
        name: "Terms",
        url: "/terms",
      },
      {
        name: "Privacy",
        url: "/privacy",
      },
      {
        name: "Credits",
        url: "/credits",
      },
    ],
  },
];
</script>

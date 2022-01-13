<template>
  <div class="z-10 py-16 bg-gray-800/50 md:py-20" id="contact">
    <Container>
      <h1
        class="max-w-lg mb-8 text-5xl text-white md:mb-12 md:text-7xl md:max-w-none"
      >
        Get in
        <span
          class="block font-semibold text-transparent md:inline-block bg-clip-text bg-gradient-to-tr from-primary-600 to-secondary-400"
          >touch</span
        >
      </h1>
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
          class="inline-flex text-gray-400 transition-colors hover:text-white space-x-4 items-center"
        >
          <div class="w-8 h-8" v-html="link.icon"></div>
          <div>{{ link.username }}</div>
        </a>
      </div>
    </Container>
  </div>
  <div class="z-0 mt-auto backdrop-blur-md bg-gray-900/50">
    <Container class="pt-16">
      <div ref="container">
        <div
          class="flex flex-col justify-center md:justify-between md:flex-row"
        >
          <div class="flex flex-col justify-start">
            <div class="flex items-center justify-start mb-6 space-x-4">
              <div
                class="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400"
              ></div>
              <div
                class="flex flex-col items-start justify-center font-semibold leading-5 text-gray-400"
              >
                <div>{{ firstName }}</div>
                <div>{{ lastName }}</div>
              </div>
            </div>
            <div class="max-w-lg mb-4 text-gray-400">
              {{ data.introduction.quick }}
            </div>
            <div class="flex items-center space-x-6">
              <a
                v-for="link in social"
                :href="link.url(link.username)"
                target="_blank"
                rel="noopener noreferrer"
                class="w-5 h-5 text-gray-400 transition-colors hover:text-white"
                v-html="link.icon"
              ></a>
            </div>
          </div>
          <div class="flex mt-12 space-x-16 md:ml-8 md:mt-0">
            <div v-for="category in categories">
              <div class="mb-2 font-semibold text-gray-600 uppercase">
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
        <div class="h-px my-6 bg-gray-600"></div>
        <p class="mx-auto text-center text-gray-400">
          &copy; {{ new Date().getFullYear() }} {{ fullName }}. All rights
          reserved.
        </p>
        <div id="wcb" class="my-6 carbonbadge wcb-d"></div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { FooterCategory } from "~/types";
import data from "~/data";
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

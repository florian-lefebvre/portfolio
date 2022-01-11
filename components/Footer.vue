<template>
  <div class="mt-auto backdrop-blur-md bg-gray-900/75">
    <Container class="pt-16">
      <div ref="container">
        <div class="flex flex-col justify-center md:justify-between md:flex-row">
          <div class="flex flex-col justify-start">
            <div class="flex items-center justify-start mb-6 space-x-4">
              <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400"></div>
              <div
                class="flex flex-col items-start justify-center font-semibold leading-5 text-gray-400"
              >
                <div>{{ firstName }}</div>
                <div>{{ lastName }}</div>
              </div>
            </div>
            <div class="max-w-lg mb-4 text-gray-400">
              A {{ age }} year old web and mobile developer from France.
            </div>
            <div class="flex items-center space-x-6">
              <a
                v-for="link in socialLinks"
                :href="link.url"
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
        <div class="h-0.5 bg-gray-600 my-6"></div>
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
const { age, firstName, lastName, fullName } = useMe();

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

const categories = ref<FooterCategory[]>([
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
]);

const socialLinks = ref<{ url: string; icon: string }[]>([
  {
    url: "mailto:contact@florian-lefebvre.dev",
    icon: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
      ></path>
    </svg>
    `,
  },
  {
    url: "https://github.com/florian-lefebvre",
    icon: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      version="1.1"
      fill="currentColor"
    >
      <path
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
      ></path>
    </svg>
    `,
  },
  {
    url: "https://www.linkedin.com/in/florian-lefebvre31/",
    icon: `
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <title>LinkedIn icon</title>
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      ></path>
    </svg>
    `,
  },
  {
    url: "https://twitter.com/LfbvrFlo",
    icon: `
    <svg
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22 5.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0021.5 4.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 00-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.165-6.5-1.814-8.5-4.288-.417.66-.584 1.32-.584 2.062 0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C6.667 17.608 4.917 18.268 3 18.268c-.333 0-.667 0-1-.082C3.833 19.34 6 20 8.25 20c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062z"
        fill="currentColor"
      ></path>
    </svg>
    `,
  },
]);
</script>

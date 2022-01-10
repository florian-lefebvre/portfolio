<template>
  <div class="mt-auto backdrop-blur-md bg-gray-900/75">
    <Container class="pt-16">
      <div ref="container">
        <div class="flex justify-between">
          <div class="flex flex-col justify-start">
            <div class="flex items-center justify-start mb-6 space-x-4">
              <div class="w-10 h-10 rounded-full bg-primary-500"></div>
              <div
                class="flex flex-col items-start justify-center font-semibold leading-5 text-white"
              >
                <div>Florian</div>
                <div>LEFEBVRE</div>
              </div>
            </div>
            <div class="max-w-lg text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nam.
            </div>
            <div class="text-blue-500">SOCIAL ICONS</div>
          </div>
          <div class="flex ml-8 space-x-16">
            <div v-for="category in categories">
              <div class="mb-2 font-semibold text-gray-600 uppercase">
                {{ category.name }}
              </div>
              <div class="space-y-1">
                <nuxt-link :to="link.url" class="text-gray-400 transition-colors hover:text-white block" v-for="link in category.links">
                  {{ link.name }}
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="h-0.5 bg-gray-700 my-6"></div>
        <p class="mx-auto text-center text-gray-400">
          &copy; {{ new Date().getFullYear() }} Florian LEFEBVRE. All rights
          reserved.
        </p>
        <div id="wcb" class="my-6 carbonbadge wcb-d"></div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import { FooterCategory } from "~~/types";

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
    ],
  },
]);
</script>

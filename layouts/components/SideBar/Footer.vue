<template>
  <footer class="px-8 font-medium">
    <p class="mb-3">&copy; {{ currentYear }}</p>
    <div class="flex items-center">
    <span class="text-sm inline-block mr-1">Made with</span>
      <SocialLink url="https://nuxtjs.org/" aria="Made with Nuxt.js">
        <NuxtJsIcon fill="currentColor" size="20" />
      </SocialLink>
      <span class="mr-2 text-xl">+</span>
      <SocialLink url="https://tailwindcss.com/" aria="Made with Tailwind Css">
        <TailwindCssIcon fill="currentColor" size="20" />
      </SocialLink>
    </div>
  </footer>
</template>

<script>
import SocialLink from "./SocialLink";
import { NuxtJsIcon, TailwindCssIcon } from "vue-simple-icons";

export default {
  components: {
    NuxtJsIcon,
    TailwindCssIcon,
    SocialLink
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style></style>

<template>
  <div class="h-16 backdrop-blur-md bg-gray-900/75">
    <Container class="flex items-center justify-between h-full py-4">
      <div class="w-10 h-10 rounded-full bg-primary-500"></div>
      <div class="flex items-center space-x-6">
        <div class="items-center hidden space-x-6 sm:flex">
          <nuxt-link
            v-for="link in links"
            :to="link.url"
            class="text-white relative after:absolute after:bg-gradient-to-tr after:from-primary-600 after:rounded-full after:to-secondary-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            active-class="font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-primary-600 to-secondary-400"
          >
            {{ link.name }}
          </nuxt-link>
        </div>
        <a
          href="#contact"
          class="px-6 py-2 font-medium text-gray-900 duration-300 bg-white rounded-full hover:scale-95 focus:outline-none"
        >
          Contact
        </a>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">import { Link } from '~~/types';

const links = ref<Link[]>([
  { name: "Home", url: "/" },
  { name: "About me", url: "/about" },
  { name: "Projects", url: "/projects" },
  { name: "Blog", url: "/blog" },
  { name: "Github", url: "/github", external: true },
]);
</script>

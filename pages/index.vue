<template>
  <div>
    <Container class="flex items-center py-16 md:py-20">
      <div class="">
        <h1
          class="max-w-lg mb-8 text-5xl text-white md:mb-12 md:text-7xl md:max-w-none"
        >
          Hi, I'm
          <span
            class="block font-semibold text-transparent md:inline-block bg-clip-text bg-gradient-to-tr from-primary-600 to-secondary-400"
            >{{ fullName }}</span
          >
        </h1>
        <div class="max-w-xl text-gray-200 md:text-lg">
          <p class="mb-6">
            {{ data.introduction.quick }}
          </p>
          <p class="mb-10">
            I enjoy creating beautiful and functional websites as well as mobile
            apps. I'm currently working on
            <a
              target="_blank"
              href="https://ynotes.fr"
              class="relative hover:text-white transition-colors duration-300 font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-primary-600 to-secondary-400 after:absolute after:bg-gradient-to-tr after:from-primary-600 after:rounded-full after:to-secondary-400 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >yNotes</a
            >, a school life mobile application that connects French students to
            their school services.
          </p>
        </div>
        <div class="block">
          <a
            href="#about"
            class="inline-flex px-6 py-2 font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400 hover:scale-95"
          >
            Learn more
          </a>
        </div>
        <a
          href="#about"
          class="inline-flex items-center mt-12 space-x-2 text-gray-400 transition-all rounded-full animate-pulse hover:text-white hover:animate-none focus:ring focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
        >
          <ArrowCircleDownIcon class="w-10 h-10" />
          <div>Scroll down</div>
        </a>
      </div>
      <div class="hidden ml-16 md:block">
        <HeroParallax />
      </div>
    </Container>
    <div class="bg-gray-900/50">
      <Container class="py-16 md:py-20" id="about">
        <div class="">
          <h1
            class="max-w-lg mb-8 text-5xl text-white md:mb-12 md:text-7xl md:max-w-none"
          >
            About
            <span
              class="block font-semibold text-transparent md:inline-block bg-clip-text bg-gradient-to-tr from-primary-600 to-secondary-400"
              >me</span
            >
          </h1>
          <div class="max-w-3xl text-gray-200 md:text-lg">
            <p class="mb-10">
              I am a French student in my last year of high school. I've been
              coding since 2019 on my free time and I've already accomplished
              several things.
            </p>
          </div>
          <div class="block">
            <nuxt-link
              to="/about"
              class="inline-flex px-6 py-2 font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400 hover:scale-95"
            >
              Learn more
            </nuxt-link>
          </div>
          <div class="relative">
            <div
              class="inset-y-0 hidden w-full h-0 my-auto border-t-2 border-gray-500 border-dashed xl:block xl:absolute"
            ></div>
            <div
              class="absolute inset-x-0 block w-0 h-full mx-auto border-l-2 border-gray-500 border-dashed sm:hidden"
            ></div>
            <div
              class="relative grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <div
                v-for="e in [
                  [
                    13,
                    'I started to learn how to code with Unreal Engine 4 using blueprints.',
                  ],
                  [15, 'I started to learn web development.'],
                  [
                    16,
                    'I started working on yNotes, a mobile app made with Flutter with already more than 4k users.',
                  ],
                  [
                    17,
                    'I know all the tools needed to build apps: frontend, backend and mobile.',
                  ],
                ]"
                class="p-6 text-white bg-gray-800 rounded-lg"
              >
                <div class="mb-4 text-lg font-semibold">
                  At
                  <span
                    class="text-transparent bg-clip-text bg-gradient-to-tr from-primary-600 to-secondary-400"
                    >{{ e[0] }}</span
                  >...
                </div>
                <div class="">
                  {{ e[1] }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <Container class="py-16 md:py-20" id="about">
      <div class="">
        <h1
          class="max-w-lg mb-8 text-5xl text-white md:mb-12 md:text-7xl md:max-w-none"
        >
          Another
          <span
            class="block font-semibold text-transparent md:inline-block bg-clip-text bg-gradient-to-tr from-primary-600 to-secondary-400"
            >section</span
          >
        </h1>
        <div class="max-w-3xl text-gray-200 md:text-lg">
          <p class="mb-10">
            I sold a website that helped gamers track the value of in-game
            items. Now, I'm going full-time building an innovative solution for
            tracking game server performance, how much time they spend there,
            and other metrics.
          </p>
        </div>
        <div class="block">
          <nuxt-link
            to="/projects"
            class="inline-flex px-6 py-2 font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400 hover:scale-95"
          >
            Learn more
          </nuxt-link>
        </div>
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import data from "~/data";
import { ArrowCircleDownIcon } from "@heroicons/vue/outline";

const { fullName } = useMe();

export default {
  scrollToTop: true,
};
</script>

<script setup lang="ts">
useSeo({
  title: "Home",
});
</script>

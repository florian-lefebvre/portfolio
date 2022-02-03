<template>
  <div>
    <Container class="flex items-center py-16 md:py-20">
      <div class="">
        <h1
          class="max-w-lg mb-8 text-5xl text-white md:mb-12 md:max-w-none md:text-7xl"
        >
          Hi, I'm
          <span
            class="block font-semibold text-transparent bg-gradient-to-tr from-primary-600 to-secondary-400 bg-clip-text md:inline-block"
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
              class="relative bg-gradient-to-tr from-primary-600 to-secondary-400 bg-clip-text font-semibold text-transparent transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:rounded-full after:bg-gradient-to-tr after:from-primary-600 after:to-secondary-400 after:transition-transform after:duration-300 after:ease-in-out hover:text-white hover:after:origin-bottom-left hover:after:scale-x-100"
              >yNotes</a
            >, a school life mobile application that connects French students to
            their school services. {{ $t("test") }}
          </p>
        </div>
        <button @click="$i18n.locale = $i18n.locale === 'en' ? 'fr' : 'en'">
          {{ $i18n.locale }}
        </button>
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
          class="inline-flex items-center mt-12 space-x-2 text-gray-400 transition-all rounded-full animate-pulse hover:animate-none hover:text-white focus:ring focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <ArrowCircleDownIcon class="w-10 h-10" />
          <div>Scroll down</div>
        </a>
      </div>
      <div class="hidden ml-24 shrink-0 md:block lg:ml-16">
        <HeroParallax />
      </div>
    </Container>
    <div class="bg-gray-900/50">
      <Container class="py-16 md:py-20" id="about">
        <div class="">
          <h1
            class="max-w-lg mb-8 text-5xl text-white md:mb-12 md:max-w-none md:text-7xl"
          >
            About
            <span
              class="block font-semibold text-transparent bg-gradient-to-tr from-primary-600 to-secondary-400 bg-clip-text md:inline-block"
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
              class="inset-y-0 hidden w-full h-0 my-auto border-t-2 border-gray-500 border-dashed xl:absolute xl:block"
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
                    class="text-transparent bg-gradient-to-tr from-primary-600 to-secondary-400 bg-clip-text"
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
    <Container class="py-16 md:py-20">
      <div class="">
        <h1
          class="max-w-lg mb-8 text-5xl text-white md:mb-12 md:max-w-none md:text-7xl"
        >
          A few
          <span
            class="block font-semibold text-transparent bg-gradient-to-tr from-primary-600 to-secondary-400 bg-clip-text md:inline-block"
            >projects</span
          >
        </h1>
        <div class="max-w-3xl text-gray-200 md:text-lg">
          <p class="mb-10">
            Since I started to learn web development, I've already built several
            websites and mobile apps using modern technologies. Here are some of
            them.
          </p>
        </div>
        <div class="block">
          <nuxt-link
            to="/projects"
            class="inline-flex px-6 py-2 font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400 hover:scale-95"
          >
            View all
          </nuxt-link>
        </div>
        <div class="mt-10">
          <AppSwiper>
            <SwiperSlide v-for="project in projects"
              ><NuxtLink
                :to="`/projects/${project.slug}`"
                class="block text-white bg-gray-700 rounded-lg shadow-md transition-all hover:shadow hover:scale-95"
              >
                <div class="rounded-t-lg bg-cover bg-center w-full h-48" :style="{backgroundImage: `url(${project.imageUrl})`}"></div>
                <div class="p-4">
                  <div class="text-xl text-white font-semibold">{{ project.title }}</div>
                  <div class="text-gray-300">{{ project.description }}</div>
                </div>
              </NuxtLink></SwiperSlide
            >
          </AppSwiper>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
import data from "~/data";
import { SwiperSlide } from "swiper/vue";
import { ArrowCircleDownIcon } from "@heroicons/vue/outline";
import { Project } from "~/types";
const { fullName } = useMe();
useSeo({
  title: "Home",
});

const projects: Project[] = [
  {
    title: "Project 1",
    imageUrl: "https://picsum.photos/id/1/400/300",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquam atque porro nulla soluta recusandae.",
    slug: "project-1",
  },
  {
    title: "Project 2",
    imageUrl: "https://picsum.photos/id/2/400/300",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquam atque porro nulla soluta recusandae.",
    slug: "project-2",
  },
  {
    title: "Project 3",
    imageUrl: "https://picsum.photos/id/3/400/300",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquam atque porro nulla soluta recusandae.",
    slug: "project-3",
  },
  {
    title: "Project 4",
    imageUrl: "https://picsum.photos/id/4/400/300",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquam atque porro nulla soluta recusandae.",
    slug: "project-4",
  },
  {
    title: "Project 5",
    imageUrl: "https://picsum.photos/id/5/400/300",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquam atque porro nulla soluta recusandae.",
    slug: "project-5",
  },
  {
    title: "Project 6",
    imageUrl: "https://picsum.photos/id/6/400/300",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquam atque porro nulla soluta recusandae.",
    slug: "project-6",
  },
];
</script>

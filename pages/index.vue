<template>
  <div>
    <Container class="flex items-center py-16 md:py-20">
      <div class="">
        <h1
          class="mb-8 max-w-lg text-5xl text-white md:mb-12 md:max-w-none md:text-7xl"
        >
          Hi, I'm
          <span
            class="block bg-gradient-to-tr from-primary-600 to-secondary-400 bg-clip-text font-semibold text-transparent md:inline-block"
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
            class="inline-flex rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400 px-6 py-2 font-medium text-white transition-all duration-300 hover:scale-95"
          >
            Learn more
          </a>
        </div>
        <a
          href="#about"
          class="mt-12 inline-flex animate-pulse items-center space-x-2 rounded-full text-gray-400 transition-all hover:animate-none hover:text-white focus:ring focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <ArrowCircleDownIcon class="h-10 w-10" />
          <div>Scroll down</div>
        </a>
      </div>
      <div class="ml-24 hidden shrink-0 md:block lg:ml-16">
        <HeroParallax />
      </div>
    </Container>
    <div class="bg-gray-900/50">
      <Container class="py-16 md:py-20" id="about">
        <div class="">
          <h1
            class="mb-8 max-w-lg text-5xl text-white md:mb-12 md:max-w-none md:text-7xl"
          >
            About
            <span
              class="block bg-gradient-to-tr from-primary-600 to-secondary-400 bg-clip-text font-semibold text-transparent md:inline-block"
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
              class="inline-flex rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400 px-6 py-2 font-medium text-white transition-all duration-300 hover:scale-95"
            >
              Learn more
            </nuxt-link>
          </div>
          <div class="relative">
            <div
              class="inset-y-0 my-auto hidden h-0 w-full border-t-2 border-dashed border-gray-500 xl:absolute xl:block"
            ></div>
            <div
              class="absolute inset-x-0 mx-auto block h-full w-0 border-l-2 border-dashed border-gray-500 sm:hidden"
            ></div>
            <div
              class="relative mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
                class="rounded-lg bg-gray-800 p-6 text-white"
              >
                <div class="mb-4 text-xl font-semibold">
                  At
                  <span
                    class="bg-gradient-to-tr from-primary-600 to-secondary-400 bg-clip-text text-transparent"
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
          class="mb-8 max-w-lg text-5xl text-white md:mb-12 md:max-w-none md:text-7xl"
        >
          A few
          <span
            class="block bg-gradient-to-tr from-primary-600 to-secondary-400 bg-clip-text font-semibold text-transparent md:inline-block"
            >projects</span
          >
        </h1>
        <div class="max-w-3xl text-gray-200 md:text-lg">
          <p class="mb-10">
            Since I started to learn web development, I've already built several
            websites and mobile apps using modern technologies. Here is an
            overview.
          </p>
        </div>
        <div class="block">
          <nuxt-link
            to="/projects"
            class="inline-flex rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400 px-6 py-2 font-medium text-white transition-all duration-300 hover:scale-95"
          >
            View all
          </nuxt-link>
        </div>
        <div class="mt-10">
          <AppSwiper>
            <SwiperSlide v-for="project in projects"
              ><NuxtLink
                :to="`/projects/${project.slug}`"
                class="group relative block h-full overflow-hidden rounded-xl bg-gray-800 text-white shadow-lg transition-all hover:scale-95 hover:shadow"
              >
                <div
                  class="absolute top-4 right-4 scale-75 rounded-lg border border-gray-700 bg-gray-800 p-2 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100"
                >
                  <ArrowUpIcon class="h-6 w-6 rotate-45 text-gray-300" />
                </div>
                <div class="p-1">
                  <div
                    class="h-48 w-full rounded-lg bg-cover bg-center"
                    :style="{ backgroundImage: `url(${project.imageUrl})` }"
                  ></div>
                </div>
                <div class="p-4">
                  <div class="mb-2 text-xl font-semibold text-white">
                    {{ project.title }}
                  </div>
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
import { ArrowCircleDownIcon, ArrowUpIcon } from "@heroicons/vue/outline";
import { Project } from "~/types";
const { fullName } = useMe();
useSeo({
  title: "Home",
});

const projects: Project[] = [
  {
    title: "yNotes app",
    imageUrl:
      "https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2",
    description:
      "yNotes is a mobile application that retrieves data from the student life services used by most French schools. It reshapes and adds many features. I'm involved in the development and the design of the app.",
    slug: "ynotes-app",
  },
  {
    title: "RégioLangues",
    imageUrl:
      "https://res.cloudinary.com/af68d22a-2043-4078-857c-f2db1a1406ec/image/upload/c_scale/v1641930868/Regiolangues/og_sup891.jpg",
    description:
      "RégioLangues is a website I made for my brother. I was only involved in the coding, not the data. Its goal: gather resources around the web on the topic of French regional languages. It uses Supabase for the backend.",
    slug: "regiolangues",
  },
  {
    title: "Portfolio",
    imageUrl: "https://picsum.photos/id/3/400/300",
    description:
      "Not much to say except that I am quite satisfied with the result.",
    slug: "portfolio",
  },
  {
    title: "OHF31 website",
    imageUrl:
      "https://res.cloudinary.com/af68d22a-2043-4078-857c-f2db1a1406ec/image/upload/c_scale,w_1000/v1636657520/OHF31/ohf31-public-website/images/shared/og_image_bsrjhr.png",
    description:
      "I finally finished v3 of the 1st site I made! That's a basic showcase site but I think it looks really great. And it runs on Nuxt 3 🎉",
    slug: "ohf31-website",
  },
  {
    title: "yNotes website",
    imageUrl:
      "https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2",
    description:
      "At yNotes, we needed a support center and a more consistent website, so I remade everything. This allowed me to discover animation with AnimXYZ and learn how to make a more modern design.",
    slug: "ynotes-website",
  },
];
</script>

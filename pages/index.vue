<template>
  <div>
    <HeroAtomAnimation />
    <Container class="flex items-center py-16 md:py-20">
      <div class="">
        <h1 class="title">
          {{ $t("pages.home.introduction.title") }}
          <span
            class="bg-gradient text-gradient block font-semibold md:inline-block"
          >
            {{ $t("global.name") }}
          </span>
        </h1>
        <div class="max-w-xl text-gray-200 md:text-lg">
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
          <a href="#about" class="button-primary">
            {{ $t("pages.home.introduction.learnMore") }}
          </a>
        </div>
        <a
          href="#about"
          class="mt-12 inline-flex animate-pulse items-center space-x-2 rounded-full text-gray-400 transition-all hover:animate-none hover:text-white focus:ring focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          <ArrowCircleDownIcon class="h-10 w-10" />
          <div>{{ $t("pages.home.introduction.scrollDown") }}</div>
        </a>
      </div>
      <div class="ml-24 hidden shrink-0 md:block lg:ml-16">
        <HeroParallax />
      </div>
    </Container>
    <div class="bg-gray-900/50">
      <Container class="py-16 md:py-20" id="about">
        <h2 class="title">
          {{ $t("pages.home.about.title1") }}
          <span
            class="bg-gradient text-gradient block font-semibold md:inline-block"
          >
            {{ $t("pages.home.about.title2") }}
          </span>
        </h2>
        <div class="max-w-3xl text-gray-200 md:text-lg">
          <p class="mb-10">
            {{ $t("pages.home.about.description") }}
          </p>
        </div>
        <div class="block">
          <nuxt-link to="/about" class="button-primary">
            {{ $t("pages.home.about.learnMore") }}
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
              v-for="card in $tm('pages.home.about.cards')"
              class="rounded-lg bg-gray-800 p-6 text-white"
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
        A few
        <span
          class="bg-gradient text-gradient block font-semibold md:inline-block"
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
        <NuxtLink to="/projects" class="button-primary">View all</NuxtLink>
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
    </Container>
  </div>
</template>

<script setup lang="ts">
import { SwiperSlide } from "swiper/vue";
import { ArrowCircleDownIcon, ArrowUpIcon } from "@heroicons/vue/outline";
import { Project } from "~/types";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
useSeo({
  title: "Home",
});

const projects = ref<Project[]>([
  {
    title: "yNotes app",
    imageUrl:
      "https://repository-images.githubusercontent.com/235597003/0d48eb00-1076-11eb-8768-bfb0e49462b2",
    // description:
    // "yNotes is a mobile application that retrieves data from the student life services used by most French schools. It reshapes and adds many features. I'm involved in the development and the design of the app.",
    slug: "ynotes-app",
    description: computed(() => t("test")),
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
]);
</script>

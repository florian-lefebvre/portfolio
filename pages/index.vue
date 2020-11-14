<template>
  <div>
    <header class="h-screen bg-teal-700 shadow-inner">
      <div class="container px-5 py-32 mx-auto text-center">
        <h2
          class="pt-24 text-4xl tracking-tight leading-10 font-bold text-teal-200 sm:text-5xl sm:leading-none md:text-6xl"
        >
          Hi! I'm
          <br class="xl:hidden" />
          <span class="text-gray-200">{{ $store.state.infos.author }}</span>
        </h2>
        <p
          class="mt-3 text-base text-teal-200 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl mx-auto"
        >
          {{ $store.state.infos.siteDesc }}
        </p>
        <div class="mt-5 sm:mt-8 sm:flex justify-center">
          <div class="rounded-md shadow-lg">
            <nuxt-link
              to="work"
              class="w-full flex items-center justify-center px-8 py-3 border-2 border-transparent text-base leading-6 font-semibold rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Check out my work
            </nuxt-link>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3 rounded-md shadow-lg">
            <a
              :href="`mailto:${$store.state.infos.email}`"
              class="w-full flex items-center justify-center px-8 py-3 border-teal-200 border-2 text-base leading-6 font-semibold rounded-md text-teal-600 bg-teal-200 hover:bg-teal-500 hover:border-teal-500 hover:text-white focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
            >
              Email me
            </a>
          </div>
        </div>
      </div>
    </header>
    <div class="bg-gray-200">
      <div class="container px-5 py-24 mx-auto">
        <div
          class="bg-gray-100 rounded-xl -mt-48 shadow-xl -mb-48 relative pt-16 px-4 pb-10"
        >
          <div class="text-center">
            <h2 class="pt-15 font-bold text-3xl">
              I know a lot of technologies and tools...
            </h2>
            <p
              class="text-gray-600 text-lg mt-5 px-4 md:px-10 lg:w-7/12 lg:mx-auto font-medium"
            >
              From Git to Vue.js through Bootstrap or Unreal Engine, I have
              knowledge in many areas
            </p>
            <p class="text-gray-600 mt-5 px-4 md:px-10 lg:w-7/12 lg:mx-auto">
              Click on a skill to view more information such as projects and
              related articles
            </p>
          </div>
          <div
            class="flex flex-wrap justify-center mt-10 px-4 md:mt-15 md:px-0 lg:w-10/12 lg:mx-auto lg:mt-20 text-gray-600"
          >
            <Skill
              v-for="tech in knownTechnologies"
              :key="tech.name"
              :title="tech.data.title"
              :icon="tech.data.icon"
              :color="tech.data.color"
              :variant="tech.data.variant"
              :status="tech.data.status"
              v-on:set-current-skill="(currentSkill = tech), (showModal = true)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-700 shadow-inner">
      <div class="container px-5 pt-40 pb-24 mx-auto text-center text-gray-100">
        <h2 class="pt-15 font-bold text-3xl text-center text-white">
          ...and I still want to learn more!
        </h2>
        <div
          class="flex flex-wrap justify-center mt-10 px-4 md:mt-15 md:px-0 lg:w-10/12 lg:mx-auto lg:mt-20"
        >
          <Skill
            v-for="tech in futureTechnologies"
            :key="tech.name"
            :title="tech.data.title"
            :icon="tech.data.icon"
            :color="tech.data.color"
            :variant="tech.data.variant"
            :status="tech.data.status"
            v-on:set-current-skill="(currentSkill = tech), (showModal = true)"
          />
        </div>
      </div>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <SkillZoom
        :skill="currentSkill"
        v-if="showModal && currentSkill"
        v-on:close="showModal = false"
      />
    </transition>
  </div>
</template>

<script>
import getSiteMeta from "@/utils/getSiteMeta";
import knownTechnologies from "@/assets/data/skills/knownTechnologies.json";
import futureTechnologies from "@/assets/data/skills/futureTechnologies.json";

export default {
  head() {
    return {
      title: "Home",
      meta: getSiteMeta()
    };
  },
  computed: {
  },
  data() {
    return {
      currentSkill: null,
      showModal: true,
      knownTechnologies: knownTechnologies,
      futureTechnologies: futureTechnologies
    };
  }
};
</script>

<style></style>

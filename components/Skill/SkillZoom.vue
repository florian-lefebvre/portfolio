<template>
  <div class="text-gray-500 h-full">
    <div v-if="skill" :style="`color:${skill.data.color};`" class="font-medium">
      <a
        :href="skill.data.links[0].url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-3xl font-bold tracking-tight hover:opacity-75 inline-flex items-center"
        >{{ skill.data.title
        }}<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-8 h-8 ml-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          /></svg
      ></a>
      <h2>{{ skill.data.status }}</h2>
      <p class="text-justify">{{ skill.data.desc }}</p>
      <h3>PROJECTS</h3>
      <h3>ARTICLES</h3>
      <nuxt-link :to="`/articles/tags/${skill.name}`">All articles</nuxt-link>
    </div>
    <div v-else class="flex flex-col h-full animate-pulse">
      <div
        class="text-center flex flex-col items-center my-auto container px-5 py-10"
      >
        <h2 class="font-medium mb-6">
          Click on a skill to view more information such as projects and related
          articles
        </h2>
        <div class="w-24">
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
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object
    }
  }
};
</script>

<style></style>

<template>
  <div>
    <div class="relative">
      <div class="relative">
        <img
          v-if="project.img"
          class="lg:h-64 md:h-36 w-full object-cover object-center"
          :src="`/img/work/${project.img}`"
          :alt="project.alt"
        />
        <div
          class="absolute top-0 left-0 w-full h-full block bg-black bg-opacity-50"
        >
          <div class="container px-5 pt-10 mx-auto text-gray-100">
            <h3>Last updated {{ updatedAt }}</h3>
            <h1
              class="text-2xl font-bold leading-7 sm:text-3xl sm:leading-9 sm:truncate"
            >
              {{ project.title }}
            </h1>
            <h2 class="mt-2 text-xl leading-7">{{ project.desc }}</h2>
            <h3 class="mt-1">
              <nuxt-link
                v-for="(tag, index) in project.tags"
                :key="index"
                :to="`/work/tags/${tag}`"
                class="text-gray-200 hover:text-gray-400"
                >#{{ tag }}
              </nuxt-link>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container px-5 pt-6 mx-auto">
      <span class="shadow-sm rounded-md">
        <nuxt-link
          to="/work"
          type="button"
          class="mb-6 inline-flex items-center px-4 py-2 border border-transparent leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          All projects
        </nuxt-link>
      </span>
      <h2
        class="text-xl text-gray-900 font-bold leading-7 sm:text-2xl sm:leading-9 sm:truncate"
      >
        Table of contents
      </h2>
      <nav class="mb-4">
        <ul>
          <li v-for="link of project.toc" :key="link.id">
            <nuxt-link
              :to="`#${link.id}`"
              :class="{
                'py-2': link.depth === 2,
                'ml-2 pb-2': link.depth === 3
              }"
              >{{ link.text }}</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <hr />
    </div>
    <div class="container px-5 py-24 mx-auto">
      <nuxt-content :document="project" />
    </div>
    <prev-next :prev="prev" :next="next" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content("work", params.slug).fetch();

    const [prev, next] = await $content("work")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { project, prev, next };
  },
  computed: {
    updatedAt() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(this.project.updatedAt).toLocaleDateString("en", options);
    }
  }
};
</script>

<style lang="scss">
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
.nuxt-content-highlight {
  @apply relative shadow-xs rounded;
}
.nuxt-content-highlight .filename {
  @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
}

.icon.icon-link {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20l4-16m2 16l4-16M6 9h14M4 15h14' /%3E%3C/svg%3E");
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>

<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full justify-between mb-6">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="text-2xl tracking-tight leading-10 font-extrabold text-teal-900 sm:leading-none md:text-3xl"
          >
            My work
          </h1>
          <div class="h-1 w-20 bg-teal-600 rounded mt-2"></div>
        </div>
        <div class="flex items-center flex-wrap">
          <span class="shadow-sm rounded-md mr-4">
            <nuxt-link
              to="/work/tags"
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              All tags
            </nuxt-link>
          </span>
          <SearchInput directory="work" />
        </div>
      </div>

      <div class="flex flex-wrap -m-4">
        <nuxt-link
          class="p-4 md:w-1/2 lg:w-1/3 transform hover:scale-105 transition duration-150 ease-out"
          v-for="project of projects"
          :key="project.slug"
          :to="project.path"
        >
          <div
            class="h-full border-2 border-gray-200 rounded-lg overflow-hidden relative shadow"
          >
            <span
              class="absolute top-0 left-0 mt-1 ml-1 rounded-full uppercase px-2 py-1 text-xs font-semibold shadow"
              :class="project.variant"
              >{{ project.status }}</span
            >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              :src="`/img/work/${project.img}`"
              :alt="project.alt"
            />
            <div class="p-6">
              <h2
                class="tracking-widest text-sm title-font font-medium text-gray-500 mb-1"
              >
                <nuxt-link
                  v-for="(tag, index) in project.tags"
                  :key="index"
                  :to="`/work/tags/${tag}`"
                  class="hover:text-gray-600"
                  >#{{ tag }}
                </nuxt-link>
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {{ project.title }}
              </h1>
              <p class="leading-relaxed mb-3">
                {{ project.desc }}
              </p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content("work", params.slug)
      .without(["body"])
      .sortBy("createdAt", "asc")
      .fetch();

    function colorVariants(value) {
      return {
        success: "bg-green-300 text-green-800 border-green-800",
        warning: "bg-yellow-300 text-yellow-800 border-yellow-800",
        danger: "bg-red-300 text-red-800 border-red-800",
        info: "bg-blue-300 text-blue-800 border-blue-800"
      }[value];
    }

    projects.forEach(function(project) {
      project.variant = colorVariants(project.variant);
    });

    return {
      projects
    };
  }
};
</script>

<style></style>

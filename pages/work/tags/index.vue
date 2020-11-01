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
          <div class="h-1 w-20 bg-teal-600 rounded mt-2 mb-4"></div>
          <h2
            class="text-xl tracking-tight leading-10 font-bold text-gray-600 sm:leading-none md:text-2xl"
          >
            All tags
          </h2>
        </div>
        <div class="flex items-center flex-wrap">
          <span class="shadow-sm rounded-md mr-4">
            <nuxt-link
              to="/work"
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
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
              Go back
            </nuxt-link>
          </span>
          <SearchInput directory="work" />
        </div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        <nuxt-link
          class="bg-teal-200 text-teal-800 rounded shadow-lg p-6 text-center font-bold text-lg transform transition hover:scale-105 duration-100 ease-out"
          v-for="(tag, index) in tags"
          :key="index"
          :to="`/work/tags/${tag}`"
        >
          #{{ tag }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content("work")
      .only(["tags"])
      .fetch();

    var tags = [];

    projects.forEach(function(project) {
      project.tags.forEach(function(tag) {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });

    tags.sort();

    return { tags };
  }
};
</script>

<style></style>

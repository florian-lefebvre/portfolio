<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full justify-between mb-6">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            class="text-2xl tracking-tight leading-10 font-extrabold text-teal-900 sm:leading-none md:text-3xl"
          >
            Articles
          </h1>
          <div class="h-1 w-20 bg-teal-600 rounded mt-2 mb-4"></div>
          <h2
            class="text-xl tracking-tight leading-10 font-bold text-gray-600 sm:leading-none md:text-2xl"
          >
            #{{ this.$route.params.tag }}
          </h2>
        </div>
        <div class="flex items-center flex-wrap">
          <span class="shadow-sm rounded-md mr-4">
            <nuxt-link
              to="/articles/tags"
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
          <SearchInput directory="articles" />
        </div>
      </div>

      <div class="flex flex-wrap -m-4">
        <nuxt-link
          class="p-4 md:w-1/3 transform hover:scale-105 transition duration-150 ease-out"
          v-for="article of articles"
          :key="article.slug"
          :to="article.path"
        >
          <div
            class="h-full border-2 border-gray-200 rounded-lg overflow-hidden"
          >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              :src="`/img/articles/${article.img}`"
              :alt="article.alt"
            />
            <div class="p-6">
              <h2
                class="tracking-widest text-sm title-font font-medium text-gray-500 mb-1"
              >
                <nuxt-link
                  v-for="(tag, index) in article.tags"
                  :key="index"
                  :to="`/articles/tags/${tag}`"
                  class="hover:text-gray-600"
                  >#{{ tag }}
                </nuxt-link>
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {{ article.title }}
              </h1>
              <p class="leading-relaxed mb-3">
                {{ article.desc }}
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
    const articles = await $content("articles", params.slug)
      .where({
        tags: { $contains: params.tag }
      })
      .sortBy("createdAt", "asc")
      .fetch();

    if (articles.length == 0) {
      return $nuxt.error({ statusCode: 404 });
    } else {
      return {
        articles
      };
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>

<style></style>

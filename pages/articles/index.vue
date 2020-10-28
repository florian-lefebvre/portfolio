<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <nuxt-link to="/articles/tags">Tags</nuxt-link>
      <SearchInput />
      <div class="flex flex-wrap -m-4">
        <nuxt-link
          class="p-4 md:w-1/3"
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
                class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
              >
                CATEGORY
              </h2>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {{ article.title }}
              </h1>
              <p class="leading-relaxed mb-3">
                {{ article.desc }}
              </p>
              <div class="flex items-center flex-wrap ">
                <a
                  class="text-teal-500 inline-flex items-center md:mb-2 lg:mb-0"
                  >Read
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                <span
                  class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                    ></path>
                    <circle cx="12" cy="12" r="3"></circle></svg
                  >1.2K
                </span>
                <span
                  class="text-gray-600 inline-flex items-center leading-none text-sm"
                >
                  <svg
                    class="w-4 h-4 mr-1"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    ></path></svg
                  >6
                </span>
              </div>
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
      .only(["title", "desc", "slug", "img"])
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles
    };
  }
};
</script>

<style></style>

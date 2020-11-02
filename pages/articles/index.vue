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
          <div class="h-1 w-20 bg-teal-600 rounded mt-2"></div>
        </div>
        <div class="flex items-center flex-wrap">
          <span class="shadow-sm rounded-md mr-4">
            <nuxt-link
              to="/articles/tags"
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              All tags
            </nuxt-link>
          </span>
          <SearchInput directory="articles" />
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
        <nuxt-link
          class="p-4 w-full md:w-1/2 transform hover:scale-105 transition duration-150 ease-out"
          v-for="article of featuredArticles"
          :key="article.slug"
          :to="article.path"
        >
          <div
            class="h-full border-2 border-gray-200 rounded-lg overflow-hidden flex flex-col shadow"
          >
            <div>
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                :src="`/img/articles/${article.img}`"
                :alt="article.alt"
              />
              <div class="p-6 pb-0">
                <h2
                  class="tracking-widest uppercase title-font font-semibold mb-1 md:space-x-2 flex flex-wrap"
                >
                  <nuxt-link
                    v-for="(tag, index) in article.tags"
                    :key="index"
                    :to="`/articles/tags/${tag}`"
                    class="hover:text-teal-800 bg-teal-200 text-teal-600 p-1 rounded shadow mb-1 mr-1"
                    >#{{ tag }}
                  </nuxt-link>
                </h2>
                <h1 class="title-font text-3xl font-semibold text-gray-900 mb-3">
                  {{ article.title }}
                </h1>
                <p class="leading-relaxed mb-3 text-lg">
                  {{ article.desc }}
                </p>
              </div>
            </div>
            <div
              class="flex items-center flex-wrap text-gray-600 justify-between leading-none text-sm mt-auto p-6"
            >
              <p>{{ article.createdAt }}</p>
              <p>{{ article.readingTime }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="flex flex-wrap -m-4">
        <nuxt-link
          class="p-4 w-full md:w-1/2 lg:w-1/3 transform hover:scale-105 transition duration-150 ease-out"
          v-for="article of articles"
          :key="article.slug"
          :to="article.path"
        >
          <div
            class="h-full border-2 border-gray-200 rounded-lg overflow-hidden flex flex-col shadow"
          >
            <div>
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                :src="`/img/articles/${article.img}`"
                :alt="article.alt"
              />
              <div class="p-6 pb-0">
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
            <div
              class="flex items-center flex-wrap text-gray-600 justify-between leading-none text-sm mt-auto p-6"
            >
              <p>{{ article.createdAt }}</p>
              <p>{{ article.readingTime }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // data() {
  //   return {
  //     featuredArticles: null
  //   };
  // },
  async asyncData({ $content, params }) {
    const articles = await $content("articles", params.slug)
      .without(["body"])
      .sortBy("createdAt", "desc")
      .fetch();

    function readingTime(time) {
      var milli = time,
        sec = milli / 1000,
        min = sec / 60,
        final = Number(min.toFixed(0)),
        output = "";

      if (milli <= 30000) {
        output = "1 min read";
      } else {
        output = final + " min read";
      }

      return output;
    }

    articles.forEach(function(article) {
      article.createdAt = new Date(article.createdAt).toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      article.readingTime = readingTime(article.readingTime);
    });

    var featuredArticles = [];

    featuredArticles.push(articles[0]);
    featuredArticles.push(articles[1]);

    articles.splice(0, 2);

    return {
      articles,
      featuredArticles
    };
  }
};
</script>

<style></style>

<template>
  <div class="bg-gray-200">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="bg-gray-100 rounded-xl -mt-48 shadow-xl -mb-48 relative pt-16 px-4 pb-10"
      >
        <div class="flex flex-wrap -m-4" v-if="featuredArticle">
          <nuxt-link
            class="p-4 w-full md:w-1/2 transform hover:scale-105 transition duration-150 ease-out"
            :to="featuredArticle.path"
          >
            <div
              class="h-full border-2 border-gray-200 rounded-lg overflow-hidden flex flex-col shadow"
            >
              <div>
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  :src="`/img/articles/${featuredArticle.img}`"
                  :alt="featuredArticle.alt"
                />
                <div class="p-6 pb-0">
                  <h2
                    class="tracking-widest uppercase title-font font-semibold mb-1 md:space-x-2 flex flex-wrap"
                  >
                    <nuxt-link
                      v-for="(tag, index) in featuredArticle.tags"
                      :key="index"
                      :to="`/articles/tags/${tag}`"
                      class="hover:text-teal-800 bg-teal-200 text-teal-600 p-1 rounded shadow mb-1 mr-1"
                      >#{{ tag }}
                    </nuxt-link>
                  </h2>
                  <h1
                    class="title-font text-3xl font-semibold text-gray-900 mb-3"
                  >
                    {{ featuredArticle.title }}
                  </h1>
                  <p class="leading-relaxed mb-3 text-lg">
                    {{ featuredArticle.desc }}
                  </p>
                </div>
              </div>
              <div
                class="flex items-center flex-wrap text-gray-600 justify-between leading-none text-sm mt-auto p-6"
              >
                <p>{{ featuredArticle.createdAt }}</p>
                <p>{{ featuredArticle.readingTime }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   data() {
  //     return {
  //       featuredArticle: null
  //     };
  //   },
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

    var featuredArticle = articles[0];
    // this.featuredArticle = articles[0];

    // featuredArticle.push(articles[0]);
    // featuredArticles.push(articles[1]);

    // articles.splice(0, 2);
    articles.splice(0, 1);

    return {
      articles,
      //   featuredArticles
      featuredArticle
    };
  }
};
</script>

<style></style>

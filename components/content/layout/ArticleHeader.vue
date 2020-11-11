<template>
  <header class="bg-teal-700 shadow-inner">
    <div
      class="container px-5 pt-24 pb-48 lg:pt-32 lg:pb-64 mx-auto text-center"
    >
      <div class="flex justify-between items-center flex-wrap mb-16">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="text-3xl font-semibold text-white text-left">
            {{ type }}
          </h1>
          <div class="h-1 w-20 bg-teal-500 rounded mt-2"></div>
        </div>
        <div class="flex items-center flex-wrap mt-5 md:mt-0">
          <div
            class="rounded-md shadow-md mr-4"
            v-for="(button, index) in buttons"
            :key="index"
          >
            <nuxt-link
              :to="article.dir"
              class="w-full flex items-center justify-center px-6 py-2 border-2 border-transparent text-base leading-6 font-semibold rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out"
            >
              {{ button.text }}
            </nuxt-link>
          </div>
          <SearchInput :directory="article.dir.substring(1)" />
        </div>
      </div>
      <div>
        <h1 class="text-4xl font-bold mb-4 leading-tight text-white text-left">
          {{ article.title }}
        </h1>
        <div class="flex mb-5 flex-wrap items-center" v-if="article.link">
          <div>
            <div
              class="rounded-md shadow-md mr-4"
              v-for="(button, index) in buttons"
              :key="index"
            >
              <a
                :href="article.link"
                target="_blank"
                rel="noreferrer noopener"
                class="w-full text-lg flex items-center justify-center px-10 py-4 border-2 border-transparent leading-6 font-semibold rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out"
              >
                View
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="ml-2 h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="text-left text-sm">
            <div class="text-teal-300 font-semibold">Status</div>
            <div
              class="font-semibold text-lg px-3 py-1 rounded uppercase inline-block"
              :class="article.variant"
            >
              {{ article.status }}
            </div>
          </div>
        </div>
        <div class="flex justify-between flex-col sm:flex-row mb-16">
          <span
            class="tracking-widest uppercase title-font font-semibold flex flex-wrap"
          >
            <nuxt-link
              v-for="(tag, index) in article.tags"
              :key="index"
              :to="`${article.dir}/tags/${tag}`"
              class="hover:bg-teal-600 bg-teal-500 text-teal-100 px-2 py-1 text-sm rounded font-bold shadow mb-1 mr-1 transition duration-100 ease-out"
              >#{{ tag }}
            </nuxt-link>
          </span>
          <span class="mt-1 text-teal-300 whitespace-no-wrap text-justify">
            Last updated on {{ updatedAt }} • {{ readingTime }}
          </span>
        </div>
        <p class="text-justify text-teal-200 leading-7 text-xl">{{ article.desc }}</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    },
    buttons: {
      type: Array
    },
    article: {
      type: Object
    }
  },
  computed: {
    updatedAt() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(this.article.updatedAt).toLocaleDateString("en", options);
    },
    readingTime() {
      var milli = this.article.readingTime,
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
  }
};
</script>

<style></style>

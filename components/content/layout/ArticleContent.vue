<template>
  <div>
    <div class="bg-teal-100">
      <div class="container px-5 py-24 mx-auto">
        <div class="-mt-48 lg:-mt-64 shadow-xl -mb-40 relative">
          <light-box
            class="mb-10"
            :gallery="[
              {
                src: `/img${article.dir}/${article.img}`,
                alt: article.alt
              }
            ]"
          ></light-box>
        </div>
      </div>
    </div>
    <div class="bg-teal-100 pt-10">
      <div class="container px-5 py-24 mx-auto">
        <div v-if="article.toc.length > 0">
          <div class="lg:w-1/2 w-full mb-6">
            <h1 class="text-3xl font-semibold text-teal-800 text-left">
              Table of contents
            </h1>
            <div class="h-1 w-20 bg-teal-500 rounded mt-2"></div>
          </div>
          <nav class="mb-32">
            <ul>
              <li
                v-for="link of article.toc"
                :key="link.id"
                class="transform translate-x-0 hover:translate-x-6 transition duration-100 ease-in-out"
                :class="{
                  'py-2': link.depth === 2,
                  'ml-4 pb-2': link.depth === 3
                }"
              >
                <nuxt-link
                  :to="`#${link.id}`"
                  class="text-gray-600 font-semibold text-lg"
                  ># {{ link.text }}</nuxt-link
                >
              </li>
            </ul>
          </nav>
        </div>
        <nuxt-content :document="article" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object
    }
  },
  data() {
    return {
      elements: null,
      featured: null
    };
  },
  methods: {
    colorVariants(value) {
      return {
        success: "bg-green-300 text-green-800 border-green-800",
        warning: "bg-yellow-300 text-yellow-800 border-yellow-800",
        danger: "bg-red-300 text-red-800 border-red-800",
        info: "bg-blue-300 text-blue-800 border-blue-800"
      }[value];
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
      // return date
    },
    readingTime(time) {
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
    },
    async getElements() {
      const elements = await this.$content(this.folder)
        .without(["body"])
        .sortBy("createdAt", "desc")
        .fetch();

      elements.forEach(function(e) {
        e.createdAt = this.formatDate(e.createdAt);
        e.readingTime = this.readingTime(e.readingTime);
        if (this.folder == "work") {
          e.variant = this.colorVariants(e.variant);
        }
      }, this);

      this.featured = elements[0];
      elements.splice(0, 1);
      this.elements = elements;
    }
  },
  mounted() {
    this.getElements();
  }
};
</script>

<style lang="scss" src="~/assets/style/main.scss"></style>

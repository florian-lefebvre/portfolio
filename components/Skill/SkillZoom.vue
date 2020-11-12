<template>
  <modal>
    <div
      v-if="skill"
      class="p-4 md:mb-0 mb-6 flex w-full flex-col text-center items-center text-gray-700"
    >
      <div class="flex w-full">
        <button
          type="button"
          @click="$emit('close')"
          class="transform hover:scale-125 transition ease-out duration-100 ml-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="flex ml-10 mr-auto my-6 items-center flex-wrap">
        <div
          class="bg-white rounded-lg border border-gray-100 shadow flex items-center mb-5 mr-5"
          :style="'color:' + skill.data.color"
        >
          <div
            class="-ml-5 bg-white shadow h-16 w-16 transform scale-150 rounded-full flex justify-center items-center"
          >
            <component
              :is="skill.data.icon"
              size="2x"
              fill="currentColor"
            ></component>
          </div>
          <a
            :href="skill.data.url"
            target="_blank"
            rel="noopener noreferrer"
            class="mx-10 text-3xl font-semibold hover:opacity-75"
            >{{ skill.data.title }}</a
          >
        </div>
        <div class="mb-5 text-left text-sm">
          <div class="text-gray-600 font-semibold">Status</div>
          <div
            class="font-semibold text-lg px-4 py-2 rounded-r border-l-4 uppercase inline-block shadow"
            :class="colorVariants()"
          >
            {{ skill.data.status }}
          </div>
        </div>
      </div>
      <div class="text-gray-600 text-justify mb-8 mx-10">
        <p class="leading-6">{{ skill.data.desc }}</p>
      </div>
      <div class="mb-5 w-full" v-if="projects !== null">
        <div class="flex justify-between mx-10 mb-2">
          <span class="font-semibold text-lg">Last projects</span>
          <nuxt-link
            :to="`/work/tags/${skill.name}`"
            class="bg-white text-gray-800 rounded px-2 py-1 shadow-md font-semibold inline-flex items-center hover:text-gray-600"
            >View all<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              /></svg
          ></nuxt-link>
        </div>
        <div class="px-10 overflow-x-auto flex space-x-4 pb-5">
          <nuxt-link
            :to="project.path"
            class="bg-white rounded-xl shadow flex-none flex relative flex-col md:flex-row hover:shadow-lg transition duration-150 ease-out"
            :class="projects.length == 1 ? 'w-full' : 'w-11/12'"
            v-for="project in projects"
            :key="project.name"
          >
            <img
              class="h-24 md:h-auto w-full md:w-32 lg:w-48 object-cover object-center rounded-t-lg md:rounded-l-lg md:rounded-none"
              :src="`/img${project.dir}/${project.img}`"
              :alt="project.alt"
            />
            <div class="p-5 text-left flex flex-col">
              <h2 class="text-xl font-semibold leading-10">
                {{ project.title }}
              </h2>
              <p class="leading-7 mb-2">{{ project.desc }}</p>
              <div class="mt-auto">
                {{ project.createdAt }} • {{ project.readingTime }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
      <div class="mb-5 w-full" v-if="articles !== null">
        <div class="flex justify-between mx-10 mb-2">
          <span class="font-semibold text-lg">Last articles</span>
          <nuxt-link
            :to="`/articles/tags/${skill.name}`"
            class="bg-white text-gray-800 rounded px-2 py-1 shadow-md font-semibold inline-flex items-center hover:text-gray-600"
            >View all<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              /></svg
          ></nuxt-link>
        </div>
        <div class="px-10 overflow-x-auto flex space-x-4 pb-5">
          <nuxt-link
            :to="article.path"
            class="bg-white rounded-xl shadow flex-none flex relative flex-col md:flex-row hover:shadow-lg transition duration-150 ease-out"
            :class="articles.length == 1 ? 'w-full' : 'w-11/12'"
            v-for="article in articles"
            :key="article.name"
          >
            <img
              class="h-24 md:h-auto w-full md:w-32 lg:w-48 object-cover object-center rounded-t-lg md:rounded-l-lg md:rounded-none"
              :src="`/img${article.dir}/${article.img}`"
              :alt="article.alt"
            />
            <div class="p-5 text-left flex flex-col">
              <h2 class="text-xl font-semibold leading-10">
                {{ article.title }}
              </h2>
              <p class="leading-7 mb-2">{{ article.desc }}</p>
              <div class="mt-auto">
                {{ article.createdAt }} • {{ article.readingTime }}
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  props: {
    skill: {
      type: Object
    }
  },
  data() {
    return {
      articles: null,
      projects: null
    };
  },
  methods: {
    colorVariants() {
      return {
        success: "bg-green-300 text-green-800 border-green-800",
        warning: "bg-yellow-300 text-yellow-800 border-yellow-800",
        danger: "bg-red-300 text-red-800 border-red-800",
        info: "bg-blue-300 text-blue-800 border-blue-800"
      }[this.skill.data.variant];
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
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
    async getArticles() {
      const articles = await this.$content("articles")
        .without(["body", "status", "tags", "toc", "updatedAt", "variant"])
        .where({
          tags: { $contains: this.skill.name }
        })
        .sortBy("createdAt", "desc")
        .limit(3)
        .fetch();

      if (typeof articles[0] !== "undefined") {
        articles.forEach(function(article) {
          article.createdAt = this.formatDate(article.createdAt);
          article.readingTime = this.readingTime(article.readingTime);
        }, this);
        this.articles = articles;
      } else {
        this.articles = null;
      }
    },
    async getProjects() {
      const projects = await this.$content("work")
        .without(["body", "status", "tags", "toc", "updatedAt", "variant"])
        .where({
          tags: { $contains: this.skill.name }
        })
        .sortBy("createdAt", "desc")
        .limit(3)
        .fetch();

      if (typeof projects[0] !== "undefined") {
        projects.forEach(function(project) {
          project.createdAt = this.formatDate(project.createdAt);
          project.readingTime = this.readingTime(project.readingTime);
        }, this);
        this.projects = projects;
      } else {
        this.projects = null;
      }
    }
  },
  mounted() {
    this.colorVariants();
    this.getArticles();
    this.getProjects();
  },
  watch: {
    skill() {
      this.colorVariants();
      this.getArticles();
      this.getProjects();
    }
  }
};
</script>

<style></style>

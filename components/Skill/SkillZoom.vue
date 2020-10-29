<template>
  <div class="text-gray-700 h-full">
    <div
      v-if="skill"
      class="p-4 md:mb-0 mb-6 flex w-full flex-col text-center items-center"
    >
      <div
        class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 shadow mb-5 flex-shrink-0 relative"
        :style="'color:' + skill.data.color"
      >
        <component
          :is="skill.data.icon"
          size="2.5x"
          fill="currentColor"
        ></component>
        <span class="flex h-4 w-4 absolute -ml-4" style="top: 4px; right: 4px;">
          <span
            class="animate-ping absolute inline-flex h-4 w-4 rounded-full opacity-75"
            :class="colorVariants()"
          ></span>
          <span
            class="relative inline-flex rounded-full h-4 w-4"
            :class="colorVariants()"
          ></span>
        </span>
      </div>
      <div class="flex-grow">
        <h2>
          <a
            :href="skill.data.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-3xl font-bold tracking-tight hover:opacity-75 inline-flex items-center"
            :style="'color:' + skill.data.color"
            >{{ skill.data.title
            }}<svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-8 h-8 ml-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              /></svg
          ></a>
        </h2>
        <p class="leading-relaxed text-base">
          {{ skill.data.desc }}
        </p>
        <div class="flex justify-between items-center mb-2 mt-4">
          <h3 class="title-font text-xl font-medium text-gray-900 uppercase">Last articles</h3>
          <nuxt-link
            :to="`/articles/tags/${skill.name}`"
            class="mt-3 inline-flex items-center hover:opacity-75"
            :style="'color:' + skill.data.color"
            >All articles
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </nuxt-link>
        </div>
        <div v-if="articles !== null">
          <div v-if="articles.length == 0">
            <p>No articles with this tag</p>
          </div>
          <div v-else>
            <nuxt-link
              :to="article.path"
              class="py-8 px-4 w-full bg-gray-100 inline-block mb-2 rounded shadow"
              v-for="article in articles"
              :key="article.slug"
            >
              <div class="h-full flex items-start">
                <div
                  class="w-12 flex-shrink-0 flex flex-col text-center leading-none"
                >
                  <span
                    class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-300 uppercase"
                    >{{ formatDate(article.updatedAt).m }}</span
                  >
                  <span class="font-medium text-xl text-gray-800 title-font">{{
                    formatDate(article.updatedAt).d
                  }}</span>
                </div>
                <div class="flex-grow pl-6">
                  <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
                    {{ article.title }}
                  </h1>
                  <h2
                    class="tracking-widest text-sm title-font font-medium text-teal-500 mb-1"
                  >
                    {{ article.tags }}
                  </h2>
                  <p class="leading-relaxed">{{ article.desc }}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col h-full animate-pulse">
      <div
        class="text-center flex flex-col items-center my-auto container px-5 py-10"
      >
        <h2 class="font-medium mb-6">
          Click on a skill to view more information such as projects and related
          articles
        </h2>
        <div class="w-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Html5Icon,
  Css3Icon,
  TailwindCssIcon,
  JavaScriptIcon,
  SassIcon,
  PhpIcon,
  PythonIcon,
  MySqlIcon,
  BootstrapIcon,
  LaravelIcon,
  VueJsIcon,
  NuxtJsIcon,
  GraphQlIcon,
  ReactIcon,
  NodeJsIcon,
  DockerIcon,
  ElectronIcon,
  RubyOnRailsIcon,
  DjangoIcon,
  CPlusPlusIcon,
  JavaIcon,
  BitbucketIcon,
  JiraSoftwareIcon,
  TrelloIcon,
  GitIcon,
  JekyllIcon,
  UnrealEngineIcon,
  VisualStudioCodeIcon,
  AtomIcon,
  NpmIcon,
  FileZillaIcon,
  SketchUpIcon,
  MicrosoftOfficeIcon,
  AdobePhotoshopIcon,
  MuseScoreIcon,
  FlutterIcon
} from "vue-simple-icons";

export default {
  components: {
    Html5Icon,
    Css3Icon,
    TailwindCssIcon,
    JavaScriptIcon,
    SassIcon,
    PhpIcon,
    PythonIcon,
    MySqlIcon,
    BootstrapIcon,
    LaravelIcon,
    VueJsIcon,
    NuxtJsIcon,
    GraphQlIcon,
    ReactIcon,
    NodeJsIcon,
    DockerIcon,
    ElectronIcon,
    RubyOnRailsIcon,
    DjangoIcon,
    CPlusPlusIcon,
    JavaIcon,
    BitbucketIcon,
    JiraSoftwareIcon,
    TrelloIcon,
    GitIcon,
    JekyllIcon,
    UnrealEngineIcon,
    VisualStudioCodeIcon,
    AtomIcon,
    NpmIcon,
    FileZillaIcon,
    SketchUpIcon,
    MicrosoftOfficeIcon,
    AdobePhotoshopIcon,
    MuseScoreIcon,
    FlutterIcon
  },
  props: {
    skill: {
      type: Object
    }
  },
  data() {
    return {
      articles: null
    };
  },
  methods: {
    colorVariants() {
      return {
        success: "bg-green-600",
        warning: "bg-yellow-400",
        danger: "bg-red-700",
        info: "bg-blue-600"
      }[this.skill.data.variant];
    },
    formatDate(date) {
      const options = [
        { year: "numeric" },
        { month: "short" },
        { day: "numeric" }
      ];
      return {
        y: new Date(date).toLocaleDateString("en", options[0]),
        m: new Date(date).toLocaleDateString("en", options[1]),
        d: new Date(date).toLocaleDateString("en", options[2])
      };
    },
    async getArticles() {
      const articles = await this.$content("articles")
        .where({
          tags: { $contains: this.skill.name }
        })
        .sortBy("createdAt", "desc")
        .limit(3)
        .fetch();

      articles.forEach(function(item, index) {
        var tags = "";
        item.tags.forEach(function(item2, index2) {
          tags += "#" + item2 + " ";
        });
        item.tags = tags;
      });

      this.articles = articles;
    }
  },
  computed: {
    setColorVariant() {
      this.colorVariants();
      this.getArticles();
    }
  },
  updated() {
    this.colorVariants();
    this.getArticles();
  }
};
</script>

<style></style>

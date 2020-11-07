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
      <div class="flex-grow max-w-full">
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
        <div class="mt-4 mb-2" v-if="project !== null || article !== null">
          <nuxt-link
            v-if="project !== null"
            :to="`/work/tags/${skill.name}`"
            class="bg-gray-400 text-gray-800 px-4 py-2 whitespace-no-wrap inline-block mb-2 rounded shadow hover:bg-gray-600 hover:text-gray-100 transition duration-100 ease-out"
            >All projects</nuxt-link
          >
          <nuxt-link
            v-if="article !== null"
            :to="`/articles/tags/${skill.name}`"
            class="bg-gray-400 text-gray-800 px-4 py-2 whitespace-no-wrap inline-block mb-2 rounded shadow hover:bg-gray-600 hover:text-gray-100 transition duration-100 ease-out"
            >All articles</nuxt-link
          >
        </div>
        <div v-if="project !== null">
          <nuxt-link
            :to="project.path"
            class="py-6 px-4 w-full bg-gray-100 inline-block mb-2 rounded shadow transform transition duration-100 ease-out hover:scale-105 relative"
          >
            <span
              class="bg-teal-300 text-teal-800 text-xs px-2 py-1 pr-4 font-bold rounded-tl rounded-br-full shadow-xs absolute top-0 left-0"
              >Last project</span
            >
            <h2 class="title-font text-xl font-medium text-gray-900 mb-2">
              {{ project.title }}
            </h2>
            <p class="leading-relaxed">{{ project.desc }}</p>
          </nuxt-link>
        </div>
        <div v-if="article !== null">
          <nuxt-link
            :to="article.path"
            class="py-6 px-4 w-full bg-gray-100 inline-block mb-2 rounded shadow transform transition duration-100 ease-out hover:scale-105 relative"
          >
            <span
              class="bg-teal-300 text-teal-800 text-xs px-2 py-1 pr-4 font-bold rounded-tl rounded-br-full shadow-xs absolute top-0 left-0"
              >Last article</span
            >
            <h2 class="title-font text-xl font-medium text-gray-900 mb-2">
              {{ article.title }}
            </h2>
            <p class="leading-relaxed">{{ article.desc }}</p>
          </nuxt-link>
        </div>
        <!-- <div v-if="projects">
          <div v-for="project in projects" :key="project.name">
            {{ project }}
          </div>
        </div> -->
      </div>
    </div>
  </modal>
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
      article: null,
      project: null
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
    // formatDate(date) {
    //   const options = [
    //     { year: "numeric" },
    //     { month: "short" },
    //     { day: "numeric" }
    //   ];
    //   return {
    //     y: new Date(date).toLocaleDateString("en", options[0]),
    //     m: new Date(date).toLocaleDateString("en", options[1]),
    //     d: new Date(date).toLocaleDateString("en", options[2])
    //   };
    // },
    async getArticles() {
      const articles = await this.$content("articles")
        .only(["title", "desc"])
        .where({
          tags: { $contains: this.skill.name }
        })
        .sortBy("createdAt", "desc")
        .limit(1)
        .fetch();

      if (typeof articles[0] !== "undefined") {
        articles[0].desc = this.shortenSentence(articles[0].desc, 50);
        this.article = articles[0];
      } else {
        this.article = null;
      }
    },
    async getProjects() {
      const projects = await this.$content("work")
        .only(["title", "desc"])
        .where({
          tags: { $contains: this.skill.name }
        })
        .sortBy("createdAt", "desc")
        .limit(1)
        .fetch();

      if (typeof projects[0] !== "undefined") {
        projects[0].desc = this.shortenSentence(projects[0].desc, 50);
        this.project = projects[0];
      } else {
        this.project = null;
      }
    },
    shortenSentence(string, maxLength) {
      //   if (string.length > maxLength) {
      //     var trimmedString = string.substr(0, maxLength);
      //     trimmedString = trimmedString.substr(
      //       0,
      //       Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
      //     );
      //     return trimmedString + "...";
      //   } else {
      //     return string;
      //   }
      return string;
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

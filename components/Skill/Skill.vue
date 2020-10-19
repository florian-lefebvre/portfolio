<template>
  <div class="xl:w-1/3 md:w-1/2 p-4">
    <div
      class="border border-gray-300 p-6 rounded-lg shadow divide-y divide-gray-300"
    >
      <div class="flex items-center mb-2 pb-2">
        <div
          class="w-10 h-10 transform scale-150 inline-flex items-center justify-center rounded-full bg-gray-100 mr-4 shadow-md border-gray-300 border"
        >
          <!-- <component v-if="icon" :is="generatedIcon"></component> -->
          <component :is="generateIcon"></component>
          <!-- <sass-icon size="1.5x" :fill="color"></sass-icon> -->
        </div>
        <div>
          <h2 class="text-lg text-purple-500 font-medium title-font text-xl">
            {{ title }}
          </h2>
          <div
            :class="
              colorVariants +
                ' font-medium px-2 py-1 text-xs rounded-r border-l-4 uppercase'
            "
          >
            {{ status }}
          </div>
        </div>
      </div>
      <p class="leading-relaxed text-base py-2">
        {{ desc }}
      </p>
      <div class="py-2" v-if="projectsDesc || projects">
        <h3 class="font-medium uppercase text-gray-900">Projects</h3>
        <p v-if="projectsDesc">{{ projectsDesc }}</p>
        <div v-if="projects">
          <div v-for="project in projects" :key="project.name">
            <Link
              :text="project.text"
              :url="project.url"
              :external="project.external ? true : false"
            />
          </div>
        </div>
      </div>
      <div class="pt-2" v-if="links">
        <div v-for="link in links" :key="link.name">
          <Link
            :text="link.text"
            :url="link.url"
            :external="link.external ? true : false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Link from "./Link";
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
  RubyIcon,
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
  MuseScoreIcon
} from "vue-simple-icons";
import Vue from "vue";

Vue.component("icon", {
  template: "<div>ICON</div>"
});

export default {
  name: "Skill",
  components: {
    Link,
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
    RubyIcon,
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
    MuseScoreIcon
  },
  props: {
    title: {
      type: String,
      default: "Skill"
    },
    status: {
      type: String,
      default: "Learning"
    },
    variant: {
      type: String,
      default: "warning"
    },
    icon: {
      type: String
    },
    desc: {
      type: String,
      default: "No description provided."
    },
    projectsDesc: {
      type: String
    },
    projects: {
      type: Array
    },
    links: {
      type: Array
    },
    color: {
      type: String,
      default: "currentColor"
    }
  },
  computed: {
    colorVariants() {
      switch (this.variant) {
        case "success":
          return "bg-green-300 text-green-800 border-green-800";
          break;
        case "warning":
          return "bg-yellow-300 text-yellow-800 border-yellow-800";
          break;
        case "danger":
          return "bg-red-300 text-red-800 border-red-800";
      }
    },
    generateIcon() {
      return "icon";
    }
  }
};
</script>

<style></style>

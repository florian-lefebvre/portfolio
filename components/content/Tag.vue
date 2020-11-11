<template>
  <nuxt-link
    :to="`/${folder}/tags/${tag[0]}`"
    class="bg-white text-teal-600 flex flex-col items-center py-5 mb-8 shadow rounded-md w-36 hover:shadow-lg mx-4 cursor-pointer transition duration-150 ease-out w-40 h-40 skill"
  >
    <div class="w-10 h-10 transition duration-150 ease-out" :style="`--skill-color:${color};`">
      <component
        :is="icon"
        size="3x"
        fill="currentColor"
        class="max-h-full max-w-full"
        v-if="icon"
      ></component>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width="3em"
        height="3em"
        class="max-h-full max-w-full"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
        />
      </svg>
    </div>
    <span class="font-semibold text-lg text-center mt-4 mx-2 md:mx-4">
      #{{ tag[0] }}
    </span>
    <span class="font-medium text-center mt-4 mx-2 md:mx-4">
      {{ tag[1] }} {{ elementWord }}
    </span>
  </nuxt-link>
</template>

<script>
import knownTechnologies from "@/assets/data/skills/knownTechnologies.json";
import futureTechnologies from "@/assets/data/skills/futureTechnologies.json";
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
    tag: {
      type: Array
    },
    folder: {
      type: String
    }
  },
  data() {
    return {
      icon: null,
      color: null
    };
  },
  mounted() {
    var tech = null;
    if (knownTechnologies.find(tech => tech.name == this.tag[0])) {
      tech = knownTechnologies.find(tech => tech.name == this.tag[0]);
    } else if (futureTechnologies.find(tech => tech.name == this.tag[0])) {
      tech = futureTechnologies.find(tech => tech.name == this.tag[0]);
    }
    if (tech !== null) {
      this.icon = tech.data.icon;
      this.color = tech.data.color;
    }
  },
  computed: {
    elementWord() {
      var word = "";
      if (this.folder == "work") {
        word = "project";
      } else {
        word = "article";
      }
      if (this.tag[1] > 1) {
        word += "s";
      }
      return word;
    }
  }
};
</script>
<style lang="scss" scoped>
.skill:hover > div {
  color: var(--skill-color);
}
</style>

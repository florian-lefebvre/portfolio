<template>
  <div class="flex-1 sm:w-full sm:flex-none xl:w-1/2 md:w-1/2 p-4 flex">
    <div
      class="border border-gray-300 p-6 rounded-lg shadow divide-y divide-gray-300 flex flex-col flex-1 cursor-pointer transition duration-100 ease-out transform hover:scale-105"
      @click="$emit('set-current-skill')"
    >
      <div class="flex items-center">
        <div
          class="w-10 h-10 inline-flex items-center justify-center mr-4"
          :style="'color:' + color"
        >
          <component :is="icon" size="3x" fill="currentColor"></component>
        </div>
        <div>
          <h2
            class="font-medium title-font text-xl"
            :style="'color:' + color"
          >
            {{ title }}
          </h2>
          <div
            class="font-medium px-2 py-1 text-xs rounded-r border-l-4 uppercase inline-block"
            :class="colorVariants"
          >
            {{ status }}
          </div>
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
  name: "Skill",
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
      default: "warning",
      validator(value) {
        return ['success', 'warning', 'danger', 'info'].includes(value);
      }
    },
    icon: {
      type: String
    },
    color: {
      type: String
    }
  },
  computed: {
    colorVariants() {
      return {
        success: "bg-green-300 text-green-800 border-green-800",
        warning: "bg-yellow-300 text-yellow-800 border-yellow-800",
        danger: "bg-red-300 text-red-800 border-red-800",
        info: "bg-blue-300 text-blue-800 border-blue-800"
      }[this.variant]
    }
  }
};
</script>

<style></style>

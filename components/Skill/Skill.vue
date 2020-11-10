<template>
  <div
    class="flex flex-col items-center py-5 mb-8 rounded-md w-36 hover:shadow-lg md:mx-4 md:w-44 skill cursor-pointer transition duration-150 ease-out w-32 h-32"
    @click="$emit('set-current-skill')"
  >
    <div class="w-10 h-10" :style="`--skill-color:${color};`">
      <component
        :is="icon"
        size="3x"
        fill="currentColor"
        class="max-h-full max-w-full"
      ></component>
    </div>
    <span class="font-medium text-center mt-4 mx-2 md:mx-4">
      {{ title }}
    </span>
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
        return ["success", "warning", "danger", "info"].includes(value);
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
      }[this.variant];
    }
  }
};
</script>

<style lang="scss" scoped>
.skill:hover > div {
  color: var(--skill-color);
}
</style>

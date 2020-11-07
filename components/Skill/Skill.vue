<template>
  <!-- <div class="flex-1 sm:w-full sm:flex-none xl:w-1/2 md:w-1/2 p-4 flex">
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
  </div> -->
  <div
    class="flex flex-col items-center py-5 mb-8 rounded-md w-36 hover:shadow-lg md:mx-4 md:w-44 skill cursor-pointer transition duration-150 ease-out w-32 h-32"
    @click="$emit('set-current-skill')"
  >
    <div class="text-gray-600 w-10 h-10" :style="`--skill-color:${color};`">
      <component
        :is="icon"
        size="3x"
        fill="currentColor"
        class="max-h-full max-w-full"
      ></component>
      <!-- <svg
        version="1.1"
        viewBox="0 0 30 30"
        class="fill-current max-h-full max-w-full svg-icon svg-fill"
      >
        <path
          pid="0"
          d="M2.833 14.75c.372 0 .68-.29.701-.662C3.877 8.05 8.874 3.266 15 3.266c3.174 0 6.044 1.284 8.122 3.362L19.95 9.8a.703.703 0 00.497 1.2h8.381a.703.703 0 00.703-.703v-8.38a.703.703 0 00-1.2-.498l-3.057 3.057A14.482 14.482 0 0015 .219C7.22.219.869 6.332.487 14.017c-.02.4.303.733.702.733h1.644zM15 29.281c7.78 0 14.131-6.113 14.513-13.798a.702.702 0 00-.703-.733h-1.643c-.372 0-.68.29-.701.662-.343 6.038-5.34 10.822-11.466 10.822a11.446 11.446 0 01-8.122-3.362L10.05 19.7a.703.703 0 00-.498-1.2h-8.38a.703.703 0 00-.703.703v8.38c0 .627.757.94 1.2.498l3.057-3.057A14.48 14.48 0 0015 29.281z"
          _fill="#C0CDDA"
          fill-rule="nonzero"
        ></path>
      </svg> -->
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

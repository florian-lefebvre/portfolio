<template>
  <Section>
    <SectionsTitle title="Techs..." />
    <div
      class="grid grid-cols-2 gap-6 mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6"
    >
      <XyzConflict
        v-for="(e, i) in skills"
        :key="i"
        xyz="delay-8 small fade stagger-2 ease-out-back"
        class="flex justify-center px-6 py-8 transition-all transform cursor-default md:py-10 rounded-2xl card-color"
        endClass="md:hover:-translate-y-2"
      >
        <div class="flex flex-col items-center space-y-2">
          <component :is="e.icon" class="w-8 h-8 fill-current"></component>
          <div class="text-lg font-semibold text-center mt-auto">
            {{ e.name }}
          </div>
        </div>
      </XyzConflict>
    </div>
    <div>
      <h3
        class="mb-6 text-4xl font-extrabold leading-8 tracking-tight xyz-nested"
        xyz="fade left-1 delay-25 duration-10"
      >
        ...and what's next
      </h3>
      <div
        class="grid grid-cols-2 gap-6 mb-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        <XyzConflict
          v-for="(e, i) in next"
          :key="i"
          xyz="delay-30 small-1 fade stagger-2 ease-out-back"
          class="flex justify-center px-4 py-6 transition-all transform cursor-default md:py-6 rounded-2xl card-color"
          endClass="md:hover:-translate-y-2"
        >
          <div class="flex flex-col items-center space-y-2">
            <component :is="e.icon" class="w-8 h-8 fill-current"></component>
            <div class="font-light text-center mt-auto">{{ e.name }}</div>
          </div>
        </XyzConflict>
      </div>
    </div>
  </Section>
</template>

<style scoped>
.card-color {
  @apply text-gray-600 bg-gray-300 dark:bg-gray-900 dark:text-gray-400 dark:hover:text-gray-200 hover:text-gray-800;
}
</style>

<script>
import {
  Html5Icon,
  Css3Icon,
  JavaScriptIcon,
  VueJsIcon,
  NuxtJsIcon,
  TailwindCssIcon,
  GitIcon,
  ElectronIcon,
  LaravelIcon,
  GraphQlIcon,
  DockerIcon,
  FlutterIcon,
  TypeScriptIcon,
  SocketIoIcon,
  FigmaIcon,
  JestIcon,
  StrapiIcon
} from "vue-simple-icons";
export default {
  components: {
    Html5Icon,
    Css3Icon,
    JavaScriptIcon,
    VueJsIcon,
    NuxtJsIcon,
    TailwindCssIcon,
    GitIcon,
    ElectronIcon,
    LaravelIcon,
    GraphQlIcon,
    DockerIcon,
    FlutterIcon,
    TypeScriptIcon,
    SocketIoIcon,
    FigmaIcon,
    JestIcon,
    StrapiIcon
  },
  data() {
    return {
      skills: [
        {
          name: "HTML5",
          icon: "Html5Icon"
        },
        {
          name: "CSS3",
          icon: "Css3Icon"
        },
        {
          name: "Javascript",
          icon: "JavaScriptIcon"
        },
        {
          name: "Vue",
          icon: "VueJsIcon"
        },
        {
          name: "Nuxt",
          icon: "NuxtJsIcon"
        },
        {
          name: "Tailwind CSS",
          icon: "TailwindCssIcon"
        },
        {
          name: "Electron",
          icon: "ElectronIcon"
        },
        {
          name: "Strapi",
          icon: "StrapiIcon"
        },
        {
          name: "GraphQL",
          icon: "GraphQlIcon"
        },
        {
          name: "Git",
          icon: "GitIcon"
        }
      ],
      next: [
        {
          name: "Figma",
          icon: "FigmaIcon"
        },
        {
          name: "Laravel",
          icon: "LaravelIcon"
        },
        {
          name: "Supabase",
          icon: ""
        },
        {
          name: "Flutter",
          icon: "FlutterIcon"
        },
        {
          name: "Typescript",
          icon: "TypeScriptIcon"
        },
        {
          name: "Docker",
          icon: "DockerIcon"
        },
        {
          name: "Socket.io",
          icon: "SocketIoIcon"
        },
        {
          name: "Jest",
          icon: "JestIcon"
        }
      ]
    };
  }
};
</script>

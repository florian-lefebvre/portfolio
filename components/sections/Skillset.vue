<template>
  <Section>
    <Title title="Skillset" />
    <div
      class="grid grid-cols-2 gap-6 mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6"
    >
      <HoverableAnimated
        v-for="(e, i) in skills"
        :key="i"
        xyz="delay-8 small fade stagger-2 ease-out-back"
        class="flex justify-center px-6 py-8 transition-transform transform bg-gray-300 cursor-default md:py-10 dark:bg-gray-900 rounded-2xl"
        endClass="md:hover:scale-105"
      >
        <div class="flex flex-col items-center space-y-2">
          <component
            :is="e.icon"
            class="w-8 h-8 text-gray-600 fill-current dark:text-gray-400"
          ></component>
          <div class="text-lg font-semibold text-center">
            {{ e.name }}
          </div>
        </div>
      </HoverableAnimated>
    </div>
    <div>
      <h3
        class="mb-6 text-4xl font-extrabold leading-8 tracking-tight xyz-nested"
        xyz="fade left-1 delay-25 duration-10"
      >
        Next technologies on my list
      </h3>
      <div
        class="grid grid-cols-2 gap-6 mb-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        <HoverableAnimated
          v-for="(e, i) in next"
          :key="i"
          xyz="delay-30 small-1 fade stagger-2 ease-out-back"
          class="flex justify-center px-4 py-6 text-gray-300 transition-all transform bg-gray-500 cursor-default md:py-6 dark:bg-gray-700 rounded-2xl dark:text-gray-400 hover:text-gray-200 dark:hover:text-gray-300"
          endClass="md:hover:scale-105"
        >
          <div class="flex flex-col items-center space-y-2">
            <component :is="e.icon" class="w-8 h-8 fill-current"></component>
            <div class="font-light text-center">{{ e.name }}</div>
          </div>
        </HoverableAnimated>
      </div>
    </div>
  </Section>
</template>

<script>
import {
  Html5Icon,
  Css3Icon,
  JavaScriptIcon,
  VueJsIcon,
  NuxtJsIcon,
  TailwindCssIcon,
  GitIcon,
  PhpIcon,
  SassIcon,
  ElectronIcon,
  LaravelIcon,
  GraphQlIcon,
  DockerIcon,
  FlutterIcon,
  TypeScriptIcon,
  SocketIoIcon,
  FigmaIcon,
  JestIcon
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
    PhpIcon,
    SassIcon,
    ElectronIcon,
    LaravelIcon,
    GraphQlIcon,
    DockerIcon,
    FlutterIcon,
    TypeScriptIcon,
    SocketIoIcon,
    FigmaIcon,
    JestIcon
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
          name: "Git",
          icon: "GitIcon"
        },
        {
          name: "PHP",
          icon: "PhpIcon"
        },
        {
          name: "SCSS",
          icon: "SassIcon"
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
          name: "GraphQL",
          icon: "GraphQlIcon"
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
        },
        {
          name: "Flutter",
          icon: "FlutterIcon"
        }
      ]
    };
  }
};
</script>

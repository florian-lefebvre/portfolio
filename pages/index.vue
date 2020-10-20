<template>
  <div>
    <section
      class="text-purple-100 body-font bg-gradient-to-r from-purple-500 to-purple-800"
    >
      <div
        class="container mx-auto px-5 py-16 md:py-24 lg:py-32 xl:py-56 md:flex-row flex-col items-center text-center"
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi! I'm Florian LEFEBVRE
        </h1>
        <p class="mb-8 leading-relaxed lg:w-2/3 mx-auto">
          I am a French student who likes to program on his free time since
          2018, when I discovered programming with
          <strong>Unreal Engine 4</strong>. In December 2019, I started web
          development and since then, I can't stop :
          <strong>Tailwind css</strong>, <strong>Laravel</strong>,
          <strong>Vue.js</strong>... And many more to come!
        </p>
        <div class="flex justify-center">
          <nuxt-link
            to="/work"
            class="shadow inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded text-lg font-medium uppercase"
          >
            Work
          </nuxt-link>
          <nuxt-link
            to="/contact"
            class="shadow-lg ml-4 inline-flex text-purple-100 bg-transparent border-2 border-purple-100 hover:bg-purple-100 hover:text-purple-500 py-2 px-6 focus:outline-none rounded text-lg font-medium uppercase"
          >
            Get in touch
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div
          class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
        >
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          >
            I know a lot of technologies and tools
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-base">
            From Git to Vue.js through Bootstrap or Unreal Engine, I have
            knowledge in many areas
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <Skill
            v-for="tech in knownTechnologies"
            :key="tech.name"
            :title="tech.data.title"
            :icon="tech.data.icon"
            :color="tech.data.color"
            :variant="tech.data.variant"
            :status="tech.data.status"
            :desc="tech.data.desc"
            :projectsDesc="tech.data.projectsDesc"
            :projects="tech.data.projects"
            :links="tech.data.links"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Skill from "@/components/Skill/Skill";

export default {
  components: {
    Skill
  },
  head: {
    title: "Home"
  },
  data() {
    return {
      knownTechnologies: [
        {
          name: "html5",
          data: {
            title: "HTML5",
            icon: "Html5Icon",
            color: "#F16529",
            variant: "success",
            status: "Mastered",
            desc:
              "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
            projectsDesc: "I use HTML5 in all my web projects.",
            links: [
              {
                text: "Learn more",
                url:
                  "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
                external: true
              }
            ]
          }
        },
        {
          name: "css3",
          data: {
            title: "CSS3",
            icon: "Css3Icon",
            color: "#0F5298",
            variant: "success",
            status: "Good knowledge",
            desc:
              "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
            projectsDesc: "I use CSS3 in all my web projects.",
            links: [{
                text: "Learn more",
                url:
                  "https://developer.mozilla.org/en-US/docs/Web/CSS",
                external: true
              }]
          }
        },
        {
          name: "js",
          data: {
            title: "Javascript",
            icon: "JavaScriptIcon",
            color: "#FDC72E",
            variant: "success",
            status: "Good knowledge",
            desc:
              "Javascript is an object-oriented scripting language mainly used in HTML pages in which it adds dynamic content (modal...).",
            projectsDesc: "I use Javascript in almost all my web projects.",
            links: [{
                text: "Official website",
                url:
                  "https://www.javascript.com",
                external: true
              },
              {
                text: "Learn more",
                url:
                  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                external: true
              }]
          }
        },
        {
          name: "scss",
          data: {
            title: "SCSS",
            icon: "SassIcon",
            color: "#CD6799",
            variant: "success",
            status: "Good knowledge",
            desc:
              "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
            projects: [
              {
                text: "OHF31 - public website",
                url: "/work/ohf31-public",
                external: true
              }
            ],
            links: [
              {
                text: "Official website",
                url: "https://sass-lang.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "php_procedural",
          data: {
            title: "Procedural PHP",
            icon: "PhpIcon",
            color: "#474A8A",
            variant: "success",
            status: "Good knowledge",
            desc:
              "Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.",
            projects: [
              {
                text: "OHF31 - public website",
                url: "/work/ohf31-public",
                external: true
              }
            ],
            links: [
              {
                text: "Official website",
                url: "https://sass-lang.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "vuejs",
          data: {
            title: "Vue.js",
            icon: "VueJsIcon",
            color: "#41B883",
            variant: "warning",
            status: "Learning",
            desc:
              "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.",
            projects: [{
              text: "Portfolio",
              url: "/work/portfolio"
            }],
            links: [
              {
                text: "Official website",
                url:
                  "https://vuejs.org/",
                external: true
              }
            ]
          }
        }
      ]
    };
  }
};
</script>

<style></style>

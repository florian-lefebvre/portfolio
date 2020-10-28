<template>
  <!-- <div>
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
  </div> -->
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div>
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-screen-xl mx-auto">
        <div
          class="relative pb-8 z-10 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
  
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              class="relative flex items-center justify-between sm:h-10 lg:justify-start"
            ></nav>
          </div>
  
          <main
            class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h2
                class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
              >
                Hi! I'm
                <br class="xl:hidden" />
                <span class="text-teal-600">Florian LEFEBVRE</span>
              </h2>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                I am a French student who likes to program on his free time since
                2018, when I discovered programming with
                <strong>Unreal Engine 4</strong>. In December 2019, I started web
                development and since then, I can't stop :
                <strong>Tailwind css</strong>, <strong>Laravel</strong>,
                <strong>Vue.js</strong>... And many more to come!
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div class="rounded-md shadow">
                  <nuxt-link
                    to="work"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Check out my work
                  </nuxt-link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    :href="`mailto:${$store.state.infos.email}`"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-teal-700 bg-teal-100 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Email me
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
    <section class="text-gray-700 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div class="flex flex-wrap">
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a class="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a class="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a class="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
        <p class="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a class="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
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
            links: [
              {
                text: "Learn more",
                url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                external: true
              }
            ]
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
            links: [
              {
                text: "Official website",
                url: "https://www.javascript.com",
                external: true
              },
              {
                text: "Learn more",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                external: true
              }
            ]
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
            projects: [
              {
                text: "Portfolio",
                url: "/work/portfolio"
              }
            ],
            links: [
              {
                text: "Official website",
                url: "https://vuejs.org/",
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

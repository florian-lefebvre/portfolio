<template>
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
                I am a French student who likes to program on his free time
                since 2018, when I discovered programming with
                <strong>Unreal Engine 4</strong>. In December 2019, I started
                web development and since then, I can't stop :
                <strong>Tailwind Css</strong>, <strong>Laravel</strong>,
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
                    class="shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-teal-700 bg-teal-100 hover:text-teal-600 hover:bg-teal-50 focus:outline-none focus:shadow-outline-teal focus:border-teal-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
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
          src="~/assets/img/hero-home.jpg"
          alt="Hero image"
        />
      </div>
    </div>
    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div
          class="flex flex-wrap w-full mb-20 flex-col items-center text-center"
        >
          <h1
            class="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none md:text-3xl"
          >
            I know a lot of technologies and tools
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          >
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
            title: "PHP (Procedural)",
            icon: "PhpIcon",
            color: "#474A8A",
            variant: "success",
            status: "Good knowledge",
            desc:
              "PHP is a general-purpose scripting language especially suited to web development.",
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
                url: "https://www.php.net/",
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
        },
        {
          name: "tailwindcss",
          data: {
            title: "Tailwind Css",
            icon: "TailwindCssIcon",
            color: "#14b4c6",
            variant: "success",
            status: "Good knowledge",
            desc:
              "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
            projects: [
              {
                text: "Portfolio",
                url: "/work/portfolio"
              },
              {
                text: "yNotes website",
                url: "/work/yNotes"
              }
            ],
            links: [
              {
                text: "Official website",
                url: "https://tailwindcss.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "python",
          data: {
            title: "Python",
            icon: "PythonIcon",
            color: "#306998",
            variant: "warning",
            status: "Learning at school",
            desc:
              "Python is a programming language that lets you work quickly and integrate systems more effectively.",
            links: [
              {
                text: "Official website",
                url: "https://www.python.org/",
                external: true
              }
            ]
          }
        },
        {
          name: "mysql",
          data: {
            title: "MySQL",
            icon: "MySqlIcon",
            color: "#00758F",
            variant: "success",
            status: "Basic knowledge",
            desc:
              "MySQL is an open-source relational database management system.",
            links: [
              {
                text: "Official website",
                url: "https://www.mysql.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "bootstrap",
          data: {
            title: "Bootstrap",
            icon: "BootstrapIcon",
            color: "#7952b3",
            variant: "success",
            status: "Good knowledge",
            desc:
              "Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.",
            links: [
              {
                text: "Official website",
                url: "https://getbootstrap.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "laravel",
          data: {
            title: "Laravel",
            icon: "LaravelIcon",
            color: "#F05340",
            variant: "warning",
            status: "Learning",
            desc:
              "Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.",
            links: [
              {
                text: "Official website",
                url: "https://laravel.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "nuxtjs",
          data: {
            title: "NuxtJs",
            icon: "NuxtJsIcon",
            color: "#41b883",
            variant: "warning",
            status: "Learning",
            desc:
              "Build your next Vue.js application with confidence using NuxtJS. An open source framework making web development simple and powerful.",
            links: [
              {
                text: "Official website",
                url: "https://nuxtjs.org/",
                external: true
              }
            ]
          }
        },
        {
          name: "graphql",
          data: {
            title: "GraphQL",
            icon: "GraphQlIcon",
            color: "#e535ab",
            variant: "warning",
            status: "Learning",
            desc:
              "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.",
            links: [
              {
                text: "Official website",
                url: "https://graphql.org/",
                external: true
              }
            ]
          }
        },
        {
          name: "react",
          data: {
            title: "React",
            icon: "ReactIcon",
            color: "#61DBFB",
            variant: "info",
            status: "Planned",
            desc:
              "A JavaScript library for building user interfaces.",
            links: [
              {
                text: "Official website",
                url: "https://reactjs.org/",
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

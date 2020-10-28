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
          <h2
            class="text-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none md:text-3xl"
          >
            I know a lot of technologies and tools
          </h2>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          >
            From Git to Vue.js through Bootstrap or Unreal Engine, I have
            knowledge in many areas
          </p>
        </div>
        <h3
          class="text-xl tracking-tight leading-10 font-bold text-gray-900 sm:leading-none md:text-2xl mb-4"
        >
          The ones I know
        </h3>
        <div class="flex flex-wrap justify-center -m-4 mb-10 lg:mb-24">
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
        <h3
          class="text-xl tracking-tight leading-10 font-bold text-gray-900 sm:leading-none md:text-2xl mb-4"
        >
          The ones I want to learn
        </h3>
        <div class="flex flex-wrap justify-center -m-4">
          <Skill
            v-for="tech in futureTechnologies"
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
          name: "ue4",
          data: {
            title: "Unreal Engine",
            icon: "UnrealEngineIcon",
            color: "#000",
            variant: "success",
            status: "Good knowledge",
            desc:
              "The Unreal Engine is a game engine developed by Epic Games. Written in C++, its features a high degree of portability, supporting a wide range of platforms.",
            links: [
              {
                text: "Official website",
                url: "https://www.unrealengine.com/en-US/",
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
            status: "Learning at highschool",
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
          name: "nuxtjs",
          data: {
            title: "NuxtJs",
            icon: "NuxtJsIcon",
            color: "#41b883",
            variant: "warning",
            status: "Learning",
            desc:
              "NuxtJs, built on top of Vue.js, is an open source framework making web development simple and powerful.",
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
          name: "git",
          data: {
            title: "Git",
            icon: "GitIcon",
            color: "#F1502F",
            variant: "info",
            status: "Used",
            desc:
              "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.",
            links: [
              {
                text: "Official website",
                url: "https://git-scm.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "bitbucket",
          data: {
            title: "Bitbucket",
            icon: "BitbucketIcon",
            color: "#0D54C3",
            variant: "info",
            status: "Used",
            desc:
              "Bitbucket is a web-based version control repository hosting service owned by Atlassian, for source code and development projects that use either Mercurial or Git revision control systems.",
            links: [
              {
                text: "Official website",
                url: "https://bitbucket.org/",
                external: true
              }
            ]
          }
        },
        {
          name: "trello",
          data: {
            title: "Trello",
            icon: "TrelloIcon",
            color: "#007BCB",
            variant: "info",
            status: "Used",
            desc:
              "Trello is a web-based Kanban-style list-making application which is a subsidiary of Atlassian.",
            links: [
              {
                text: "Official website",
                url: "https://trello.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "jekyll",
          data: {
            title: "Jekyll",
            icon: "JekyllIcon",
            color: "#c90000",
            variant: "info",
            status: "Tried",
            desc:
              "Jekyll is a simple, blog-aware, static site generator for personal, project, or organization sites written in Ruby.",
            links: [
              {
                text: "Official website",
                url: "https://jekyllrb.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "vscode",
          data: {
            title: "Visual Studio Code",
            icon: "VisualStudioCodeIcon",
            color: "#22a6f1",
            variant: "info",
            status: "Used",
            desc:
              "Visual Studio Code is a free source-code editor. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.",
            links: [
              {
                text: "Official website",
                url: "https://code.visualstudio.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "sketchup",
          data: {
            title: "Sketchup",
            icon: "SketchUpIcon",
            color: "#f7162c",
            variant: "success",
            status: "Learned at college",
            desc:
              "SketchUp is a 3D modeling computer program for a wide range of drawing applications such as architectural, interior design, landscape architecture, civil and mechanical engineering, film and video game design.",
            links: [
              {
                text: "Official website",
                url: "https://www.sketchup.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "office",
          data: {
            title: "Microsoft Office",
            icon: "MicrosoftOfficeIcon",
            color: "#DC3E15",
            variant: "info",
            status: "Used",
            desc:
              "Microsoft Office is a family of client software, server software, and services. Includes Outlook, OneDrive, Word, Excel, PowerPoint, OneNote, SharePoint, Teams, and Yammer.",
            links: [
              {
                text: "Official website",
                url: "https://www.office.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "photoshop",
          data: {
            title: "Photoshop",
            icon: "AdobePhotoshopIcon",
            color: "#001d34",
            variant: "success",
            status: "Basic knowledge",
            desc:
              "Adobe Photoshop is a raster graphics editor.",
            links: [
              {
                text: "Official website",
                url: "https://www.adobe.com/products/photoshop.html",
                external: true
              }
            ]
          }
        },
        {
          name: "musescore",
          data: {
            title: "Musescore",
            icon: "MuseScoreIcon",
            color: "#1f74bd",
            variant: "success",
            status: "Basic knowledge",
            desc:
              "MuseScore is a scorewriter supporting a wide variety of file formats and input methods.",
            links: [
              {
                text: "Official website",
                url: "https://musescore.org/",
                external: true
              }
            ]
          }
        }
      ],
      futureTechnologies: [
        {
          name: "react",
          data: {
            title: "React",
            icon: "ReactIcon",
            color: "#61DBFB",
            variant: "info",
            status: "Planned",
            desc: "A JavaScript library for building user interfaces.",
            links: [
              {
                text: "Official website",
                url: "https://reactjs.org/",
                external: true
              }
            ]
          }
        },
        {
          name: "nodejs",
          data: {
            title: "Node.js",
            icon: "NodeJsIcon",
            color: "#3C873A",
            variant: "info",
            status: "Planned",
            desc:
              "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
            links: [
              {
                text: "Official website",
                url: "https://nodejs.org/",
                external: true
              }
            ]
          }
        },
        {
          name: "docker",
          data: {
            title: "Docker",
            icon: "DockerIcon",
            color: "#0091e2",
            variant: "info",
            status: "Planned",
            desc:
              "Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.",
            links: [
              {
                text: "Official website",
                url: "https://nodejs.org/",
                external: true
              }
            ]
          }
        },
        {
          name: "electron",
          data: {
            title: "Electron",
            icon: "ElectronIcon",
            color: "#2f3241",
            variant: "info",
            status: "Planned",
            desc:
              "Electron allows for the development of desktop GUI applications using web technologies: it combines the Chromium rendering engine and the Node.js runtime.",
            links: [
              {
                text: "Official website",
                url: "https://www.electronjs.org/",
                external: true
              }
            ]
          }
        },
        {
          name: "rubyonrails",
          data: {
            title: "Ruby on Rails",
            icon: "RubyOnRailsIcon",
            color: "#cc0000",
            variant: "info",
            status: "Planned",
            desc:
              "Ruby on Rails is a server-side web application framework written in Ruby that encourages and facilitates the use of web standards such as JSON or XML for data transfer and HTML, CSS and JavaScript for user interfacing.",
            links: [
              {
                text: "Official website",
                url: "https://rubyonrails.org/",
                external: true
              }
            ]
          }
        },
        {
          name: "django",
          data: {
            title: "Django",
            icon: "DjangoIcon",
            color: "#004d40",
            variant: "info",
            status: "Planned",
            desc:
              "Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.",
            links: [
              {
                text: "Official website",
                url: "https://www.djangoproject.com/",
                external: true
              }
            ]
          }
        },
        {
          name: "c++",
          data: {
            title: "C++",
            icon: "CPlusPlusIcon",
            color: "#2B538F",
            variant: "info",
            status: "Planned",
            desc:
              "C++ was designed with a bias toward system programming and embedded, resource-constrained software and large systems, with performance, efficiency, and flexibility of use as its design highlights but it has been found useful in many other contexts.",
            links: [
              {
                text: "Official website",
                url: "https://isocpp.org/",
                external: true
              }
            ]
          }
        },
        {
          name: "java",
          data: {
            title: "Java",
            icon: "JavaIcon",
            color: "#EB2D2F",
            variant: "info",
            status: "Planned",
            desc:
              "Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere.",
            links: [
              {
                text: "Official website",
                url: "https://www.java.com/",
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

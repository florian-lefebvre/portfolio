<template>
  <div>
    <div class="relative bg-white overflow-hidden shadow-lg">
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
    <section class="bg-teal-200 text-teal-600 body-font shadow-lg">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full flex-col items-center text-center">
          <h2
            class="text-2xl tracking-tight leading-10 font-extrabold text-teal-900 sm:leading-none md:text-3xl"
          >
            I know a lot of technologies and tools
          </h2>
          <p
            class="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 mb-4"
          >
            From Git to Vue.js through Bootstrap or Unreal Engine, I have
            knowledge in many areas
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-10 h-10 animate-bounce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
        </div>
      </div>
    </section>
    <div class="flex flex-col-reverse sm:flex-row">
      <section
        class="text-gray-700 body-font w-full md:w-2/3 max-h-screen-1/2 sm:max-h-screen overflow-y-auto"
      >
        <div class="container px-5 py-10 mx-auto">
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
              v-on:set-current-skill="currentSkill = tech"
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
              v-on:set-current-skill="currentSkill = tech"
            />
          </div>
        </div>
      </section>
      <section
        class="w-full md:w-1/3 h-screen-1/2 overflow-y-auto sm:h-screen bg-gray-200"
      >
        <div class="container px-5 py-10 mx-auto h-full">
          <SkillZoom :skill="currentSkill" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home"
  },
  data() {
    return {
      currentSkill: null,
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
            url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
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
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
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
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
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
            url: "https://sass-lang.com/"
          }
        },
        {
          name: "php",
          data: {
            title: "PHP",
            icon: "PhpIcon",
            color: "#474A8A",
            variant: "success",
            status: "Good knowledge",
            desc:
              "PHP is a general-purpose scripting language especially suited to web development.",
            url: "https://www.php.net/"
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
            url: "https://www.mysql.com/"
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
            url: "https://tailwindcss.com/"
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
            url: "https://getbootstrap.com/"
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
            url: "https://www.unrealengine.com/en-US/"
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
            url: "https://www.python.org/"
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
            url: "https://vuejs.org/"
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
            url: "https://nuxtjs.org/"
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
            url: "https://laravel.com/"
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
            url: "https://graphql.org/"
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
            url: "https://git-scm.com/"
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
            url: "https://bitbucket.org/"
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
            url: "https://trello.com/"
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
            url: "https://jekyllrb.com/"
          }
        },
        {
          name: "vscode",
          data: {
            title: "VS Code",
            icon: "VisualStudioCodeIcon",
            color: "#22a6f1",
            variant: "info",
            status: "Used",
            desc:
              "Visual Studio Code is a free source-code editor. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.",
            url: "https://code.visualstudio.com/"
          }
        },
        {
          name: "sketchup",
          data: {
            title: "Sketchup",
            icon: "SketchUpIcon",
            color: "#f7162c",
            variant: "success",
            status: "Learned at secondary school",
            desc:
              "SketchUp is a 3D modeling computer program for a wide range of drawing applications such as architectural, interior design, landscape architecture, civil and mechanical engineering, film and video game design.",
            url: "https://www.sketchup.com/"
          }
        },
        {
          name: "office",
          data: {
            title: "Office",
            icon: "MicrosoftOfficeIcon",
            color: "#DC3E15",
            variant: "info",
            status: "Used",
            desc:
              "Microsoft Office is a family of client software, server software, and services. Includes Outlook, OneDrive, Word, Excel, PowerPoint, OneNote, SharePoint, Teams, and Yammer.",
            url: "https://www.office.com/"
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
            desc: "Adobe Photoshop is a raster graphics editor.",
            url: "https://www.adobe.com/products/photoshop.html"
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
            url: "https://musescore.org/"
          }
        }
      ],
      futureTechnologies: [
        {
          name: "flutter",
          data: {
            title: "Flutter",
            icon: "FlutterIcon",
            color: "#1389FD",
            variant: "info",
            status: "Planned",
            desc:
              "Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
            url: "https://flutter.dev/"
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
            desc: "A JavaScript library for building user interfaces.",
            url: "https://reactjs.org/"
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
            url: "https://nodejs.org/"
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
            url: "https://nodejs.org/"
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
            url: "https://www.electronjs.org/"
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
            url: "https://rubyonrails.org/"
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
            url: "https://www.djangoproject.com/"
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
            url: "https://isocpp.org/"
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
            url: "https://www.java.com/"
          }
        }
      ]
    };
  }
};
</script>

<style></style>

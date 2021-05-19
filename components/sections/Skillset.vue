<template>
  <Section>
    <SectionsTitle title="Techs..." />
    <div
      class="grid grid-cols-2 gap-6 mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6"
    >
      <SectionsSkillsetPopper
        v-for="(e, i) in skills"
        :key="i"
        :popperContent="e.text"
      >
        <XyzConflict
          xyz="delay-8 small fade stagger-2 ease-out-back"
          class="flex justify-center px-6 py-8 transition-all transform cursor-default md:py-10 rounded-2xl card-color"
          endClass="md:hover:-translate-y-2"
        >
          <Icon
            :iconSlug="e.icon"
            :title="e.title ? e.title : null"
            textClasses="text-lg font-semibold text-center mt-auto"
          />
        </XyzConflict>
      </SectionsSkillsetPopper>
    </div>
    <div class="mb-12">
      <h3
        class="mb-6 text-4xl font-extrabold leading-8 tracking-tight xyz-nested"
        xyz="fade left-1 delay-25 duration-10"
      >
        ...tools...
      </h3>
      <div
        class="grid grid-cols-2 gap-6 mb-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        <SectionsSkillsetPopper
          v-for="(e, i) in tools"
          :key="i"
          :popperContent="e.text"
        >
          <XyzConflict
            xyz="delay-30 small fade stagger-2 ease-out-back"
            class="flex justify-center px-4 py-6 transition-all transform cursor-default md:py-6 rounded-2xl card-color"
            endClass="md:hover:-translate-y-2"
          >
            <Icon
              :iconSlug="e.icon"
              :title="e.title ? e.title : null"
              textClasses="font-normal text-center mt-auto"
            />
          </XyzConflict>
        </SectionsSkillsetPopper>
      </div>
    </div>
    <div>
      <h3
        class="mb-6 text-4xl font-extrabold leading-8 tracking-tight xyz-nested"
        style="--xyz-delay: 4s;"
        xyz="fade left-1 delay duration-10"
      >
        ...and what's next
      </h3>
      <div
        class="grid grid-cols-2 gap-6 mb-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        <SectionsSkillsetPopper
          v-for="(e, i) in next"
          :key="i"
          :popperContent="e.text"
        >
          <XyzConflict
            xyz="delay small fade stagger-2 ease-out-back"
            class="flex justify-center px-4 py-6 transition-all transform cursor-default md:py-6 rounded-2xl card-color"
            style="--xyz-delay: 4.5s;"
            endClass="md:hover:-translate-y-2"
          >
            <Icon
              :iconSlug="e.icon"
              :title="e.title ? e.title : null"
              textClasses="font-normal text-center mt-auto"
            />
          </XyzConflict>
        </SectionsSkillsetPopper>
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
export default {
  data() {
    return {
      skills: [
        {
          icon: "html5",
          text:
            "HTML5 is a markup language used for structuring and presenting content on the World Wide Web."
        },
        {
          icon: "css3",
          text:
            "CSS is a style sheet language used for describing the presentation of a document written in HTML."
        },
        {
          icon: "javascript",
          text:
            "JavaScript is a programming language that allows the implementation of complex mechanisms on a web page."
        },
        {
          icon: "typescript",
          text:
            "TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions."
        },
        {
          icon: "vue.js",
          text:
            "Vue is a progressive front-end javascript framework for building user interfaces."
        },
        {
          icon: "nuxt.js",
          text:
            "Nuxt.js is a free and open source web application framework based on Vue.js, Node.js, Webpack and Babel.js (inspired by Next.js)."
        },
        {
          icon: "tailwindcss",
          text:
            "Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup."
        },
        {
          icon: "graphql",
          text:
            "GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data."
        },
        {
          icon: "strapi",
          text:
            "Strapi is the leading open-source headless CMS. It’s 100% Javascript, fully customizable and developer-first."
        },
        {
          icon: "node.js",
          text:
            "Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser."
        },
        {
          icon: "electron",
          text:
            "Electron allows for the development of desktop GUI applications using web technologies: it combines the Chromium rendering engine and the Node.js runtime."
        }
      ],
      tools: [
        {
          icon: "figma",
          text:
            "Figma is a vector graphics editor and an online collaborative prototyping tool."
        },
        {
          icon: "visualstudiocode",
          text:
            "Visual Studio Code is a free source-code editor. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.",
          title: "VS Code"
        },
        {
          icon: "git",
          text:
            "Git is a distributed version-control system for tracking changes in source code during software development."
        },
        {
          icon: "github",
          text:
            "GitHub is a web service for hosting and managing software development, using the Git version control software."
        },
        {
          icon: "gitlab",
          text:
            "GitLab is a free git-based forge software offering wiki functionality, a bug tracking system, continuous integration and continuous delivery."
        },
        {
          icon: "vercel",
          text:
            "​Vercel is a deployment and collaboration platform for frontend developers."
        }
      ],
      next: [
        {
          icon: "laravel",
          text:
            "Laravel is an open source MVC PHP web framework intended for the development of web applications."
        },
        {
          icon: "supabase",
          text:
            "Supabase is the open source Firebase alternative. It features Postgres database, authentication, instant APIs, realtime subscriptions and storage."
        },
        {
          icon: "flutter",
          text:
            "Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. In Dart."
        },
        {
          icon: "dart",
          text:
            "Dart is a client-optimized language for fast apps on any platform"
        },
        {
          icon: "docker",
          text:
            "Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers."
        },
        {
          icon: "socket.io",
          text:
            "Socket.IO enables real-time, bidirectional and event-based communication."
        },
        {
          icon: "jest",
          text:
            "Jest is a quality JavaScript testing framework that focuses on simplicity."
        }
      ]
    };
  }
};
</script>

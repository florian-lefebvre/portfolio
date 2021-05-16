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
        <Icon
          :iconSlug="e"
          textClasses="text-lg font-semibold text-center mt-auto"
        />
      </XyzConflict>
    </div>
    <div class="mb-12">
      <h3
        class="mb-6 text-4xl font-extrabold leading-8 tracking-tight xyz-nested"
        xyz="fade left-1 delay-25 duration-10"
      >
        Tools
      </h3>
      <div
        class="grid grid-cols-2 gap-6 mb-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        <XyzConflict
          v-for="(e, i) in tools"
          :key="i"
          xyz="delay-30 small-1 fade stagger-2 ease-out-back"
          class="flex justify-center px-4 py-6 transition-all transform cursor-default md:py-6 rounded-2xl card-color"
          endClass="md:hover:-translate-y-2"
        >
          <Icon :iconSlug="e" textClasses="font-light text-center mt-auto" />
        </XyzConflict>
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
        <XyzConflict
          v-for="(e, i) in next"
          :key="i"
          xyz="delay small-1 fade stagger-2 ease-out-back"
          class="flex justify-center px-4 py-6 transition-all transform cursor-default md:py-6 rounded-2xl card-color"
          style="--xyz-delay: 4.5s;"
          endClass="md:hover:-translate-y-2"
        >
          <Icon :iconSlug="e" textClasses="font-light text-center mt-auto" />
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
export default {
  data() {
    return {
      skills: [
        "html5",
        "css3",
        "javascript",
        "typescript",
        "vue.js",
        "nuxt.js",
        "tailwindcss",
        "graphql",
        "strapi",
        "electron"
      ],
      tools: ["figma", "visualstudiocode", "git", "vercel", "github", "gitlab"],
      next: [
        "laravel",
        "supabase",
        "flutter",
        "dart",
        "docker",
        "socket.io",
        "jest"
      ]
    };
  }
};
</script>

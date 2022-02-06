<template>
  <div>
    <Container class="py-16 md:py-20" v-for="e in 3">
      <div class="">
        <h1
          class="mb-8 max-w-lg text-5xl text-white md:mb-12 md:max-w-none md:text-7xl"
        >
          Another
          <span
            class="block bg-gradient-to-tr from-primary-600 to-secondary-400 bg-clip-text font-semibold text-transparent md:inline-block"
            >section</span
          >
        </h1>
        <div class="max-w-3xl text-gray-200 md:text-lg">
          <p class="mb-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            maxime libero officiis iusto provident eum, facere labore beatae
            recusandae optio cum. Minima in modi ea culpa eum, hic
            necessitatibus neque.
          </p>
        </div>
        <div class="block">
          <nuxt-link
            to="/projects"
            class="inline-flex rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400 px-6 py-2 font-medium text-white transition-all duration-300 hover:scale-95"
          >
            Learn more
          </nuxt-link>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
useSeo({
  title: "Projects",
});
</script>

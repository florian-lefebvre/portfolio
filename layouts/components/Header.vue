<template>
  <header class="h-20 fixed bg-gray-100 container z-10">
    <div
      class="flex h-full items-center px-5 w-full border-b border-gray-300"
    >
      <div
        class="h-10 mr-2 md:mr-6 bg-purple-600 text-purple-100 rounded-full p-1 shadow-lg transform hover:scale-125 transition ease-out duration-150"
      >
        <nuxt-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </nuxt-link>
      </div>
      <nav class="headerNav sm:flex sm:items-center sm:h-full">
        <nuxt-link to="/" exact-active-class="active">Home</nuxt-link>
        <nuxt-link to="/work" exact-active-class="active">Work</nuxt-link>
        <nuxt-link to="/about" exact-active-class="active">About</nuxt-link>
        <nuxt-link to="/articles" exact-active-class="active">Articles</nuxt-link>
        <nuxt-link to="/contact" exact-active-class="active">Contact</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
.headerNav a {
  @apply p-2 text-gray-700 uppercase transition ease-out duration-150;
  &.active {
    @apply text-purple-900 font-medium;
    &:hover {
      @apply text-purple-600;
    }
  }
  &:hover {
    @apply text-purple-500;
  }

  @media (min-width: 768px) {
    @apply p-6;
  }
}
</style>

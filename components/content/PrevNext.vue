<template>
  <div class="container px-5 mb-10 mx-auto">
    <div class="py-6 flex justify-between text-lg">
      <span class="shadow-sm rounded-md" v-if="prev">
        <nuxt-link
          :to="prev.path"
          type="button"
          class="w-full flex items-center justify-center px-6 py-2 border-2 border-transparent text-base leading-6 font-semibold rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {{ prev.title }}
        </nuxt-link>
      </span>
      <span v-else></span>
      <span class="shadow-sm rounded-md" v-if="next">
        <nuxt-link
          :to="next.path"
          type="button"
          class="w-full flex items-center justify-center px-6 py-2 border-2 border-transparent text-base leading-6 font-semibold rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out"
        >
          {{ next.title }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </nuxt-link>
      </span>
      <span v-else></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: null
    },
    next: {
      type: Object,
      default: null
    }
  }
};
</script>

<style></style>

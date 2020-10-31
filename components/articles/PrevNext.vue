<template>
  <div class="container px-5 mx-auto">
    <hr />
    <div class="py-6 flex justify-between text-lg">
      <nuxt-link
        v-if="prev"
        :to="prev.path"
        class="flex font-bold hover:underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
        {{ prev.title }}
      </nuxt-link>
      <span v-else>&nbsp;</span>
      <nuxt-link v-if="next" :to="next.path" class="flex font-bold hover:underline">
        {{ next.title }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      </nuxt-link>
      <span v-else>&nbsp;</span>
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

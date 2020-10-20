<template>
  <div>
    <a
      v-if="external"
      :href="url"
      class="inline-flex items-center hover:opacity-75"
      target="_blank"
      rel="noopener noreferrer"
      >{{ text
      }}<svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path></svg
    ></a>
    <nuxt-link
      v-else
      :to="url"
      class="inline-flex items-center hover:opacity-75"
      >{{ text }}
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-4 h-4 ml-2"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path></svg
    ></nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Link",
  props: {
    text: String,
    url: String,
    external: Boolean
  }
};
</script>

<style></style>

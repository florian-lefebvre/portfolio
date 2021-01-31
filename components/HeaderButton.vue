<template>
  <component
    :is="external ? 'a' : 'button'"
    :href="external ? link : null"
    :target="external ? '_blank' : null"
    :rel="external ? 'noopener noreferrer' : null"
    @click="!external ? $emit('click') : null"
    class="hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full p-1 transition duration-150 ease-in-out focus:outline-none"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    external: Boolean,
    link: String
  }
};
</script>

<style></style>

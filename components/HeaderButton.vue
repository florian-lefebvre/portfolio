<template>
  <component
    :is="external ? 'a' : 'button'"
    :href="external ? link : null"
    :target="external ? '_blank' : null"
    :rel="external ? 'noopener noreferrer' : null"
    @click="!external ? $emit('click') : null"
    :aria-label="label"
    class="hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-2 transition-colors duration-150 ease-in-out focus:outline-none"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    external: Boolean,
    link: String,
    label: String
  }
};
</script>

<style></style>

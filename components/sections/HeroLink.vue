<template>
  <component
    :is="external ? 'a' : 'button'"
    :href="external ? link : null"
    :target="external ? '_blank' : null"
    :rel="external ? 'noopener noreferrer' : null"
    @click="!external ? $emit('click') : null"
    :aria-label="label"
    class="opacity-75 hover:opacity-100 rounded-full p-2 transition-opacity duration-150 ease-in-out focus:outline-none xyz-nested wrapper"
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

<style>
.wrapper svg {
  @apply w-6 h-6 md:w-10 md:h-10;
}
</style>

<template>
  <a
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="aria"
    class="mr-2 bg-teal-300 rounded-full shadow p-2 text-teal-800 border-2 border-transparent hover:border-teal-200 hover:text-teal-200 hover:bg-transparent hover:shadow-none transition duration-150"
  >
    <div class="w-5 h-5">
      <slot />
    </div>
  </a>
</template>

<script>
export default {
  props: ["url", "aria"]
};
</script>

<style></style>

<template>
  <div>
    <div class="">Home</div>
    <button
      type="button"
      class="px-6 py-2 font-medium text-white duration-300 bg-gradient-to-tr from-primary-600 to-secondary-400 rounded-full transition-all hover:scale-95 focus:outline-none"
    >
      Learn more
    </button>
  </div>
</template>

<script lang="ts">
import useSeo from "~~/composables/useSeo";

export default {
  scrollToTop: true,
};
</script>

<script setup lang="ts">
useSeo({
  title: "Home",
});
</script>

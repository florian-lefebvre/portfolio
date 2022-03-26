<template>
  <transition
    enter-active-class="duration-200 ease-out"
    enter-from-class="scale-95 opacity-0"
    enter-to-class="scale-100 opacity-100"
    leave-active-class="duration-100 ease-in"
    leave-from-class="scale-100 opacity-100"
    leave-to-class="scale-95 opacity-0"
  >
    <button
      v-show="!top"
      type="button"
      class="bg-gradient fixed right-4 bottom-4 z-10 rounded-full p-3 text-white shadow-md transition-all duration-300 hover:scale-95"
      @click="scrollToTop()"
      :aria-label="$t('global.accessibility.backToTop')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </transition>
</template>

<script setup lang="ts">
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
const top = ref<boolean>();
useWindowEventListener("scroll", () => (top.value = window.scrollY < 300));
</script>

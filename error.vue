<template>
  <transition name="page">
    <div
      class="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-gray-900 to-gray-800 px-4 py-16"
    >
      <div
        class="absolute inset-0 z-0 bg-[url(https://snippets.alexandru.so/grid.svg)] opacity-60"
      ></div>
      <div class="z-10 flex flex-col items-center">
        <h1
          class="title bg-gradient text-gradient !mb-0 !text-7xl font-semibold md:!text-9xl"
        >
          {{ error.statusCode }}
        </h1>
        <h2 class="mb-12 text-lg text-gray-200 md:text-xl">
          {{ error.statusMessage }}
        </h2>
        <button
          type="button"
          class="button-primary space-x-2"
          @click="handleError"
        >
          <ArrowSmLeftIcon class="-ml-1 h-6 w-6" />
          <span>Home page</span>
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ArrowSmLeftIcon } from "@heroicons/vue/outline";
const props = defineProps({
  error: Object,
});

useSeo({
  title: `Error ${props.error.statusCode}`,
  description: `An error occured: ${props.error.statusMessage}`,
});

const handleError = () => {
  clearError({ redirect: "/" });
};
</script>

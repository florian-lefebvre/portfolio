<template>
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
    <div
      v-for="(e, i) in technologies"
      class="flex flex-col items-center justify-center rounded-lg bg-gray-800 p-6 text-white"
      v-motion
      :initial="{
        opacity: 0,
        y: 20,
      }"
      :visible="{
        opacity: 1,
        y: 0,
        transition: {
          duration: 500,
          delay: i * 50,
        },
      }"
    >
      <Icon :icon="e" class="h-12 w-12" />
      <div class="mt-2 text-center font-semibold sm:text-xl">
        {{ e.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Icon as I } from "~/types";

defineProps({
  technologies: {
    type: Array as PropType<I[]>,
    required: true,
  },
});
</script>

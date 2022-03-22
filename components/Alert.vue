<template>
  <div
    class="bg-gradient mb-10 flex shrink-0 items-center rounded-lg py-2 px-4 text-white sm:inline-flex"
  >
    <InformationCircleIcon class="mr-6 h-8 w-8 flex-shrink-0" />
    <div>
      <div class="mr-4 text-lg font-bold">{{ title ?? "Information" }}</div>
      <div><slot /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { InformationCircleIcon } from "@heroicons/vue/outline";
defineProps<{ title?: string }>();
</script>

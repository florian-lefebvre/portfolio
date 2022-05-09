<template>
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    :fill="monochrome ? 'currentColor' : icon.color"
  >
    <title>{{ icon.title }}</title>
    <path :d="icon.path" />
  </svg>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Icon } from "~/types";

defineProps({
  icon: {
    type: Object as PropType<Icon>,
    required: true,
  },
  monochrome: {
    type: Boolean,
    default: false,
  },
});
</script>

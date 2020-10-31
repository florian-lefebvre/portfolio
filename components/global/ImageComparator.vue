<template>
  <VueCompareImage
    :leftImage="`/img/articles/${leftimage}`"
    :rightImage="`/img/articles/${rightimage}`"
    :leftImageAlt="leftalt"
    :rightImageAlt="rightalt"
    :leftLabel="leftlabel"
    :rightLabel="rightlabel"
  />
</template>

<script>
import VueCompareImage from "vue-compare-image";
export default {
  components: {
    VueCompareImage
  },
  props: [
    "leftimage",
    "rightimage",
    "leftalt",
    "rightalt",
    "leftlabel",
    "rightlabel"
  ]
};
</script>

<style>
  .left-label,
  .right-label {
    @apply font-medium bg-gray-900 text-gray-100 rounded p-2 bg-opacity-50;
  }
</style>

<template>
  <div class="flex flex-col items-center space-y-2">
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      class="w-8 h-8 fill-current"
    >
      <title data-v-37dd54dc="">{{ icon.title }} icon</title>
      <path :d="icon.path"></path>
    </svg>
    <div :class="textClasses">{{ icon.title }}</div>
  </div>
</template>

<script>
import simpleIcons from "simple-icons";

export default {
  props: ["iconSlug", "textClasses"],
  computed: {
    icon() {
      const a = simpleIcons.get(this.iconSlug);
      console.log(this.iconSlug, a);
      return a;
    }
  }
};
</script>

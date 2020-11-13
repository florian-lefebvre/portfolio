<template>
  <div
    class="h-10 w-10 md:h-16 md:w-16 rounded-full bg-teal-100 shadow border-2 border-teal-700 inline-flex justify-center items-center"
    :class="index == 0 ? '' : '-ml-3 md:-ml-5'"
    :style="`color:${color}`" v-if="icon"
  >
    <component :is="icon" size="" class="h-5 w-5 md:w-8 md:h-8" fill="currentColor"></component>
  </div>
</template>

<script>
import knownTechnologies from "@/assets/data/skills/knownTechnologies.json";
import futureTechnologies from "@/assets/data/skills/futureTechnologies.json";
export default {
  data() {
    return {
      icon: null,
      color: null
    };
  },
  props: {
    tag: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  mounted() {
    var tech = null;
    if (knownTechnologies.find(tech => tech.name == this.tag)) {
      tech = knownTechnologies.find(tech => tech.name == this.tag);
    } else if (futureTechnologies.find(tech => tech.name == this.tag)) {
      tech = futureTechnologies.find(tech => tech.name == this.tag);
    }
    if (tech !== null) {
      this.icon = tech.data.icon;
      this.color = tech.data.color;
    }
  }
};
</script>

<style></style>

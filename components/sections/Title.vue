<template>
  <h2 class="title xyz-nested" xyz="fade left-1 stagger-1">
    <div
      v-for="(e, i) in title.split('')"
      :key="i"
      class="xyz-nested"
      v-html="e"
    ></div>
  </h2>
</template>

<script>
export default {
    props: ["title"]
};
</script>

<style></style>

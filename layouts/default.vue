<template>
  <PageLayout />
</template>

<script>
import PageLayout from "./components/PageLayout";

export default {
  components: {
    PageLayout
  }
};
</script>

<style lang="scss">
html {
  @apply bg-white;
}
button,
a {
  &:focus {
    @apply outline-none;
  }
}
</style>

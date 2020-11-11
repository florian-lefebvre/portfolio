<template>
  <silent-box :gallery="gallery"></silent-box>
</template>

<script>
export default {
  props: {
    gallery: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
#silentbox-gallery {
  @apply rounded-lg;
}
.silentbox-item {
  @apply shadow-xl rounded-lg;
  display: block !important;
  img {
    @apply rounded-lg;
  }
}
</style>

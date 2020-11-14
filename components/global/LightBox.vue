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

#silentbox-overlay__embed {
  width: 95% !important;
  @media (min-width: 768px) {
    width: 75% !important;
  }
}
</style>

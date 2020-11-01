<template>
  <silent-box
        :gallery="gallery"
      ></silent-box>
</template>

<script>
export default {
    props: {
        gallery: {
            type: Array
        }
    }
}
</script>

<style>
    .silentbox-item img {
        @apply rounded;
    }
</style>
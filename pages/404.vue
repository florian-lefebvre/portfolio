<template>
  <Error404 />
</template>

<script>
export default defineComponent({
  setup() {
    if (process.server) {
      const nuxtApp = useNuxtApp();
      const error = new Error();
      error.statusCode = 404;
      nuxtApp.ssrContext.nuxt.error = error;
    }
  },
});
</script>

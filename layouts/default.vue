<template>
  <div
    class="min-h-screen flex flex-col container bg-gray-100 mx-auto overflow-x-hidden shadow-2xl"
  >
    <!-- <nav class="h-24 bg-red-500 mb-6"></nav> -->
    <Header />
    <transition name="page">
      <Nuxt class="mt-20" />
      <!-- <Nuxt class="m-5 mt-32 md:mx-16 xl:mx-24" /> -->
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
html {
  @apply bg-purple-600;
}
button,
a {
  &:focus {
    @apply outline-none;
  }
}
</style>

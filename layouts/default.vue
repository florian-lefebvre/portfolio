<template>
<PageLayout>
  <template #sidebar>
    <SideBar />
  </template>
  <template #content>
    <Nuxt />
  </template>
  <template #footer>
    <Footer />
  </template>
</PageLayout>
  <!-- <div
    class="min-h-screen flex flex-col container bg-gray-100 mx-auto overflow-x-hidden shadow-2xl"
  >
    <nav class="h-24 bg-red-500 mb-6"></nav>
    <Header />
    <transition name="page">
      <Nuxt class="mt-20" />
      <Nuxt class="m-5 mt-32 md:mx-16 xl:mx-24" />
    </transition>
    <Footer />
  </div> -->
  
</template>

<script>
import PageLayout from "./components/PageLayout";
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer";

export default {
  components: {
    PageLayout,
    SideBar,
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

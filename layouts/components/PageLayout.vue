<template>
  <div class="min-h-screen flex flex-col md:flex-row text-teal-900">
    <MobileMenuToggle />
    <SideBar />
    <div class="w-full lg:ml-64">
      <transition name="page">
        <Nuxt />
      </transition>
    </div>
  </div>
</template>

<script>
import MobileMenuToggle from "../components/SideBar/MobileMenuToggle";
import SideBar from "../components/SideBar/SideBar";

export default {
  components: {
    MobileMenuToggle,
    SideBar
  }
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  @apply transition duration-500 ease-in-out;
}

.page-from,
.leave-from {
  @apply opacity-100;
}

.page-enter,
.page-leave {
  @apply opacity-0;
}
</style>

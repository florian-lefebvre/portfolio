<template>
  <div class="min-h-screen flex flex-col md:flex-row text-teal-900 overflow-x-hidden">
    <MobileMenuToggle />
    <SideBar />
    <div class="w-full lg:ml-64">
      <transition
        enter-active-class="transition ease-in-out duration-500"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in-out duration-500"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
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

<style></style>

<template>
  <div class="min-h-screen flex flex-col md:flex-row text-teal-900">
    <!--  flex-col container bg-gray-100 mx-auto overflow-x-hidden shadow-2xl -->
    <div class="w-full md:w-3/12 lg:w-2/12">
      <slot name="sidebar" />
    </div>
    <div class="w-full md:w-9/12 lg:w-10/12">
      <transition name="page">
        <slot name="content" />
      </transition>
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease-in-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>

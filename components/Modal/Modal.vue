<template>
  <div class="z-50 min-h-screen top-0 left-0 w-screen fixed">
    <div class="lg:ml-64 h-screen relative">
      <div class="bg-black opacity-75 w-full h-full"></div>
      <div
        class="flex justify-center items-center h-full absolute top-0 left-0 w-full"
      >
        <div
          class="bg-gray-200 rounded-xl shadow-xl w-full ml-4 mr-8 lg:ml-8 lg:mr-12"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

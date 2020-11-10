<template>
  <div class="min-h-screen top-0 left-0 w-screen fixed">
    <div class="lg:ml-64 h-screen relative z-50">
      <div class="bg-black opacity-75 w-full h-full"></div>
      <div
        class="flex justify-center items-center h-full absolute top-0 left-0 w-full"
      >
        <div
          class="bg-gray-200 rounded-xl shadow-xl max-w-full ml-4 mr-8 lg:ml-8 lg:mr-12 overflow-y-auto"
          style="width:800px;max-height:90vh;"
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

<template>
  <div class="min-h-screen top-0 left-0 w-screen fixed">
    <div class="lg:ml-64 h-screen relative z-50">
      <div class="bg-black opacity-75 w-full h-full"></div>
      <div
        class="flex justify-center items-center h-full absolute top-0 left-0 w-full"
      >
        <div
          class="bg-gray-200 rounded-xl shadow-xl max-w-full ml-4 mr-8 lg:ml-8 lg:mr-12 relative"
          style="width:800px;"
        >
          <button
            type="button"
            @click="$emit('close')"
            class="transform hover:scale-125 transition ease-out duration-100 ml-auto absolute top-0 right-0 mr-5 mt-5 z-20 bg-gray-300 hover:shadow rounded-full h-8 w-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5 mx-auto my-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div class="overflow-y-auto" style="max-height:90vh;">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

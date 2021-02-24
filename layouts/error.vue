<template>
  <div
    class="flex flex-col items-center justify-center w-screen h-screen text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-800"
  >
    <div class="max-w-screen-xl px-5">
      <div class="text-center">
        <h2
          class="text-5xl font-extrabold leading-10 tracking-tight sm:leading-none sm:text-6xl md:text-7xl lg:text-9xl"
        >
          Error {{ error.statusCode }}
        </h2>
        <p
          class="mt-3 text-base opacity-75 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:text-3xl"
        >
          Something went wrong...
        </p>
        <div class="flex justify-center mt-5 sm:mt-8">
          <div class="rounded-md shadow-xl">
            <nuxt-link
              to="/"
              class="flex items-center justify-center w-full px-8 py-3 text-base font-semibold leading-6 text-white transition-colors bg-red-600 rounded-md hover:bg-red-700 focus:outline-none md:py-4 md:text-lg md:px-10"
            >
              Back to a safe area
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<style></style>

<template>
  <div class="h-full flex flex-col justify-center py-24 bg-red-300">
    <h1
      class="text-center text-6xl font-extrabold leading-none mb-4 tracking-tight text-red-600"
    >
      Error {{ error.statusCode }}
    </h1>
    <h1
      class="text-center text-3xl font-medium leading-none mb-10 tracking-tight text-red-600"
    >
      Oops! An error occured
    </h1>
    <div class="flex justify-center mt-6">
      <div class="inline-flex rounded-md shadow">
        <nuxt-link
          to="/"
          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          Home
        </nuxt-link>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <button
          @click="$router.back()"
          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-red-600 bg-white hover:text-red-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          Previous page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

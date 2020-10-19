<template>
  <div class="flex flex-col items-center py-24">
    <h1 class="text-center text-6xl font-bold leading-none mt-auto mb-6 tracking-tight">
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500"
      >
        Error {{ error.statusCode }}
      </span>
    </h1>
    <h1 class="text-center text-3xl font-medium leading-none mt-auto mb-6 tracking-tight">
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500"
      >
        An error occured
      </span>
    </h1>
    <div class="flex justify-center mt-6">
      <nuxt-link to="/" class="mr-2 px-6 py-2 bg-red-500 rounded text-red-100 hover:bg-red-700 shadow font-medium uppercase">Home</nuxt-link>
      <button @click="$router.back()" class="px-6 py-2 border-red-500 border-2 rounded text-red-500 hover:bg-red-500 hover:text-red-100 shadow font-medium uppercase">Previous page</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

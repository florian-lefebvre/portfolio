<template>
  <header class="bg-teal-700 shadow-inner">
    <div class="container px-5 py-32 pb-64 mx-auto text-center">
      <div class="flex justify-between items-center flex-wrap">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="pt-15 font-bold text-4xl text-white text-left">
            {{ title }}
          </h1>
          <div class="h-1 w-20 bg-teal-500 rounded mt-2"></div>
        </div>
        <div class="flex items-center flex-wrap">
          <span class="shadow-sm rounded-md mr-4">
            <nuxt-link
              :to="`${folder}/tags`"
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent leading-5 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              All tags
            </nuxt-link>
          </span>
          <SearchInput :directory="folder" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["title", "folder"]
};
</script>

<style></style>

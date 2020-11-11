<template>
  <header class="bg-teal-700 shadow-inner">
    <div
      class="container px-5 pt-24 pb-48 lg:pt-32 lg:pb-64 mx-auto text-center"
    >
      <div class="flex justify-between items-center flex-wrap">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="font-bold text-4xl text-white text-left">
            {{ title }}
          </h1>
          <div class="h-1 w-20 bg-teal-500 rounded mt-2"></div>
        </div>
        <div class="flex items-center flex-wrap">
          <div class="rounded-md shadow-md mr-4">
            <nuxt-link
              :to="url"
              class="w-full flex items-center justify-center px-6 py-2 border-2 border-transparent text-base leading-6 font-semibold rounded-md text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal transition duration-150 ease-in-out"
            >
              {{ text }}
            </nuxt-link>
          </div>
          <SearchInput :directory="folder" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ["title", "folder", "text", "url"]
};
</script>

<style></style>

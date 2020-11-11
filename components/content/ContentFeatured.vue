<template>
  <nuxt-link
    :to="featured.path"
    class="flex flex-col lg:flex-row relative"
    style="min-height:400px"
  >
    <span
      class="absolute top-0 left-0 mt-1 ml-1 rounded-md uppercase px-2 py-1 text font-semibold shadow"
      :class="featured.variant"
      >{{ featured.status }}</span
    >
    <img
      class="w-full lg:w-64 xl:w-1/3 object-cover object-center rounded-t-lg lg:rounded-l-lg lg:rounded-none"
      :src="`/img/work/${featured.img}`"
      :alt="featured.alt"
    />
    <div class="p-10 flex flex-col">
      <span
        class="tracking-widest uppercase title-font font-semibold flex flex-wrap"
      >
        <nuxt-link
          v-for="(tag, index) in featured.tags"
          :key="index"
          :to="`/${folder}/tags/${tag}`"
          class="hover:bg-teal-500 bg-teal-400 text-teal-100 p-1 text-sm rounded font-bold shadow mb-1 mr-1 transition duration-100 ease-out"
          >#{{ tag }}
        </nuxt-link>
      </span>
      <h2 class="text-4xl font-semibold mb-2">
        {{ featured.title }}
      </h2>
      <p class="leading-7 mb-6 text-gray-700">{{ featured.desc }}</p>
      <span class="mt-auto text-gray-700"
        >{{ featured.createdAt }} • {{ featured.readingTime }}</span
      >
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    featured: {
      type: Object
    }
  }
};
</script>

<style></style>

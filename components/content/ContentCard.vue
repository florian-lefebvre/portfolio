<template>
  <nuxt-link
    class="p-4 md:w-1/2 lg:w-1/3 transform hover:scale-95 transition duration-150 ease-out flex flex-col"
    :to="el.path"
  >
    <div class="h-full rounded-lg overflow-hidden relative shadow bg-white flex flex-col">
      <span
        class="absolute top-0 left-0 mt-1 ml-1 rounded-md uppercase px-2 py-1 text-xs font-semibold shadow"
        :class="el.variant"
        >{{ el.status }}</span
      >
      <img
        class="lg:h-48 md:h-36 w-full object-cover object-center"
        :src="`/img/work/${el.img}`"
        :alt="el.alt"
      />
      <div class="p-6 flex flex-col h-full">
        <span
          class="tracking-widest uppercase title-font font-semibold flex flex-wrap"
        >
          <nuxt-link
            v-for="(tag, index) in el.tags"
            :key="index"
            :to="`/${folder}/tags/${tag}`"
            class="hover:bg-teal-500 bg-teal-400 text-teal-100 p-1 text-xs rounded font-bold shadow mb-1 mr-1 transition duration-100 ease-out"
            >#{{ tag }}
          </nuxt-link>
        </span>
        <h2 class="text-2xl font-semibold mb-2">
          {{ el.title }}
        </h2>
        <p class="leading-7 mb-6 text-gray-700">{{ el.desc }}</p>
        <div class="mt-auto text-gray-700 text-sm flex justify-between">
          <span>{{ el.createdAt }}</span>
          <span>{{ el.readingTime }}</span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    el: {
      type: Object
    },
    folder: {
        type: String
    }
  }
};
</script>

<style></style>

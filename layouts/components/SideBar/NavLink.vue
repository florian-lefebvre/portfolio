<template>
  <div>
    <nuxt-link v-if="home"
      :to="url"
      class="block font-normal hover:font-medium rounded hover:bg-teal-300 hover:text-teal-800 hover:shadow focus:outline-none py-3 px-6 mb-1 transition duration-100 ease-out"
      exact-active-class="bg-teal-300 text-teal-800 font-semibold hover:font-semibold"
    >
      <div class="flex items-center">
        <div class="w-5 mr-2">
            <slot name="icon" />
        </div>
        <slot />
      </div>
    </nuxt-link>
    <nuxt-link v-else
      :to="url"
      class="block font-normal hover:font-medium rounded hover:bg-teal-300 hover:text-teal-800 hover:shadow focus:outline-none py-3 px-6 mb-1 transition duration-100 ease-out"
      active-class="bg-teal-300 text-teal-800 font-semibold hover:font-semibold"
    >
      <div class="flex items-center">
        <div class="w-5 mr-2">
            <slot name="icon" />
        </div>
        <slot />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
    props: {
      url: {
        type: String
      },
      home: {
        type: Boolean,
        default: false
      }
    }
};
</script>

<style></style>

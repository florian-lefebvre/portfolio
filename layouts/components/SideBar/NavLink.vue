<template>
  <nuxt-link
    :to="url"
    class="block font-normal hover:font-medium rounded hover:bg-teal-300 hover:text-teal-800 hover:shadow focus:outline-none py-3 px-6 mb-1 transition duration-100 ease-out"
  >
    <div class="flex items-center">
      <div class="w-5 mr-2">
          <slot name="icon" />
      </div>
      <slot />
    </div>
  </nuxt-link>
</template>

<script>
export default {
    props: ['url']
};
</script>

<style></style>

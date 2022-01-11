<template>
  <div>
    <Container class="py-24">
      <h1 class="mb-4 text-5xl text-white">
        Hi, I'm
        <span class="relative font-semibold">{{ fullName }}</span>
      </h1>
      <p class="max-w-xl text-gray-200 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod velit
        ullam ad in quam aut aliquam sed temporibus itaque, blanditiis error
        magnam nostrum iste obcaecati esse natus. Officia, provident quibusdam!
      </p>
      <button
        type="button"
        class="px-6 py-2 font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400 hover:scale-95 focus:outline-none"
      >
        Learn more
      </button>
    </Container>
  </div>
</template>

<script lang="ts">
import useSeo from "~~/composables/useSeo";

const { fullName } = useMe();

export default {
  scrollToTop: true,
};
</script>

<script setup lang="ts">
useSeo({
  title: "Home",
});
</script>

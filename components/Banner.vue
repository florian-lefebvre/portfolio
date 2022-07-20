<template>
  <NuxtLink
    to="https://war.ukraine.ua/"
    target="_blank"
    class="relative py-2 text-left text-white transition-all duration-300 hover:opacity-80 sm:text-center"
    tabindex="0"
  >
    <div class="absolute top-0 left-0 z-[1] h-1/2 w-full bg-[#0066cc]"></div>
    <div class="absolute top-1/2 left-0 z-[1] h-1/2 w-full bg-[#ffcc00]"></div>
    <!-- class="bg-gradient-to-tr from-primary-600 to-secondary-500 py-2 text-left text-white transition-all duration-300 hover:opacity-90 sm:text-center" -->
    <Container class="relative z-[2]">
      <div
        class="m-auto max-w-fit space-x-2 rounded-lg bg-gray-800 px-2 text-white"
      >
        <span>Stop war.</span>
        <span class="font-bold">How to help</span>
      </div>
      <!-- <span class="">French translation coming soon!</span> -->
      <!-- <span class="font-bold">Check out</span> -->
    </Container>
  </NuxtLink>
</template>

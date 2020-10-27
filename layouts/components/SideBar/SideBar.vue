<template>
  <div class="h-full bg-gray-100 fixed z-10 w-full md:w-3/12 lg:w-2/12 shadow-md">

                <div class="-mr-2 flex items-center md:hidden">
                <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" id="main-menu" aria-label="Main menu" aria-haspopup="true">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>


    <div class="flex flex-col h-full">
      <div class="my-auto">
        <div class="px-6 mb-4">
          <span
            class="block h-32 w-32 rounded-full overflow-hidden mx-auto shadow"
          >
            <img
              class="w-full object-cover"
              src="~/assets/img/avatar.png"
              alt="Profile photo"
            />
          </span>
        </div>
        <div class="mb-4">
          <h1 class="font-medium text-xl text-center">
            Florian
            <span class="bg-teal-600 text-teal-100 p-1 rounded">LEFEBVRE</span>
          </h1>
        </div>
        <Nav />
        <div>
          <p class="px-8">
            Social medias
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav";
export default {
  components: {
    Nav
  }
};
</script>

<style></style>

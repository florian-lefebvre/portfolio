<template>
  <div
    class="h-full bg-teal-600 top-0 left-0 lg:translate-x-0 fixed block w-64 shadow-xl text-teal-100 transition transform duration-500 ease-out z-20 overflow-y-auto"
    :class="
      $store.state.device.sideBarOpen ? 'translate-x-0' : '-translate-x-64'
    "
  >
    <div class="flex flex-col h-full">
      <div class="my-auto py-4">
        <div class="mb-4 px-8">
          <h1 class="font-medium leading-none text-3xl text-white mb-2">
            {{ $store.state.infos.firstName }}
            <br />
            <span class="font-bold text-4xl">{{
              $store.state.infos.lastName
            }}</span>
          </h1>
        </div>
        <div class="mb-4 px-8">
          <h3 class="text-lg leading-8">
            <span
              class="text-teal-800 bg-teal-300 px-3 py-1 rounded font-medium shadow whitespace-no-wrap"
              >{{ $store.state.infos.job }}
            </span>
            <br />
            in {{ $store.state.infos.city }}, {{ $store.state.infos.country }}
          </h3>
        </div>
        <Nav />
        <SocialMedias />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav";
import SocialMedias from "./SocialMedias";
import Footer from "./Footer";

export default {
  components: {
    Nav,
    SocialMedias,
    Footer
  }
};
</script>

<style></style>

<template>
  <div class="flex items-center fixed z-50" style="top: 20px;">
    <button
      type="button"
      class="inline-flex items-center opacity-100 lg:opacity-0 justify-center p-2 rounded-r-md bg-teal-600 text-teal-100 shadow-lg hover:bg-teal-500 focus:outline-none transition transform duration-500 ease-out z-20"
      :class="
        $store.state.device.sideBarOpen ? 'translate-x-64' : 'translate-x-0'
      "
      @click.prevent="$store.commit('device/toggle')"
    >
      <svg
        class="h-6 w-6"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path v-if="!$store.state.device.sideBarOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

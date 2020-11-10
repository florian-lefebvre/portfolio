<template>
  <div>
    <form class="w-full max-w-sm">
      <div class="flex items-center border-b border-teal-500 py-2">
        <input
          v-model="searchQuery"
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search project by title"
          aria-label="Search project"
        />
        <button
          class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
          type="button"
          @click="searchQuery = ''"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </form>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        class="absolute mt-2 w-56 rounded-md shadow-lg z-10"
        v-if="elements.length"
      >
        <div class="rounded-md bg-white shadow-xs">
          <div
            class="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <nuxt-link
              v-for="element of elements"
              :key="element.slug"
              :to="element.path"
              class="truncate block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              role="menuitem"
              >{{ element.title }}</nuxt-link
            >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["directory"],
  data() {
    return {
      searchQuery: "",
      elements: []
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.elements = [];
        return;
      }
      this.elements = await this.$content(this.directory)
        .limit(6)
        .search(searchQuery)
        .fetch();
    }
  }
};
</script>

<style></style>

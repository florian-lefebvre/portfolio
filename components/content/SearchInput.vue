<template>
  <div class="mt-5 md:mt-auto">
    <form class="w-full max-w-sm" @submit.prevent>
      <div class="flex items-center py-2">
        <input
          v-model="searchQuery"
          class="appearance-none bg-transparent border-b border-teal-400 pb-2 w-full text-teal-200 placeholder-teal-400 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-teal-200 transition ease-out duration-200"
          type="text"
          placeholder="Search by title"
          aria-label="Search"
        />
        <button
          class="flex-shrink-0 border-transparent border-4 text-teal-400 hover:text-teal-200 text-sm py-1 px-2 rounded transform hover:scale-125 transition ease-out duration-100"
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
        <div class="rounded-md bg-teal-100 shadow-xs text-left truncate">
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
              class="truncate block px-4 py-2 text-sm leading-5 text-teal-800 hover:bg-teal-200 hover:text-teal-900 hover:font-semibold focus:outline-none focus:bg-teal-200 focus:text-teal-900 transition ease-out duration-150"
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
        .only(["title", "slug", "path"])
        .sortBy("createdAt", "asc")
        .limit(6)
        .search(searchQuery)
        .fetch();
    }
  }
};
</script>

<style></style>

<template>
  <div
    v-if="skill != null"
    class="fixed inset-0 z-50 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    @click="close"
  >
    <div
      class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75"
        aria-hidden="true"
      ></div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
      @click.stop
        class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-gray-300 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div
          class="px-4 pt-5 pb-4 bg-gray-300 dark:bg-gray-900 sm:p-6 sm:pb-4"
        >
          <div class="sm:flex sm:items-start">
            <div
              class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-gray-200 dark:bg-gray-800 rounded-full sm:mx-0 sm:h-10 sm:w-10"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 fill-current text-gray-800 dark:text-gray-300"
              >
                <path :d="icon.path"></path>
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
                id="modal-title"
              >
                {{ title }}
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-600 dark:text-gray-500">
                  {{ skill.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="px-4 py-3 bg-gray-200 dark:bg-gray-800 sm:px-6 sm:flex sm:flex-row-reverse"
        >
          <button
            type="button"
            @click="close"
            class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white dark:bg-gray-900 dark:text-gray-100 dark:border-gray-800 dark:hover:bg-opacity-75 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import simpleIcons from "simple-icons";

export default {
  props: {
    skill: Object
  },
  computed: {
    icon() {
      return simpleIcons.get(this.skill.icon);
    },
    title() {
      return this.skill.title ?? this.icon.title;
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

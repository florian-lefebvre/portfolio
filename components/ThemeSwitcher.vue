<template>
  <HeaderButton :external="false" @click="setCurrentTheme" label="Switch theme">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path
        v-if="$colorMode.preference === 'light'"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
      <path
        v-if="$colorMode.preference === 'dark'"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
      <path
        v-if="$colorMode.preference === 'system'"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  </HeaderButton>
</template>

<script>
export default {
  methods: {
    setCurrentTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === "system"
          ? "light"
          : this.$colorMode.preference === "light"
          ? "dark"
          : "system";
    }
  }
};
</script>

<style></style>

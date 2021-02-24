<template>
  <footer
    class="mt-6 text-gray-700 bg-gray-300 dark:bg-gray-700 dark:text-gray-300"
  >
    <div
      ref="container"
      class="container p-4 mx-auto space-y-2 text-sm font-medium tracking-wider text-center"
    >
      <div>&copy; Florian LEFEBVRE {{ new Date().getFullYear() }}</div>
      <div
        id="wcb"
        class="carbonbadge"
        :class="{
          'wcb-d': $colorMode.value === 'dark'
        }"
      ></div>
    </div>
  </footer>
</template>

<script>
export default {
  mounted() {
    let badgeScript = document.createElement("script");
    badgeScript.setAttribute(
      "src",
      "https://unpkg.com/website-carbon-badges@1.1.1/b.min.js"
    );
    badgeScript.setAttribute("defer", true);
    this.$refs.container.appendChild(badgeScript);
  }
};
</script>

<style></style>

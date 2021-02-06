<template>
  <div
    class="w-full min-h-screen text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-800 "
  >
    <Nuxt />
  </div>
</template>

<style>
.title {
  @apply mb-6 text-5xl font-extrabold leading-8 tracking-tight sm:text-6xl md:text-7xl inline-flex items-center;
}
::-webkit-scrollbar {
  @apply w-2;
}
::-webkit-scrollbar-thumb {
  @apply rounded-full border-2 border-gray-500 bg-gray-500 transition-colors;
}
::-webkit-scrollbar-thumb:hover {
  @apply border-gray-600 bg-gray-600 dark:bg-gray-400 dark:border-gray-400;
}
::-webkit-scrollbar-track {
  @apply bg-gray-300 dark:bg-gray-700;
}
</style>

<template>
  <div
    class="fixed inset-0 z-[999] flex flex-col items-center justify-center space-y-4 bg-gradient-to-tr from-gray-900 to-gray-800"
  >
    <div
      class="absolute inset-0 bg-[url(https://snippets.alexandru.so/grid.svg)] opacity-60"
    ></div>
    <svg
      class="h-16 w-16 animate-spin text-primary-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <div class="text-xl font-bold text-white">Loading...</div>
  </div>
</template>

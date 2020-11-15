<template>
  <div class="md:w-1/2 lg:w-1/3 w-full p-4">
    <div
      class="border border-gray-300 shadow rounded-md bg-white h-full flex flex-col"
    >
      <div class="animate-pulse flex flex-col">
        <div class="lg:h-48 md:h-36 h-48 bg-gray-400 rounded-t-md" />
        <div class="p-4">
          <div class="flex-1 space-y-4 py-1">
            <div class="flex space-x-2">
              <div
                class="h-4 w-10 bg-gray-400 rounded"
                v-for="index in randomIntFromInterval(1, 5)"
                :key="index"
              ></div>
            </div>
            <div
              class="h-6 bg-gray-400 rounded"
              :style="`width:${randomIntFromInterval(50, 90)}%;`"
            ></div>
            <div class="space-y-2">
              <div
                class="h-4 bg-gray-400 rounded"
                v-for="index in randomIntFromInterval(1, 3)"
                :key="index"
                :style="`width:${randomIntFromInterval(50, 90)}%;`"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }
};
</script>

<style></style>

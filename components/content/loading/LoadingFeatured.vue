<template>
  <div class="flex flex-col lg:flex-row relative" style="min-height:300px">
    <div
      class="border border-gray-300 shadow rounded-md bg-white h-full w-full flex flex-col"
    >
      <div class="animate-pulse flex flex-col md:flex-row h-full">
        <div
          class="w-full h-64 md:w-64 xl:w-1/3 rounded-t-lg lg:rounded-l-lg lg:rounded-none bg-gray-400"
        />
        <div class="p-8 w-full">
          <div class="flex-1 space-y-4 py-1">
            <div class="flex space-x-2">
              <div
                class="h-6 w-10 bg-gray-400 rounded"
                v-for="index in randomIntFromInterval(1, 5)"
                :key="index"
              ></div>
            </div>
            <div
              class="h-10 bg-gray-400 rounded"
              :style="`width:${randomIntFromInterval(50, 90)}%;`"
            ></div>
            <div class="space-y-2">
              <div
                class="h-5 bg-gray-400 rounded"
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

<template>
  <XyzTransition appear-visible duration="auto">
    <div
      class="flex flex-col items-center pt-16 pb-24 lg:h-screen lg:pb-0 lg:flex-row"
    >
      <div class="my-6 sm:my-10 lg:mb-0">
        <div
          class="text-5xl text-gray-900 sm:text-8xl lg:text-9xl dark:text-white xyz-nested"
        >
          <span
            class="inline-flex items-center xyz-nested"
            xyz="fade left-1 stagger-1"
          >
            <div
              v-for="(e, i) in 'Florian'.split('')"
              :key="i"
              class="xyz-nested"
              v-html="e"
            ></div>
          </span>
          <span class="block font-extrabold"
            ><div
              class="inline-flex items-center xyz-nested"
              xyz="fade down-1 stagger-2 delay-5"
            >
              <div
                v-for="(e, i) in 'LEFEBVRE'.split('')"
                :key="i"
                class="xyz-nested"
                v-html="e"
              ></div></div
          ></span>
        </div>
        <div
          class="text-2xl font-light sm:text-4xl lg:text-4xl xyz-nested"
          xyz="fade down-1 delay-20 duration-10"
        >
          Web developer since 2019
        </div>
      </div>
      <div
        class="w-64 h-64 mx-auto bg-gray-900 rounded-full shadow-xl dark:bg-white xyz-nested"
        xyz="fade small-5 duration-8 delay-10 ease-out-back"
      ></div>
    </div>
  </XyzTransition>
</template>

<script>
export default {};
</script>

<style></style>

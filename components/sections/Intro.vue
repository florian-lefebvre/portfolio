<template>
  <XyzTransition :appear-visible="{threshold: 0.5}" duration="auto">
    <div
      class="relative bg-gray-300 dark:bg-gray-900 p-10 -mt-10 rounded-3xl sm:text-lg lg:text-xl text-justify mb-12"
    >
      <p class="xyz-nested" xyz="fade duration-10">
        I am a French student who likes to program on his free time since 2018,
        when I discovered programming with Unreal Engine 4. In December 2019, I
        started web development and since then, I can't stop: Tailwind CSS,
        Vue.js, Laravel... I have already done several projects but I still have
        a lot to learn. Feel free to check my Github page and contact me!
      </p>
    </div>
  </XyzTransition>
</template>

<script>
export default {};
</script>

<style></style>

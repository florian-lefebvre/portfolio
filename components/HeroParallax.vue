<template>
  <div
    ref="container"
    class="relative transition-opacity ease-out pointer-events-none select-none duration-800"
    :class="{ 'opacity-0': hidden }"
  >
    <div
      ref="parallaxEl"
      data-speed="3"
      class="w-48 h-48 rounded-full bg-gradient-to-tr from-primary-600 to-secondary-400 shadow-md"
    ></div>
    <!-- <img
      ref="parallaxEl"
      data-speed="3"
      loading="lazy"
      :src="`https://nuxtjs.org/img/home/hero/gem-2.svg`"
      class=""
      alt="An image of a green gem from nuxt galaxy"
    /> -->
  </div>
</template>

<script setup lang="ts">
// https://github.com/nuxt/nuxtjs.org/blob/main/components/organisms/heroes/HeroParallax.vue
const container = ref<HTMLElement>();
const parallaxEl = ref<HTMLElement>();
const hidden = ref(true);

function parallax(e: MouseEvent): void {
  if (hidden.value) {
    hidden.value = false;
  }

  const el = parallaxEl.value;
  const speed = parseInt(el.getAttribute("data-speed"));
  const { x: elX, y: elY } = container.value.getBoundingClientRect();
  const x = (elX - e.pageX * speed) / 100;
  const y = (elY - e.pageY * speed) / 100;
  el.style.transform = `translate(${x}px, ${y}px)`;
}

if (process.client) {
  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    onMounted(() => {
      setTimeout(() => {
        hidden.value = false;
      }, 200);
    });
  } else {
    onMounted(() => window.addEventListener("mousemove", parallax));
    onBeforeUnmount(() => window.removeEventListener("mousemove", parallax));
  }
}
</script>

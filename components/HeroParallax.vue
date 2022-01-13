<template>
  <div
    ref="container"
    class="relative transition-opacity ease-out pointer-events-none select-none duration-800"
    :class="{ 'opacity-0': hidden }"
  >
    <img
      data-speed="3"
      src="/pp.jpg"
      alt="Profile picture"
      class="w-48 h-48 rounded-full shadow-md"
    />
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      data-speed="3.5"
      class="top-0 tech-el -left-16"
      style="--color: #00dc82"
    >
      <title>Nuxt</title>
      <path
        d="M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.487 0-.973.236-1.252.709L9.17 17.906c-.557.945.138 2.13 1.251 2.13h12.13c1.114 0 1.81-1.185 1.253-2.13l-6.067-10.31a1.437 1.437 0 0 0-1.252-.71z"
      ></path>
    </svg>
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      data-speed="2"
      class="top-0 tech-el left-36"
      style="--color: #4fc08d"
    >
      <title>Vue</title>
      <path
        d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"
      ></path>
    </svg>
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      data-speed="2"
      class="tech-el top-44 left-24"
      style="--color: #3178c6"
    >
      <title>Typescript</title>
      <path
        d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
      ></path>
    </svg>
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      data-speed="2"
      class="tech-el top-36 -left-8"
      style="--color: #06b6d4"
    >
      <title>Tailwind CSS</title>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
      ></path>
    </svg>
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      data-speed="1.5"
      class="tech-el -top-24 left-12"
      style="--color: #02569b"
    >
      <title>Flutter</title>
      <path
        d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"
      ></path>
    </svg>
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      data-speed="-1.5"
      class="tech-el top-48 -left-28"
      style="--color: #3ecf8e"
    >
      <title>Supabase</title>
      <path
        d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"
      ></path>
    </svg>
  </div>
</template>

<style scoped>
.tech-el {
  @apply absolute w-16 h-16 rounded-full bg-gray-700 shadow-md fill-current p-4 overflow-visible text-[color:var(--color)];
}
</style>

<script setup lang="ts">
// https://github.com/nuxt/nuxtjs.org/blob/main/components/organisms/heroes/HeroParallax.vue
const container = ref<HTMLElement>();
const hidden = ref(true);

function parallax(e: MouseEvent): void {
  const images = Array.from(container.value.children) as HTMLImageElement[];
  if (hidden.value) {
    hidden.value = false;
  }
  for (const el of images) {
    const speed = parseFloat(el.getAttribute("data-speed"));
    const { x: elX, y: elY } = container.value.getBoundingClientRect();
    const x = (elX - e.pageX * speed) / 100;
    const y = (elY - e.pageY * speed) / 100;
    el.style.transform = `translate(${x}px, ${y}px)`;
  }
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

<template>
  <div class="">
    <div class="flex h-96 items-center justify-center bg-gray-700">
      <div class="relative">
        <img
          src="/pp.jpg"
          alt="Profile picture"
          class="h-48 w-48 rounded-full shadow-md"
        />
        <div
          v-for="(e, i) in technologies"
          class="animate-atom absolute left-1/2 top-1/2 h-full w-full -translate-y-1/2 -translate-x-1/2"
          :style="style(i)"
        >
          <div
            class="animate-atom2 tech-el absolute -m-10 flex h-16 w-16 select-none items-center justify-center rounded-full bg-tertiary-500"
            :style="[
              style(i),
              {
                color: e.color,
              },
            ]"
          >
            <RenderJsx :render="e.node" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { h, VNode } from "vue-demi";

const technologies: {
  color: string;
  node: VNode;
}[] = [
  //   0,
  //   1,
  //   2,
  //   3,
  //   4,
  //   5,
  {
    color: "#00dc82",
    node: h(
      "svg",
      {
        role: "img",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24px",
        height: "24px",
        style: "color: currentColor",
      },
      [
        h("title", "Nuxt"),
        h("path", {
          d: "M9.078 3.965c-.588 0-1.177.289-1.514.867L.236 17.433c-.672 1.156.17 2.601 1.514 2.601h5.72a1.676 1.676 0 0 1-.35-2.117l5.547-9.513-2.076-3.572a1.734 1.734 0 0 0-1.513-.867zm7.407 2.922c-.487 0-.973.236-1.252.709L9.17 17.906c-.557.945.138 2.13 1.251 2.13h12.13c1.114 0 1.81-1.185 1.253-2.13l-6.067-10.31a1.437 1.437 0 0 0-1.252-.71z",
        }),
      ]
    ),
  },
];

const duration: number = 12;
const animation = (animationName: string): string =>
  `${animationName} ${duration}s infinite linear`;
const style = (index: number) => ({
  "animation-delay": `-${(duration / technologies.length) * index}s`,
});
</script>

<style>
@keyframes atom {
  0% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes atom2 {
  0% {
    transform: rotate(360deg);
  }
}
.animate-atom {
  animation: v-bind(animation("atom"));
}

.animate-atom2 {
  animation: v-bind(animation("atom2"));
}

.tech-el {
  @apply text-[color:var(--color)];
}
</style>

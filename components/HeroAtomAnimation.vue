<template>
  <div
    class="flex h-[330px] w-[330px] items-center justify-center"
    :class="mounted ? 'opacity-100' : 'opacity-0'"
  >
    <div class="relative flex items-center justify-center">
      <img
        src="/pp.jpg"
        alt="Profile picture"
        class="h-44 w-44 select-none rounded-full border-2 border-gray-700/50 shadow-md"
      />
      <div
        class="animate-atom3 absolute h-72 w-72 rounded-full border-2 border-dashed border-gray-600/80"
      ></div>
      <div
        class="animate-atom4 absolute h-60 w-60 rounded-full border-[3px] border-dashed border-primary-700/60"
      ></div>
      <div
        v-for="(e, i) in technologies"
        class="animate-atom absolute left-1/2 top-1/2 h-full w-48 -translate-y-1/2 -translate-x-1/2"
        :style="style(i)"
      >
        <div
          class="animate-atom2 absolute -m-8 flex h-14 w-14 select-none items-center justify-center rounded-full bg-gray-700 p-3.5 shadow"
          :style="style(i)"
        >
          <TechIcon :technology="e" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { technologies } from "~/data/technologies";

const mounted = ref(false);
onMounted(() => {
  mounted.value = true;
});

const duration: number = 12;
const animation = (animationName: string, d: number = duration): string =>
  `${animationName} ${d}s infinite linear`;
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

@keyframes atom4 {
  0% {
    transform: rotate(-360deg);
  }
}
.animate-atom {
  animation: v-bind(animation("atom"));
}

.animate-atom2 {
  animation: v-bind(animation("atom2"));
}

.animate-atom3 {
  animation: v-bind(animation("atom2", 16));
}

.animate-atom4 {
  animation: v-bind(animation("atom4", 22));
}
</style>

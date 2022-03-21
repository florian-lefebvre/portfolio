<template>
  <div>
    <div>
      <Swiper
        :slides-per-view="slidesPerView"
        :space-between="spaceBetween"
        @swiper="onSwiper"
      >
        <slot></slot>
      </Swiper>
    </div>
    <div class="mt-6 flex justify-between">
      <button
        type="button"
        @click="swiper?.slidePrev()"
        class="transition-all hover:scale-90"
        :class="beginning ? 'opacity-30 hover:scale-100' : ''"
        aria-label="Previous slide"
      >
        <ArrowNarrowLeftIcon class="h-8 w-8 text-white" />
      </button>
      <button
        type="button"
        @click="swiper?.slideNext()"
        class="transition-all hover:scale-90"
        :class="end ? 'opacity-30 hover:scale-100' : ''"
        aria-label="Next slide"
      >
        <ArrowNarrowRightIcon class="h-8 w-8 text-white" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper as S } from "swiper";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/vue/outline";
import { useMq } from "vue3-mq";

const mq = useMq();
const swiper = ref<S>(null);

const onSwiper = (s: S) => {
  swiper.value = s;
  setTimeout(() => {
    swiper.value.slideTo(1);
    swiper.value.slideTo(0);
  }, 1000);
};

const beginning = computed<boolean | undefined>(() => {
  return swiper.value?.isBeginning;
});

const end = computed<boolean | undefined>(() => {
  return swiper.value?.isEnd;
});

const slidesPerView = computed<number>(() => {
  switch (mq.current as string) {
    case "md":
      return 2;
    case "lg":
    case "xl":
    case "xxl":
      return 3;
    default:
      return 1;
  }
});

const spaceBetween = computed<number>(() => {
  switch (mq.current as string) {
    // case "lg":
    // case "xl":
    // case "xxl":
    //   return 48;
    default:
      return 24;
  }
});
</script>

<style>
.swiper-slide {
  height: auto;
}
</style>

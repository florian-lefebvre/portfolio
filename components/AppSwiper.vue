<template>
  <div>
    <div>
      <Swiper
        :slides-per-view="slidesPerView"
        :space-between="50"
        @swiper="onSwiper"
      >
        <slot></slot>
        <SwiperSlide
          v-for="i in 10"
          class="cursor-pointer rounded-lg bg-gray-700 p-2 text-white shadow"
          >Slide {{ i }}</SwiperSlide
        >
      </Swiper>
    </div>
    <div class="mt-6 flex justify-between">
      <button
        type="button"
        @click="swiper.slidePrev()"
        class="transition-transform hover:scale-90"
        :class="
          swiper?.isBeginning ?? false ? 'opacity-50 hover:scale-100' : ''
        "
      >
        <ArrowNarrowLeftIcon class="h-8 w-8 text-white" />
      </button>
      <button
        type="button"
        @click="swiper.slideNext()"
        class="transition-transform hover:scale-90"
        :class="swiper?.isEnd ?? false ? 'opacity-50 hover:scale-100' : ''"
      >
        <ArrowNarrowRightIcon class="h-8 w-8 text-white" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper as S } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/vue/outline";
import { PropType, Ref } from "nuxt3/dist/app/compat/vue-demi";
import { useMq } from "vue3-mq";
const mq = useMq();
const swiper = ref<S>(null);
const onSwiper = (s: S) => {
  swiper.value = s;
};

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

// const props = defineProps({
//     items: {
//         type: Array as PropType<String[]>
//     }
// });
</script>

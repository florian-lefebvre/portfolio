import { Swiper, SwiperSlide } from "swiper/vue";

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp
    .component("Swiper", Swiper)
    .component("SwiperSlide", SwiperSlide);
});

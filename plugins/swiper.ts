import consola from "consola";
import { Swiper, SwiperSlide } from "swiper/vue";

export default defineNuxtPlugin(async (nuxtApp) => {
  consola.info("[SWIPER] Registering components");
  nuxtApp.vueApp
    .component("Swiper", Swiper)
    .component("SwiperSlide", SwiperSlide);
});

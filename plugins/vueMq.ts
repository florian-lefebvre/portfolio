import consola from "consola";
import { Vue3Mq } from "vue3-mq";

export default defineNuxtPlugin((nuxtApp) => {
  consola.info("[VUE3-MQ] Setup plugin");
  nuxtApp.vueApp.use(Vue3Mq, {
    preset: "tailwind",
  });
});

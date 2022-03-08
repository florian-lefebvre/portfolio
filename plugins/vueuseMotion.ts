import {
  MotionPlugin,
  MotionPluginOptions,
  MotionVariants,
} from "@vueuse/motion";

const directives: Record<string, MotionVariants> = {};

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MotionPlugin, {
    directives,
  } as MotionPluginOptions);
});

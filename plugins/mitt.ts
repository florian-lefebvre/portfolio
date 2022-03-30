import mitt from "mitt";
import consola from "consola";

const emitter = mitt();

export default defineNuxtPlugin((nuxtApp) => {
  consola.info("[MITT] Setup plugin");
  return {
    provide: {
      bus: {
        on: emitter.on,
        emit: emitter.emit,
      },
    },
  };
});

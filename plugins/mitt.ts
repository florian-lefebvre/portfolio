import mitt from "mitt";

const emitter = mitt();

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      bus: {
        on: emitter.on,
        emit: emitter.emit,
      },
    },
  };
});

import mdit from "~/utils/mdit";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      mdit,
    },
  };
});

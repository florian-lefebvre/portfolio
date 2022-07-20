import Plausible from "plausible-tracker";

export default defineNuxtPlugin((nuxtApp) => {
  const { domain } = useRuntimeConfig().plausible;

  const plausible = Plausible({ domain });
  plausible.enableAutoPageviews();

  nuxtApp.vueApp.provide("plausible", plausible);
});

export default defineNuxtPlugin(({ $router }) => {
  $router.options.scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  };
});

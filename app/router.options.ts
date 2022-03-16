import type { RouterOptions } from "vue-router";

// https://router.vuejs.org/api/#routeroptions
export default <Partial<RouterOptions>>{
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
};

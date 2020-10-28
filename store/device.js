export const state = () => ({
  sideBarOpen: false
});

export const mutations = {
  toggle(state) {
    state.sideBarOpen = !state.sideBarOpen
  }
};

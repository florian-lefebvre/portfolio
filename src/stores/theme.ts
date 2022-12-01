import { action, map } from "nanostores";
import type { Theme } from "~/types";
import { sleep } from "~/utils";

const TRANSITION_DURATION = 1000;
const LOCAL_STORAGE_KEY = "theme";

const state = map<{
  running: boolean;
  theme: Theme;
}>({
  running: false,
  theme: "dark",
});

const apply = action(state, "apply", async (store, theme: Theme) => {
  store.setKey("theme", theme);
  localStorage.setItem(LOCAL_STORAGE_KEY, theme);
  store.setKey("running", true);

  await sleep(TRANSITION_DURATION / 4);

  const html = document.querySelector("html");
  if (theme === "light") {
    html?.classList.remove("dark");
  } else {
    html?.classList.add("dark");
  }

  await sleep((TRANSITION_DURATION * 3) / 4);

  store.setKey("running", false);
});

function get(): Theme {
  if (
    typeof localStorage !== "undefined" &&
    localStorage.getItem(LOCAL_STORAGE_KEY)
  ) {
    return localStorage.getItem(LOCAL_STORAGE_KEY) as Theme;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}

export async function toggle() {
  const { theme } = state.get();
  await apply(theme === "light" ? "dark" : "light");
}

export default {
  state,
  apply,
  get,
  toggle,
  TRANSITION_DURATION,
  LOCAL_STORAGE_KEY,
};

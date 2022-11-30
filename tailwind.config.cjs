function generateColors() {
  const _colors = ["primary", "neutral"];

  const output = {};

  function hsl(str) {
    return `hsl(${str}, <alpha-value>)`;
  }

  const PREFIX = "color";

  function colorValue(color, scale, variant) {
    return hsl(`var(--${PREFIX}-${color}-${variant}-${scale})`);
  }

  // auto
  for (const color of _colors) {
    const map = {};
    for (let i = 1; i <= 12; i++) {
      map[i] = colorValue(color, i, "auto");
    }
    output[color] = map;
  }

  // light
  for (const color of _colors) {
    const map = {};
    for (let i = 1; i <= 12; i++) {
      map[i] = colorValue(color, i, "light");
    }
    output[`${color}Light`] = map;
  }

  // auto
  for (const color of _colors) {
    const map = {};
    for (let i = 1; i <= 12; i++) {
      map[i] = colorValue(color, i, "dark");
    }
    output[`${color}Dark`] = map;
  }

  return output;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      ...generateColors(),
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Mona-Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};

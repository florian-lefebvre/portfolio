const colors = require("./node_modules/tailwindcss/colors");

module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
        secondary: colors.rose,
        tertiary: colors.amber,
        gray: colors.slate,
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ['DM Mono', 'monospace'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-invert-pre-bg": theme("colors.gray[900]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

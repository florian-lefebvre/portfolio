import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-subtle": "var(--color-bg-subtle)",
        border: "var(--color-border)",
        text: "var(--color-text)",
        "text-subtle": "var(--color-text-subtle)",
        gray: colors.zinc,
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

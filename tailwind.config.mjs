import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

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
        "primary-bg": "var(--color-primary-bg)",
        "primary-text": "var(--color-primary-text)",
        "primary-contrast": "var(--color-primary-contrast)",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [typography()],
};

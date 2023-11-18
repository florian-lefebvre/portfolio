import defaultTheme from "tailwindcss/defaultTheme";

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
        gray: {
          50: "#f6f7f6",
          100: "#e3e5e2",
          200: "#c7cac5",
          300: "#a3a7a1",
          400: "#898e87",
          500: "#646a62",
          600: "#4f544d",
          700: "#424540",
          800: "#363936",
          900: "#2f322f",
          950: "#191a19",
        },
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

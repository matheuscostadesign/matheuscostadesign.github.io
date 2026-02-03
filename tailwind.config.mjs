/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#7f5af0",
        secondary: "#5b2bec",
        tertiary: "#2cb67d",
        "text-primary": "#94a1b2",
        "text-post": "#d4d4d4",
        "gray-400": "#72757e",
        "gray-500": "#242629",
        "gray-600": "#1e2022",
        "gray-700": "#16161a",
        "gray-800": "#121216",
        white: "#fffffe",
        black: "#010101",
        "code-bg": "#15141b",
        "code-primary": "#a277ff",
        "code-secondary": "#f694ff",
        "code-tertiary": "#61ffca",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      fontSize: {
        base: "1.6rem",
      },
      borderRadius: {
        DEFAULT: "0.8rem",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
    },
  },
  plugins: [],
};

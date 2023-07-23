import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3xs": ".5rem",
        "2xs": ".65rem",
        "10xl": "10rem",
      },
      colors: {
        "light-salmon": "#ff9776",
        "medium-purple": "#8283da",
      },
      fontFamily: {
        serif: ["var(--font-giselle)"],
        sans: ["var(--font-gilroy)"],
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ".vertical-text": {
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        },
        ".no-scrollbar": {
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
} satisfies Config;

import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-salmon": "#ff9776",
        "medium-purple": "#8283da",
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
      });
    }),
  ],
} satisfies Config;

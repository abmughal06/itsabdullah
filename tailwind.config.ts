import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        clrOuterSpace: "#28373b",
        clrSteelBlue: "#4395a3",
        clrManhattan: "#f7ce8e",
        clrBlack:'#212121',
        clrHotCineman: "#FF6623",
        clrWhite: "#fefefe"
      }
    },
  },
  plugins: [],
};
export default config;

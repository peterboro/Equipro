import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0d2561",
          "navy-dark": "#081232",
          "navy-light": "#1a3a8c",
          red: "#c8102e",
          "red-dark": "#a00d24",
          "red-light": "#e8455f",
        },
      },
      fontFamily: {
        sans: ["'Poppins'", "sans-serif"],
        display: ["'Barlow Condensed'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

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
          navy: "#111827",
          "navy-dark": "#050505",
          "navy-light": "#374151",
          red: "#55b7e5",
          "red-dark": "#2f9ccc",
          "red-light": "#8fd4f1",
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

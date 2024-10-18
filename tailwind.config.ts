import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        tint: "#0C3040",
        'tint-alt': "#2FC5E1"
      },
      colors: {
        alt: '#D2F7FB',
        tint: "#0C3040",

      },
      borderColor: {
        'tint-alt': "#2FC5E1"
      }
    },
  },
  plugins: [],
};
export default config;

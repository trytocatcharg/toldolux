import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
  primary: {
    50: '#eef6ff',
    100: '#e0e9f4',
    200: '#ccd5e0',
    300: '#b0b8c3',
    400: '#9199a3',
    500: '#717881',
    600: '#565b62',
    700: '#42454a',
    800: '#313335',
    900: '#222221',
    950: '#100f0e'
  },
  orange: {
    50: '#ffc98b',
    100: '#ffb978',
    200: '#ffa25b',
    300: '#ff843a',
    400: '#f46719',
    500: '#c54b00',
    600: '#983700',
    700: '#702e0d',
    800: '#4a291b',
    900: '#202223',
    950: '#00121b'
  },        accent: {
          50: "#fff4ed",
          100: "#ffe6d5",
          200: "#ffc9aa",
          300: "#ffa174",
          400: "#ff6d3b",
          500: "#fa501e",
          600: "#eb3712",
          700: "#c2260e",
          800: "#9a2013",
          900: "#7c1e12",
          950: "#430b05",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

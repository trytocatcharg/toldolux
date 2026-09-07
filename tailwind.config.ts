import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
					50: "#eef6ff",
					100: "#e0e9f4",
					200: "#ccd5e0",
					300: "#b0b8c3",
					400: "#9199a3",
					500: "#717881",
					600: "#565b62",
					700: "#42454a",
					800: "#313335",
					900: "#222221",
					950: "#100f0e",
				},
				orange: {
					50: "#fff5eb",
					100: "#ffe6d0",
					200: "#ffcda1",
					300: "#ffab68",
					400: "#fb8a2e",
					500: "#fa6400", // brand orange: header background in the orange theme
					600: "#d45400",
					700: "#b04600",
					750: "#9d3e00", // between 700 and 800: nav links on the orange header
					800: "#8a3700",
					900: "#5c2500",
					950: "#2f1300",
				},
				accent: {
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
	plugins: [
		plugin(({ addVariant }) => {
			addVariant("orange", [".orange &", "&.orange"]);
		}),
	],
};
export default config;

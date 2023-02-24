const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#15A655",
				"primary-hover": "#13914b",
				"primary-darker": "#63AA2E",
				"primary-darker-2": "#1AB7AD",
				danger: "#A6151E",
				"dark-jungle": "#161B28",
				"vampire-black": "#08080B",
				"eerie-black": "#131722",
				"cadet-gray": "#919EAB",
				"cool-gray": "#9195A7",
				gunmetal: "#2A2F41",
				"dark-gunmetal": "#1C2131",
				crayola: "#313645",
				"metallic-brown": "#A65215",
				"metallic-silver": "#A2A8B6",
				citron: "#A8AA2E",
				blood: "#A61515",
				"chinese-bronze": "#BF8138",
				"chinese-black": "#0E111A",
				"violet-alt": "#7750F8",
				"light-silver": "#D9D9D9",
				"yankees-blue": "#21283B",
				charcoal: "#343B51",
				"electric-blue": "#596282",
				rhythm: "#737A92",
				"american-blue": "#3B4460",
			},
			borderRadius: {
				"4xl": "25px",
			},
			backdropBlur: {
				"4xl": "75px",
			},
			boxShadow: {
				default: "0px 10px 30px rgba(0, 0, 0, 0.2);",
				"mobile-menu": "0px 5px 10px 15px rgba(0, 0, 0, 0.05);",
				"glow-bottom": "0 11px 31px -11px #15a655",
				dropdown: "0px -1px 14px 4px rgba(0, 0, 0, 0.15)",
				tooltip: "0px 4px 4px rgba(0, 0, 0, 0.25);",
			},
			lineHeight: {
				tighter: "1.157",
			},
		},
		container: {
			center: true,
			screens: {
				"2xl": "1182px",
			},
		},
		screens: {
			xs: "375px",
			...defaultTheme.screens,
		},
	},
	plugins: [],
	darkMode: "class",
};

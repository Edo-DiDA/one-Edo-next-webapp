import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontWeight: {
        light: "400",
        medium: "500",
        bold: "600",
        xbold: "700",
      },
      fontSize: {
        xrs: ["0.75rem", { lineHeight: "1.125rem" }],
        xxs: ["0.875rem", { lineHeight: "1.375rem" }],
        xs: ["1rem", { lineHeight: "1.5rem" }],
        sm: ["1.125rem", { lineHeight: "1.75rem" }],
        md: ["1.5rem", { lineHeight: "1.75rem" }],
        lg: ["1.25rem", { lineHeight: "1.5rem" }],
        xl: ["3rem", { lineHeight: "3.625rem" }],
      },
      boxShadow: {
        news: "0px 1px 2px 0px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        neutral: {
          50: "#FAFAFA",
          100: "#F4F4F4",
          200: "#DEDEDE",
          300: "#C7C7C7",
          400: "#A7A7A7",
          500: "#909090",
          600: "#7A7A7A",
          700: "#595959",
          800: "#393939",
          900: "#222222",
        },
        primary: {
          50: "#DCF0E6",
          100: "#B4D7C6",
          200: "#95BBA9",
          300: "#66927C",
          400: "#46765F",
          500: "#275A41",
          600: "#1F4834",
          700: "#173627",
          800: "#16261D",
          900: "#08120D",
        },
        success: {
          50: "#EEF5E6",
          100: "#D9F2D2",
          200: "#AFD692",
          300: "#8DC670",
          400: "#6BA64D",
          500: "#4A8631",
          600: "#3B6D29",
          700: "#2D541F",
          800: "#1E3B15",
          900: "#10220B",
        },
        warning: {
          50: "#FFF7EB",
          500: "#F59E0B",
        },
        error: {
          50: "#FEE9E9",
          100: "#FDC7C7",
          200: "#FCA2A2",
          300: "#F96A6A",
          400: "#F84545",
          500: "#F62020",
          600: "#C51A1A",
          700: "#941313",
          800: "#6D0D0D",
          900: "#311606",
        },
      },
    },
    plugins: [],
  },
};
export default config;

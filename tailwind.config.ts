import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        background: "var(--background)",
        foreground: "var(--foreground)",
        neutral: {
          50: "#FAFAFA",
          100: "#F4F4F4",
          700: "#595959",
          800: "#393939",
          900: "#222222",
        },
        button: {
          primary: "#275A41",
        },
      },
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
        xs: ["1rem", { lineHeight: "1.5rem" }],
        sm: ["1.125rem", { lineHeight: "1.75rem" }],
        md: ["1.5rem", { lineHeight: "1.75rem" }],
        lg: ["1.25rem", { lineHeight: "1.5rem" }],
        xl: ["3rem", { lineHeight: "3.625rem" }],
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: {
        light: "#aabcf7",
        main: "#5050db",
        dark: "#37379c",
      },
      secondary: {
        light: "#a6ee68",
        main: "#4c9e12",
        dark: "#326014",
      },
      info: {
        light: "#75ddeb",
        main: "#1887a2",
        dark: "#1aa7c0",
      },
      success: {
        light: "#91e4a5",
        main: "#259440",
        dark: "#1f5c2e",
      },
      error: {
        light: "#f2afb4",
        main: "#c9354f",
        dark: "#8e233c",
      },
      background: {
        default: "#F9F9F9",
        paper: "#fff",
      },
      text: {
        primary: "#595B5C",
        secondary: "#8F9193",
      },
    },
    fontSize: {
      sm: ["0.75rem", { lineHeight: "1rem" }],
      base: ["0.875rem", { lineHeight: "1.25rem" }],
      lg: ["1rem", { lineHeight: "1.5rem" }],
      xl: ["1.125rem", { lineHeight: "1.75rem" }],
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    extend: {},
  },
  plugins: [],
};

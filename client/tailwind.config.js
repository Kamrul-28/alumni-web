/** @type {import('tailwindcss').Config} */

import default_theme from "./src/themes/default";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: default_theme,
  plugins: [],
  corePlugins: { preflight: false },
};

import colors from "./colors";
import screens from "./screens";

export default {
  screens: screens,
  colors: colors,
  padding: {
    container: "30px",
    card: "20px",
  },
  gap: {
    section: "30px",
    card: "30px",
  },
  fontSize: {
    sm: ["0.75rem", { lineHeight: "0.875rem" }],
    base: ["0.875rem", { lineHeight: "1rem" }],
    md: ["1rem", { lineHeight: "1rem" }],
    lg: ["1.125rem", { lineHeight: "1rem" }],
    xl: ["1.5rem", { lineHeight: "1rem" }],
    xxl: ["2rem", { lineHeight: "1rem" }],
  },
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  extend: {},
};

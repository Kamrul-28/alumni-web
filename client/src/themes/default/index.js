import colors from "./colors";
import screens from "./screens";

export default {
  screens: screens,
  colors: colors,
  padding: {
    container: "30px",
    card: "20px",
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
};

import { defineTokens } from "@pandacss/dev";

export const shadows = defineTokens.shadows({
  xs: { value: "0 1px 2px rgba(0, 0, 0, 0.05)" },
  sm: { value: "0 1px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.05)" },
  md: { value: "0 4px 10px rgba(0, 0, 0, 0.1), 0 2px 5px rgba(0, 0, 0, 0.05)" },
  lg: { value: "0 10px 15px rgba(0, 0, 0, 0.1), 0 5px 5px rgba(0, 0, 0, 0.05)" },
  xl: { value: "0 15px 2px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.05)" },
  "2xl": { value: "0 25px 40px rgba(0, 0, 0, 0.2)" },
});

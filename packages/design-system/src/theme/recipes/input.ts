import { defineRecipe } from "@pandacss/dev";

export const input = defineRecipe({
  className: "input",
  base: {
    px: 3,
    py: 1.5,
    border: "1px solid {colors.border}",
    borderRadius: "sm",
  },
  variants: {
    error: {
      true: {
        color: "error.foreground",
        borderColor: "error.foreground",
        bg: "error.background",
      },
    },
  },
});

import { defineRecipe } from "@pandacss/dev";

export const formLabel = defineRecipe({
  className: "formLabel",
  base: {
    fontSize: "sm",
    fontWeight: "medium",
    lineHeight: "none",
  },
  variants: {
    required: {
      true: {
        _after: {
          content: '"*"',
          fontSize: "xs",
          position: "relative",
          left: 1,
        },
      },
    },
  },
});

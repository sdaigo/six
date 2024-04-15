import { defineRecipe } from "@pandacss/dev";

export const loader = defineRecipe({
  className: "loader",
  base: {
    animation: "spin 1s linear infinite",
  },
});

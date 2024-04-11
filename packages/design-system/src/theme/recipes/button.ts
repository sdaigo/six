import { defineRecipe } from "@pandacss/dev";

export const button = defineRecipe({
  className: "button",
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: 2,
    borderRadius: "sm",
    cursor: "pointer",
    fontWeight: "semibold",
    userSelect: "none",
    transition: "all {durations.normal} {easings.default}",
    _disabled: {
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      solid: {
        bg: "accent",
        border: "2px solid {colors.accent}",
        color: "accent.fg",
        _hover: {
          bg: "accent.emphasized",
        },
      },
      outline: {
        bg: "transparent",
        border: "2px solid {colors.accent}",
        color: "accent",
        _hover: {
          bg: "accent.fg",
        },
      },
    },
    size: {
      sm: {
        px: 2,
        fontSize: "sm",
      },
      md: {
        px: 2,
        py: 1,
        fontSize: "sm",
      },
      lg: {
        px: 4,
        py: 1.5,
        fontSize: "base",
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

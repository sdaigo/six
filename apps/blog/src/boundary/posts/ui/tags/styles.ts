import { css } from "@/styled-system/css";

export const tags = css({
  display: "flex",
  flexDir: "column",
  gap: 2,
});

export const title = css({
  px: 3,
  pb: 3,
  mb: 1,
  borderBottom: "1px solid {colors.border.emphasized}",
  color: "foreground.subtle",
  fontSize: "sm",
  fontWeight: "bold",
  lineHeight: "tight",
  textTransform: "uppercase",
  letterSpacing: "loose",
});

export const tag = css({
  py: 1,
  px: 3,
  transition: "background-color {durations.normal} {easings.in-out}",
  borderRadius: "lg",
  fontWeight: "medium",
  textTransform: "capitalize",
  _hover: {
    bg: "bg.emphasized",
  },
});

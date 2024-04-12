import { css } from "@/styled-system/css";

export const container = css({
  maxWidth: "4xl",
  mt: 8,
  mb: 20,
});

export const header = css({
  py: 8,
  borderBottom: "1px solid {colors.border.emphasized}",
});

export const title = css({
  fontSize: "xl",
  fontWeight: "bold",
  lineHeight: "tight",
  mb: 2,
});

export const description = css({
  fontSize: "md",
  color: "foreground.subtle",
});

export const meta = css({
  mt: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

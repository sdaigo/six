import { css } from "@/styled-system/css";

export const container = css({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  minH: "28vh",
});

export const figure = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const divider = css({
  border: "none",
});

export const summary = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const description = css({
  color: "foreground.subtle",
});

export const title = css({
  fontWeight: "bold",
  fontSize: "xl",
});

export const footer = css({
  display: "flex",
  gap: 1,
  color: "foreground.subtle",
});

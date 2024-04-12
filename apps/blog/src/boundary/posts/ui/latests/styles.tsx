import { css } from "@/styled-system/css";

export const grid = css({
  lg: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gridColumnGap: 8,
    gridRowGap: 4,
  },
});

export const linkWrapper = css({
  display: "flex",
  flexDirection: "column",
  gap: 2,
});

export const title = css({
  mb: 2,
  fontSize: "md",
  fontWeight: "bold",
  lineHeight: "tight",
});

export const description = css({
  fontSize: "base",
  color: "foreground.subtle",
});

export const divider = css({
  border: "none",
});

export const footnote = css({
  fontSize: "sm",
  color: "foreground.subtle",
});

import { css } from "@/styled-system/css";

export const section = css({
  my: 12,
});

export const layout = css({
  lg: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gridColumnGap: 4,
  },
});

export const posts = css({
  gridColumn: "1 / span 3",
});

export const aside = css({
  padding: 2,
});

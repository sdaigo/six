import { css } from "@/styled-system/css";

export const header = css({
  borderBottom: "1px solid {colors.border}",
});

export const container = css({
  py: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const title = css({
  textStyle: "h6",
});

import { defineTokens } from "@pandacss/dev";

export const zIndex = defineTokens.zIndex({
  hide: {
    value: -1,
  },
  base: {
    value: 0,
  },
  backdrop: {
    value: 1000,
  },
  sticky: {
    value: 1100,
  },
  modal: {
    value: 1200,
  },
  popover: {
    value: 1300,
  },
  toast: {
    value: 1400,
  },
  tooltip: {
    value: 1500,
  },
});

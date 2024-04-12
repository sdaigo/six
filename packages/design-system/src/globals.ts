import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  html: {
    lineHeight: 1.5,
    MozOsxFontSmoothing: "grayscale",
    textRendering: "optimizeLegibility",
    WebkitFontSmoothing: "antialiased",
    WebkitTextSizeAdjust: "100%",
    fontFamily: "sans",
  },
  body: {
    color: "foreground",
  },
  "*, *::before, *::after": {
    borderColor: "border",
    borderStyle: "solid",
    boxSizing: "border-box",
  },
  "*::placeholder": {
    opacity: 1,
    color: "foreground.subtle",
  },
});

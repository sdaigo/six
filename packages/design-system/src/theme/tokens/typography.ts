import { defineTokens } from "@pandacss/dev";
import preset from "@pandacss/preset-panda";

export const fontWeights = defineTokens.fontWeights({
  ...preset.theme.tokens.fontWeights,
});

export const letterSpacings = defineTokens.letterSpacings({
  ...preset.theme.tokens.letterSpacings,
});

export const lineHeights = defineTokens.lineHeights({
  ...preset.theme.tokens.lineHeights,
});

export const fonts = defineTokens.fonts({
  sans: {
    value: [
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
  },
  serif: {
    value: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
  },
  mono: {
    value: [
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace",
    ],
  },
});

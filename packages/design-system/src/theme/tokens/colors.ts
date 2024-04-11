import { defineTokens } from "@pandacss/dev";
import preset from "@pandacss/preset-panda";

export const colors = defineTokens.colors({
  ultra: {
    "50": { value: "#F4F4F5" },
    "100": { value: "#DEDEDF" },
    "200": { value: "#C8C8C9" },
    "300": { value: "#B2B3B3" },
    "400": { value: "#9C9D9D" },
    "500": { value: "#878788" },
    "600": { value: "#717172" },
    "700": { value: "#5B5B5C" },
    "800": { value: "#454646" },
    "900": { value: "#2F3030" },
    "950": { value: "#191A1A" },
  },
  black: preset.theme.tokens.colors.neutral["950"],
  white: { value: "#fff" },
  neutral: preset.theme.tokens.colors.neutral,
  blue: preset.theme.tokens.colors.blue,
  green: preset.theme.tokens.colors.green,
  red: preset.theme.tokens.colors.red,
  orange: preset.theme.tokens.colors.orange,
  transparent: { value: "rgb(0 0 0 / 0)" },
});

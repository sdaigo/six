import { defineTokens } from "@pandacss/dev";
import preset from "@pandacss/preset-panda";

export const animations = defineTokens.animations({
  ...preset.theme.tokens.animations,
  "skeleton-pulse": {
    value: "skeleton-pulse 2s ease-in-out infinite",
  },
});

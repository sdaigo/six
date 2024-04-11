import { defineTokens } from "@pandacss/dev";
import preset from "@pandacss/preset-panda";

export const sizes = defineTokens.sizes({
  ...preset.theme.tokens.sizes,
});

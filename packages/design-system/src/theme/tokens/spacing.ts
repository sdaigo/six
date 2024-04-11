import { defineTokens } from "@pandacss/dev";
import preset from "@pandacss/preset-panda";

export const spacing = defineTokens.spacing({
  ...preset.theme.tokens.spacing,
});

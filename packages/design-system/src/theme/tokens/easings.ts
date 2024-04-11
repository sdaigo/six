import { defineTokens } from "@pandacss/dev";
import preset from "@pandacss/preset-panda";

export const easings = defineTokens.easings({
  ...preset.theme.tokens.easings,
});

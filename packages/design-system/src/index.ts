import { definePreset } from "@pandacss/dev";

import { globalCss } from "./globals";
import { keyframes } from "./theme/keyframes";
import { recipes, slotRecipes } from "./theme/recipes";
import { semanticTokens } from "./theme/semantic-tokens";
import { textStyles } from "./theme/text-styles";
import { tokens } from "./theme/tokens";

const preset = definePreset({
  globalCss,
  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles,
      keyframes,
      recipes,
      slotRecipes,
    },
  },
});

export default preset;

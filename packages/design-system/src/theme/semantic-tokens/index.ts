import { defineSemanticTokens } from "@pandacss/dev";

import { colors } from "./colors";
import { fontSizes } from "./font-sizes";

export const semanticTokens = defineSemanticTokens({
  colors,
  fontSizes,
});

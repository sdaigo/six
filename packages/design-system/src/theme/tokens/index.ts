import { defineTokens } from "@pandacss/dev";

import { animations } from "./animations";
import { borders } from "./borders";
import { colors } from "./colors";
import { durations } from "./durations";
import { easings } from "./easings";
import { fontSizes } from "./font-sizes";
import { radii } from "./radii";
import { shadows } from "./shadows";
import { sizes } from "./sizes";
import { spacing } from "./spacing";
import { fontWeights, fonts, letterSpacings, lineHeights } from "./typography";
import { zIndex } from "./z-index";

export const tokens = defineTokens({
  animations,
  shadows,
  borders,
  colors,
  durations,
  easings,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  sizes,
  spacing,
  zIndex,
});

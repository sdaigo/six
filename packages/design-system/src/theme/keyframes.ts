import { defineKeyframes } from "@pandacss/dev";
import preset from "@pandacss/preset-panda";

export const keyframes = defineKeyframes({
  ...preset.theme.keyframes,
});

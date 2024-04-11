import { defineConfig } from "@pandacss/dev";
import preset from "@repo/design-system";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  presets: ["@pandacss/preset-base", preset],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // The output directory for your css system
  outdir: "styled-system",

  staticCss: {
    recipes: "*",
  },
});

import { defineConfig } from "@pandacss/dev";
import preset from "@repo/design-system";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  presets: ["@pandacss/preset-panda", preset],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});

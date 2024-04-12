import { defineConfig } from "@pandacss/dev";
import preset from "@repo/design-system";

import { globalStyles } from "@/boundary/foundations/globals";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  jsxFramework: "react",

  presets: ["@pandacss/preset-panda", preset],

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  globalCss: globalStyles,

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          cararra: { value: "#EEEFE9" },
          quill: { value: "#E0E1DB" },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: { value: "{colors.cararra}" },
            emphasized: { value: "{colors.quill}" },
          },
        },
      },
    },
  },

  patterns: {
    extend: {
      container: {
        defaultValues: {
          maxWidth: "7xl",
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});

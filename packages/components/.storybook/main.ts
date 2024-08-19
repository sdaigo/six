import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/stories/*.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
  core: {
    disableTelemetry: true,
  },
  // typescript: {
  //   reactDocgen: false,
  // },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths({ root: "../" })],
    });
  },
};

export default config;

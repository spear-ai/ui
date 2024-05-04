import path from "node:path";
import type { StorybookConfig } from "@storybook/nextjs";

const storybookConfig: StorybookConfig = {
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-themes",
  ],
  docs: {
    autodocs: "tag",
  },
  features: {
    experimentalRSC: true,
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  stories: ["../src/stories/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  webpackFinal: (webpackConfig) => {
    if (webpackConfig.resolve == null) {
      return webpackConfig;
    }

    return {
      ...webpackConfig,
      resolve: {
        ...webpackConfig.resolve,
        alias: {
          ...webpackConfig.resolve.alias,
          // eslint-disable-next-line unicorn/prefer-module
          "@": path.resolve(__dirname, "../src"),
        },
      },
    };
  },
};

export default storybookConfig;

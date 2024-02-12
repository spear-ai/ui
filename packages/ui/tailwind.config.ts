import { tailwindConfig as baseTailwindConfig } from "@spear-ai/tailwind-config";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const tailwindConfig: Config = {
  ...baseTailwindConfig,
  plugins: [
    ...(baseTailwindConfig.plugins ?? []),
    plugin(({ matchVariant }) => {
      matchVariant("is-product", (value) => `.is-product-${value}`, {
        values: {
          dfs: "dfs",
          forerunner: "forerunner",
          galapago: "galapago",
          underway: "underway",
        },
      });
    }),
    plugin(({ matchVariant }) => {
      matchVariant("product", (value) => `.is-product-${value} &, .is-product-${value}&`, {
        values: {
          dfs: "dfs",
          forerunner: "forerunner",
          galapago: "galapago",
          underway: "underway",
        },
      });
    }),
  ],
  safelist: ["is-product-dfs", "is-product-forerunner", "is-product-galapago", "is-product-underway"],
  theme: {
    ...baseTailwindConfig.theme,
    extend: {
      ...baseTailwindConfig.theme?.extend,
      themes: {
        dfs: {
          neutral: "sand",
        },
        forerunner: {
          primary: "gray",
        },
        galapago: {
          canvas: "gray",
          primary: "blue",
        },
        underway: {
          primary: "indigo",
        },
      },
    },
  },
};

export default tailwindConfig;

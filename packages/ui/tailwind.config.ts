import { tailwindConfig as baseTailwindConfig } from "@spear-ai/tailwind-config";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const tailwindConfig: Config = {
  ...baseTailwindConfig,
  plugins: [
    ...(baseTailwindConfig.plugins ?? []),
    plugin(({ matchVariant }) => {
      matchVariant("theme", (value) => `.theme-${value} &`, {
        values: {
          dfs: "dfs",
          forerunner: "forerunner",
          galapago: "galapago",
          underway: "underway",
        },
      });
    }),
  ],
  safelist: ["theme-dfs", "theme-forerunner", "theme-galapago", "theme-underway"],
  theme: {
    ...baseTailwindConfig.theme,
    extend: {
      ...baseTailwindConfig.theme?.extend,
      themes: {
        dfs: {
          canvas: "orange",
          neutral: "sand",
          primary: "sand",
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

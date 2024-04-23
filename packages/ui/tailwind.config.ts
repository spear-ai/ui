import { tailwindConfig as baseTailwindConfig } from "@spear-ai/tailwind-config";
import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  ...baseTailwindConfig,
  theme: {
    ...baseTailwindConfig.theme,
    extend: {
      ...baseTailwindConfig.theme?.extend,
      spacing: {
        ...baseTailwindConfig.theme?.extend?.space,
        "trigger-width": "var(--trigger-width)",
      },
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
          primaryDark: "green",
          primaryLight: "blue",
        },
        underway: {
          neutral: "mauve",
          primary: "iris",
        },
      },
    },
  },
};

export default tailwindConfig;

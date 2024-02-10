import { tailwindConfig as baseTailwindConfig } from "@spear-ai/tailwind-config";
import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  ...baseTailwindConfig,
  safelist: ["dfs", "forerunner", "galapago", "underway"],
  theme: {
    ...baseTailwindConfig.theme,
    extend: {
      ...baseTailwindConfig.theme?.extend,
      spacing: {
        ...baseTailwindConfig.theme?.extend?.spacing,
        "select-content-available-height": "var(--radix-select-content-available-height)",
      },
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

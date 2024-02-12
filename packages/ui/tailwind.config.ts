import { tailwindConfig as baseTailwindConfig } from "@spear-ai/tailwind-config";
import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  ...baseTailwindConfig,
  safelist: ["group/dfs", "group/forerunner", "group/galapago", "group/underway"],
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

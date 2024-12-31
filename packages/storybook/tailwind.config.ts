import { tailwindConfig as baseTailwindConfig } from "@spear-ai/tailwind-config";
import { tailwindContent } from "@spear-ai/ui/tailwind";
import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  ...baseTailwindConfig,
  content: [...(baseTailwindConfig.content as string[]), ...tailwindContent],
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
          canvas: "slate",
          neutral: "slate",
          primary: "indigo",
        },
        forerunner: {
          primary: "gray",
        },
        horizon: {
          neutral: "mauve",
          primary: "iris",
        },
        omega: {
          canvas: "gray",
          primaryDark: "green",
          primaryLight: "blue",
        },
      },
    },
  },
};

export default tailwindConfig;

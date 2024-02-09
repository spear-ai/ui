import { tailwindConfig as baseTailwindConfig } from "@spear-ai/tailwind-config";
import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  ...baseTailwindConfig,
  theme: {
    ...baseTailwindConfig.theme,
    extend: {
      ...baseTailwindConfig.theme?.extend,
      gridTemplateRows: {
        ...baseTailwindConfig.theme?.extend?.gridTemplateRows,
        "display-layout": "auto 1fr auto",
      },
      height: {
        ...baseTailwindConfig.theme?.extend?.height,
        5.5: "25px",
        8.75: "35px",
        18: "72px",
      },
      maxWidth: {
        ...baseTailwindConfig.theme?.extend?.maxWidth,
        "12xl": "120rem",
      },
      padding: {
        ...baseTailwindConfig.theme?.extend?.padding,
        13: "3.25rem",
      },
      spacing: {
        ...baseTailwindConfig.theme?.extend?.spacing,
        "select-content-available-height": "var(--radix-select-content-available-height)",
      },
      width: {
        ...baseTailwindConfig.theme?.extend?.width,
        8.75: "35px",
      },
    },
  },
};

export default tailwindConfig;

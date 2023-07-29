/* eslint-disable import/no-extraneous-dependencies */

import containerQueriesPlugin from "@tailwindcss/container-queries";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import { Config } from "tailwindcss";
import threeDPlugin from "tailwindcss-3d";
import animatePlugin from "tailwindcss-animate";
import scrollbarPlugin from "tailwind-scrollbar";
import defaultTheme from "tailwindcss/defaultTheme";
import { colors } from "./tailwind-radix-colors";
import { data } from "./tailwind-radix-primitives";
import { radixColorThemePlugin } from "./tailwind-radix-color-theme-plugin";

export const tailwindConfig: Config = {
  content: ["./src/**/*.{cjs,js,jsx,mjs,ts,tsx}"],
  darkMode: ["class"],
  plugins: [
    animatePlugin,
    containerQueriesPlugin,
    formsPlugin,
    radixColorThemePlugin,
    scrollbarPlugin,
    threeDPlugin,
    typographyPlugin,
  ],
  theme: {
    colors,
    extend: {
      aria: {
        "current-page": 'current="page"',
        invalid: 'invalid="true"',
      },
      borderWidth: {
        1: "1px",
      },
      data,
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        0: "0",
        "2xs": ["0.6875rem", "1rem"],
        "3xs": ["0.625rem", "1rem"],
      },
      maxWidth: {
        "12xl": "120rem",
      },
      padding: {
        13: "3.25rem",
      },
      scale: {
        "-1": "-1",
      },
    },
  },
};

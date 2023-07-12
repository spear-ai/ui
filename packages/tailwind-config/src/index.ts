/* eslint-disable import/no-extraneous-dependencies */

import containerQueriesPlugin from "@tailwindcss/container-queries";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";
import scrollbarPlugin from "tailwind-scrollbar";
import defaultTheme from "tailwindcss/defaultTheme";
import { colors, createThemeStyle } from "./theme";

export { createThemeStyle } from "./theme";

const radixUiDataAttributes = {
  active: 'state~="active"',
  checked: 'state="checked"',
  closed: 'state~="closed"',
  "delayed-open": 'state="delayed-open"',
  disabled: 'disabled=""',
  highlighted: 'highlighted=""',
  "is-hidden": 'is-hidden="true"',
  on: 'state~="on"',
  open: 'state~="open"',
  placeholder: 'placeholder=""',
  "side-bottom": 'side="bottom"',
  "side-left": 'side="left"',
  "side-right": 'side="right"',
  "side-top": 'side="top"',
};

const themeStylePlugin = plugin(({ addUtilities }) => {
  addUtilities(createThemeStyle());
});

export const tailwindConfig: Config = {
  content: ["./src/**/*.{cjs,js,jsx,mjs,ts,tsx}"],
  darkMode: ["class"],
  plugins: [
    animatePlugin,
    containerQueriesPlugin,
    formsPlugin,
    scrollbarPlugin,
    themeStylePlugin,
    typographyPlugin,
  ],
  theme: {
    colors,
    data: radixUiDataAttributes,
    extend: {
      aria: {
        "current-page": 'current="page"',
      },
      borderWidth: {
        1: "1px",
      },
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
    },
  },
};

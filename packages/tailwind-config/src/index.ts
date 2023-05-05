/* eslint-disable import/no-extraneous-dependencies */

import { TinyColor } from "@ctrl/tinycolor";
import radixColorGroups from "@radix-ui/colors";
import containerQueriesPlugin from "@tailwindcss/container-queries";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import { Config } from "tailwindcss";
import { paramCase } from "param-case";
import animatePlugin from "tailwindcss-animate";
import scrollbarPlugin from "tailwind-scrollbar";
import defaultTheme from "tailwindcss/defaultTheme";

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

const colors = {
  black: "black",
  white: "white",
  ...Object.fromEntries(
    Object.entries(radixColorGroups).flatMap(([radixColorGroupName, radixColors]) => {
      const colorGroupName = paramCase(radixColorGroupName); // “redDarkA” → “red-dark-a”
      const colorRegex = /^.*?(?<step>\d+)/u; // {group}-{step} e.g. “{red-dark}-{9}”

      const cssByStep = Object.fromEntries(
        Object.entries(radixColors).map(([radixColorName, radixCss]) => {
          const step = Number(colorRegex.exec(radixColorName)!.groups?.step);
          const css = new TinyColor(radixCss).toHex8String();
          return [step, css];
        })
      );

      return [[colorGroupName, cssByStep]];
    })
  ),
};

export const tailwindConfig: Config = {
  content: ["./src/**/*.{cjs,js,jsx,mjs,ts,tsx}"],
  darkMode: ["class"],
  plugins: [animatePlugin, containerQueriesPlugin, formsPlugin, scrollbarPlugin, typographyPlugin],
  theme: {
    colors: {
      ...colors,
      current: "currentColor",
      transparent: "transparent",
    },
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
    foo: defaultTheme,
  },
};

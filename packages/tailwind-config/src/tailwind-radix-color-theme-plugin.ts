/* eslint-disable import/no-extraneous-dependencies */

import variablesApi from "@mertasan/tailwindcss-variables/api";
import plugin from "tailwindcss/plugin";
import {
  Colors,
  RadixGrayColorScaleName,
  RadixHueColorScaleName,
  getColorValue,
  getContrastColorValue,
  stepList,
} from "./tailwind-radix-colors";

export type RadixColorThemeOptions = {
  /** A radix color scale for the application’s background color. Defaults to the `primary` color scale. */
  canvas?: undefined | RadixHueColorScaleName;

  /** Defaults to the dark variant of the `canvas` color’s scale. */
  canvasDark?: undefined | RadixHueColorScaleName;

  /** Defaults to the light variant of the `canvas` color’s scale. */
  canvasLight?: undefined | RadixHueColorScaleName;

  /** A negative valence color (e.g. Warning, Paused). Defaults to `"yellow"`. */
  negative?: undefined | RadixHueColorScaleName;

  /** Defaults to the dark variant of the `negative` color’s scale. */
  negativeDark?: undefined | RadixHueColorScaleName;

  /** Defaults to the light variant of the `negative` color’s scale. */
  negativeLight?: undefined | RadixHueColorScaleName;

  /** A [gray](https://www.radix-ui.com/docs/colors/palette-composition/scales#grays) Radix color scale. Defaults to `"grey"`. */
  neutral?: undefined | RadixGrayColorScaleName;

  /** Defaults to the dark variant of the `neutral` color’s scale. */
  neutralDark?: undefined | RadixGrayColorScaleName;

  /** Defaults to the light variant of the `neutral` color’s scale. */
  neutralLight?: undefined | RadixGrayColorScaleName;

  /** A positive valence color (Info, Loading, Pending). Defaults to `"blue"`. */
  positive?: undefined | RadixHueColorScaleName;

  /** Defaults to the dark variant of the `positive` color’s scale. */
  positiveDark?: undefined | RadixHueColorScaleName;

  /** Defaults to the light variant of the `positive` color’s scale. */
  positiveLight?: undefined | RadixHueColorScaleName;

  /** A Radix color scale for the application’s primary accent color. Defaults to the `neutral` color scale. */
  primary?: undefined | RadixHueColorScaleName;

  /** Defaults to the dark variant of the `primary` color’s scale. */
  primaryDark?: undefined | RadixHueColorScaleName;

  /** Defaults to the light variant of the `primary` color’s scale. */
  primaryLight?: undefined | RadixHueColorScaleName;

  /** An extra negative valence color (e.g. Error, Danger). Defaults to `"red"`. */
  xNegative?: undefined | RadixHueColorScaleName;

  /** Defaults to the dark variant of the `x-negative` color’s scale. */
  xNegativeDark?: undefined | RadixHueColorScaleName;

  /** Defaults to the light variant of the `x-negative` color’s scale. */
  xNegativeLight?: undefined | RadixHueColorScaleName;

  /** Defaults to the dark variant of the `x-negative` color’s scale. */
  xPositive?: undefined | RadixHueColorScaleName;

  /** Defaults to the dark variant of the `x-positive` color’s scale. */
  xPositiveDark?: undefined | RadixHueColorScaleName;

  /** Defaults to the light variant of the `x-positive` color’s scale. */
  xPositiveLight?: undefined | RadixHueColorScaleName;
};

export const themeColorNameList = [
  "canvas",
  "negative",
  "neutral",
  "positive",
  "primary",
  "x-negative",
  "x-positive",
];

type Variables = {
  DEFAULT: { colors: Colors };
};

const colors: Colors = {};

for (const themeColorName of themeColorNameList) {
  // {
  //   primary: {
  //     1: "hsl(var(--colors-primary-1) / <alpha-value>)",
  //     2: "hsl(var(--colors-primary-2) / <alpha-value>)",
  //     ⋮
  //     12: "hsl(var(--colors-primary-12) / <alpha-value>)",
  //   },
  // }
  colors[themeColorName] = Object.fromEntries(
    stepList.map((step) => [step, `hsl(var(--colors-${themeColorName}-${step}) / <alpha-value>)`]),
  );

  // {
  //   "primary-a": {
  //     1: "hsl(var(--colors-primary-a-1))",
  //     2: "hsl(var(--colors-primary-a-2))",
  //     ⋮
  //     12: "hsl(var(--colors-primary-a-12))",
  //   },
  // }
  colors[`${themeColorName}-a`] = Object.fromEntries(
    // The alpha value is built-in to the color
    stepList.map((step) => [step, `hsl(var(--colors-${themeColorName}-a-${step}))`]),
  );

  // {
  //   "primary-light": {
  //     1: "hsl(var(--colors-primary-light-1) / <alpha-value>)",
  //     2: "hsl(var(--colors-primary-light-2) / <alpha-value>)",
  //     ⋮
  //     12: "hsl(var(--colors-primary-light-12) / <alpha-value>)",
  //   },
  // }
  colors[`${themeColorName}-light`] = Object.fromEntries(
    stepList.map((step) => [step, `hsl(var(--colors-${themeColorName}-light-${step}) / <alpha-value>)`]),
  );

  // {
  //   "primary-light-a": {
  //     1: "hsl(var(--colors-primary-light-a-1))",
  //     2: "hsl(var(--colors-primary-light-a-2))",
  //     ⋮
  //     12: "hsl(var(--colors-primary-light-a-12))",
  //   },
  // }
  colors[`${themeColorName}-light-a`] = Object.fromEntries(
    // The alpha value is built-in to the color
    stepList.map((step) => [step, `hsl(var(--colors-${themeColorName}-light-a-${step}))`]),
  );

  // {
  //   "primary-dark": {
  //     1: "hsl(var(--colors-primary-dark-1) / <alpha-value>)",
  //     2: "hsl(var(--colors-primary-dark-2) / <alpha-value>)",
  //     ⋮
  //     12: "hsl(var(--colors-primary-dark-12) / <alpha-value>)",
  //   },
  // }
  colors[`${themeColorName}-dark`] = Object.fromEntries(
    stepList.map((step) => [step, `hsl(var(--colors-${themeColorName}-dark-${step}) / <alpha-value>)`]),
  );

  // {
  //   "primary-dark-a": {
  //     1: "hsl(var(--colors-primary-dark-a-1))",
  //     2: "hsl(var(--colors-primary-dark-a-2))",
  //     ⋮
  //     12: "hsl(var(--colors-primary-dark-a-12))",
  //   },
  // }
  colors[`${themeColorName}-dark-a`] = Object.fromEntries(
    // The alpha value is built-in to the color
    stepList.map((step) => [step, `hsl(var(--colors-${themeColorName}-dark-a-${step}))`]),
  );

  colors[`${themeColorName}-contrast`] = `var(--colors-${themeColorName}-contrast)`;
  colors[`${themeColorName}-light-contrast`] = `var(--colors-${themeColorName}-light-contrast)`;
  colors[`${themeColorName}-dark-contrast`] = `var(--colors-${themeColorName}-dark-contrast)`;
}

export const radixColorThemePlugin = plugin(
  ({ addComponents, config, theme }) => {
    const options: RadixColorThemeOptions = theme("theme") ?? {};
    const { canvas, negative, neutral, positive, primary, xNegative, xPositive } = options;
    const neutralLight = options.neutralLight ?? neutral ?? "gray";
    const neutralDark = options.neutralDark ?? neutral ?? "gray";
    const primaryLight = options.primaryLight ?? primary ?? neutralLight;
    const primaryDark = options.primaryDark ?? primary ?? neutralDark;
    const canvasLight = options.canvasLight ?? canvas ?? primaryLight;
    const canvasDark = options.canvasDark ?? canvas ?? primaryDark;
    const negativeLight = options.negativeLight ?? negative ?? "yellow";
    const negativeDark = options.negativeDark ?? negative ?? "yellow";
    const xNegativeLight = options.xNegativeLight ?? xNegative ?? "red";
    const xNegativeDark = options.xNegativeDark ?? xNegative ?? "red";
    const positiveLight = options.positiveLight ?? positive ?? "blue";
    const positiveDark = options.positiveDark ?? positive ?? "blue";
    const xPositiveLight = options.xPositiveLight ?? xPositive ?? "green";
    const xPositiveDark = options.xPositiveDark ?? xPositive ?? "green";

    const themeVariableList = [
      { darkScaleName: canvasDark, lightScaleName: canvasLight, name: "canvas" },
      { darkScaleName: neutralDark, lightScaleName: neutralLight, name: "neutral" },
      { darkScaleName: primaryDark, lightScaleName: primaryLight, name: "primary" },
      { darkScaleName: negativeDark, lightScaleName: negativeLight, name: "negative" },
      { darkScaleName: positiveDark, lightScaleName: positiveLight, name: "positive" },
      { darkScaleName: xNegativeDark, lightScaleName: xNegativeLight, name: "x-negative" },
      { darkScaleName: xPositiveDark, lightScaleName: xPositiveLight, name: "x-positive" },
    ];

    const rootVariables: Variables = {
      DEFAULT: {
        colors: {},
      },
    };

    const lightVariables: Variables = {
      DEFAULT: {
        colors: {},
      },
    };

    const darkVariables: Variables = {
      DEFAULT: {
        colors: {},
      },
    };

    for (const variable of themeVariableList) {
      // {
      //   "primary-light": {
      //     1: "{h}deg {s}% {l}%",
      //     2: "{h}deg {s}% {l}%",
      //     ⋮
      //     12: "{h}deg {s}% {l}%",
      //   },
      // }
      rootVariables.DEFAULT.colors[`${variable.name}-light`] = Object.fromEntries(
        stepList.map((step) => [
          step,
          getColorValue({
            isAlpha: false,
            isDark: false,
            isVariable: true,
            scaleName: variable.lightScaleName,
            step,
          }),
        ]),
      );

      // {
      //   "primary-light-a": {
      //     1: "{h}deg {s}% {l}% {a}",
      //     2: "{h}deg {s}% {l}% {a}",
      //     ⋮
      //     12: "{h}deg {s}% {l}% {a}",
      //   },
      // }
      rootVariables.DEFAULT.colors[`${variable.name}-light-a`] = Object.fromEntries(
        stepList.map((step) => [
          step,
          getColorValue({
            isAlpha: true,
            isDark: false,
            isVariable: true,
            scaleName: variable.lightScaleName,
            step,
          }),
        ]),
      );

      // {
      //   "primary-light-contrast": "black",
      // }
      rootVariables.DEFAULT.colors[`${variable.name}-light-contrast`] = getContrastColorValue(
        variable.lightScaleName,
      );

      // {
      //   "primary-dark": {
      //     1: "{h}deg {s}% {l}%",
      //     2: "{h}deg {s}% {l}%",
      //     ⋮
      //     12: "{h}deg {s}% {l}%",
      //   },
      // }
      rootVariables.DEFAULT.colors[`${variable.name}-dark`] = Object.fromEntries(
        stepList.map((step) => [
          step,
          getColorValue({
            isAlpha: false,
            isDark: true,
            isVariable: true,
            scaleName: variable.darkScaleName,
            step,
          }),
        ]),
      );

      // {
      //   "primary-dark-a": {
      //     1: "{h}deg {s}% {l}% {a}",
      //     2: "{h}deg {s}% {l}% {a}",
      //     ⋮
      //     12: "{h}deg {s}% {l}% {a}",
      //   },
      // }
      rootVariables.DEFAULT.colors[`${variable.name}-dark-a`] = Object.fromEntries(
        stepList.map((step) => [
          step,
          getColorValue({
            isAlpha: true,
            isDark: true,
            isVariable: true,
            scaleName: variable.darkScaleName,
            step,
          }),
        ]),
      );

      // {
      //   "primary-dark-contrast": "black",
      // }
      rootVariables.DEFAULT.colors[`${variable.name}-dark-contrast`] = getContrastColorValue(
        variable.darkScaleName,
      );

      // {
      //   ".light": {
      //     "primary": {
      //       1: "var(--colors-primary-light-1)",
      //       2: "var(--colors-primary-light-2)",
      //       ⋮
      //       12: "var(--colors-primary-light-12)",
      //     },
      //   },
      // }
      lightVariables.DEFAULT.colors[variable.name] = Object.fromEntries(
        stepList.map((step) => [step, `var(--colors-${variable.name}-light-${step})`]),
      );

      // {
      //   ".light": {
      //     "primary-a": {
      //       1: "var(--colors-primary-light-a-1)",
      //       2: "var(--colors-primary-light-a-2)",
      //       ⋮
      //       12: "var(--colors-primary-light-a-12)",
      //     },
      //   },
      // }
      lightVariables.DEFAULT.colors[`${variable.name}-a`] = Object.fromEntries(
        stepList.map((step) => [step, `var(--colors-${variable.name}-light-a-${step})`]),
      );

      // {
      //   ".light": {
      //     "primary-contrast": var(--colors-primary-light-contrast),
      //   },
      // }
      lightVariables.DEFAULT.colors[
        `${variable.name}-contrast`
      ] = `var(--colors-${variable.name}-light-contrast)`;

      // {
      //   ".dark": {
      //     "primary": {
      //       1: "var(--colors-primary-dark-1)",
      //       2: "var(--colors-primary-dark-2)",
      //       ⋮
      //       12: "var(--colors-primary-dark-12)",
      //     },
      //   },
      // }
      darkVariables.DEFAULT.colors[variable.name] = Object.fromEntries(
        stepList.map((step) => [step, `var(--colors-${variable.name}-dark-${step})`]),
      );

      // {
      //   ".dark": {
      //     "primary-a": {
      //       1: "var(--colors-primary-dark-a-1)",
      //       2: "var(--colors-primary-dark-a-2)",
      //       ⋮
      //       12: "var(--colors-primary-dark-a-12)",
      //     },
      //   },
      // }
      darkVariables.DEFAULT.colors[`${variable.name}-a`] = Object.fromEntries(
        stepList.map((step) => [step, `var(--colors-${variable.name}-dark-a-${step})`]),
      );

      // {
      //   ".dark": {
      //     "primary-contrast": var(--colors-primary-dark-contrast),
      //   },
      // }
      darkVariables.DEFAULT.colors[
        `${variable.name}-contrast`
      ] = `var(--colors-${variable.name}-dark-contrast)`;
    }

    const darkModeSelector = (config("darkMode") as [string])[0];

    addComponents(variablesApi.variables(rootVariables));
    addComponents(variablesApi.variables(lightVariables));
    addComponents(variablesApi.darkVariables(darkVariables, {}, darkModeSelector));
  },
  {
    theme: {
      extend: {
        colors,
      },
    },
  },
);

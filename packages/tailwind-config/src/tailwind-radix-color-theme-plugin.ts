import variablesApi from "@mertasan/tailwindcss-variables/api";
import plugin from "tailwindcss/plugin";
import {
  Colors,
  getColorValue,
  getContrastColorValue,
  RadixGrayColorScaleName,
  RadixHueColorScaleName,
  stepList,
} from "./tailwind-radix-colors";

export type RadixColorThemePluginOptions = Record<
  string,
  {
    /** A radix color scale for the application’s background color. Defaults to the `primary` color scale. */
    canvas?: RadixHueColorScaleName | undefined;

    /** Defaults to the dark variant of the `canvas` color’s scale. */
    canvasDark?: RadixHueColorScaleName | undefined;

    /** Defaults to the light variant of the `canvas` color’s scale. */
    canvasLight?: RadixHueColorScaleName | undefined;

    /** A negative valence color (e.g. Warning, Paused). Defaults to `"yellow"`. */
    negative?: RadixHueColorScaleName | undefined;

    /** Defaults to the dark variant of the `negative` color’s scale. */
    negativeDark?: RadixHueColorScaleName | undefined;

    /** Defaults to the light variant of the `negative` color’s scale. */
    negativeLight?: RadixHueColorScaleName | undefined;

    /** A [gray](https://www.radix-ui.com/docs/colors/palette-composition/scales#grays) Radix color scale. Defaults to `"grey"`. */
    neutral?: RadixGrayColorScaleName | undefined;

    /** Defaults to the dark variant of the `neutral` color’s scale. */
    neutralDark?: RadixGrayColorScaleName | undefined;

    /** Defaults to the light variant of the `neutral` color’s scale. */
    neutralLight?: RadixGrayColorScaleName | undefined;

    /** A positive valence color (Info, Loading, Pending). Defaults to `"blue"`. */
    positive?: RadixHueColorScaleName | undefined;

    /** Defaults to the dark variant of the `positive` color’s scale. */
    positiveDark?: RadixHueColorScaleName | undefined;

    /** Defaults to the light variant of the `positive` color’s scale. */
    positiveLight?: RadixHueColorScaleName | undefined;

    /** A Radix color scale for the application’s primary accent color. Defaults to the `neutral` color scale. */
    primary?: RadixHueColorScaleName | undefined;

    /** Defaults to the dark variant of the `primary` color’s scale. */
    primaryDark?: RadixHueColorScaleName | undefined;

    /** Defaults to the light variant of the `primary` color’s scale. */
    primaryLight?: RadixHueColorScaleName | undefined;

    /** An extra negative valence color (e.g. Error, Danger). Defaults to `"red"`. */
    xNegative?: RadixHueColorScaleName | undefined;

    /** Defaults to the dark variant of the `x-negative` color’s scale. */
    xNegativeDark?: RadixHueColorScaleName | undefined;

    /** Defaults to the light variant of the `x-negative` color’s scale. */
    xNegativeLight?: RadixHueColorScaleName | undefined;

    /** Defaults to the dark variant of the `x-negative` color’s scale. */
    xPositive?: RadixHueColorScaleName | undefined;

    /** Defaults to the dark variant of the `x-positive` color’s scale. */
    xPositiveDark?: RadixHueColorScaleName | undefined;

    /** Defaults to the light variant of the `x-positive` color’s scale. */
    xPositiveLight?: RadixHueColorScaleName | undefined;
  }
>;

export const themeColorNameList = [
  "canvas",
  "negative",
  "neutral",
  "positive",
  "primary",
  "x-negative",
  "x-positive",
];

type Variables = { colors: Colors };

const colors: Colors = {};

for (const themeColorName of themeColorNameList) {
  // {
  //   primary: {
  //     1: "oklch(var(--colors-primary-1) / <alpha-value>)",
  //     2: "oklch(var(--colors-primary-2) / <alpha-value>)",
  //     ⋮
  //     12: "oklch(var(--colors-primary-12) / <alpha-value>)",
  //   },
  // }
  colors[themeColorName] = Object.fromEntries(
    stepList.map((step) => [step, `oklch(var(--colors-${themeColorName}-${step}) / <alpha-value>)`]),
  );

  // {
  //   "primary-a": {
  //     1: "oklch(var(--colors-primary-a-1))",
  //     2: "oklch(var(--colors-primary-a-2))",
  //     ⋮
  //     12: "oklch(var(--colors-primary-a-12))",
  //   },
  // }
  colors[`${themeColorName}-a`] = Object.fromEntries(
    // The alpha value is built-in to the color
    stepList.map((step) => [step, `oklch(var(--colors-${themeColorName}-a-${step}))`]),
  );

  // {
  //   "primary-light": {
  //     1: "oklch(var(--colors-primary-light-1) / <alpha-value>)",
  //     2: "oklch(var(--colors-primary-light-2) / <alpha-value>)",
  //     ⋮
  //     12: "oklch(var(--colors-primary-light-12) / <alpha-value>)",
  //   },
  // }
  colors[`${themeColorName}-light`] = Object.fromEntries(
    stepList.map((step) => [step, `oklch(var(--colors-${themeColorName}-light-${step}) / <alpha-value>)`]),
  );

  // {
  //   "primary-light-a": {
  //     1: "oklch(var(--colors-primary-light-a-1))",
  //     2: "oklch(var(--colors-primary-light-a-2))",
  //     ⋮
  //     12: "oklch(var(--colors-primary-light-a-12))",
  //   },
  // }
  colors[`${themeColorName}-light-a`] = Object.fromEntries(
    // The alpha value is built-in to the color
    stepList.map((step) => [step, `oklch(var(--colors-${themeColorName}-light-a-${step}))`]),
  );

  // {
  //   "primary-dark": {
  //     1: "oklch(var(--colors-primary-dark-1) / <alpha-value>)",
  //     2: "oklch(var(--colors-primary-dark-2) / <alpha-value>)",
  //     ⋮
  //     12: "oklch(var(--colors-primary-dark-12) / <alpha-value>)",
  //   },
  // }
  colors[`${themeColorName}-dark`] = Object.fromEntries(
    stepList.map((step) => [step, `oklch(var(--colors-${themeColorName}-dark-${step}) / <alpha-value>)`]),
  );

  // {
  //   "primary-dark-a": {
  //     1: "oklch(var(--colors-primary-dark-a-1))",
  //     2: "oklch(var(--colors-primary-dark-a-2))",
  //     ⋮
  //     12: "oklch(var(--colors-primary-dark-a-12))",
  //   },
  // }
  colors[`${themeColorName}-dark-a`] = Object.fromEntries(
    // The alpha value is built-in to the color
    stepList.map((step) => [step, `oklch(var(--colors-${themeColorName}-dark-a-${step}))`]),
  );

  colors[`${themeColorName}-contrast`] = `var(--colors-${themeColorName}-contrast)`;
  colors[`${themeColorName}-light-contrast`] = `var(--colors-${themeColorName}-light-contrast)`;
  colors[`${themeColorName}-dark-contrast`] = `var(--colors-${themeColorName}-dark-contrast)`;
}

export const radixColorThemePlugin = plugin(
  ({ addComponents, config, theme }) => {
    const options: RadixColorThemePluginOptions = theme("themes", {});
    const rootVariables: Record<string, Variables> = {};
    const lightVariables: Record<string, Variables> = {};
    const darkVariables: Record<string, Variables> = {};

    lightVariables["*"] = {
      colors: {},
    };

    darkVariables["*"] = {
      colors: {},
    };

    for (const [themeName, themeOptions] of Object.entries(options)) {
      const themeSelector = themeName === "DEFAULT" ? ":root *" : `.is-product-${themeName}`;

      rootVariables[themeSelector] = {
        colors: {},
      };

      const { canvas, negative, neutral, positive, primary, xNegative, xPositive } = themeOptions;
      const neutralLight = themeOptions.neutralLight ?? neutral ?? "gray";
      const neutralDark = themeOptions.neutralDark ?? neutral ?? "gray";
      const primaryLight = themeOptions.primaryLight ?? primary ?? neutralLight;
      const primaryDark = themeOptions.primaryDark ?? primary ?? neutralDark;
      const canvasLight = themeOptions.canvasLight ?? canvas ?? primaryLight;
      const canvasDark = themeOptions.canvasDark ?? canvas ?? primaryDark;
      const negativeLight = themeOptions.negativeLight ?? negative ?? "yellow";
      const negativeDark = themeOptions.negativeDark ?? negative ?? "yellow";
      const xNegativeLight = themeOptions.xNegativeLight ?? xNegative ?? "red";
      const xNegativeDark = themeOptions.xNegativeDark ?? xNegative ?? "red";
      const positiveLight = themeOptions.positiveLight ?? positive ?? "blue";
      const positiveDark = themeOptions.positiveDark ?? positive ?? "blue";
      const xPositiveLight = themeOptions.xPositiveLight ?? xPositive ?? "green";
      const xPositiveDark = themeOptions.xPositiveDark ?? xPositive ?? "green";

      const themeVariableList = [
        { darkScaleName: canvasDark, lightScaleName: canvasLight, name: "canvas" },
        { darkScaleName: neutralDark, lightScaleName: neutralLight, name: "neutral" },
        { darkScaleName: primaryDark, lightScaleName: primaryLight, name: "primary" },
        { darkScaleName: negativeDark, lightScaleName: negativeLight, name: "negative" },
        { darkScaleName: positiveDark, lightScaleName: positiveLight, name: "positive" },
        { darkScaleName: xNegativeDark, lightScaleName: xNegativeLight, name: "x-negative" },
        { darkScaleName: xPositiveDark, lightScaleName: xPositiveLight, name: "x-positive" },
      ];

      for (const variable of themeVariableList) {
        // :root {
        //   --primary-light-1: "{l} {c} {h}";
        //   --primary-light-2: "{l} {c} {h}";
        //   ⋮
        //   --primary-light-12: "{l} {c} {h}";
        // }
        rootVariables[themeSelector].colors[`${variable.name}-light`] = Object.fromEntries(
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

        // :root {
        //   --primary-light-a-1: "{l} {c} {h}";
        //   --primary-light-a-2: "{l} {c} {h}";
        //   ⋮
        //   --primary-light-a-12: "{l} {c} {h}";
        // }
        rootVariables[themeSelector].colors[`${variable.name}-light-a`] = Object.fromEntries(
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

        // :root {
        //   --primary-dark-1: "{l} {c} {h}";
        //   --primary-dark-2: "{l} {c} {h}";
        //   ⋮
        //   --primary-dark-12: "{l} {c} {h}";
        // }
        rootVariables[themeSelector].colors[`${variable.name}-dark`] = Object.fromEntries(
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

        // :root {
        //   --primary-dark-a-1: "{l} {c} {h}";
        //   --primary-dark-a-2: "{l} {c} {h}";
        //   ⋮
        //   --primary-dark-a-12: "{l} {c} {h}";
        // }
        rootVariables[themeSelector].colors[`${variable.name}-dark-a`] = Object.fromEntries(
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

        // :root {
        //   --primary-light-contrast: black;
        // }
        rootVariables[themeSelector].colors[`${variable.name}-light-contrast`] = getContrastColorValue(
          variable.lightScaleName,
        );

        // :root {
        //   --primary-dark-contrast: white;
        // }
        rootVariables[themeSelector].colors[`${variable.name}-dark-contrast`] = getContrastColorValue(
          variable.darkScaleName,
        );

        // :root {
        //   --colors-primary-1: var(--colors-primary-light-1);
        //   --colors-primary-2: var(--colors-primary-light-2);
        //   ⋮
        //   --colors-primary-12: var(--colors-primary-light-12);
        // }
        lightVariables["*"].colors[variable.name] = Object.fromEntries(
          stepList.map((step) => [step, `var(--colors-${variable.name}-light-${step})`]),
        );

        // :root {
        //   --colors-primary-a-1: var(--colors-primary-light-a-1);
        //   --colors-primary-a-2: var(--colors-primary-light-a-2);
        //   ⋮
        //   --colors-primary-a-12: var(--colors-primary-light-a-12);
        // }
        lightVariables["*"].colors[`${variable.name}-a`] = Object.fromEntries(
          stepList.map((step) => [step, `var(--colors-${variable.name}-light-a-${step})`]),
        );

        // :root {
        //   --colors-primary-contrast: var(--colors-primary-light-contrast);
        // }
        lightVariables["*"].colors[`${variable.name}-contrast`] =
          `var(--colors-${variable.name}-light-contrast)`;

        // :root.dark {
        //   --colors-primary-1: var(--colors-primary-dark-1);
        //   --colors-primary-2: var(--colors-primary-dark-2);
        //   ⋮
        //   --colors-primary-12: var(--colors-primary-dark-12);
        // }
        darkVariables["*"].colors[variable.name] = Object.fromEntries(
          stepList.map((step) => [step, `var(--colors-${variable.name}-dark-${step})`]),
        );

        // :root.dark {
        //   --colors-primary-a-1: var(--colors-primary-dark-a-1);
        //   --colors-primary-a-2: var(--colors-primary-dark-a-2);
        //   ⋮
        //   --colors-primary-a-12: var(--colors-primary-dark-a-12);
        // }
        darkVariables["*"].colors[`${variable.name}-a`] = Object.fromEntries(
          stepList.map((step) => [step, `var(--colors-${variable.name}-dark-a-${step})`]),
        );

        // :root.dark {
        //   --colors-primary-contrast: var(--colors-primary-dark-contrast);
        // }
        darkVariables["*"].colors[`${variable.name}-contrast`] =
          `var(--colors-${variable.name}-dark-contrast)`;
      }
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

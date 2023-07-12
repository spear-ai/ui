import { TinyColor } from "@ctrl/tinycolor";
import radixColorGroups from "@radix-ui/colors";
import { paramCase } from "param-case";

export const brightScaleNameList = ["amber", "lime", "mint", "sky", "yellow"];

export const getContrastCssColorValue = (scaleName: string) =>
  brightScaleNameList.includes(scaleName) ? "black" : "white";

export const toSolidCssColorValue = (value: string) => {
  const hsl = new TinyColor(value).toHsl();
  const h = `${hsl.h.toFixed(2)}deg`;
  const s = `${(hsl.s * 100).toFixed(2)}%`;
  const l = `${(hsl.l * 100).toFixed(2)}%`;
  return [h, s, l].join(" ");
};

export const toAlphaCssColorValue = (value: string) => {
  const hsl = new TinyColor(value).toHsl();
  const a = hsl.a.toFixed(2);
  return `${toSolidCssColorValue(value)} / ${a}`;
};

const getRadixCssColorValue = (options: {
  isAlpha: boolean;
  isDark: boolean;
  radixScaleName: string;
  step: number;
}) => {
  const { isAlpha, isDark, radixScaleName, step } = options;
  let groupKey = radixScaleName;
  let stepKey = radixScaleName;

  if (isDark) {
    groupKey += "Dark";
  }

  if (isAlpha) {
    groupKey += "A";
    stepKey += "A";
  }

  stepKey += `${step}`;

  const radixColorGroup = radixColorGroups[groupKey as keyof typeof radixColorGroups];
  const radixColorValue = radixColorGroup[stepKey as keyof typeof radixColorGroup];

  return isAlpha ? toAlphaCssColorValue(radixColorValue) : toSolidCssColorValue(radixColorValue);
};

const getThemeColorName = (options: { isAlpha: boolean; step: number; themeGroupName: string }) => {
  const { isAlpha, step, themeGroupName } = options;
  let name = themeGroupName;

  if (isAlpha) {
    name += "-a";
  }

  name += `-${step}`;

  return name;
};

export const createThemeStyle = (
  options: {
    colorScales?:
      | undefined
      | {
          /** A negative valence color (e.g. Warning, Paused). Defaults to `"yellow"`. */
          negative?: undefined | string;

          /** Defaults to the dark variant of the `negative` color’s scale. */
          "negative-dark"?: undefined | string;

          /** A [gray](https://www.radix-ui.com/docs/colors/palette-composition/scales#grays) Radix color scale. Defaults to `"grey"`. */
          neutral: undefined | string;

          /** Defaults to the dark variant of the `neutral` color’s scale. */
          "neutral-dark"?: undefined | string;

          /** A positive valence color (Info, Loading, Pending). Defaults to `"blue"`. */
          positive?: undefined | string;

          /** Defaults to the dark variant of the `positive` color’s scale. */
          "positive-dark"?: undefined | string;

          /** A Radix color scale. Defaults to the `neutral` scale. */
          primary?: undefined | string;

          /** Defaults to the dark variant of the `primary` color’s scale. */
          "primary-dark"?: undefined | string;

          /** Alternative to the primary color. Defaults to the `primary` color. */
          secondary?: undefined | string;

          /** Defaults to the dark variant of the `secondary` color’s scale. */
          "secondary-dark"?: undefined | string;

          /** An extra negative valence color (e.g. Error, Danger). Defaults to `"red"`. */
          "x-negative"?: undefined | string;

          /** An extra negative valence color (e.g. Error, Danger). Defaults to `"red"`. */
          "x-negative-dark"?: undefined | string;

          /** Defaults to the dark variant of the `x-negative` color’s scale. */
          "x-positive"?: undefined | string;

          /** An extra positive valence color (e.g. Success, Completed). Defaults to `"green"`. */
          "x-positive-dark"?: undefined | string;
        };
  } = {},
) => {
  const colorScales = options?.colorScales;
  const neutral = colorScales?.neutral ?? "gray";
  const neutralDark = colorScales?.["neutral-dark"] ?? neutral;
  const primary = colorScales?.primary ?? neutral;
  const primaryDark = colorScales?.["primary-dark"] ?? primary;
  const secondary = colorScales?.secondary ?? primary;
  const secondaryDark = colorScales?.["secondary-dark"] ?? secondary;
  const negative = colorScales?.negative ?? "yellow";
  const negativeDark = colorScales?.["negative-dark"] ?? negative;
  const xNegative = colorScales?.negative ?? "red";
  const xNegativeDark = colorScales?.["negative-dark"] ?? xNegative;
  const positive = colorScales?.positive ?? "blue";
  const positiveDark = colorScales?.["positive-dark"] ?? positive;
  const xPositive = colorScales?.["x-positive"] ?? "green";
  const xPositiveDark = colorScales?.["x-positive-dark"] ?? xPositive;

  const mergedColorScales = {
    negative,
    "negative-dark": negativeDark,
    neutral,
    "neutral-dark": neutralDark,
    positive,
    "positive-dark": positiveDark,
    primary,
    "primary-dark": primaryDark,
    secondary,
    "secondary-dark": secondaryDark,
    "x-negative": xNegative,
    "x-negative-dark": xNegativeDark,
    "x-positive": xPositive,
    "x-positive-dark": xPositiveDark,
  };

  const style: { ":root": { [name: string]: string } } = {
    ":root": {
      "--colors-primary-contrast": getContrastCssColorValue(primary),
      "--colors-secondary-contrast": getContrastCssColorValue(secondary),
    },
  };

  for (const [themeGroupName, radixScaleName] of Object.entries(mergedColorScales)) {
    for (const isAlpha of [false, true]) {
      const isDark = themeGroupName.endsWith("dark");

      for (let step = 1; step <= 12; step += 1) {
        const themeColorName = getThemeColorName({ isAlpha, step, themeGroupName });
        const radixColorValue = getRadixCssColorValue({ isAlpha, isDark, radixScaleName, step });
        style[":root"][`--colors-${themeColorName}`] = radixColorValue;
      }
    }
  }

  return style;
};

export const standardColors = {
  current: "currentColor",
  inherit: "inherit",
  transparent: "transparent",
};

export const literalColors = {
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
        }),
      );

      return [[colorGroupName, cssByStep]];
    }),
  ),
};

export const themeScaleNameList = [
  "negative",
  "neutral",
  "positive",
  "primary",
  "secondary",
  "x-negative",
  "x-positive",
];

export const themeColors = {
  "primary-contrast": "var(--colors-primary-contrast)",
  "secondary-contrast": "var(--colors-secondary-contrast)",
  ...Object.fromEntries(
    themeScaleNameList
      .flatMap((scaleName) =>
        [false, true].flatMap((isAlpha) =>
          [false, true].flatMap((isDark) => ({
            isAlpha,
            isDark,
            scaleName,
          })),
        ),
      )
      .map((scaleDetails) => {
        const { isAlpha, isDark, scaleName } = scaleDetails;
        let groupName = scaleName;

        if (isDark) {
          groupName += "-dark";
        }

        if (isAlpha) {
          groupName += "-a";
        }

        return [
          groupName,
          Object.fromEntries(
            Array.from({ length: 12 }, (_, index) => {
              const step = index + 1;
              const value = isAlpha
                ? `hsl(var(--colors-${groupName}-${step}))`
                : `hsl(var(--colors-${groupName}-${step}) / <alpha-value>)`;

              return [`${step}`, value];
            }),
          ),
        ];
      }),
  ),
};

export const colors = {
  ...standardColors,
  ...literalColors,
  ...themeColors,
};

import radixColorGroups from "@radix-ui/colors";
import { kebabCase } from "change-case";
import { oklch } from "culori";
import { Replace } from "type-fest";

export type RadixColorScaleName = Replace<
  Replace<Replace<keyof typeof radixColorGroups, "A", "">, "Dark", "">,
  "P3",
  ""
>;
export type RadixGrayColorScaleName = "gray" | "mauve" | "olive" | "sage" | "sand" | "slate";
export type RadixOverlayColorScaleName = "black" | "white";
export type RadixHueColorScaleName = Exclude<RadixColorScaleName, RadixOverlayColorScaleName>;

export const colorScaleNameList: RadixColorScaleName[] = Object.keys(radixColorGroups).flatMap(
  (radixColorGroupName) => {
    if (radixColorGroupName.endsWith("A")) return [];
    if (radixColorGroupName.endsWith("P3")) return [];
    if (radixColorGroupName.endsWith("Dark")) return [];
    return kebabCase(radixColorGroupName) as RadixColorScaleName;
  },
);

export const overlayRadixColorScaleNameList: RadixOverlayColorScaleName[] = ["black", "white"];

export const hueRadixColorScaleNameList: RadixHueColorScaleName[] = colorScaleNameList.flatMap((name) => {
  if (name === "black") return [];
  if (name === "white") return [];
  return name as RadixHueColorScaleName;
});

export const brightScaleNameList = ["amber", "lime", "mint", "sky", "yellow"];

export const getContrastColorValue = (name: RadixHueColorScaleName) =>
  brightScaleNameList.includes(name) ? "black" : "white";

export const stepList = Array.from({ length: 12 }, (_, index) => index + 1);

export const getColorName = (options: {
  isAlpha: boolean;
  isDark: boolean;
  isOverlay?: boolean | undefined;
  scaleName: string;
}) => {
  const { isAlpha, isDark, isOverlay = false, scaleName } = options;
  let colorName = scaleName;
  colorName += isOverlay ? "" : isDark ? "-dark" : "-light";
  colorName += isAlpha ? "-a" : "";
  return colorName;
};

export const getColorValue = (options: {
  isAlpha: boolean;
  isDark: boolean;
  isVariable?: boolean | undefined;
  scaleName: string;
  step: number;
}) => {
  const { isAlpha, isDark, isVariable = false, scaleName, step } = options;
  let groupKey = scaleName;
  let stepKey = scaleName;

  if (isDark) {
    groupKey += "Dark";
  }

  groupKey += "P3";

  if (isAlpha) {
    groupKey += "A";
    stepKey += "A";
  }

  stepKey += `${step}`;

  const colorGroup = radixColorGroups[groupKey as keyof typeof radixColorGroups];
  const colorValue = colorGroup[stepKey as keyof typeof colorGroup] as string;
  const lch = oklch(colorValue);
  const value = isAlpha
    ? `${lch?.l ?? 0} ${lch?.c ?? 0} ${lch?.h ?? 0} / ${lch?.alpha ?? 1}`
    : `${lch?.l ?? 0} ${lch?.c ?? 0} ${lch?.h ?? 0}`;
  return isVariable ? value : `oklch(${value})`;
};

export type Colors = Record<string, Record<string, string> | string>;

export const literalColors: Colors = {
  black: "black",
  white: "white",
};

for (const scaleName of overlayRadixColorScaleNameList) {
  const colorName = getColorName({
    isAlpha: true,
    isDark: false,
    isOverlay: true,
    scaleName,
  });

  literalColors[colorName] = Object.fromEntries(
    stepList.map((step) => [
      step,
      getColorValue({
        isAlpha: true,
        isDark: false,
        scaleName,
        step,
      }),
    ]),
  );
}

for (const scaleName of hueRadixColorScaleNameList) {
  literalColors[`${scaleName}-contrast`] = getContrastColorValue(scaleName);

  for (const isDark of [false, true]) {
    for (const isAlpha of [false, true]) {
      const colorName = getColorName({
        isAlpha,
        isDark,
        scaleName,
      });

      literalColors[colorName] = Object.fromEntries(
        stepList.map((step) => [
          step,
          getColorValue({
            isAlpha,
            isDark,
            scaleName,
            step,
          }),
        ]),
      );
    }
  }
}

export const standardColors = {
  current: "currentColor",
  inherit: "inherit",
  transparent: "transparent",
};

export const colors = {
  ...literalColors,
  ...standardColors,
};

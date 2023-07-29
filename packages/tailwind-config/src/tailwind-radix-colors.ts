import radixColorGroups from "@radix-ui/colors";
import { colord } from "colord";
import { paramCase } from "param-case";
import { Replace } from "type-fest";

export type RadixColorScaleName = Replace<Replace<keyof typeof radixColorGroups, "A", "">, "Dark", "">;
export type RadixGrayColorScaleName = "gray" | "olive" | "mauve" | "sage" | "sand" | "slate";
export type RadixOverlayColorScaleName = "black" | "white";
export type RadixHueColorScaleName = Exclude<RadixColorScaleName, RadixOverlayColorScaleName>;

export const colorScaleNameList: RadixColorScaleName[] = Object.keys(radixColorGroups).flatMap(
  (radixColorGroupName) => {
    if (radixColorGroupName.endsWith("A")) return [];
    if (radixColorGroupName.endsWith("Dark")) return [];
    return paramCase(radixColorGroupName) as RadixColorScaleName;
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
  isOverlay?: undefined | boolean;
  scaleName: string;
  step: number;
}) => {
  const { isAlpha, isDark, isOverlay = false, scaleName, step } = options;
  let colorName = scaleName;
  colorName += isOverlay ? "" : isDark ? "-dark" : "-light";
  colorName += isAlpha ? "-a" : "";
  colorName += `-${step}`;
  return colorName;
};

export const getColorValue = (options: {
  isAlpha: boolean;
  isDark: boolean;
  isVariable?: undefined | boolean;
  scaleName: string;
  step: number;
}) => {
  const { isAlpha, isDark, isVariable = false, scaleName, step } = options;
  let groupKey = scaleName;
  let stepKey = scaleName;

  if (isDark) {
    groupKey += "Dark";
  }

  if (isAlpha) {
    groupKey += "A";
    stepKey += "A";
  }

  stepKey += `${step}`;

  const colorGroup = radixColorGroups[groupKey as keyof typeof radixColorGroups];
  const colorValue = colorGroup[stepKey as keyof typeof colorGroup];
  const hsl = colord(colorValue).toHsl();
  const value = isAlpha ? `${hsl.h}deg ${hsl.s}% ${hsl.l}% / ${hsl.a}` : `${hsl.h}deg ${hsl.s}% ${hsl.l}%`;
  return isVariable ? value : `hsl(${value})`;
};

export const literalColors: { [name: string]: string } = {
  black: "black",
  white: "white",
};

for (const scaleName of overlayRadixColorScaleNameList) {
  for (const step of stepList) {
    const colorName = getColorName({
      isAlpha: true,
      isDark: false,
      isOverlay: true,
      scaleName,
      step,
    });

    literalColors[colorName] = getColorValue({
      isAlpha: true,
      isDark: false,
      scaleName,
      step,
    });
  }
}

for (const scaleName of hueRadixColorScaleNameList) {
  literalColors[`${scaleName}-contrast`] = getContrastColorValue(scaleName);

  for (const isDark of [false, true]) {
    for (const isAlpha of [false, true]) {
      for (const step of stepList) {
        const colorName = getColorName({
          isAlpha,
          isDark,
          scaleName,
          step,
        });

        literalColors[colorName] = getColorValue({
          isAlpha,
          isDark,
          scaleName,
          step,
        });
      }
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
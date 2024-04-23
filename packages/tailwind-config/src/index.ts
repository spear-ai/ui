import containerQueriesPlugin from "@tailwindcss/container-queries";
import formsPlugin from "@tailwindcss/forms";
import typographyPlugin from "@tailwindcss/typography";
import scrollbarPlugin from "tailwind-scrollbar";
import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import threeDPlugin from "tailwindcss-3d";
import animatePlugin from "tailwindcss-animate";
import reactAriaComponentsPlugin from "tailwindcss-react-aria-components";
import { radixColorThemePlugin } from "./tailwind-radix-color-theme-plugin";
import { colors } from "./tailwind-radix-colors";
import { data } from "./tailwind-radix-primitives";

const productList = ["dfs", "forerunner", "galapago", "underway"];

// Work around limitation of the `theme()` function not parsing `"<alpha-value>"`:
// https://github.com/tailwindlabs/tailwindcss/issues/9143#issuecomment-1674128599
const removeColorValueAlpha = (colorValue: string) => colorValue.replace("<alpha-value>", "1");

export const tailwindConfig: Config = {
  content: ["./src/**/*.{cjs,js,jsx,mjs,ts,tsx}"],
  darkMode: ["class"],
  plugins: [
    plugin(({ addUtilities, matchVariant }) => {
      addUtilities(
        // ["forerunner", "galapago"] → { ".theme-forerunner": {}, ".theme-galapago": {} }
        Object.fromEntries(productList.map((product) => [`.theme-${product}`, {}])),
      );

      matchVariant("theme", (value) => `.theme-${value} &`, {
        // ["forerunner", "galapago"] → { "forerunner": "forerunner", "galapago": "galapago" }
        values: Object.fromEntries(productList.map((product) => [product, product])),
      });
    }),
    animatePlugin,
    containerQueriesPlugin,
    formsPlugin,
    radixColorThemePlugin,
    scrollbarPlugin,
    threeDPlugin,
    typographyPlugin,
    reactAriaComponentsPlugin,
  ],
  safelist: productList.map((product) => `theme-${product}`),
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
      spacing: {
        "accordion-content-height": "var(--radix-accordion-content-height)",
        "accordion-content-width": "var(--radix-accordion-content-width)",
        "collapsible-content-height": "var(--radix-collapsible-content-height)",
        "collapsible-content-width": "var(--radix-collapsible-content-width)",
        "context-menu-content-available-height": "var(--radix-context-menu-content-available-height)",
        "context-menu-content-available-width": "var(--radix-context-menu-content-available-width)",
        "context-menu-trigger-height": "var(--radix-context-menu-trigger-height)",
        "context-menu-trigger-width": "var(--radix-context-menu-trigger-width)",
        "dropdown-menu-content-available-height": "var(--radix-dropdown-menu-content-available-height)",
        "dropdown-menu-content-available-width": "var(--radix-dropdown-menu-content-available-width)",
        "dropdown-menu-trigger-height": "var(--radix-dropdown-menu-trigger-width)",
        "dropdown-menu-trigger-width": "var(--radix-dropdown-menu-trigger-width)",
        "hover-card-content-available-height": "var(--radix-hover-card-content-available-height)",
        "hover-card-content-available-width": "var(--radix-hover-card-content-available-width)",
        "hover-card-trigger-height": "var(--radix-hover-card-trigger-width)",
        "hover-card-trigger-width": "var(--radix-hover-card-trigger-width)",
        "menubar-content-available-height": "var(--radix-menubar-content-available-height)",
        "menubar-content-available-width": "var(--radix-menubar-content-available-width)",
        "menubar-trigger-height": "var(--radix-menubar-trigger-width)",
        "menubar-trigger-width": "var(--radix-menubar-trigger-width)",
        "navigation-menu-viewport-height": "var(--radix-navigation-menu-viewport-height)",
        "navigation-menu-viewport-width": "var(--radix-navigation-menu-viewport-width)",
        "popover-content-available-height": "var(--radix-popover-content-available-height)",
        "popover-content-available-width": "var(--radix-popover-content-available-width)",
        "popover-trigger-height": "var(--radix-popover-trigger-height)",
        "popover-trigger-width": "var(--radix-popover-trigger-width)",
        "select-content-available-height": "var(--radix-select-content-available-height)",
        "select-content-available-width": "var(--radix-select-content-available-width)",
        "select-trigger-height": "var(--radix-select-trigger-height)",
        "select-trigger-width": "var(--radix-select-trigger-width)",
        "toast-swipe-end-x": "var(--radix-toast-swipe-end-x)",
        "toast-swipe-end-y": "var(--radix-toast-swipe-end-y)",
        "toast-swipe-move-x": "var(--radix-toast-swipe-move-x)",
        "toast-swipe-move-y": "var(--radix-toast-swipe-move-y)",
        "tooltip-content-available-height": "var(--radix-tooltip-content-available-height)",
        "tooltip-content-available-width": "var(--radix-tooltip-content-available-width)",
        "tooltip-trigger-height": "var(--radix-tooltip-trigger-height)",
        "tooltip-trigger-width": "var(--radix-tooltip-trigger-width)",
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": removeColorValueAlpha(theme("colors.neutral[11]")),
            "--tw-prose-bold": removeColorValueAlpha(theme("colors.neutral[12]")),
            "--tw-prose-code": removeColorValueAlpha(theme("colors.primary-a[11]")),
            "--tw-prose-headings": removeColorValueAlpha(theme("colors.neutral[12]")),
            "--tw-prose-hr": removeColorValueAlpha(theme("colors.neutral[6]")),
            "--tw-prose-links": removeColorValueAlpha(theme("colors.primary[12]")),
            "--tw-prose-pre-bg": removeColorValueAlpha(theme("colors.primary-a[3]")),
            "--tw-prose-pre-code": removeColorValueAlpha(theme("colors.primary-a[11]")),
            "--tw-prose-quote-borders": removeColorValueAlpha(theme("colors.primary[6]")),
            "--tw-prose-quotes": removeColorValueAlpha(theme("colors.neutral[12]")),
          },
        },
      }),
    },
  },
};

import "@/app/style.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview, ReactRenderer } from "@storybook/react";
import { AppLayout } from "@/app/layout";

const storybookPreview: Preview = {
  decorators: [
    (Story, context) => {
      const direction = (context.globals.direction ?? "ltr") as "ltr" | "rtl";

      return (
        <AppLayout direction={direction}>
          <Story />
        </AppLayout>
      );
    },
    withThemeByClassName<ReactRenderer>({
      defaultTheme: "dark",
      themes: {
        dark: "dark",
        light: "",
      },
    }),
  ],
  globalTypes: {
    direction: {
      defaultValue: "ltr",
      description: "Text direction",
      toolbar: {
        icon: "globe",
        items: [
          { right: "⟶", title: "LTR", value: "ltr" },
          { right: "⟵", title: "RTL", value: "rtl" },
        ],
      },
    },
    product: {
      defaultValue: "forerunner",
      description: "Spear AI Product",
      toolbar: {
        dynamicTitle: true,
        icon: "lightning",
        items: ["DFS", "Forerunner", "GalapaGo", "Underway"],
        title: "Theme",
      },
    },
  },
  parameters: {
    backgrounds: {
      default: "canvas-1",
      grid: {
        cellAmount: 1,
        cellSize: 8,
      },
      values: [
        { name: "canvas-1", value: "hsl(var(--colors-canvas-1) / 1);" },
        { name: "canvas-2", value: "hsl(var(--colors-canvas-2) / 1);" },
      ],
    },
    controls: {
      matchers: {
        color: /(?:background|color)$/u,
        date: /date$/iu,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
    },
  },
};

export default storybookPreview;

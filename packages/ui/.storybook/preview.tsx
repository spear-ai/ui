import "@/app/style.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview, ReactRenderer } from "@storybook/react";
import { AppLayout } from "@/app/layout";

const storybookPreview: Preview = {
  decorators: [
    (Story, context) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const background = (context.globals.backgrounds?.value ?? "canvas-1") as string | null;
      const layout = (context.parameters.layout ?? "padded") as string;
      const direction = (context.globals.direction ?? "ltr") as "ltr" | "rtl";
      const product = context.globals.product as string;

      return (
        <AppLayout background={background} direction={direction} layout={layout} product={product}>
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
      defaultValue: "underway",
      description: "Spear AI Product",
      toolbar: {
        dynamicTitle: true,
        icon: "lightning",
        items: [
          { title: "DFS", value: "dfs" },
          { title: "Forerunner", value: "forerunner" },
          { title: "GalapaGo", value: "galapago" },
          { title: "Underway", value: "underway" },
        ],
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
        { name: "Canvas 1", value: "canvas-1" },
        { name: "Canvas 2", value: "canvas-2" },
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

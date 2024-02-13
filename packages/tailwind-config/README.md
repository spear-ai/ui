# @spear-ai/tailwind-config

A [Tailwind CSS](https://tailwindcss.com) config with all batteries included.

## Installation

```shell
yarn add -D tailwindcss @spear-ai/tailwind-config
```

## Usage

Add the following to your `tailwind.config.ts` file:

```ts
import { tailwindConfig as baseTailwindConfig } from "@spear-ai/tailwind-config";
import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  ...baseTailwindConfig,
};

export default tailwindConfig;
```

Customize the theme:

```ts
import { tailwindConfig as baseTailwindConfig } from "@spear-ai/tailwind-config";
import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  ...baseTailwindConfig,
  theme: {
    ...baseTailwindConfig?.theme,
    extend: {
      ...baseTailwindConfig?.theme?.extend,
      themes: {
        DEFAULT: {
          canvas: "grey",
          neutralDark: "mauve",
          neutralLight: "slate",
          primaryDark: "indigo",
          primaryLight: "blue",
        },
      },
    },
  },
};

export default tailwindConfig;
```

## Theme colors

Theme color scales controlled by CSS Variables (Computed Properties).

`neutral`

A [gray](https://www.radix-ui.com/docs/colors/palette-composition/scales#grays) Radix color scale. Defaults to `"grey"`.

`neutralLight`

Defaults to the light variant of the `neutral` color’s scale.

`neutralDark`

Defaults to the dark variant of the `neutral` color’s scale.

---

`primary`

A [colored](https://www.radix-ui.com/docs/colors/palette-composition/scales#colors) Radix color scale. Defaults to the `neutral` scale.

`primaryLight`

Defaults to the light variant of the `primary` color’s scale.

`primaryDark`

Defaults to the dark variant of the `primary` color’s scale.

---

`canvas`

Application background color. Defaults to the `primary` color.

`canvasLight`

Defaults to the light variant of the `canvas` color’s scale.

`canvasDark`

Defaults to the dark variant of the `canvas` color’s scale.

---

`positive`

A positive valence color (Info, Loading, Pending). Defaults to `"blue"`.

`positiveLight`

Defaults to the light variant of the `positive` color’s scale.

`positiveDark`

Defaults to the dark variant of the `positive` color’s scale.

---

`xPositive`

An extra positive valence color (e.g. Success, Completed). Defaults to `"green"`.

`xPositiveLight`

Defaults to the light variant of the `xPositive` color’s scale.

`xPositiveDark`

Defaults to the dark variant of the `xPositive` color’s scale.

---

`negative`

A negative valence color (e.g. Warning, Paused). Defaults to `"yellow"`.

`negativeLight`

Defaults to the light variant of the `negative` color’s scale.

`negativeDark`

Defaults to the dark variant of the `negative` color’s scale.

---

`xNegative`

An extra negative valence color (e.g. Error, Danger). Defaults to `"red"`.

`xNegativeLight`

Defaults to the light variant of the `xNegative` color’s scale.

`xNegativeDark`

Defaults to the dark variant of the `xNegative` color’s scale.

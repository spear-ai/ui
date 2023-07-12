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
import { tailwindConfig as baseTailwindConfig, createColorTheme } from "@spear-ai/tailwind-config";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const tailwindConfig: Config = {
  plugins: [
    ...(baseTailwindConfig?.plugins ?? []),
    plugin(({ addUtilities }) => {
      addUtilities(
        createThemeStyle({
          colorScales: {
            neutral: "slate",
            neutralDark: "mauve",
            primary: "blue",
            primaryDark: "indigo",
            secondaryDark: "lime",
          },
        }),
      );
    }),
  ],
};

export default tailwindConfig;
```

## Theme colors

Theme color scales controlled by CSS Variables (Computed Properties).

`neutral`

A [gray](https://www.radix-ui.com/docs/colors/palette-composition/scales#grays) Radix color scale. Defaults to `"grey"`.

`neutral-dark`

Defaults to the dark variant of the `neutral` color’s scale.

---

`primary`

A [colored](https://www.radix-ui.com/docs/colors/palette-composition/scales#colors) Radix color scale. Defaults to the `neutral` scale.

`primary-dark`

Defaults to the dark variant of the `primary` color’s scale.

---

`secondary`

Alternative to the primary color. Defaults to the `primary` color.

`secondary-dark`

Defaults to the dark variant of the `secondary` color’s scale.

---

`positive`

A positive valence color (Info, Loading, Pending). Defaults to `"blue"`.

`positive-dark`

Defaults to the dark variant of the `positive` color’s scale.

---

`x-positive`

An extra positive valence color (e.g. Success, Completed). Defaults to `"green"`.

`x-positive-dark`

Defaults to the dark variant of the `x-positive` color’s scale.

---

`negative`

A negative valence color (e.g. Warning, Paused). Defaults to `"yellow"`.

`negative-dark`

Defaults to the dark variant of the `negative` color’s scale.

---

`x-negative`

An extra negative valence color (e.g. Error, Danger). Defaults to `"red"`.

`x-negative-dark`

Defaults to the dark variant of the `x-negative` color’s scale.

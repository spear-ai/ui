# @spear-ai/tailwind-config

A [Tailwind CSS](https://tailwindcss.com) config with all batteries included.

## Installation

```shell
yarn add -D tailwindcss @spear-ai/tailwind-config
```

## Usage

Add the following to your `tailwind.config.cjs` file:

```js
import { tailwindConfig as baseTailwindConfig } from "@spear-ai/tailwind-config";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  ...baseTailwindConfig,
};

export default tailwindConfig;
```

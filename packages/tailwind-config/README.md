# @spear-ai/tailwind-config

A [Tailwind CSS](https://tailwindcss.com) config with all batteries included.

## Installation

```shell
yarn add -D tailwindcss @spear-ai/tailwind-config
```

## Usage

Add the following to your `tailwind.config.cjs` file:

```cjs
const baseTailwindConfig = require("@spear-ai/tailwind-config").tailwindConfig;

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  ...baseTailwindConfig,
};

export default tailwindConfig;
```

# @spear-ai/tailwind-config

## 5.0.0

### Major Changes

- [#176](https://github.com/spear-ai/ui/pull/176) [`97ba11a`](https://github.com/spear-ai/ui/commit/97ba11a20424fc2be3f8d8bfccc62c15bdc287cf) Thanks [@psirenny](https://github.com/psirenny)! - Reverted from OKLCH color model and P3 color space to RGB / sRGB.

### Minor Changes

- [#154](https://github.com/spear-ai/ui/pull/154) [`88546d6`](https://github.com/spear-ai/ui/commit/88546d6ba9a359ebe281e8e26e101d62cc20ce73) Thanks [@psirenny](https://github.com/psirenny)! - Added `trigger-width` spacing to Tailwind config.

### Patch Changes

- [#154](https://github.com/spear-ai/ui/pull/154) [`88546d6`](https://github.com/spear-ai/ui/commit/88546d6ba9a359ebe281e8e26e101d62cc20ce73) Thanks [@psirenny](https://github.com/psirenny)! - Reordered Tailwind plugins so that React Aria Components has the highest priority.

- [#149](https://github.com/spear-ai/ui/pull/149) [`1aef84d`](https://github.com/spear-ai/ui/commit/1aef84de312fac948d56f430ce36f5348c4ca234) Thanks [@psirenny](https://github.com/psirenny)! - Updated dependencies.

## 4.1.2

### Patch Changes

- [#135](https://github.com/spear-ai/ui/pull/135) [`9fcd67a`](https://github.com/spear-ai/ui/commit/9fcd67a2cd77ef2293099b9460ad8f5a3ec482ee) Thanks [@psirenny](https://github.com/psirenny)! - Fixed typography variables not applying to the default theme.

- [#134](https://github.com/spear-ai/ui/pull/134) [`d0e84df`](https://github.com/spear-ai/ui/commit/d0e84df8a4a5bbf47d4519d47e37ad629ba85f1b) Thanks [@psirenny](https://github.com/psirenny)! - Updated dependencies.

## 4.1.1

### Patch Changes

- [#131](https://github.com/spear-ai/ui/pull/131) [`cac89e5`](https://github.com/spear-ai/ui/commit/cac89e5cfb0e0525c68055423528640c79212439) Thanks [@psirenny](https://github.com/psirenny)! - Added missing React Aria Components plugin to the Tailwind config.

## 4.1.0

### Minor Changes

- [#122](https://github.com/spear-ai/ui/pull/122) [`292aad6`](https://github.com/spear-ai/ui/commit/292aad6113376e9706fc95b4d265d71f2eb8a9ed) Thanks [@psirenny](https://github.com/psirenny)! - Improved default value for Tailwind Color Theme plugin.

## 4.0.2

### Patch Changes

- [#119](https://github.com/spear-ai/ui/pull/119) [`9a046d8`](https://github.com/spear-ai/ui/commit/9a046d8779a34c0b7e0f4dfbce95946f821193bf) Thanks [@psirenny](https://github.com/psirenny)! - Increased fetch depth of Release GitHub Action workflow.

- [#120](https://github.com/spear-ai/ui/pull/120) [`5bdd326`](https://github.com/spear-ai/ui/commit/5bdd32620b42e26e920436bcecce4667b98375b3) Thanks [@psirenny](https://github.com/psirenny)! - Revert changelog repository rename.

## 4.0.1

### Patch Changes

- [#117](https://github.com/spear-ai/ui/pull/117) [`1bc62e1`](https://github.com/spear-ai/ui/commit/1bc62e12e3df8599f461df5ea7c1c7a04b22e52d) Thanks [@psirenny](https://github.com/psirenny)! - Fixed README usage instructions.

## 4.0.0

### Major Changes

- [#108](https://github.com/spear-ai/ui/pull/108) [`c028b47`](https://github.com/spear-ai/ui/commit/c028b47045f379061538f105351a902f543d0ee7) Thanks [@psirenny](https://github.com/psirenny)! - Refactored Tailwind Theme plugin to take a collection of themes. This is a breaking change. To update, pass in a dictionary. e.g. `themes: { DEFAULT: {} }`.

### Minor Changes

- [#112](https://github.com/spear-ai/ui/pull/112) [`b3d4071`](https://github.com/spear-ai/ui/commit/b3d40710f137f4e23945d0f63cfc7fe06b61d722) Thanks [@psirenny](https://github.com/psirenny)! - Revert group theme selector to `theme-` selector.

- [#109](https://github.com/spear-ai/ui/pull/109) [`b86ff35`](https://github.com/spear-ai/ui/commit/b86ff35b0c457870bbc0275872bd74d65169e7d8) Thanks [@psirenny](https://github.com/psirenny)! - Added support for Radix UI spacing variables.

- [#111](https://github.com/spear-ai/ui/pull/111) [`37fc0e7`](https://github.com/spear-ai/ui/commit/37fc0e7791fd34e0536262455e1a6dc1bc11373c) Thanks [@psirenny](https://github.com/psirenny)! - Use named groups for themes.

### Patch Changes

- [#107](https://github.com/spear-ai/ui/pull/107) [`5697d15`](https://github.com/spear-ai/ui/commit/5697d1538541fee997aa233f3d199c7992790c65) Thanks [@psirenny](https://github.com/psirenny)! - Ensure Yarn install is immutable.

- [#110](https://github.com/spear-ai/ui/pull/110) [`82eec2e`](https://github.com/spear-ai/ui/commit/82eec2ed59ea64b488ab922a15a63a717e53d2e3) Thanks [@psirenny](https://github.com/psirenny)! - Fixed color formatted as HSL instead of OKLCH.

- [#105](https://github.com/spear-ai/ui/pull/105) [`ba38dc7`](https://github.com/spear-ai/ui/commit/ba38dc73198da9a253adde38ccaa328502f5a830) Thanks [@psirenny](https://github.com/psirenny)! - Removed Yarn zero-installs.

## 3.0.0

### Major Changes

- [#102](https://github.com/spear-ai/ui/pull/102) [`da5e417`](https://github.com/spear-ai/ui/commit/da5e41765e2416d557b6c1bfcb82a8fb2f50afb2) Thanks [@psirenny](https://github.com/psirenny)! - Changed Tailwind Config color format from RGB to OKLCH.

- [#96](https://github.com/spear-ai/ui/pull/96) [`c7aadf2`](https://github.com/spear-ai/ui/commit/c7aadf210280bade6306e392971a99b6004ef11d) Thanks [@psirenny](https://github.com/psirenny)! - Updated to Node.js v20.

### Minor Changes

- [#102](https://github.com/spear-ai/ui/pull/102) [`da5e417`](https://github.com/spear-ai/ui/commit/da5e41765e2416d557b6c1bfcb82a8fb2f50afb2) Thanks [@psirenny](https://github.com/psirenny)! - Updated GitHub Actions.

- [#102](https://github.com/spear-ai/ui/pull/102) [`da5e417`](https://github.com/spear-ai/ui/commit/da5e41765e2416d557b6c1bfcb82a8fb2f50afb2) Thanks [@psirenny](https://github.com/psirenny)! - Added support for Radix P3 colors.

### Patch Changes

- [#102](https://github.com/spear-ai/ui/pull/102) [`da5e417`](https://github.com/spear-ai/ui/commit/da5e41765e2416d557b6c1bfcb82a8fb2f50afb2) Thanks [@psirenny](https://github.com/psirenny)! - Updated Node.js dependencies.

- [#103](https://github.com/spear-ai/ui/pull/103) [`5464ab6`](https://github.com/spear-ai/ui/commit/5464ab6b9bacf5eb879f0b1610c9df772f7976ac) Thanks [@psirenny](https://github.com/psirenny)! - Updated Turbo tasks.

- [#97](https://github.com/spear-ai/ui/pull/97) [`2ff74a4`](https://github.com/spear-ai/ui/commit/2ff74a46c2d31dd0867a9106e45462cf8809fe57) Thanks [@psirenny](https://github.com/psirenny)! - Updated to Yarn v4.

## 2.1.0

### Minor Changes

- [#50](https://github.com/spear-ai/ui/pull/50) [`96a728f`](https://github.com/spear-ai/ui/commit/96a728f8aafd720e4905f1681bdc9279fffa6111) Thanks [@psirenny](https://github.com/psirenny)! - Extended Tailwind Typography plugin with theme color.

## 2.0.2

### Patch Changes

- [#41](https://github.com/spear-ai/ui/pull/41) [`c9f970e`](https://github.com/spear-ai/ui/commit/c9f970eb6f92d5f9007e9a45a8612ce949aa783d) Thanks [@psirenny](https://github.com/psirenny)! - Fixed light and dark color names.

## 2.0.1

### Patch Changes

- [#39](https://github.com/spear-ai/ui/pull/39) [`5320db5`](https://github.com/spear-ai/ui/commit/5320db5df1fe4445795b688f80f88bb1a8329d06) Thanks [@psirenny](https://github.com/psirenny)! - Improved TailwindCSS ESLint plugin performance by nesting color steps. ⚡

## 2.0.0

### Major Changes

- [#32](https://github.com/spear-ai/ui/pull/32) [`2f7c014`](https://github.com/spear-ai/ui/commit/2f7c0145880f81d5cd84f955b64a831a4bf4c115) Thanks [@psirenny](https://github.com/psirenny)! - Add `-light` postfix to light Radix colors. For example, `green-a` is now `green-light-a`. This matches the theme color and dark color names.

### Minor Changes

- [#32](https://github.com/spear-ai/ui/pull/32) [`2f7c014`](https://github.com/spear-ai/ui/commit/2f7c0145880f81d5cd84f955b64a831a4bf4c115) Thanks [@psirenny](https://github.com/psirenny)! - Created theme colors to make it easy to customize an application’s appearance.

- [#38](https://github.com/spear-ai/ui/pull/38) [`9bc54b6`](https://github.com/spear-ai/ui/commit/9bc54b637e2bfa19d0ef2c906d488a4aa9aa78a9) Thanks [@psirenny](https://github.com/psirenny)! - Enabled 3D transforms in Tailwind Config.

- [#38](https://github.com/spear-ai/ui/pull/38) [`9bc54b6`](https://github.com/spear-ai/ui/commit/9bc54b637e2bfa19d0ef2c906d488a4aa9aa78a9) Thanks [@psirenny](https://github.com/psirenny)! - Allowed negative scale in Tailwind Config to be able to flip objects in CSS.

- [#32](https://github.com/spear-ai/ui/pull/32) [`2f7c014`](https://github.com/spear-ai/ui/commit/2f7c0145880f81d5cd84f955b64a831a4bf4c115) Thanks [@psirenny](https://github.com/psirenny)! - Add theme colors customizable by Radix color scales. For example, `primary="blue"` and `neutral="gray"`.

### Patch Changes

- [#32](https://github.com/spear-ai/ui/pull/32) [`2f7c014`](https://github.com/spear-ai/ui/commit/2f7c0145880f81d5cd84f955b64a831a4bf4c115) Thanks [@psirenny](https://github.com/psirenny)! - Added missing `inherit` color.

## 1.0.1

### Patch Changes

- [#6](https://github.com/spear-ai/ui/pull/6) [`b80a57d`](https://github.com/spear-ai/ui/commit/b80a57daa04ff76486d935ed3631787312e6acec) Thanks [@psirenny](https://github.com/psirenny)! - Fixed syntax error in Tailwind CSS config’s README.

- [#7](https://github.com/spear-ai/ui/pull/7) [`90917b7`](https://github.com/spear-ai/ui/commit/90917b7d3cf7d3f7e43bcf862e246a98aa53ae95) Thanks [@psirenny](https://github.com/psirenny)! - Removed references to Spear Citizen.

- [#5](https://github.com/spear-ai/ui/pull/5) [`bbd082e`](https://github.com/spear-ai/ui/commit/bbd082ea5a6295e71af0b5870beea4163cf801dc) Thanks [@psirenny](https://github.com/psirenny)! - Removed debug property from Tailwind CSS config. 🐛

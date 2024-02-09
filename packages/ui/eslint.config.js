import {
  baseEslintConfig,
  defaultIgnoreFileList,
  javascriptFamilyFileList,
  nextEslintConfig,
  prettierConfig,
} from "@spear-ai/eslint-config";

const eslintConfig = [
  {
    ignores: [
      "**/.next/*",
      "**/__generated__/*",
      "**/coverage/*",
      "**/dist/*",
      "**/public/*",
      "**/graphql/pothos/__generated__",
      "**/messages/__generated__",
      "**/storybook-static/*",
      "next-env.d.ts",
    ],
  },
  ...baseEslintConfig,
  ...nextEslintConfig,
  prettierConfig,
  {
    files: javascriptFamilyFileList,
    ignores: defaultIgnoreFileList,
    rules: {
      // SWC doesn’t support the RegExp `v` flag yet
      // See: https://github.com/swc-project/swc/issues/8462
      "regexp/require-unicode-sets-regexp": ["off"],
    },
  },
];

export default eslintConfig;

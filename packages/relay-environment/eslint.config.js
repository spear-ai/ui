import { baseEslintConfig, prettierConfig } from "@spear-ai/eslint-config";

/** @type {import("eslint").Linter.FlatConfig} */
const eslintConfig = [
  {
    ignores: ["dist", "node_modules"],
  },
  ...baseEslintConfig,
  prettierConfig,
  {
    files: [
      "**/*.md/**/*.cjs",
      "**/*.md/**/*.js",
      "**/*.md/**/*.jsx",
      "**/*.md/**/*.ts",
      "**/*.md/**/*.tsx",
    ],
    rules: {
      "import/no-unresolved": ["off"],
    },
  },
];

export default eslintConfig;

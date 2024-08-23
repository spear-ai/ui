import {
  baseEslintConfig,
  defaultIgnoreFileList,
  javascriptFamilyInMarkdownFileList,
  prettierConfig,
} from "@spear-ai/eslint-config";

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
  {
    files: javascriptFamilyInMarkdownFileList,
    ignores: defaultIgnoreFileList,
    rules: {
      "@typescript-eslint/no-unnecessary-template-expression": ["off"],
      "@typescript-eslint/prefer-find": ["off"],
      "@typescript-eslint/prefer-regexp-exec": ["off"],
    },
  },
];

export default eslintConfig;

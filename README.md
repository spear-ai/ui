<!-- markdownlint-disable MD033 MD041 -->
<div align="center">
  <p>
    <img alt="Logo" src="ui-logo.svg" width="192">
  </p>
  <p>
    <a href="https://github.com/spear-ai/ui/actions/workflows/check.yaml">
      <img alt="Checks" src="https://github.com/spear-ai/ui/actions/workflows/check.yaml/badge.svg">
    </a>
  </p>
</div>
<!-- markdownlint-restore MD033 MD041 -->

# Spear UI

This is the Spear AI’s UI [monorepo](https://monorepo.tools). Packages are managed with [Turborepo](https://turbo.build/repo) and organized in the `packages/` directory.

## Requirements

- [Yarn package manager](https://yarnpkg.com)
- [Fast Node Manager](https://github.com/Schniz/fnm)

## Installation

```shell
yarn install
```

## Development

Build each package and start each app in dev mode:

```shell
yarn turbo run dev
```

🚀 <http://localhost:6006> (Storybook)

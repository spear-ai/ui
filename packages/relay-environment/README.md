# @spear-ai/relay-environment

General purpose [Relay Environment](https://relay.dev).

## Installation

```shell
yarn add relay-runtime @spear-ai/relay-environment
```

## Usage

Add the following to your React Relay Provider:

```tsx
import { createEnvironment } from "@spear-ai/relay-environment";
import React, { useMemo } from "react";
import { RelayEnvironmentProvider } from "react-relay";

const apiUrl = "/api/graphql";
const environment = createEnvironment({ apiUrl });

export const RelayProvider = (properties: { children: JSX.Element }) => {
  const { children } = properties;
  return <RelayEnvironmentProvider environment={environment}>{children}</RelayEnvironmentProvider>;
};
```

import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export const StorybookContext = createContext<{ portalContainer: Element | undefined }>({
  portalContainer: undefined,
});

export const StorybookProvider = (properties: { children: ReactNode }) => {
  const { children } = properties;
  const [value, setValue] = useState<{ portalContainer: Element | undefined }>({
    portalContainer: undefined,
  });

  useEffect(() => {
    setValue({ portalContainer: document.querySelector("#storybook-portal") ?? undefined });
  }, []);

  return value.portalContainer === undefined ? null : (
    <StorybookContext.Provider value={value}>{children}</StorybookContext.Provider>
  );
};

export const useStorybook = () => useContext(StorybookContext);

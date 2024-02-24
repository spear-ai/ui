"use client";

import { Provider as RadixDirectionProvider } from "@radix-ui/react-direction";
import { Provider as RadixTooltipProvider } from "@radix-ui/react-tooltip";
import { usePreviousDistinct } from "@react-hookz/web";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect } from "react";
import { IntlProvider, ReactIntlErrorCode } from "react-intl";

export const AppProviders = (properties: {
  children: ReactNode;
  direction: "ltr" | "rtl";
  product: string;
}) => {
  const { children, direction, product } = properties;
  const previousProduct = usePreviousDistinct(product);

  useEffect(() => {
    if (previousProduct !== undefined) {
      document.documentElement.classList.remove(`theme-${previousProduct}`);
    }

    document.documentElement.classList.add(`theme-${product}`);
  }, [previousProduct, product]);

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  return (
    <IntlProvider
      locale="en-US"
      onError={(error) => {
        if (error.code !== ReactIntlErrorCode.MISSING_TRANSLATION) {
          // We don’t want to translate messages in stories; however, we still
          // format message strings to make it easy to copy & paste examples.
          console.error(error); // eslint-disable-line no-console
        }
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="dark">
        <RadixDirectionProvider dir={direction}>
          <RadixTooltipProvider>{children}</RadixTooltipProvider>
        </RadixDirectionProvider>
      </ThemeProvider>
    </IntlProvider>
  );
};

"use client";

import { Provider as RadixDirectionProvider } from "@radix-ui/react-direction";
import { Provider as RadixTooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { IntlProvider, ReactIntlErrorCode } from "react-intl";
import { messagesByLocale } from "@/messages/messages";

export const AppProviders = (properties: { children: ReactNode; direction: "ltr" | "rtl" }) => {
  const { children, direction } = properties;
  const messages = messagesByLocale["en-US"];

  return (
    <IntlProvider
      locale="en-US"
      messages={messages}
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

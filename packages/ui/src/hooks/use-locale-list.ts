import { useMemo } from "react";

export const useLocaleList = (localeList: string[]) =>
  useMemo(
    () =>
      localeList
        .map((locale) => ({
          id: locale,
          name:
            new Intl.DisplayNames(locale, { languageDisplay: "standard", type: "language" }).of(locale) ??
            "",
        }))
        .sort((left, right) => left.name.localeCompare(right.name)),
    [localeList],
  );

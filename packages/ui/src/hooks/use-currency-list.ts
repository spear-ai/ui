import { useMemo } from "react";
import { useIntl } from "react-intl";

export const useCurrencyList = (allowedCurrencyCodeList?: string[] | undefined) => {
  const intl = useIntl();
  const currencyCodeList = allowedCurrencyCodeList ?? Intl.supportedValuesOf("currency");

  return useMemo(
    () =>
      currencyCodeList
        .map((currencyCode) => ({
          id: currencyCode,
          name: intl.formatDisplayName(currencyCode, { type: "currency" }) ?? "",
        }))
        .sort((left, right) => left.name.localeCompare(right.name)),
    [currencyCodeList, intl],
  );
};

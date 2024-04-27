import { useMemo } from "react";
import { useIntl } from "react-intl";

export const useRegionList = (regionCodeList: string[]) => {
  const intl = useIntl();

  return useMemo(
    () =>
      regionCodeList
        .map((regionCode) => ({
          id: regionCode,
          name: intl.formatDisplayName(regionCode, { type: "region" }) ?? "",
        }))
        .sort((left, right) => left.name.localeCompare(right.name)),
    [regionCodeList, intl],
  );
};

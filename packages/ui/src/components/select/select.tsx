/* eslint-disable react/jsx-props-no-spreading */
import { cx } from "classix";
import React, { ComponentProps } from "react";
import {
  Select as BaseSelect,
} from "react-aria-components";

export const Select = (
  properties: ComponentProps<typeof BaseSelect> & { className?: string | undefined },
) => {
  const { className = "", ...rest } = properties;
  const mergedClassName = cx("group w-full focus:outline-none", className);
  return <BaseSelect className={mergedClassName} {...rest} />;
};


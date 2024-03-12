/* eslint-disable react/jsx-props-no-spreading */
import { CaretSortIcon } from "@radix-ui/react-icons";
import { cx } from "classix";
import React, { ComponentProps } from "react";
import {
  Button as ButtonPrimitive,
  FieldError as FieldErrorPrimitive,
  Label as LabelPrimitive,
  ListBox as ListBoxPrimitive,
  ListBoxItem as ListBoxItemPrimitive,
  Popover as PopoverPrimitive,
  Select as SelectPrimitive,
  SelectValue as SelectValuePrimitive,
} from "react-aria-components";

export const Select = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("group w-full focus:outline-none", className);
  return <SelectPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

Select.displayName = "Select";

export const SelectListBox = (
  properties: ComponentProps<typeof ListBoxPrimitive> & { className?: string | undefined },
) => {
  const { className = "", ...rest } = properties;
  const mergedClassName = cx("outline-none", className);
  return <ListBoxPrimitive className={mergedClassName} {...rest} />;
};

export const SelectLabel = (
  properties: ComponentProps<typeof LabelPrimitive> & { className?: string | undefined },
) => {
  const { className = "", ...rest } = properties;
  const mergedClassName = cx(
    "block select-none text-base/6 text-neutral-12 group-disabled:text-neutral-11 sm:text-sm/6",
    className,
  );
  return <LabelPrimitive className={mergedClassName} {...rest} />;
};

export const SelectDescription = (properties: { className?: string | undefined; description: string }) => {
  const { className = "", description } = properties;
  const mergedClassName = cx(
    "mt-1 text-base/6 text-neutral-11 group-disabled:text-neutral-9 sm:text-sm/6",
    className,
  );
  return <p className={mergedClassName}>{description}</p>;
};

export const SelectIcon = (properties: { className?: string | undefined }) => {
  const { className = "" } = properties;
  const mergedClassName = cx("text-neutral-11 group-disabled:text-neutral-8", className);
  return (
    <span aria-hidden className={mergedClassName}>
      <CaretSortIcon className="size-5" />
    </span>
  );
};

export const SelectButton = (
  properties: ComponentProps<typeof ButtonPrimitive> & { className?: string | undefined },
) => {
  const { className = "", ...rest } = properties;
  const mergedClassName = cx(
    "group mt-2 inline-flex h-9 w-full cursor-default select-none items-center justify-between gap-1 rounded-lg border border-transparent bg-white-a-3 pe-2 ps-3.5 text-base leading-none shadow outline outline-offset-0 outline-neutral-a-7 entering:outline-2 entering:outline-primary-a-8 group-invalid:outline-x-negative-a-7 group-disabled:pointer-events-none group-invalid:group-disabled:outline-x-negative-a-6 focus-visible:outline-primary-a-8 theme-dfs:bg-canvas-1 theme-galapago:bg-white theme-dfs:dark:bg-white-a-3 theme-forerunner:dark:bg-black-a-3 theme-galapago:dark:bg-black-a-3 sm:ps-3 sm:text-sm",
    className,
  );
  return <ButtonPrimitive className={mergedClassName} {...rest} />;
};

export const SelectValue = (
  properties: ComponentProps<typeof SelectValuePrimitive> & { className?: string | undefined },
) => {
  const { className = "", ...rest } = properties;
  const mergedClassName = cx(
    "truncate text-neutral-12 placeholder-shown:text-neutral-11 group-disabled:text-neutral-a-8",
    className,
  );
  return <SelectValuePrimitive className={mergedClassName} {...rest} />;
};

export const SelectFieldError = (
  properties: ComponentProps<typeof FieldErrorPrimitive> & { className?: string | undefined },
) => {
  const { className = "", ...rest } = properties;
  const mergedClassName = cx(
    "mt-2 block text-base/6 text-x-negative-11 group-disabled:opacity-50 sm:text-sm/6",
    className,
  );
  return <FieldErrorPrimitive className={mergedClassName} {...rest} />;
};

export const SelectPopover = (
  properties: ComponentProps<typeof PopoverPrimitive> & { className?: string | undefined },
) => {
  const { className = "", ...rest } = properties;
  const mergedClassName = cx(
    "isolate min-w-select-trigger-width overflow-auto rounded-xl border-transparent bg-canvas-1 p-1 shadow-lg outline outline-1 outline-offset-0 outline-neutral-a-6 backdrop-blur placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2 entering:duration-100 entering:animate-in entering:fade-in exiting:duration-75 exiting:animate-out exiting:fade-out exiting:zoom-out-95 theme-forerunner:bg-white-a-3 theme-galapago:bg-white theme-underway:shadow-2xl theme-galapago:dark:bg-black-a-3",
    className,
  );
  return <PopoverPrimitive className={mergedClassName} {...rest} />;
};

export const SelectDefaultListBoxItem = (
  properties: ComponentProps<typeof ListBoxItemPrimitive> & { className?: string | undefined },
) => {
  const { className = "", ...rest } = properties;
  const mergedClassName = cx(
    "cursor-default select-none rounded-lg py-2.5 pe-5 ps-2 text-base leading-none text-neutral-11 outline-none hover:bg-primary-4 focus:bg-primary-5 focus:outline-none sm:py-1.5 sm:text-sm",
    className,
  );
  return <ListBoxItemPrimitive className={mergedClassName} {...rest} />;
};

export const SelectListBoxItem = (
  properties: ComponentProps<typeof ListBoxItemPrimitive> & { className?: string | undefined },
) => {
  const { className = "", ...rest } = properties;
  const mergedClassName = cx(
    "group/item relative cursor-default select-none rounded-lg py-2.5 pe-7 ps-2 text-base leading-none text-neutral-12 outline-none hover:bg-primary-4 focus:bg-primary-5 sm:py-1.5 sm:text-sm rtl:text-right",
    className,
  );
  return <ListBoxItemPrimitive className={mergedClassName} {...rest} />;
};

/* eslint-disable react/jsx-props-no-spreading */
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import React, {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  SVGAttributes,
} from "react";
import {
  Button as ButtonPrimitive,
  FieldError as FieldErrorPrimitive,
  Header as HeaderPrimitive,
  Label as LabelPrimitive,
  ListBox as ListBoxPrimitive,
  ListBoxItem as ListBoxItemPrimitive,
  Popover as PopoverPrimitive,
  Section as SectionPrimitive,
  Select as SelectPrimitive,
  SelectValue as SelectValuePrimitive,
  Separator as SeparatorPrimitive,
} from "react-aria-components";
import { cx } from "@/helpers/cx";

export const Select = forwardRef<
  ElementRef<typeof SelectPrimitive>,
  ComponentPropsWithoutRef<typeof SelectPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("group w-full focus:outline-none", className);
  return <SelectPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

Select.displayName = "Select";

export const SelectLabel = forwardRef<
  ElementRef<typeof LabelPrimitive>,
  ComponentPropsWithoutRef<typeof LabelPrimitive>
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "mb-2 block select-none text-base/6 text-neutral-12 group-disabled:text-neutral-11 sm:text-sm/6",
    className,
  );
  return <LabelPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SelectLabel.displayName = "SelectLabel";

export const SelectDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "-mt-1 mb-2 text-base/6 text-neutral-11 group-disabled:text-neutral-9 sm:text-sm/6",
      className,
    );
    return <p className={mergedClassName} {...properties} ref={reference} />;
  },
);

SelectDescription.displayName = "SelectDescription";

export const SelectIcon = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx("text-neutral-11 group-disabled:text-neutral-8", className);
    return (
      <span aria-hidden className={mergedClassName} {...properties} ref={reference}>
        <CaretSortIcon className="size-5" />
      </span>
    );
  },
);

SelectIcon.displayName = "SelectIcon";

export const SelectButton = forwardRef<
  ElementRef<typeof ButtonPrimitive>,
  ComponentPropsWithoutRef<typeof ButtonPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "group inline-flex h-9 w-full cursor-default select-none items-center justify-between gap-1 rounded-lg bg-white-a-3 pe-2 ps-3.5 text-base leading-none shadow outline -outline-offset-1 outline-neutral-a-7 theme-dfs:bg-canvas-1 theme-galapago:bg-white entering:outline-2 entering:outline-primary-a-8 group-invalid:outline-x-negative-a-7 focus-visible:outline-primary-a-8 group-disabled:pointer-events-none group-disabled:bg-neutral-a-3 group-disabled:outline-neutral-a-6 theme-dfs:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:bg-neutral-a-3 theme-galapago:group-disabled:bg-neutral-a-3 group-invalid:group-disabled:outline-x-negative-a-6 theme-dfs:dark:bg-white-a-3 theme-forerunner:dark:bg-black-a-3 theme-galapago:dark:bg-black-a-3 sm:ps-3 sm:text-sm",
    className,
  );
  return <ButtonPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SelectButton.displayName = "SelectButton";

export const SelectValue = forwardRef<
  ElementRef<typeof SelectValuePrimitive>,
  ComponentPropsWithoutRef<typeof SelectValuePrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "truncate text-neutral-12 placeholder-shown:text-neutral-10 group-disabled:text-neutral-a-8",
    className,
  );
  return <SelectValuePrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SelectValue.displayName = "SelectValue";

export const SelectFieldError = forwardRef<
  ElementRef<typeof FieldErrorPrimitive>,
  ComponentPropsWithoutRef<typeof FieldErrorPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "mt-2 block text-base/6 text-x-negative-11 group-disabled:opacity-50 sm:text-sm/6",
    className,
  );
  return <FieldErrorPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SelectFieldError.displayName = "SelectFieldError";

export const SelectPopover = forwardRef<
  ElementRef<typeof PopoverPrimitive>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "isolate min-w-trigger-width overflow-auto rounded-xl border-transparent bg-canvas-1 p-1 shadow-lg outline outline-1 outline-offset-0 outline-neutral-a-6 backdrop-blur theme-forerunner:bg-white-a-3 theme-galapago:bg-white theme-underway:shadow-2xl placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2 entering:duration-100 entering:animate-in entering:fade-in exiting:duration-75 exiting:animate-out exiting:fade-out exiting:zoom-out-95 theme-galapago:dark:bg-black-a-3",
    className,
  );
  return <PopoverPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SelectPopover.displayName = "SelectPopover";

export const SelectSection = forwardRef<
  ElementRef<typeof SectionPrimitive>,
  ComponentPropsWithoutRef<typeof SectionPrimitive>
>((properties, reference) => <SectionPrimitive {...properties} ref={reference} />);

SelectSection.displayName = "SelectSection";

export const SelectSeparator = forwardRef<
  ElementRef<typeof SeparatorPrimitive>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "mx-2 my-1 h-px bg-neutral-a-6 px-4 theme-forerunner:dark:bg-white-a-6",
    className,
  );
  return <SeparatorPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SelectSeparator.displayName = "SelectSeparator";

export const SelectHeader = forwardRef<
  ElementRef<typeof HeaderPrimitive>,
  ComponentPropsWithoutRef<typeof HeaderPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "select-none px-2 pt-2 text-sm/5 font-medium text-neutral-11 sm:text-xs/5",
    className,
  );
  return <HeaderPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SelectHeader.displayName = "SelectHeader";

export const SelectListBox = forwardRef<
  ElementRef<typeof ListBoxPrimitive>,
  ComponentPropsWithoutRef<typeof ListBoxPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("outline-none", className);
  return <ListBoxPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SelectListBox.displayName = "SelectListBox";

export const SelectListBoxItem = forwardRef<
  ElementRef<typeof ListBoxItemPrimitive>,
  ComponentPropsWithoutRef<typeof ListBoxItemPrimitive> & {
    className?: string | undefined;
    isNone?: boolean | undefined;
  }
>(({ className, isNone = false, ...properties }, reference) => {
  const mergedClassName = cx(
    "group/item relative cursor-default select-none rounded-lg py-2.5 pe-7 ps-2 text-base leading-none text-neutral-12 outline-none hover:bg-primary-4 focus:bg-primary-5 sm:py-1.5 sm:text-sm rtl:text-right",
    isNone ? "text-neutral-11" : "",
    className,
  );
  return <ListBoxItemPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SelectListBoxItem.displayName = "SelectListBoxItem";

export const SelectListBoxItemLabel = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  (properties, reference) => <span {...properties} ref={reference} />,
);

SelectListBoxItemLabel.displayName = "SelectListBoxItemLabel";

export const SelectListBoxItemCheck = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "absolute end-1.5 top-1 inline-flex size-6 items-center justify-center p-1 opacity-0 group-selected/item:opacity-100",
      className,
    );
    return <span className={mergedClassName} {...properties} ref={reference} />;
  },
);

SelectListBoxItemCheck.displayName = "SelectListBoxItemCheck";

export const SelectListBoxItemCheckIcon = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGElement> & { asChild?: boolean | undefined }
>(({ asChild = false, className, ...properties }, reference) => {
  const Component = asChild ? Slot : CheckIcon;
  const mergedClassName = cx("h-full w-auto", className);
  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} ref={reference} {...properties} />;
});

SelectListBoxItemCheckIcon.displayName = "SelectListBoxItemCheckIcon";

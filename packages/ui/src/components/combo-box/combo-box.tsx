/* eslint-disable react/jsx-props-no-spreading */
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  ReactNode,
  SVGAttributes,
} from "react";
import {
  Button,
  ComboBox as ComboBoxPrimitive,
  FieldError,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
} from "react-aria-components";
import { cx } from "@/helpers/cx";

export const ComboBox = forwardRef<
  ElementRef<typeof ComboBoxPrimitive>,
  ComponentPropsWithoutRef<typeof ComboBoxPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("group focus:outline-none", className);
  return <ComboBoxPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

ComboBox.displayName = "ComboBox";

export const ComboBoxLabel = forwardRef<
  ElementRef<typeof Label>,
  ComponentPropsWithoutRef<typeof Label> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "mb-2 block select-none text-base/6 text-neutral-12 group-disabled:text-neutral-11 sm:text-sm/6",
    className,
  );
  return <Label className={mergedClassName} {...properties} ref={reference} />;
});

ComboBoxLabel.displayName = "ComboBoxLabel";

export const ComboBoxDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "-mt-1 mb-2 text-base/6 text-neutral-11 group-disabled:text-neutral-9 sm:text-sm/6",
    className,
  );
  return <p className={mergedClassName} {...properties} ref={reference} />;
});

ComboBoxLabel.displayName = "ComboBoxDescription";

export const ComboBoxTrigger = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("relative", className);
  return <div className={mergedClassName} {...properties} ref={reference} />;
});

ComboBoxTrigger.displayName = "ComboBoxTrigger";

export const ComboBoxFieldError = forwardRef<
  ElementRef<typeof FieldError>,
  ComponentPropsWithoutRef<typeof FieldError> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "mt-2 block text-base/6 text-x-negative-11 group-disabled:opacity-50 sm:text-sm/6",
    className,
  );
  return <FieldError className={mergedClassName} {...properties} ref={reference} />;
});

ComboBoxFieldError.displayName = "ComboBoxFieldError";

export const ComboBoxInput = forwardRef<
  ElementRef<typeof Input>,
  ComponentPropsWithoutRef<typeof Input> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "theme-galapago::group-disabled:bg-neutral-a-3 group inline-flex h-9 w-full rounded-lg border border-transparent bg-white-a-3 pe-2 ps-3.5 text-base leading-none text-neutral-12 shadow outline outline-offset-0 outline-neutral-a-7 placeholder:text-neutral-10 entering:outline-2 entering:outline-primary-a-8 group-invalid:outline-x-negative-a-7 focus-visible:outline-primary-a-8 group-disabled:pointer-events-none group-disabled:bg-neutral-a-3 group-disabled:outline-neutral-a-6 group-invalid:group-disabled:outline-x-negative-a-6 theme-dfs:bg-canvas-1 theme-dfs:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:bg-neutral-a-3 theme-galapago:bg-white theme-dfs:dark:bg-white-a-3 theme-forerunner:dark:bg-black-a-3 theme-galapago:dark:bg-black-a-3 sm:ps-3 sm:text-sm",
    className,
  );
  return <Input className={mergedClassName} {...properties} ref={reference} />;
});

ComboBoxInput.displayName = "ComboBoxInput";

export const ComboBoxButton = forwardRef<
  ElementRef<typeof Button>,
  ComponentPropsWithoutRef<typeof Button> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "absolute right-0 top-0 flex h-9 cursor-default items-center rounded-md p-2 text-neutral-11 before:absolute before:inset-1 before:rounded-md before:content-[''] hover:before:bg-neutral-a-4 focus:outline-none group-disabled:text-neutral-8",
    className,
  );
  return <Button className={mergedClassName} {...properties} ref={reference} />;
});

ComboBoxButton.displayName = "ComboBoxButton";

export const ComboBoxIcon = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGElement> & { asChild?: boolean | undefined; className?: string | undefined }
>(({ asChild, className }, reference) => {
  const Component = asChild ? Slot : CaretSortIcon;
  const mergedClassName = cx("relative h-full w-auto", className);
  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} ref={reference} {...properties} />;
});

ComboBoxIcon.displayName = "ComboBoxIcon";

export const ComboBoxPopover = forwardRef<
  ElementRef<typeof Popover>,
  ComponentPropsWithoutRef<typeof Popover> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "isolate min-w-trigger-width overflow-auto rounded-xl border-transparent bg-canvas-1 p-1 shadow-lg outline outline-1 outline-offset-0 outline-neutral-a-6 backdrop-blur placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2 entering:duration-100 entering:animate-in entering:fade-in exiting:duration-75 exiting:animate-out exiting:fade-out exiting:zoom-out-95 theme-forerunner:bg-white-a-3 theme-galapago:bg-white theme-underway:shadow-2xl theme-galapago:dark:bg-black-a-3",
    className,
  );
  return <Popover className={mergedClassName} {...properties} ref={reference} />;
});

ComboBoxPopover.displayName = "ComboBoxPopover";

// The ListBox component supports a generic type, but we don’t use it
// because passing it through `forwardRef(…)` is challenging.
export const ComboBoxListBox = forwardRef<
  ElementRef<typeof ListBox>,
  Omit<ComponentPropsWithoutRef<typeof ListBox>, "children"> & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children?: ReactNode | ((item: any) => ReactNode);
    className?: string | undefined;
  }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("outline-none", className);
  return <ListBox className={mergedClassName} {...properties} ref={reference} />;
});

ComboBoxListBox.displayName = "ComboBoxListBox";

export const ComboBoxListBoxItem = forwardRef<
  ElementRef<typeof ListBoxItem>,
  ComponentPropsWithoutRef<typeof ListBoxItem> & {
    className?: string | undefined;
    isNone?: boolean | undefined;
  }
>(({ className, isNone = false, ...properties }, reference) => {
  const mergedClassName = cx(
    "group/item relative cursor-default select-none rounded-lg py-2.5 pe-7 ps-2 text-base leading-none text-neutral-12 outline-none hover:bg-primary-4 focus:bg-primary-5 focus-visible:bg-primary-5 sm:py-1.5 sm:text-sm rtl:text-right",
    isNone ? "text-neutral-11" : "",
    className,
  );
  return <ListBoxItem className={mergedClassName} {...properties} ref={reference} />;
});

ComboBoxListBoxItem.displayName = "ComboBoxListBoxItem";

export const ComboBoxListBoxItemLabel = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> & { className?: string | undefined }
>((properties, reference) => <span {...properties} ref={reference} />);

ComboBoxListBoxItemLabel.displayName = "ComboBoxListBoxItemLabel";

export const ComboBoxListBoxItemCheck = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "absolute end-1.5 top-2 inline-flex size-4 size-6 items-center justify-center p-1 opacity-0 group-selected/item:opacity-100",
    className,
  );
  return <span className={mergedClassName} {...properties} ref={reference} />;
});

ComboBoxListBoxItemCheck.displayName = "ComboBoxListBoxItemCheck";

export const ComboBoxListBoxItemCheckIcon = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGElement> & { asChild?: boolean | undefined; className?: string | undefined }
>(({ asChild = false, className, ...properties }, reference) => {
  const Component = asChild ? Slot : CheckIcon;
  const mergedClassName = cx("h-full w-auto", className);
  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} ref={reference} {...properties} />;
});

ComboBoxListBoxItemCheckIcon.displayName = "ComboBoxListBoxItemCheckIcon";

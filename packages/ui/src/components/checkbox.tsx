import { CheckIcon, MinusIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes, SVGAttributes } from "react";
import {
  Checkbox as CheckboxPrimitive,
  CheckboxGroup as CheckboxGroupPrimitive,
  Label as LabelPrimitive,
} from "react-aria-components";
import { cx } from "@/helpers/cx";

export const CheckboxGroup = forwardRef<
  ElementRef<typeof CheckboxGroupPrimitive>,
  ComponentPropsWithoutRef<typeof CheckboxGroupPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("group/group", className);
  return <CheckboxGroupPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

CheckboxGroup.displayName = "CheckboxGroup";

export const CheckboxGroupLabel = forwardRef<
  ElementRef<typeof LabelPrimitive>,
  ComponentPropsWithoutRef<typeof LabelPrimitive>
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled/group:text-neutral-11 block select-none text-base/6 sm:text-sm/6",
    className,
  );
  return (
    <LabelPrimitive className={mergedClassName} data-slot="group-label" {...properties} ref={reference} />
  );
});

CheckboxGroupLabel.displayName = "CheckboxGroupLabel";

export const CheckboxGroupDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-11 group-disabled/group:text-neutral-9 mt-1 text-base/6 sm:text-sm/6",
    className,
  );
  return <p className={mergedClassName} data-slot="group-description" {...properties} ref={reference} />;
});

CheckboxGroupLabel.displayName = "CheckboxGroupDescription";

export const CheckboxGroupError = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "text-x-negative-11 group-disabled/group:text-x-negative-9 mt-3 text-sm",
      className,
    );
    return <p className={mergedClassName} data-slot="group-error" {...properties} ref={reference} />;
  },
);

CheckboxGroupError.displayName = "CheckboxGroupError";

export const CheckboxFields = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { asChild?: boolean | undefined }
>(({ asChild = false, className, ...properties }, reference) => {
  const Component = asChild ? Slot : "div";
  const mergedClassName = cx(
    "space-y-3 group-has-[[data-slot=group-description]]/group:mt-3 group-has-[[data-slot=group-label]]/group:mt-3",
    className,
  );
  return <Component aria-hidden className={mergedClassName} ref={reference} {...properties} />;
});

CheckboxFields.displayName = "CheckboxFields";

export const CheckboxField = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { asChild?: boolean | undefined }
>(({ asChild = false, ...properties }, reference) => {
  const Component = asChild ? Slot : "div";
  return <Component aria-hidden ref={reference} {...properties} />;
});

CheckboxField.displayName = "CheckboxField";

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxPrimitive>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitive> & {
    className?: string | undefined;
    isPrimary?: boolean | undefined;
  }
>(({ className, isPrimary = false, ...properties }, reference) => {
  const mergedClassName = cx("group peer inline-flex", className);
  return (
    <CheckboxPrimitive
      className={mergedClassName}
      data-is-primary={isPrimary}
      {...properties}
      ref={reference}
    />
  );
});

Checkbox.displayName = "Checkbox";

export const CheckboxLabel = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "text-neutral-12 group-invalid:text-x-negative-11 group-disabled:text-neutral-11 group-invalid:group-disabled:text-x-negative-9 -mt-1 flex-1 text-sm font-medium leading-6",
      className,
    );
    return <span className={mergedClassName} {...properties} ref={reference} />;
  },
);

CheckboxLabel.displayName = "CheckboxLabel";

export const CheckboxDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "text-neutral-11 peer-disabled:text-neutral-9 ms-7 text-sm leading-6",
      className,
    );
    return <p className={mergedClassName} {...properties} ref={reference} />;
  },
);

CheckboxLabel.displayName = "CheckboxDescription";

export const CheckboxButton = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "border-neutral-a-7 bg-white-a-3 text-neutral-12 theme-dfs:bg-canvas-1 theme-galapago:bg-white group-invalid:border-x-negative-a-7 theme-dfs:group-invalid:border-x-negative-a-7 group-focus-visible:outline-primary-7 group-selected:border-transparent group-selected:bg-primary-9 group-selected:text-primary-contrast theme-forerunner:group-selected:bg-black-a-12 theme-forerunner:group-selected:text-white group-invalid:group-selected:border-x-negative-a-7 group-disabled:border-neutral-a-6 group-disabled:bg-neutral-a-3 group-disabled:text-neutral-a-8 theme-dfs:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:border-neutral-a-6 theme-forerunner:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:text-neutral-a-8 group-invalid:group-disabled:border-x-negative-a-6 theme-forerunner:group-invalid:group-disabled:border-x-negative-a-6 dark:bg-white-a-3 theme-dfs:dark:bg-white-a-3 theme-forerunner:dark:bg-black-a-3 theme-galapago:dark:bg-black-a-3 theme-dfs:group-selected:dark:border-neutral-a-7 theme-forerunner:group-selected:dark:border-neutral-a-7 theme-forerunner:group-selected:dark:bg-primary-a-5 theme-forerunner:group-selected:dark:text-primary-12 theme-galapago:dark:group-selected:bg-primary-a-9 theme-dfs:group-invalid:group-selected:dark:border-x-negative-a-7 theme-forerunner:group-invalid:group-selected:dark:border-x-negative-a-7 theme-galapago:dark:disabled:bg-neutral-a-3 theme-forerunner:group-disabled:dark:border-neutral-a-6 theme-forerunner:group-disabled:dark:bg-neutral-a-3 theme-forerunner:group-disabled:dark:text-neutral-a-8 theme-galapago:group-disabled:dark:bg-neutral-a-3 theme-galapago:group-disabled:dark:text-neutral-a-8 theme-forerunner:group-invalid:group-disabled:dark:border-x-negative-a-6 relative me-3 inline-flex size-4 items-center rounded border group-focus-visible:outline group-focus-visible:outline-2",
      className,
    );
    return <span className={mergedClassName} {...properties} ref={reference} />;
  },
);

CheckboxButton.displayName = "CheckboxButton";

export const CheckboxCheckedIcon = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGElement> & { asChild?: boolean | undefined }
>(({ asChild = false, className, ...properties }, reference) => {
  const Component = asChild ? Slot : CheckIcon;
  const mergedClassName = cx(
    "group-selected:opacity-100 absolute -left-px -top-px size-4 opacity-0 group-indeterminate:!opacity-0",
    className,
  );
  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} ref={reference} {...properties} />;
});

CheckboxCheckedIcon.displayName = "CheckboxCheckedIcon";

export const CheckboxIndeterminateIcon = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGElement> & { asChild?: boolean | undefined }
>(({ asChild = false, className, ...properties }, reference) => {
  const Component = asChild ? Slot : MinusIcon;
  const mergedClassName = cx("group-indeterminate:group-selected:opacity-100 h-full opacity-0", className);
  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} ref={reference} {...properties} />;
});

CheckboxIndeterminateIcon.displayName = "CheckboxIndeterminateIcon";

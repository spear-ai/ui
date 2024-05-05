import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from "react";
import {
  Label as LabelPrimitive,
  Radio as RadioPrimitive,
  RadioGroup as RadioGroupPrimitive,
} from "react-aria-components";
import { cx } from "@/helpers/cx";

export const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("group/group", className);
  return <RadioGroupPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

RadioGroup.displayName = "RadioGroup";

export const RadioGroupLabel = forwardRef<
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

RadioGroupLabel.displayName = "RadioGroupLabel";

export const RadioGroupDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "text-neutral-11 group-disabled/group:text-neutral-9 mt-1 text-base/6 sm:text-sm/6",
      className,
    );
    return <p className={mergedClassName} data-slot="group-description" {...properties} ref={reference} />;
  },
);

RadioGroupLabel.displayName = "RadioGroupDescription";

export const RadioGroupError = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "text-x-negative-11 group-disabled/group:text-x-negative-9 mt-3 text-sm",
      className,
    );
    return <p className={mergedClassName} data-slot="group-error" {...properties} ref={reference} />;
  },
);

RadioGroupError.displayName = "RadioGroupError";

export const RadioFields = forwardRef<
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

RadioFields.displayName = "RadioFields";

export const RadioField = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { asChild?: boolean | undefined }
>(({ asChild = false, ...properties }, reference) => {
  const Component = asChild ? Slot : "div";
  return <Component aria-hidden ref={reference} {...properties} />;
});

RadioField.displayName = "RadioField";

export const Radio = forwardRef<
  ElementRef<typeof RadioPrimitive>,
  ComponentPropsWithoutRef<typeof RadioPrimitive> & {
    className?: string | undefined;
    isPrimary?: boolean | undefined;
  }
>(({ className, isPrimary = false, ...properties }, reference) => {
  const mergedClassName = cx("group peer inline-flex", className);
  return (
    <RadioPrimitive
      className={mergedClassName}
      data-is-primary={isPrimary}
      {...properties}
      ref={reference}
    />
  );
});

Radio.displayName = "Radio";

export const RadioLabel = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "text-neutral-12 group-invalid:text-x-negative-11 group-disabled:text-neutral-11 group-invalid:group-disabled:text-x-negative-9 -mt-1 flex-1 text-sm font-medium leading-6",
      className,
    );
    return <span className={mergedClassName} {...properties} ref={reference} />;
  },
);

RadioLabel.displayName = "RadioLabel";

export const RadioDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "text-neutral-11 peer-disabled:text-neutral-9 ms-7 text-sm leading-6",
      className,
    );
    return <p className={mergedClassName} {...properties} ref={reference} />;
  },
);

RadioLabel.displayName = "RadioDescription";

export const RadioButton = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "border-neutral-a-7 bg-white-a-3 text-neutral-12 theme-dfs:bg-canvas-1 theme-galapago:bg-white group-invalid:border-x-negative-a-7 theme-dfs:group-invalid:border-x-negative-a-7 group-focus-visible:outline-primary-7 group-selected:border-transparent group-selected:bg-primary-9 group-selected:text-primary-contrast theme-forerunner:group-selected:bg-black-a-12 theme-forerunner:group-selected:text-white group-invalid:group-selected:border-x-negative-a-7 group-disabled:border-neutral-a-6 group-disabled:bg-neutral-a-3 group-disabled:text-neutral-a-8 theme-dfs:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:border-neutral-a-6 theme-forerunner:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:text-neutral-a-8 group-invalid:group-disabled:border-x-negative-a-6 theme-forerunner:group-invalid:group-disabled:border-x-negative-a-6 dark:bg-white-a-3 theme-dfs:dark:bg-white-a-3 theme-forerunner:dark:bg-black-a-3 theme-galapago:dark:bg-black-a-3 theme-dfs:group-selected:dark:border-neutral-a-7 theme-forerunner:group-selected:dark:border-neutral-a-7 theme-forerunner:group-selected:dark:bg-primary-a-5 theme-forerunner:group-selected:dark:text-primary-12 theme-galapago:dark:group-selected:bg-primary-a-9 theme-dfs:group-invalid:group-selected:dark:border-x-negative-a-7 theme-forerunner:group-invalid:group-selected:dark:border-x-negative-a-7 theme-galapago:dark:disabled:bg-neutral-a-3 theme-forerunner:group-disabled:dark:border-neutral-a-6 theme-forerunner:group-disabled:dark:bg-neutral-a-3 theme-forerunner:group-disabled:dark:text-neutral-a-8 theme-galapago:group-disabled:dark:bg-neutral-a-3 theme-galapago:group-disabled:dark:text-neutral-a-8 theme-forerunner:group-invalid:group-disabled:dark:border-x-negative-a-6 relative me-3 inline-flex size-4 items-center rounded-full border outline-offset-2 group-focus-visible:outline group-focus-visible:outline-2",
      className,
    );
    return <span className={mergedClassName} {...properties} ref={reference} />;
  },
);

RadioButton.displayName = "RadioButton";

export const RadioDot = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> & { asChild?: boolean | undefined }
>(({ asChild = false, className, ...properties }, reference) => {
  const Component = asChild ? Slot : "span";
  const mergedClassName = cx(
    "group-selected:opacity-100 absolute left-1 top-1 -ms-px -mt-px size-2 rounded-full bg-current opacity-0 group-indeterminate:!opacity-0",
    className,
  );
  return <Component aria-hidden className={mergedClassName} ref={reference} {...properties} />;
});

RadioDot.displayName = "RadioDot";

import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes, useCallback } from "react";
import {
  FieldError as FieldErrorPrimitive,
  Input as InputPrimitive,
  Label as LabelPrimitive,
  NumberField as NumberFieldPrimitive,
} from "react-aria-components";
import { cx } from "@/helpers/cx";

export const NumberField = forwardRef<
  ElementRef<typeof NumberFieldPrimitive>,
  Omit<ComponentPropsWithoutRef<typeof NumberFieldPrimitive>, "onChange" | "value"> & {
    className?: string | undefined;
    /** Handler that is called when the value changes. */
    onChange?: ((value: number | null) => void) | undefined;
    /** The current value (controlled). */
    value?: number | null;
  }
>(({ className, onChange, value, ...properties }, reference) => {
  // React Aria Component’s NumberField represents `undefined` or invalid numbers as NaN.
  //
  // We replace all NaNs with `null` because the ergonomics are better:
  // * TypeScript won’t suggest a number be checked for NaN
  // * TypeScript can’t say whether a number has *already* been checked for NaN
  // * Compatibility with JSON which serializes NaNs to `null` anyway
  //
  // Note: This is an incomplete solution because it doesn’t modify the NumberField’s context.
  // When using the NumberField’s context, one will still need to account for NaN.
  const handleChange = useCallback(
    (rawValue: number) => {
      const value = Number.isNaN(rawValue) ? null : rawValue;

      if (onChange != null) {
        onChange(value);
      }
    },
    [onChange],
  );

  const mergedClassName = cx("group", className);

  return (
    <NumberFieldPrimitive
      className={mergedClassName}
      onChange={handleChange}
      {...(value === undefined ? {} : { value: value ?? Number.NaN })}
      {...properties}
      ref={reference}
    />
  );
});

NumberField.displayName = "NumberField";

export const NumberFieldLabel = forwardRef<
  ElementRef<typeof LabelPrimitive>,
  ComponentPropsWithoutRef<typeof LabelPrimitive>
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled:text-neutral-11 mb-2 block select-none text-base/6 sm:text-sm/6",
    className,
  );
  return <LabelPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

NumberFieldLabel.displayName = "NumberFieldLabel";

export const NumberFieldDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "text-neutral-11 group-disabled:text-neutral-9 -mt-1 mb-2 text-base/6 sm:text-sm/6",
      className,
    );
    return <p className={mergedClassName} {...properties} ref={reference} />;
  },
);

NumberFieldDescription.displayName = "NumberFieldDescription";

export const NumberFieldInput = forwardRef<
  ElementRef<typeof InputPrimitive>,
  ComponentPropsWithoutRef<typeof InputPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "bg-white-a-3 text-neutral-12 outline-neutral-a-7 placeholder:text-neutral-10 theme-dfs:bg-canvas-1 theme-galapago:bg-white invalid:outline-x-negative-a-7 focus-visible:outline-primary-a-8 group-disabled:bg-neutral-a-3 group-disabled:text-neutral-a-8 group-disabled:outline-neutral-a-6 theme-dfs:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:bg-neutral-a-3 theme-galapago:group-disabled:bg-neutral-a-3 group-invalid:group-disabled:outline-x-negative-a-6 dark:bg-white-a-3 theme-dfs:dark:bg-white-a-3 theme-forerunner:dark:bg-black-a-3 theme-galapago:dark:bg-black-a-3 w-full rounded-lg border-none py-1.5 pe-2 ps-3.5 text-base leading-6 shadow outline -outline-offset-1 focus-visible:outline-offset-0 group-disabled:pointer-events-none sm:ps-3 sm:text-sm sm:leading-6",
    className,
  );
  return <InputPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

NumberFieldInput.displayName = "NumberFieldInput";

export const NumberFieldError = forwardRef<
  ElementRef<typeof FieldErrorPrimitive>,
  ComponentPropsWithoutRef<typeof FieldErrorPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-x-negative-11 mt-2 block text-base/6 group-disabled:opacity-50 sm:text-sm/6",
    className,
  );
  return <FieldErrorPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

NumberFieldError.displayName = "NumberFieldError";

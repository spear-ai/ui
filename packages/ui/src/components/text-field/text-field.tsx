/* eslint-disable react/jsx-props-no-spreading */
import { CaretSortIcon } from "@radix-ui/react-icons";
import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from "react";
import {
  FieldError as FieldErrorPrimitive,
  Input as InputPrimitive,
  Label as LabelPrimitive,
  TextField as TextFieldPrimitive,
} from "react-aria-components";
import { cx } from "@/helpers/cx";

export const TextField = forwardRef<
  ElementRef<typeof TextFieldPrimitive>,
  ComponentPropsWithoutRef<typeof TextFieldPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("group", className);
  return <TextFieldPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

TextField.displayName = "TextField";

export const TextFieldLabel = forwardRef<
  ElementRef<typeof LabelPrimitive>,
  ComponentPropsWithoutRef<typeof LabelPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "mb-2 block select-none text-base/6 text-neutral-12 group-disabled:text-neutral-11 sm:text-sm/6",
    className,
  );
  return <LabelPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

TextFieldLabel.displayName = "TextFieldLabel";

export const TextFieldDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "-mt-1 mb-2 text-base/6 text-neutral-11 group-disabled:text-neutral-9 sm:text-sm/6",
    className,
  );
  return <p className={mergedClassName} {...properties} ref={reference} />;
});

TextFieldDescription.displayName = "TextFieldDescription";

export const TextFieldIcon = forwardRef<
  HTMLSpanElement,
  HTMLAttributes<HTMLSpanElement> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("text-neutral-11 group-disabled:text-neutral-8", className);
  return (
    <span aria-hidden className={mergedClassName} {...properties} ref={reference}>
      <CaretSortIcon className="size-5" />
    </span>
  );
});

TextFieldIcon.displayName = "TextFieldIcon";

export const TextFieldInput = forwardRef<
  ElementRef<typeof InputPrimitive>,
  ComponentPropsWithoutRef<typeof InputPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "h-9 w-full rounded-lg border border-transparent bg-white-a-3 pe-2 ps-3.5 text-base leading-none text-neutral-12 shadow outline -outline-offset-1 outline-neutral-a-7 placeholder:text-neutral-10 invalid:outline-x-negative-a-7 focus-visible:outline-offset-0 focus-visible:outline-primary-a-8 group-disabled:pointer-events-none group-disabled:bg-neutral-a-3 group-disabled:text-neutral-a-8 group-disabled:outline-neutral-a-6 group-invalid:group-disabled:outline-x-negative-a-6 theme-dfs:bg-canvas-1 theme-dfs:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:bg-neutral-a-3 theme-galapago:bg-white theme-galapago:group-disabled:bg-neutral-a-3 dark:bg-white-a-3 theme-dfs:dark:bg-white-a-3 theme-forerunner:dark:bg-black-a-3 theme-galapago:dark:bg-black-a-3 sm:ps-3 sm:text-sm",
    className,
  );
  return <InputPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

TextFieldInput.displayName = "TextFieldInput";

export const TextFieldError = forwardRef<
  ElementRef<typeof FieldErrorPrimitive>,
  ComponentPropsWithoutRef<typeof FieldErrorPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "mt-2 block text-base/6 text-x-negative-11 group-disabled:opacity-50 sm:text-sm/6",
    className,
  );
  return <FieldErrorPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

TextFieldError.displayName = "TextFieldError";

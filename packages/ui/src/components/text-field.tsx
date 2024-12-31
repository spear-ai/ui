import { ComponentProps, HTMLAttributes } from "react";
import {
  FieldError as FieldErrorPrimitive,
  Input as InputPrimitive,
  Label as LabelPrimitive,
  TextArea as TextAreaPrimitive,
  TextField as TextFieldPrimitive,
} from "react-aria-components";
import { cx } from "@/helpers/cx";

export const TextField = ({
  className,
  ...properties
}: ComponentProps<typeof TextFieldPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx("group", className);
  return <TextFieldPrimitive className={mergedClassName} {...properties} />;
};

TextField.displayName = "TextField";

export const TextFieldLabel = ({ className, ...properties }: ComponentProps<typeof LabelPrimitive>) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled:text-neutral-11 mb-2 block select-none text-base/6 sm:text-sm/6",
    className,
  );

  return <LabelPrimitive className={mergedClassName} {...properties} />;
};

TextFieldLabel.displayName = "TextFieldLabel";

export const TextFieldDescription = ({ className, ...properties }: HTMLAttributes<HTMLParagraphElement>) => {
  const mergedClassName = cx(
    "text-neutral-11 group-disabled:text-neutral-9 -mt-1 mb-2 text-base/6 sm:text-sm/6",
    className,
  );

  return <p className={mergedClassName} {...properties} />;
};

TextFieldDescription.displayName = "TextFieldDescription";

export const TextFieldInput = ({
  className,
  ...properties
}: ComponentProps<typeof InputPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx(
    "bg-white-a-3 text-neutral-12 outline-neutral-a-7 placeholder:text-neutral-10 theme-dfs:bg-canvas-1 theme-omega:bg-white invalid:outline-x-negative-a-7 focus-visible:outline-primary-a-8 group-disabled:bg-neutral-a-3 group-disabled:text-neutral-a-8 group-disabled:outline-neutral-a-6 theme-dfs:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:bg-neutral-a-3 theme-omega:group-disabled:bg-neutral-a-3 group-invalid:group-disabled:outline-x-negative-a-6 dark:bg-white-a-3 theme-dfs:dark:bg-white-a-3 theme-forerunner:dark:bg-black-a-3 theme-omega:dark:bg-black-a-3 w-full rounded-lg border-none py-1.5 pe-2 ps-3.5 text-base leading-6 shadow outline -outline-offset-1 focus-visible:outline-offset-0 group-disabled:pointer-events-none sm:ps-3 sm:text-sm sm:leading-6",
    className,
  );

  return <InputPrimitive className={mergedClassName} {...properties} />;
};

TextFieldInput.displayName = "TextFieldInput";

export const TextFieldTextArea = ({
  className,
  ...properties
}: ComponentProps<typeof TextAreaPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx(
    "bg-white-a-3 text-neutral-12 outline-neutral-a-7 placeholder:text-neutral-10 theme-dfs:bg-canvas-1 theme-omega:bg-white invalid:outline-x-negative-a-7 focus-visible:outline-primary-a-8 group-disabled:bg-neutral-a-3 group-disabled:text-neutral-a-8 group-disabled:outline-neutral-a-6 theme-dfs:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:bg-neutral-a-3 theme-omega:group-disabled:bg-neutral-a-3 group-invalid:group-disabled:outline-x-negative-a-6 dark:bg-white-a-3 theme-dfs:dark:bg-white-a-3 theme-forerunner:dark:bg-black-a-3 theme-omega:dark:bg-black-a-3 w-full resize-none rounded-lg border-none py-1.5 pe-2 ps-3.5 text-base leading-6 shadow outline -outline-offset-1 focus-visible:outline-offset-0 group-disabled:pointer-events-none sm:ps-3 sm:text-sm sm:leading-6",
    className,
  );

  return <TextAreaPrimitive className={mergedClassName} {...properties} />;
};

TextFieldTextArea.displayName = "TextFieldTextArea";

export const TextFieldError = ({
  className,
  ...properties
}: ComponentProps<typeof FieldErrorPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx(
    "text-x-negative-11 mt-2 block text-base/6 group-disabled:opacity-50 sm:text-sm/6",
    className,
  );

  return <FieldErrorPrimitive className={mergedClassName} {...properties} />;
};

TextFieldError.displayName = "TextFieldError";

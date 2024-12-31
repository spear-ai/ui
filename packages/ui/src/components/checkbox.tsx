import { CheckIcon, MinusIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, forwardRef, HTMLAttributes, SVGAttributes } from "react";
import {
  Checkbox as CheckboxPrimitive,
  CheckboxGroup as CheckboxGroupPrimitive,
  Label as LabelPrimitive,
} from "react-aria-components";
import { cx } from "@/helpers/cx";

export const CheckboxGroup = ({
  className,
  ...properties
}: ComponentProps<typeof CheckboxGroupPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx("group/group", className);
  return <CheckboxGroupPrimitive className={mergedClassName} {...properties} />;
};

CheckboxGroup.displayName = "CheckboxGroup";

export const CheckboxGroupLabel = ({ className, ...properties }: ComponentProps<typeof LabelPrimitive>) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled/group:text-neutral-11 block select-none text-base/6 sm:text-sm/6",
    className,
  );

  return <LabelPrimitive className={mergedClassName} data-slot="group-label" {...properties} />;
};

CheckboxGroupLabel.displayName = "CheckboxGroupLabel";

export const CheckboxGroupDescription = ({
  className,
  ...properties
}: HTMLAttributes<HTMLParagraphElement>) => {
  const mergedClassName = cx(
    "text-neutral-11 group-disabled/group:text-neutral-9 mt-1 text-base/6 sm:text-sm/6",
    className,
  );

  return <p className={mergedClassName} data-slot="group-description" {...properties} />;
};

CheckboxGroupLabel.displayName = "CheckboxGroupDescription";

export const CheckboxGroupError = ({ className, ...properties }: HTMLAttributes<HTMLParagraphElement>) => {
  const mergedClassName = cx(
    "text-x-negative-11 group-disabled/group:text-x-negative-9 mt-3 text-sm",
    className,
  );
  return <p className={mergedClassName} data-slot="group-error" {...properties} />;
};

CheckboxGroupError.displayName = "CheckboxGroupError";

export const CheckboxFields = ({
  asChild = false,
  className,
  ...properties
}: HTMLAttributes<HTMLDivElement> & { asChild?: boolean | undefined }) => {
  const Component = asChild ? Slot : "div";
  const mergedClassName = cx(
    "space-y-3 group-has-[[data-slot=group-description]]/group:mt-3 group-has-[[data-slot=group-label]]/group:mt-3",
    className,
  );

  return <Component aria-hidden className={mergedClassName} {...properties} />;
};

CheckboxFields.displayName = "CheckboxFields";

export const CheckboxField = ({
  asChild = false,
  ...properties
}: HTMLAttributes<HTMLDivElement> & { asChild?: boolean | undefined }) => {
  const Component = asChild ? Slot : "div";
  return <Component aria-hidden {...properties} />;
};

CheckboxField.displayName = "CheckboxField";

export const Checkbox = ({
  className,
  isPrimary = false,
  ...properties
}: ComponentProps<typeof CheckboxPrimitive> & {
  className?: string | undefined;
  isPrimary?: boolean | undefined;
}) => {
  const mergedClassName = cx("group peer inline-flex focus:outline-none", className);
  return <CheckboxPrimitive className={mergedClassName} data-is-primary={isPrimary} {...properties} />;
};

Checkbox.displayName = "Checkbox";

export const CheckboxLabel = ({ className, ...properties }: HTMLAttributes<HTMLSpanElement>) => {
  const mergedClassName = cx(
    "text-neutral-12 group-invalid:text-x-negative-11 group-disabled:text-neutral-11 group-invalid:group-disabled:text-x-negative-9 -mt-1 flex-1 text-sm font-medium leading-6",
    className,
  );

  return <span className={mergedClassName} {...properties} />;
};

CheckboxLabel.displayName = "CheckboxLabel";

export const CheckboxDescription = ({ className, ...properties }: HTMLAttributes<HTMLParagraphElement>) => {
  const mergedClassName = cx(
    "text-neutral-11 peer-disabled:text-neutral-9 ms-7 text-sm leading-6",
    className,
  );

  return <p className={mergedClassName} {...properties} />;
};

CheckboxLabel.displayName = "CheckboxDescription";

export const CheckboxButton = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...properties }) => {
    const mergedClassName = cx(
      "border-neutral-a-7 bg-white-a-3 text-neutral-12 theme-dfs:bg-canvas-1 theme-omega:bg-white group-invalid:border-x-negative-a-7 theme-dfs:group-invalid:border-x-negative-a-7 group-focus-visible:outline-primary-a-8 group-selected:border-transparent group-selected:bg-primary-9 group-selected:text-primary-contrast theme-forerunner:group-selected:bg-black-a-12 theme-forerunner:group-selected:text-white group-invalid:group-selected:border-x-negative-a-7 group-disabled:border-neutral-a-6 group-disabled:bg-neutral-a-3 group-disabled:text-neutral-a-8 theme-dfs:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:border-neutral-a-6 theme-forerunner:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:text-neutral-a-8 group-invalid:group-disabled:border-x-negative-a-6 theme-forerunner:group-invalid:group-disabled:border-x-negative-a-6 dark:bg-white-a-3 theme-dfs:dark:bg-white-a-3 theme-forerunner:dark:bg-black-a-3 theme-omega:dark:bg-black-a-3 theme-dfs:group-selected:dark:border-neutral-a-7 theme-forerunner:group-selected:dark:border-neutral-a-7 theme-forerunner:group-selected:dark:bg-primary-a-5 theme-forerunner:group-selected:dark:text-primary-12 theme-omega:dark:group-selected:bg-primary-a-9 theme-dfs:group-invalid:group-selected:dark:border-x-negative-a-7 theme-forerunner:group-invalid:group-selected:dark:border-x-negative-a-7 theme-omega:dark:disabled:bg-neutral-a-3 theme-forerunner:group-disabled:dark:border-neutral-a-6 theme-forerunner:group-disabled:dark:bg-neutral-a-3 theme-forerunner:group-disabled:dark:text-neutral-a-8 theme-omega:group-disabled:dark:bg-neutral-a-3 theme-omega:group-disabled:dark:text-neutral-a-8 theme-forerunner:group-invalid:group-disabled:dark:border-x-negative-a-6 relative me-3 inline-flex size-4 items-center rounded border outline-offset-2 group-focus-visible:outline group-focus-visible:outline-2",
      className,
    );

    return <span className={mergedClassName} {...properties} />;
  },
);

CheckboxButton.displayName = "CheckboxButton";

export const CheckboxCheckedIcon = ({
  asChild = false,
  className,
  ...properties
}: SVGAttributes<SVGElement> & { asChild?: boolean | undefined }) => {
  const Component = asChild ? Slot : CheckIcon;
  const mergedClassName = cx(
    "group-selected:opacity-100 absolute -left-px -top-px size-4 opacity-0 group-indeterminate:!opacity-0",
    className,
  );

  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} {...properties} />;
};

CheckboxCheckedIcon.displayName = "CheckboxCheckedIcon";

export const CheckboxIndeterminateIcon = ({
  asChild = false,
  className,
  ...properties
}: SVGAttributes<SVGElement> & { asChild?: boolean | undefined }) => {
  const Component = asChild ? Slot : MinusIcon;
  const mergedClassName = cx("group-indeterminate:group-selected:opacity-100 h-full opacity-0", className);
  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} {...properties} />;
};

CheckboxIndeterminateIcon.displayName = "CheckboxIndeterminateIcon";

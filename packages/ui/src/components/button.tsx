"use client";

import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, SVGAttributes } from "react";
import { Button as ButtonPrimitive, Link as LinkPrimitive } from "react-aria-components";
import { Spinner } from "@/components/spinner";
import { cx } from "@/helpers/cx";

const buttonClassName =
  "gap-x-1.5 data-[variant='solid']:disabled:text-neutral-a-8 text-neutral-a-11 data-[variant='solid']:bg-neutral-9 data-[variant='solid']:data-[color='primary']:bg-primary-9 data-[variant='solid']:text-neutral-contrast data-[variant='solid']:data-[color='primary']:text-primary-contrast data-[color='primary']:text-primary-a-11 data-[variant='soft']:bg-neutral-a-3 data-[variant='soft']:data-[color='primary']:bg-primary-3 hover:bg-neutral-a-4 hover:data-[variant='solid']:bg-neutral-10 data-[color='primary']:hover:bg-primary-a-4 hover:data-[variant='solid']:data-[color='primary']:bg-primary-10 pressed:data-[color='primary']:bg-primary-a-5 pressed:bg-neutral-a-5 data-[variant='outline']:outline-neutral-a-7 data-[variant='outline']:focus-visible:outline-primary-a-7 data-[variant='outline']:data-[color='primary']:outline-primary-a-7 data-[color='negative']:hover:bg-negative-a-4 data-[color='negative']:text-negative-a-11 data-[variant='outline']:data-[color='negative']:outline-negative-a-7 data-[variant='soft']:data-[color='negative']:bg-negative-a-3 data-[variant='solid']:data-[color='negative']:text-negative-contrast data-[variant='solid']:data-[color='negative']:bg-negative-9 hover:data-[variant='solid']:data-[color='negative']:bg-negative-10 pressed:data-[color='negative']:bg-negative-a-5 data-[color='x-negative']:hover:bg-x-negative-a-4 data-[color='x-negative']:text-x-negative-a-11 data-[variant='outline']:data-[color='x-negative']:outline-x-negative-a-7 data-[variant='soft']:data-[color='x-negative']:bg-x-negative-a-3 data-[variant='solid']:data-[color='x-negative']:text-x-negative-contrast data-[variant='solid']:data-[color='x-negative']:bg-x-negative-9 hover:data-[variant='solid']:data-[color='x-negative']:bg-x-negative-10 pressed:data-[color='x-negative']:bg-x-negative-a-5 data-[color='positive']:hover:bg-positive-a-4 data-[color='positive']:text-positive-a-11 data-[variant='outline']:data-[color='positive']:outline-positive-a-7 data-[variant='soft']:data-[color='positive']:bg-positive-a-3 data-[variant='solid']:data-[color='positive']:text-positive-contrast data-[variant='solid']:data-[color='positive']:bg-positive-9 hover:data-[variant='solid']:data-[color='positive']:bg-positive-10 pressed:data-[color='positive']:bg-positive-a-5 data-[color='x-positive']:hover:bg-x-positive-a-4 data-[color='x-positive']:text-x-positive-a-11 data-[variant='outline']:data-[color='x-positive']:outline-x-positive-a-7 data-[variant='soft']:data-[color='x-positive']:bg-x-positive-a-3 data-[variant='solid']:data-[color='x-positive']:text-x-positive-contrast data-[variant='solid']:data-[color='x-positive']:bg-x-positive-9 hover:data-[variant='solid']:data-[color='x-positive']:bg-x-positive-10 pressed:data-[color='x-positive']:bg-x-positive-a-5 disabled:text-neutral-a-8 data-[variant='outline']:disabled:outline-neutral-a-6 data-[variant='solid']:disabled:bg-neutral-a-3 data-[variant-'outline']:shadow-sm data-[variant-'soft']:shadow-sm data-[variant-'solid']:shadow-sm group inline-flex cursor-default items-center rounded-md px-2.5 py-1.5 text-sm font-semibold data-[is-skeleton=true]:pointer-events-none data-[is-skeleton=true]:animate-pulse data-[size='large']:px-3 data-[size='large']:py-2 data-[size='small']:px-2 data-[size='small']:py-1 data-[size='x-large']:px-3.5 data-[size='x-large']:py-2.5 data-[size='x-small']:px-2 data-[size='x-small']:py-1 data-[size='x-small']:text-xs data-[variant='outline']:outline data-[variant='outline']:outline-offset-0";

export const Button = forwardRef<
  ElementRef<typeof ButtonPrimitive>,
  ComponentPropsWithoutRef<typeof ButtonPrimitive> & {
    /** The class name. */
    className?: string | undefined;
    /** The color. */
    color?: "negative" | "neutral" | "positive" | "primary" | "x-negative" | "x-positive";
    /** Whether to render as a skeleton loader. */
    isSkeleton?: boolean | undefined;
    /** The size. */
    size?: "large" | "medium" | "small" | "x-large" | "x-small" | undefined;
    /** The variant. */
    variant: "ghost" | "outline" | "soft" | "solid" | undefined;
  }
>(
  (
    { className, color = "neutral", isSkeleton = false, size = "medium", variant = "ghost", ...properties },
    reference,
  ) => {
    const mergedClassName = cx(buttonClassName, className);

    return (
      <ButtonPrimitive
        className={mergedClassName}
        data-color={color}
        data-is-skeleton={isSkeleton}
        data-size={size}
        data-variant={variant}
        {...properties}
        ref={reference}
      />
    );
  },
);

Button.displayName = "Button";

export const LinkButton = forwardRef<
  ElementRef<typeof LinkPrimitive>,
  ComponentPropsWithoutRef<typeof LinkPrimitive> & {
    /** The class name. */
    className?: string | undefined;
    /** The color. */
    color?: "negative" | "neutral" | "positive" | "primary" | "x-negative" | "x-positive";
    /** Whether to render as a skeleton loader. */
    isSkeleton?: boolean | undefined;
    /** The size. */
    size?: "large" | "medium" | "small" | "x-large" | "x-small" | undefined;
    /** The variant. */
    variant: "ghost" | "outline" | "soft" | "solid" | undefined;
  }
>(
  (
    { className, color = "neutral", isSkeleton = false, size = "medium", variant = "ghost", ...properties },
    reference,
  ) => {
    const mergedClassName = cx(buttonClassName, className);

    return (
      <LinkPrimitive
        className={mergedClassName}
        data-color={color}
        data-is-skeleton={isSkeleton}
        data-size={size}
        data-variant={variant}
        {...properties}
        ref={reference}
      />
    );
  },
);

LinkButton.displayName = "LinkButton";

export const ButtonIcon = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGElement> & { asChild?: boolean | undefined }
>(({ asChild = false, className, ...properties }, reference) => {
  const Component = asChild ? Slot : "svg";
  const mergedClassName = cx(
    "size-3 group-data-[size='small']:size-2.5 group-data-[size='x-small']:size-2.5",
    className,
  );
  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} ref={reference} {...properties} />;
});

ButtonIcon.displayName = "ButtonIcon";

export const ButtonSpinner = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGElement> & { asChild?: boolean | undefined }
>(({ asChild = false, className, ...properties }, reference) => {
  const Component = asChild ? Slot : Spinner;
  const mergedClassName = cx(
    "size-4 group-data-[size='large']:size-5 group-data-[size='small']:size-4 group-data-[size='x-large']:size-5 group-data-[size='x-small']:size-3.5",
    className,
  );

  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component className={mergedClassName} ref={reference} {...properties} />;
});

ButtonSpinner.displayName = "ButtonSpinner";

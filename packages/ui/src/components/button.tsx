"use client";

// Import { Slot } from "@radix-ui/react-slot";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  // HTMLAttributes,
  // SVGAttributes,
  // SyntheticEvent,
  // useCallback,
  // useState,
} from "react";
import { Button as ButtonPrimitive } from "react-aria-components";
import { cx } from "@/helpers/cx";

export const Button = forwardRef<
  ElementRef<typeof ButtonPrimitive>,
  ComponentPropsWithoutRef<typeof ButtonPrimitive> & {
    /** The class name (TODO: better description). */
    className?: string | undefined;
    /** The color. */
    color?: "negative" | "neutral" | "positive" | "primary" | "x-negative" | "x-positive";
    /** Whether to render as a skeleton loader. */
    isSkeleton?: boolean | undefined;
    /** The color. */
    size?: "large" | "medium" | "small" | "x-large" | "x-small" | undefined;
    /** The variant. */
    variant: "ghost" | "outline" | "soft" | "solid" | undefined;
  }
>(({ className, color = "neutral", isSkeleton = false, variant = "ghost", ...properties }, reference) => {
  const mergedClassName = cx(
    "data-[variant='solid']:data-[color='primary']:bg-primary-9 data-[variant='solid']:data-[color='x-negative']:bg-x-negative-9 data-[variant='solid']:bg-neutral-9 data-[variant='solid']:hover:bg-neutral-10 data-[variant='solid']:data-[color='primary']:hover:bg-primary-10 data-[variant='solid']:data-[color='x-negative']:hover:bg-x-negative-10 data-[variant='solid']:text-neutral-contrast data-[variant='solid']:data-[color='primary']:text-primary-contrast data-[variant='solid']:data-[color='x-negative']:text-x-negative-contrast data-[variant='soft']:bg-neutral-a-3 data-[variant='soft']:data-[color='primary']:bg-primary-a-3 data-[variant='outline']:outline-neutral-a-7 data-[variant='outline']:focus-visible:outline-primary-a-7 text-neutral-a-11 data-[color='primary']:text-primary-a-11 hover:bg-neutral-a-4 data-[color='primary']:hover:bg-primary-a-4 pressed:bg-neutral-a-5 data-[color='primary']:pressed:bg-primary-a-5 rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm data-[variant='outline']:outline data-[variant='outline']:outline-offset-0",
    className,
  );
  return (
    <ButtonPrimitive
      className={mergedClassName}
      data-color={color}
      data-is-skeleton={isSkeleton}
      data-variant={variant}
      {...properties}
      ref={reference}
    />
  );
});

Button.displayName = "Button";

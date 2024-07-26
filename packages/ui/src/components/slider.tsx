import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes } from "react";
import { Label as LabelPrimitive, Slider as SliderPrimitive } from "react-aria-components";
import { cx } from "@/helpers/cx";

export const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive>,
  ComponentPropsWithoutRef<typeof SliderPrimitive> & {
    className?: string | undefined;
    /** The Slider color. */
    color?: "neutral" | "primary" | undefined;
    /** Whether the Slider range is negative below the origin or positive above the origin. */
    hasValence?: boolean | undefined;
    /** The origin of the Slider track range. */
    originValue?: number | undefined;
    /** The Slider variant. */
    variant?: "soft" | "surface" | undefined;
  }
>(({ className, color = "neutral", hasValence = false, variant = "surface", ...properties }, reference) => {
  const mergedClassName = cx("group", className);
  return (
    <SliderPrimitive
      className={mergedClassName}
      data-color={color}
      data-has-valence={hasValence}
      data-variant={variant}
      {...properties}
      ref={reference}
    />
  );
});

Slider.displayName = "Slider";

export const SliderLabel = forwardRef<
  ElementRef<typeof LabelPrimitive>,
  ComponentPropsWithoutRef<typeof LabelPrimitive>
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled:text-neutral-11 mb-2 block select-none text-base/6 sm:text-sm/6",
    className,
  );
  return <LabelPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SliderLabel.displayName = "SliderLabel";

export const SliderDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "text-neutral-11 group-disabled:text-neutral-9 -mt-1 mb-2 text-base/6 sm:text-sm/6",
      className,
    );
    return <p className={mergedClassName} {...properties} ref={reference} />;
  },
);

SliderDescription.displayName = "SliderDescription";

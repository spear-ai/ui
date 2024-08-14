import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes, useContext } from "react";
import {
  Label as LabelPrimitive,
  Slider as SliderPrimitive,
  SliderOutput as SliderOutputPrimitive,
  SliderStateContext,
  SliderThumb as SliderThumbPrimitive,
  SliderTrack as SliderTrackPrimitive,
} from "react-aria-components";
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

export const SliderLabels = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx("flex flex-wrap items-end justify-between", className);
    return <div className={mergedClassName} {...properties} ref={reference} />;
  },
);

SliderLabels.displayName = "SliderLabels";

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
      "text-neutral-11 group-disabled:text-neutral-9 -mt-1 mb-2 w-full text-base/6 sm:text-sm/6",
      className,
    );
    return <p className={mergedClassName} {...properties} ref={reference} />;
  },
);

SliderDescription.displayName = "SliderDescription";

export const SliderOutput = forwardRef<
  ElementRef<typeof SliderOutputPrimitive>,
  ComponentPropsWithoutRef<typeof SliderOutputPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-11 mb-0.5 ms-auto text-base/6 text-sm tabular-nums sm:text-sm/6",
    className,
  );
  return <SliderOutputPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SliderOutput.displayName = "SliderOutput";

export const SliderTrack = forwardRef<
  ElementRef<typeof SliderTrackPrimitive>,
  ComponentPropsWithoutRef<typeof SliderTrackPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "bg-neutral-a-3 outline-neutral-a-7 relative rounded-full -outline-offset-1 group-data-[orientation=horizontal]:h-2 group-data-[orientation=horizontal]:w-full group-data-[orientation=vertical]:w-2 group-data-[variant=surface]:outline",
    className,
  );
  return <SliderTrackPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SliderTrack.displayName = "SliderTrack";

export const SliderRange = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...properties }, reference) => {
    const state = useContext(SliderStateContext);
    const fill = `${state.getThumbPercent(0) * 100}%`;
    const width = state.orientation === "horizontal" ? fill : "100%";
    const height = state.orientation === "vertical" ? fill : "100%";
    const mergedClassName = cx(
      "outline-neutral-a-7 group-data-[color=primary]:outline-primary-a-7 bg-neutral-9 group-data-[color=primary]:bg-primary-9 absolute bottom-0 start-0 rounded-full -outline-offset-1 group-data-[variant=surface]:outline",
      className,
    );
    // eslint-disable-next-line react/forbid-dom-props
    return <div className={mergedClassName} {...properties} ref={reference} style={{ height, width }} />;
  },
);

SliderTrack.displayName = "SliderRange";

export const SliderThumb = forwardRef<
  ElementRef<typeof SliderThumbPrimitive>,
  ComponentPropsWithoutRef<typeof SliderThumbPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "shadow-neutral-a-9 bg-neutral-9 absolute h-4 w-4 rounded-full bg-white shadow group-data-[orientation=horizontal]:top-1 group-data-[orientation=vertical]:start-1 dark:shadow-none",
    className,
  );
  return <SliderThumbPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SliderThumb.displayName = "SliderThumb";

import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  useContext,
  useMemo,
} from "react";
import {
  Group as SliderGroupPrimitive,
  Label as LabelPrimitive,
  Slider as SliderPrimitive,
  SliderContext,
  SliderOutput as SliderOutputPrimitive,
  SliderStateContext,
  SliderThumb as SliderThumbPrimitive,
  SliderTrack as SliderTrackPrimitive,
} from "react-aria-components";
import { cx } from "@/helpers/cx";

export const SliderExtraContext = createContext<{
  hasValence: boolean;
  originValue: number | null;
}>({
  hasValence: false,
  originValue: null,
});

export const SliderGroup = forwardRef<
  ElementRef<typeof SliderGroupPrimitive>,
  ComponentPropsWithoutRef<typeof SliderGroupPrimitive> & {
    className?: string | undefined;
    /**
     * Whether the slider group is disabled.
     * @selector [data-disabled]
     */
    isDisabled?: boolean | undefined;
  }
>(({ className, isDisabled = false, ...properties }, reference) => {
  const mergedClassName = cx("group/group outline-0", className);
  const context = useMemo(() => ({ isDisabled }), [isDisabled]);
  return (
    <SliderContext.Provider value={context}>
      <SliderGroupPrimitive
        className={mergedClassName}
        isDisabled={isDisabled}
        {...properties}
        ref={reference}
      />
    </SliderContext.Provider>
  );
});

SliderGroup.displayName = "SliderGroup";

export const SliderGroupLabel = forwardRef<
  ElementRef<typeof LabelPrimitive>,
  ComponentPropsWithoutRef<typeof LabelPrimitive>
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled/group:text-neutral-11 mb-2 block select-none text-base/6 sm:text-sm/6",
    className,
  );
  return (
    <LabelPrimitive className={mergedClassName} data-slot="group-label" {...properties} ref={reference} />
  );
});

SliderGroupLabel.displayName = "SliderGroupLabel";

export const SliderGroupDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "text-neutral-11 group-disabled/group:text-neutral-9 -mt-1 mb-2 text-base/6 sm:text-sm/6",
      className,
    );
    return <p className={mergedClassName} data-slot="group-description" {...properties} ref={reference} />;
  },
);

SliderGroupLabel.displayName = "SliderGroupDescription";

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
>(
  (
    {
      className,
      color = "neutral",
      hasValence = false,
      originValue = null,
      variant = "surface",
      ...properties
    },
    reference,
  ) => {
    const extra = useMemo(() => ({ hasValence, originValue }), [hasValence, originValue]);
    const mergedClassName = cx("group", className);
    return (
      <SliderExtraContext.Provider value={extra}>
        <SliderPrimitive
          className={mergedClassName}
          data-color={color}
          data-has-valence={hasValence}
          data-variant={variant}
          {...properties}
          ref={reference}
        />
      </SliderExtraContext.Provider>
    );
  },
);

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

export const SliderInlineLabel = forwardRef<
  ElementRef<typeof LabelPrimitive>,
  ComponentPropsWithoutRef<typeof LabelPrimitive>
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled:text-neutral-11 absolute top-full mt-1 select-none text-sm/6 sm:text-xs/6",
    className,
  );
  return <LabelPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SliderLabel.displayName = "SliderInlineLabel";

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
    "text-neutral-11 block text-end text-base/6 tabular-nums group-data-[orientation=horizontal]:ms-auto sm:text-sm/6",
    className,
  );
  return <SliderOutputPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SliderOutput.displayName = "SliderOutput";

export const SliderInlineOutput = forwardRef<
  ElementRef<typeof SliderOutputPrimitive>,
  ComponentPropsWithoutRef<typeof SliderOutputPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "group-disabled:text-neutral-10 text-neutral-11 absolute -top-7 mb-1 inline-flex whitespace-nowrap text-sm/6 tabular-nums group-data-[orientation=horizontal]:ms-auto sm:text-xs/6",
    className,
  );
  return <SliderOutputPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SliderOutput.displayName = "SliderInlineOutput";

export const SliderField = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx("", className);
    return <div className={mergedClassName} {...properties} ref={reference} />;
  },
);

SliderField.displayName = "SliderField";

export const SliderTrack = forwardRef<
  ElementRef<typeof SliderTrackPrimitive>,
  ComponentPropsWithoutRef<typeof SliderTrackPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "before:bg-neutral-a-3 before:outline-neutral-a-7 before:group-disabled:outline-neutral-a-6 relative before:absolute before:h-full before:w-full before:rounded-full before:outline-1 before:-outline-offset-1 before:content-[''] group-data-[orientation=horizontal]:h-2 group-data-[orientation=horizontal]:w-full group-data-[orientation=vertical]:w-2 before:group-data-[orientation=horizontal]:top-1/2 before:group-data-[orientation=horizontal]:-translate-y-1/2 before:group-data-[variant=surface]:outline",
    className,
  );
  return <SliderTrackPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SliderTrack.displayName = "SliderTrack";

export const SliderFill = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, style, ...properties }, reference) => {
    const state = useContext(SliderStateContext);
    const extra = useContext(SliderExtraContext);
    let valence = "";
    let size = 0;
    let offset = 0;

    if (state.values.length === 2) {
      const thumbDistance1 = 100 * state.getThumbPercent(0);
      const thumbDistance2 = 100 * state.getThumbPercent(1);
      size = Math.abs(thumbDistance2 - thumbDistance1);
      offset = Math.min(thumbDistance1, thumbDistance2);
    } else {
      const minValue = state.getThumbMinValue(0);
      const maxValue = state.getThumbMaxValue(0);
      const thumbDistance = 100 * state.getThumbPercent(0);
      const originValue = extra.originValue ?? minValue;
      const originDistance = 100 * (Math.abs(originValue - minValue) / Math.abs(maxValue - minValue));
      size = Math.abs(thumbDistance - originDistance);
      offset = Math.min(thumbDistance, originDistance);

      if (extra.hasValence) {
        if (size === 0) {
          valence = "neutral";
        } else {
          valence = thumbDistance > originDistance ? "x-positive" : "x-negative";
        }
      }
    }

    const mergedClassName = cx(
      "before:data-[valence=x-negative]:bg-x-negative-9 before:data-[valence=x-negative]:outline-x-negative-a-7 before:data-[valence=x-positive]:bg-x-positive-9 before:data-[valence=x-positive]:outline-x-positive-a-7 before:group-disabled:outline-neutral-a-6 before:data-[valence=x-negative]:group-disabled:outline-x-negative-a-6 before:data-[valence=x-positive]:group-disabled:outline-x-positive-a-6 before:outline-neutral-a-7 before:group-data-[color=primary]:outline-primary-a-7 before:bg-neutral-9 before:group-data-[color=primary]:bg-primary-9 before:data-[valence=x-negative]:group-disabled:bg-x-negative-3 before:data-[valence=x-positive]:group-disabled:bg-x-positive-3 before:group-disabled:bg-neutral-3 absolute before:absolute before:inset-0 before:rounded-full before:outline-1 before:-outline-offset-1 before:content-[''] before:group-data-[variant=surface]:outline",
      className,
    );

    const mergedStyle = {
      ...style,
      bottom: state.orientation === "vertical" ? `${offset}%` : "0%",
      height: state.orientation === "vertical" ? `${size}%` : "100%",
      insetInlineStart: state.orientation === "vertical" ? "0%" : `${offset}%`,
      width: state.orientation === "vertical" ? "100%" : `${size}%`,
    };

    console.log({
      mergedStyle,
      offset,
      size,
      valence,
      values: state.values,
    });

    return (
      <div
        className={mergedClassName}
        data-valence={valence}
        {...properties}
        ref={reference}
        // eslint-disable-next-line react/forbid-dom-props
        style={mergedStyle}
      />
    );
  },
);

export const SliderThumb = forwardRef<
  ElementRef<typeof SliderThumbPrimitive>,
  ComponentPropsWithoutRef<typeof SliderThumbPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "group-disabled:bg-neutral-2 group-disabled:outline-neutral-6 absolute size-4 origin-top-left rounded-full bg-white shadow group-disabled:outline group-disabled:outline-1 group-disabled:-outline-offset-1 group-data-[orientation=horizontal]:top-1/2 group-data-[orientation=vertical]:start-1",
    className,
  );
  return <SliderThumbPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

SliderThumb.displayName = "SliderThumb";

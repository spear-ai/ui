import { ComponentProps, createContext, CSSProperties, HTMLAttributes, useContext, useMemo } from "react";
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

export const SliderGroup = ({
  className,
  isDisabled = false,
  ...properties
}: ComponentProps<typeof SliderGroupPrimitive> & {
  className?: string | undefined;
  /**
   * Whether the slider group is disabled.
   * @selector [data-disabled]
   */
  isDisabled?: boolean | undefined;
}) => {
  const mergedClassName = cx("group/group outline-0", className);
  const context = useMemo(() => ({ isDisabled }), [isDisabled]);
  return (
    <SliderContext.Provider value={context}>
      <SliderGroupPrimitive className={mergedClassName} isDisabled={isDisabled} {...properties} />
    </SliderContext.Provider>
  );
};

SliderGroup.displayName = "SliderGroup";

export const SliderGroupLabel = ({ className, ...properties }: ComponentProps<typeof LabelPrimitive>) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled/group:text-neutral-11 mb-2 block select-none text-base/6 sm:text-sm/6",
    className,
  );

  return <LabelPrimitive className={mergedClassName} data-slot="group-label" {...properties} />;
};

SliderGroupLabel.displayName = "SliderGroupLabel";

export const SliderGroupDescription = ({
  className,
  ...properties
}: HTMLAttributes<HTMLParagraphElement>) => {
  const mergedClassName = cx(
    "text-neutral-11 group-disabled/group:text-neutral-9 -mt-1 mb-2 text-base/6 sm:text-sm/6",
    className,
  );

  return <p className={mergedClassName} data-slot="group-description" {...properties} />;
};

SliderGroupLabel.displayName = "SliderGroupDescription";

export const Slider = ({
  className,
  color = "neutral",
  hasValence = false,
  originValue = null,
  variant = "surface",
  ...properties
}: ComponentProps<typeof SliderPrimitive> & {
  className?: string | undefined;
  /** The Slider color. */
  color?: "neutral" | "primary" | undefined;
  /** Whether the Slider range is negative below the origin or positive above the origin. */
  hasValence?: boolean | undefined;
  /** The origin of the Slider track range. */
  originValue?: number | null | undefined;
  /** The Slider variant. */
  variant?: "soft" | "surface" | undefined;
}) => {
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
      />
    </SliderExtraContext.Provider>
  );
};

Slider.displayName = "Slider";

export const SliderLabels = ({ className, ...properties }: HTMLAttributes<HTMLDivElement>) => {
  const mergedClassName = cx("flex flex-wrap items-end justify-between", className);
  return <div className={mergedClassName} {...properties} />;
};

SliderLabels.displayName = "SliderLabels";

export const SliderLabel = ({ className, ...properties }: ComponentProps<typeof LabelPrimitive>) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled:text-neutral-11 mb-2 block select-none text-base/6 sm:text-sm/6",
    className,
  );

  return <LabelPrimitive className={mergedClassName} {...properties} />;
};

SliderLabel.displayName = "SliderLabel";

export const SliderAddonLabel = ({ className, ...properties }: ComponentProps<typeof LabelPrimitive>) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled:text-neutral-11 mt-1 inline-block select-none whitespace-nowrap text-sm/6 group-data-[orientation=vertical]:order-last group-data-[orientation=vertical]:text-center sm:text-xs/6",
    className,
  );

  return <LabelPrimitive className={mergedClassName} {...properties} />;
};

SliderLabel.displayName = "SliderAddonLabel";

export const SliderDescription = ({ className, ...properties }: HTMLAttributes<HTMLParagraphElement>) => {
  const mergedClassName = cx(
    "text-neutral-11 group-disabled:text-neutral-9 -mt-1 mb-2 w-full text-base/6 sm:text-sm/6",
    className,
  );

  return <p className={mergedClassName} {...properties} />;
};

SliderDescription.displayName = "SliderDescription";

export const SliderOutput = ({
  className,
  ...properties
}: ComponentProps<typeof SliderOutputPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx(
    "text-neutral-11 block text-end text-base/6 tabular-nums group-data-[orientation=horizontal]:ms-auto sm:text-sm/6",
    className,
  );

  return <SliderOutputPrimitive className={mergedClassName} {...properties} />;
};

SliderOutput.displayName = "SliderOutput";

export const SliderAddonOutput = ({
  className,
  ...properties
}: ComponentProps<typeof SliderOutputPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx(
    "group-disabled:text-neutral-10 text-neutral-11 mb-1 inline-block whitespace-nowrap text-sm/6 tabular-nums group-data-[orientation=vertical]:order-first group-data-[orientation=horizontal]:ms-auto group-data-[orientation=vertical]:text-center sm:text-xs/6",
    className,
  );

  return <SliderOutputPrimitive className={mergedClassName} {...properties} />;
};

SliderOutput.displayName = "SliderAddonOutput";

export const SliderTrackGroup = ({ className, ...properties }: HTMLAttributes<HTMLDivElement>) => {
  const mergedClassName = cx(
    "items-center group-data-[orientation=horizontal]:flex group-data-[orientation=vertical]:inline-flex group-data-[orientation=vertical]:flex-col",
    className,
  );

  return <div className={mergedClassName} {...properties} />;
};

SliderTrackGroup.displayName = "SliderTrackGroup";

export const SliderTrack = ({
  className,
  ...properties
}: ComponentProps<typeof SliderTrackPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx(
    "before:bg-neutral-a-3 before:outline-neutral-a-7 before:group-disabled:outline-neutral-a-6 relative before:absolute before:h-full before:w-full before:rounded-full before:outline-1 before:-outline-offset-1 before:content-[''] group-data-[orientation=horizontal]:h-2 group-data-[orientation=horizontal]:w-full group-data-[orientation=vertical]:w-2 before:group-data-[orientation=horizontal]:top-1/2 before:group-data-[orientation=horizontal]:-translate-y-1/2 before:group-data-[variant=surface]:outline",
    className,
  );

  return <SliderTrackPrimitive className={mergedClassName} {...properties} />;
};

SliderTrack.displayName = "SliderTrack";

export const SliderFill = ({ className, style, ...properties }: HTMLAttributes<HTMLDivElement>) => {
  const state = useContext(SliderStateContext);
  const extra = useContext(SliderExtraContext);
  let valence = "";
  let size = 0;
  let offset = 0;

  if (state?.values.length === 2) {
    const thumbDistance1 = 100 * state.getThumbPercent(0);
    const thumbDistance2 = 100 * state.getThumbPercent(1);
    size = Math.abs(thumbDistance2 - thumbDistance1);
    offset = Math.min(thumbDistance1, thumbDistance2);
  } else if (state?.values.length === 1) {
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

  const mergedStyle: CSSProperties = {
    ...style,
    bottom: state?.orientation === "vertical" ? `${offset}%` : "0%",
    height: state?.orientation === "vertical" ? `${size}%` : "100%",
    insetInlineStart: state?.orientation === "vertical" ? "0%" : `${offset}%`,
    width: state?.orientation === "vertical" ? "100%" : `${size}%`,
  };

  return (
    <div
      className={mergedClassName}
      data-valence={valence}
      {...properties}
      // eslint-disable-next-line react/forbid-dom-props
      style={mergedStyle}
    />
  );
};

export const SliderThumb = ({
  className,
  style,
  ...properties
}: ComponentProps<typeof SliderThumbPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx(
    "group-disabled:bg-neutral-2 group-disabled:outline-neutral-6 absolute size-4 rounded-full bg-white shadow group-disabled:outline group-disabled:outline-1 group-disabled:-outline-offset-1 group-data-[orientation=horizontal]:top-1/2 group-data-[orientation=vertical]:start-1 group-data-[orientation=horizontal]:-translate-x-1/2 group-data-[orientation=horizontal]:-translate-y-1/2 group-data-[orientation=vertical]:-translate-y-1/2 ltr:group-data-[orientation=vertical]:-translate-x-1/2 rtl:group-data-[orientation=vertical]:translate-x-1/2",
    className,
  );

  const mergedStyle: CSSProperties = {
    transform: "",
    ...style,
  };

  return (
    <SliderThumbPrimitive
      className={mergedClassName}
      {...properties}
      // eslint-disable-next-line react/forbid-component-props
      style={mergedStyle}
    />
  );
};

SliderThumb.displayName = "SliderThumb";

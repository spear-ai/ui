import {
  Slider,
  SliderAddonLabel,
  SliderAddonOutput,
  SliderFill,
  SliderGroup,
  SliderGroupDescription,
  SliderGroupLabel,
  SliderThumb,
  SliderTrack,
  SliderTrackGroup,
} from "@spear-ai/ui/components/slider";
import { cx } from "@spear-ai/ui/helpers/cx";
import type { Meta, StoryObj } from "@storybook/react";
import { useMemo } from "react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";
import { getDefaultSliderValue } from "@/helpers/get-default-slider-value";
import { getUniqueSliderKey } from "@/helpers/get-unique-slider-key";

const PreviewSliderGroup = (properties: {
  color: "neutral" | "primary";
  firstSliderIsDisabled: boolean;
  groupIsDisabled: boolean;
  hasFill: boolean;
  hasGroupLabel: boolean;
  hasGroupLabelDescription: boolean;
  hasLabel: boolean;
  hasOrigin: boolean;
  hasOutput: boolean;
  hasValence: boolean;
  isRange: boolean;
  isSquished: boolean;
  maxValue: number;
  minValue: number;
  originValue: number;
  step: number;
  thumbShape: "circle" | "pill" | "square";
  variant: "soft" | "surface";
}) => {
  const {
    color,
    firstSliderIsDisabled,
    groupIsDisabled,
    hasFill,
    hasGroupLabel,
    hasGroupLabelDescription,
    hasLabel,
    hasOrigin,
    hasOutput,
    hasValence,
    isRange,
    isSquished,
    maxValue,
    minValue,
    originValue,
    step,
    thumbShape,
    variant,
  } = properties;
  const intl = useIntl();

  let thumbShapeClassName = "";

  switch (thumbShape) {
    case "pill": {
      thumbShapeClassName = "h-5 w-2.5 rotate-90";
      break;
    }
    case "square": {
      thumbShapeClassName = "rounded-sm";
      break;
    }
    default: {
      break;
    }
  }

  const defaultValue = useMemo(
    () =>
      getDefaultSliderValue({
        isRange,
        maxValue,
        minValue,
      }),
    [isRange, maxValue, minValue],
  );

  const defaultKey = useMemo(
    () =>
      getUniqueSliderKey({
        isRange,
        maxValue,
        minValue,
      }),
    [isRange, maxValue, minValue],
  );

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form className="relative w-full">
        <SliderGroup className="w-full" isDisabled={groupIsDisabled}>
          {hasGroupLabel ? (
            <SliderGroupLabel>
              {intl.formatMessage({
                defaultMessage: "Yearly budget",
                id: "2BAYgQ",
              })}
            </SliderGroupLabel>
          ) : null}
          {hasGroupLabel && hasGroupLabelDescription ? (
            <SliderGroupDescription>
              {intl.formatMessage({
                defaultMessage: "Don’t worry, it’s other peoples money.",
                id: "6olAwT",
              })}
            </SliderGroupDescription>
          ) : null}
          <div className="relative w-full">
            <ol
              aria-hidden
              className={cx(
                "pointer-events-none absolute inset-x-0 divide-y divide-dotted divide-neutral-a-6",
                hasLabel ? "bottom-7" : undefined,
                hasOutput ? "top-7" : undefined,
              )}
            >
              {Array.from({ length: 14 }, (_, index) => (
                <li className="h-4 w-full" key={index} />
              ))}
            </ol>
            <div className="flex w-full justify-around overflow-auto">
              {Array.from({ length: 5 }, (_, index) => (
                <Slider
                  className="relative mx-2 inline-flex flex-col items-center justify-center"
                  color={color}
                  defaultValue={defaultValue}
                  hasValence={isRange ? false : hasValence}
                  isDisabled={groupIsDisabled || (index === 0 ? firstSliderIsDisabled : false)}
                  key={`${index}-${defaultKey}`}
                  maxValue={maxValue}
                  minValue={minValue}
                  orientation="vertical"
                  originValue={hasOrigin ? originValue : minValue}
                  step={step}
                  variant={variant}
                >
                  <SliderTrackGroup>
                    {hasLabel ? (
                      <SliderAddonLabel className="mt-1">
                        {intl.formatMessage(
                          {
                            defaultMessage: "FY{year}",
                            id: "kReONT",
                          },
                          {
                            year: index + 25,
                          },
                        )}
                      </SliderAddonLabel>
                    ) : null}
                    <SliderTrack className="h-56 before:rounded-sm">
                      {hasFill ? <SliderFill /> : null}
                      <SliderThumb className={thumbShapeClassName} index={0} />
                      {isRange ? <SliderThumb className={thumbShapeClassName} index={1} /> : null}
                    </SliderTrack>
                    {hasOutput ? (
                      <SliderAddonOutput className="relative mb-1 size-6">
                        {({ state }) => (
                          <span className="absolute ltr:-translate-x-1/2 rtl:translate-x-1/2">
                            {state.values.length === 1
                              ? intl.formatNumber(state.values[0] ?? 0, {
                                  currency: "USD",
                                  maximumFractionDigits: 0,
                                  minimumFractionDigits: 0,
                                  signDisplay: "exceptZero",
                                  style: "currency",
                                })
                              : intl.formatMessage(
                                  {
                                    defaultMessage: "{lower}–{upper}",
                                    id: "zfZnaF",
                                  },
                                  {
                                    lower: intl.formatNumber(state.values[0] ?? 0, {
                                      currency: "USD",
                                      maximumFractionDigits: 0,
                                      minimumFractionDigits: 0,
                                      style: "currency",
                                    }),
                                    upper: intl.formatNumber(state.values[1] ?? 0, {
                                      currency: "USD",
                                      maximumFractionDigits: 0,
                                      minimumFractionDigits: 0,
                                      style: "currency",
                                    }),
                                  },
                                )}
                          </span>
                        )}
                      </SliderAddonOutput>
                    ) : null}
                  </SliderTrackGroup>
                </Slider>
              ))}
            </div>
          </div>
        </SliderGroup>
      </Form>
    </div>
  );
};

const meta = {
  component: PreviewSliderGroup,
} satisfies Meta<typeof PreviewSliderGroup>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "neutral",
    firstSliderIsDisabled: false,
    groupIsDisabled: false,
    hasFill: true,
    hasGroupLabel: true,
    hasGroupLabelDescription: true,
    hasLabel: true,
    hasOrigin: true,
    hasOutput: true,
    hasValence: true,
    isRange: false,
    isSquished: false,
    maxValue: 200,
    minValue: -100,
    originValue: 0,
    step: 1,
    thumbShape: "pill",
    variant: "soft",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["neutral", "primary"],
    },
    thumbShape: {
      control: { type: "select" },
      options: ["circle", "pill", "square"],
    },
    variant: {
      control: { type: "select" },
      options: ["soft", "surface"],
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

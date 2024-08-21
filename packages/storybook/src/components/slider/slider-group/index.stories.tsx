import {
  Slider,
  SliderFill,
  SliderGroup,
  SliderGroupDescription,
  SliderGroupLabel,
  SliderInlineLabel,
  SliderInlineOutput,
  SliderThumb,
  SliderTrack,
} from "@spear-ai/ui/components/slider";
import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewSliderGroup = (properties: {
  color: "neutral" | "primary";
  firstSliderIsDisabled: boolean;
  groupIsDisabled: boolean;
  hasFill: boolean;
  hasLabel: boolean;
  hasLabelDescription: boolean;
  hasValence: boolean;
  isRange: boolean;
  isSquished: boolean;
  maximumValue: number;
  minimumValue: number;
  originValue: number;
  thumbShape: "circle" | "pill" | "square";
  variant: "soft" | "surface";
}) => {
  const {
    color,
    firstSliderIsDisabled,
    groupIsDisabled,
    hasFill,
    hasLabel,
    hasLabelDescription,
    hasValence,
    isRange,
    isSquished,
    maximumValue,
    minimumValue,
    originValue,
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

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form className="relative w-full">
        <SliderGroup className="w-full" isDisabled={groupIsDisabled}>
          {hasLabel ? (
            <SliderGroupLabel>
              {intl.formatMessage({
                defaultMessage: "Yearly budget",
                id: "2BAYgQ",
              })}
            </SliderGroupLabel>
          ) : null}
          {hasLabel && hasLabelDescription ? (
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
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="divide-neutral-a-6 pointer-events-none absolute inset-x-0 inset-y-7 divide-y divide-dotted"
            >
              {Array.from({ length: 14 }, (_, index) => (
                <li className="h-4 w-full" key={index} />
              ))}
            </ol>
            <div className="flex w-full justify-around overflow-auto py-7">
              {Array.from({ length: 5 }, (_, index) => (
                <Slider
                  className="relative mx-5 inline-flex flex-col items-center justify-center"
                  color={color}
                  defaultValue={isRange ? [-25, 25] : 0}
                  hasValence={isRange ? false : hasValence}
                  isDisabled={groupIsDisabled || (index === 0 ? firstSliderIsDisabled : false)}
                  key={`${index}-${isRange}`}
                  maxValue={maximumValue}
                  minValue={minimumValue}
                  orientation="vertical"
                  originValue={originValue}
                  variant={variant}
                >
                  <SliderInlineLabel>
                    {intl.formatMessage(
                      {
                        defaultMessage: "FY{year}",
                        id: "kReONT",
                      },
                      {
                        year: index + 25,
                      },
                    )}
                  </SliderInlineLabel>
                  <SliderTrack className="h-56 before:rounded-sm">
                    {hasFill ? <SliderFill /> : null}
                    <SliderThumb className={thumbShapeClassName} index={0} />
                    {isRange ? <SliderThumb className={thumbShapeClassName} index={1} /> : null}
                  </SliderTrack>
                  <SliderInlineOutput>
                    {({ state }) =>
                      state.values.length === 1
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
                          )
                    }
                  </SliderInlineOutput>
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

export const Standard: Story = {
  args: {
    color: "neutral",
    firstSliderIsDisabled: false,
    groupIsDisabled: false,
    hasFill: true,
    hasLabel: true,
    hasLabelDescription: true,
    hasValence: true,
    isRange: false,
    isSquished: false,
    maximumValue: 200,
    minimumValue: -100,
    originValue: 0,
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

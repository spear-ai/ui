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

const PreviewSlider = (properties: {
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
                defaultMessage: "Budget",
                id: "0KKXrH",
              })}
            </SliderGroupLabel>
          ) : null}
          {hasLabel && hasLabelDescription ? (
            <SliderGroupDescription>
              {intl.formatMessage({
                defaultMessage: "Don’t worry, it’s other peoples money",
                id: "5G09fG",
              })}
            </SliderGroupDescription>
          ) : null}
          <div className="relative flex w-full justify-around py-7">
            <ol
              aria-hidden
              className="divide-neutral-a-6 absolute inset-x-0 inset-y-7 divide-y divide-dotted"
            >
              {Array.from({ length: 14 }, (_, index) => (
                <li className="h-4 w-full" key={index} />
              ))}
            </ol>
            {Array.from({ length: 5 }, (_, index) => (
              <Slider
                className="relative inline-flex flex-col items-center justify-center"
                color={color}
                defaultValue={isRange ? [15, 85] : 50}
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
        </SliderGroup>
      </Form>
    </div>
  );
};

const meta = {
  component: PreviewSlider,
} satisfies Meta<typeof PreviewSlider>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    color: "neutral",
    firstSliderIsDisabled: false,
    groupIsDisabled: false,
    hasFill: true,
    hasLabel: true,
    hasLabelDescription: true,
    hasValence: false,
    isRange: false,
    isSquished: false,
    maximumValue: 200,
    minimumValue: -100,
    originValue: 50,
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

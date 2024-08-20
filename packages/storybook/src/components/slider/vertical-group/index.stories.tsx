import {
  Slider,
  SliderDescription,
  SliderFill,
  SliderInlineLabel,
  SliderInlineOutput,
  SliderLabel,
  SliderLabels,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@spear-ai/ui/components/slider";
import type { Meta, StoryObj } from "@storybook/react";
import { useId } from "react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewSlider = (properties: {
  color: "neutral" | "primary";
  hasFill: boolean;
  hasLabel: boolean;
  hasLabelDescription: boolean;
  hasValence: boolean;
  isDisabled: boolean;
  isRange: boolean;
  isSquished: boolean;
  maximumValue: number;
  minimumValue: number;
  orientation: "horizontal" | "vertical";
  originLabel: string;
  originValue: number;
  thumbShape: "circle" | "pill" | "square";
  variant: "soft" | "surface";
}) => {
  const {
    color,
    hasFill,
    hasLabel,
    hasLabelDescription,
    hasValence,
    isDisabled,
    isRange,
    isSquished,
    maximumValue,
    minimumValue,
    orientation,
    // OriginLabel,
    originValue,
    thumbShape,
    variant,
  } = properties;
  const intl = useIntl();
  const firstId = useId();

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
        <div className="w-full">
          {hasLabel ? (
            <SliderLabel>
              {intl.formatMessage({
                defaultMessage: "Budget",
                id: "0KKXrH",
              })}
            </SliderLabel>
          ) : null}
          {hasLabel && hasLabelDescription ? (
            <SliderDescription>
              {intl.formatMessage({
                defaultMessage: "Don’t worry, it’s other peoples money",
                id: "5G09fG",
              })}
            </SliderDescription>
          ) : null}
          <div className="relative flex w-full justify-around py-7">
            <ol
              aria-hidden
              // eslint-disable-next-line tailwindcss/no-custom-classname
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
                defaultValue={isRange ? [30, 70] : 50}
                hasValence={hasValence}
                id={index === 0 ? firstId : ""}
                isDisabled={isDisabled}
                key={index}
                maxValue={maximumValue}
                minValue={minimumValue}
                orientation={orientation}
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
                  {({ state }) => (
                    <>
                      <span className="absolute right-full">$</span>
                      <span>{state.values[0]}</span>–<span>{state.values[1]}</span>
                    </>
                  )}
                </SliderInlineOutput>
              </Slider>
            ))}
          </div>
        </div>
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
    hasEndIcon: true,
    hasFill: true,
    hasLabel: true,
    hasLabelDescription: true,
    hasStartIcon: true,
    hasValence: false,
    isDisabled: false,
    isRange: false,
    isSquished: false,
    maximumValue: 100,
    minimumValue: 0,
    orientation: "vertical",
    originLabel: "",
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
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
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

import {
  Slider,
  SliderDescription,
  SliderInlineLabel,
  SliderInlineOutput,
  SliderLabel,
  SliderLabels,
  SliderOutput,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@spear-ai/ui/components/slider";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewSlider = (properties: {
  color: "neutral" | "primary";
  hasLabel: boolean;
  hasLabelDescription: boolean;
  hasRange: boolean;
  hasValence: boolean;
  isDisabled: boolean;
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
    hasLabel,
    hasLabelDescription,
    hasRange,
    hasValence,
    isDisabled,
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
  const [value, setValue] = useState(
    Math.max(Math.min(Math.round(maximumValue / 4), maximumValue), minimumValue),
  );

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
          <div className="flex w-full justify-around px-2">
            <ol
              aria-hidden
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="divide-neutral-a-6 absolute inset-x-2 inset-y-6 divide-y divide-dotted"
            >
              {Array.from({ length: 14 }, (_, index) => (
                <li className="h-4 w-full" key={index} />
              ))}
            </ol>
            {Array.from({ length: 5 }, (_, index) => (
              <Slider
                className="inline-flex flex-col items-center justify-center"
                color={color}
                defaultValue={50}
                hasValence={hasValence}
                isDisabled={isDisabled}
                key={index}
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
                  {hasRange ? <SliderRange /> : null}
                  <SliderThumb className={thumbShapeClassName} />
                </SliderTrack>
                <SliderInlineOutput>
                  {({ state }) => (
                    <>
                      <span className="absolute right-full">$</span>
                      <span>{state.values[0]}</span>
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
    hasLabel: true,
    hasLabelDescription: true,
    hasRange: true,
    hasStartIcon: true,
    hasValence: false,
    isDisabled: false,
    isSquished: false,
    maximumValue: 100,
    minimumValue: 0,
    orientation: "horizontal",
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

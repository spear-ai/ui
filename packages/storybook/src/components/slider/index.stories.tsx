import {
  Slider,
  SliderDescription,
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
    variant,
  } = properties;
  const intl = useIntl();
  const [value, setValue] = useState(
    Math.max(Math.min(Math.round(maximumValue / 4), maximumValue), minimumValue),
  );

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form className="relative w-full">
        <Slider
          className="w-full"
          color={color}
          formatOptions={{}}
          hasValence={hasValence}
          isDisabled={isDisabled}
          maxValue={maximumValue}
          minValue={minimumValue}
          onChange={setValue}
          orientation={orientation}
          originValue={originValue}
          value={Math.max(Math.min(value, maximumValue), minimumValue)}
          variant={variant}
        >
          <SliderLabels>
            {hasLabel ? (
              <SliderLabel>
                {intl.formatMessage({
                  defaultMessage: "Volume",
                  id: "y867Vs",
                })}
              </SliderLabel>
            ) : null}
            {hasLabel && hasLabelDescription ? (
              <SliderDescription>
                {intl.formatMessage({
                  defaultMessage: "How loud until the neighbors complain.",
                  id: "bEWLDO",
                })}
              </SliderDescription>
            ) : null}
            <SliderOutput>{({ state }) => `${state.getThumbValue(0)} dB`}</SliderOutput>
          </SliderLabels>
          <SliderTrack className="h-56">
            {hasRange ? <SliderRange /> : null}
            <SliderThumb />
          </SliderTrack>
        </Slider>
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
    hasLabel: true,
    hasLabelDescription: true,
    hasRange: false,
    hasValence: false,
    isDisabled: false,
    isSquished: false,
    maximumValue: 100,
    minimumValue: 0,
    orientation: "horizontal",
    originLabel: "",
    originValue: 0,
    variant: "surface",
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

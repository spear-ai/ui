import { Slider, SliderDescription, SliderLabel } from "@spear-ai/ui/components/slider";
import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewSlider = (properties: {
  hasLabel: boolean;
  hasLabelDescription: boolean;
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
    hasLabel,
    hasLabelDescription,
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

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form className="relative w-full">
        <Slider
          className="w-full"
          hasValence={hasValence}
          isDisabled={isDisabled}
          maxValue={maximumValue}
          minValue={minimumValue}
          orientation={orientation}
          originValue={originValue}
          variant={variant}
        >
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
    hasLabel: true,
    hasLabelDescription: true,
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

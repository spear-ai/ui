import { SpeakerLoudIcon, SpeakerModerateIcon } from "@radix-ui/react-icons";
import { IconButton, IconButtonIcon } from "@spear-ai/ui/components/icon-button";
import {
  Slider,
  SliderDescription,
  SliderField,
  SliderFill,
  SliderLabel,
  SliderLabels,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@spear-ai/ui/components/slider";
import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useContext } from "react";
import { Form, SliderStateContext } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewSliderDecrementButton = () => {
  const state = useContext(SliderStateContext);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { decrementThumb } = state;

  const handlePress = useCallback(() => {
    decrementThumb(0);
    decrementThumb(1);
  }, [decrementThumb]);

  return (
    <IconButton
      className="relative rounded-full group-data-[orientation=vertical]:left-1 group-data-[orientation=vertical]:order-last group-data-[orientation=horizontal]:-ms-2 group-data-[orientation=horizontal]:me-0.5 group-data-[orientation=vertical]:-translate-x-1/2"
      onPress={handlePress}
      variant="ghost"
    >
      <IconButtonIcon asChild>
        <SpeakerModerateIcon />
      </IconButtonIcon>
    </IconButton>
  );
};

const PreviewSliderIncrementButton = () => {
  const state = useContext(SliderStateContext);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { incrementThumb } = state;

  const handlePress = useCallback(() => {
    incrementThumb(0);
    incrementThumb(1);
  }, [incrementThumb]);

  return (
    <IconButton
      className="relative rounded-full group-data-[orientation=vertical]:left-1 group-data-[orientation=vertical]:order-first group-data-[orientation=horizontal]:-me-2 group-data-[orientation=horizontal]:ms-0.5 group-data-[orientation=vertical]:-translate-x-1/2"
      onPress={handlePress}
      variant="ghost"
    >
      <IconButtonIcon asChild>
        <SpeakerLoudIcon />
      </IconButtonIcon>
    </IconButton>
  );
};

const PreviewSlider = (properties: {
  color: "neutral" | "primary";
  hasEndIcon: boolean;
  hasFill: boolean;
  hasLabel: boolean;
  hasLabelDescription: boolean;
  hasStartIcon: boolean;
  hasValence: boolean;
  isDisabled: boolean;
  isRange: boolean;
  isSquished: boolean;
  maximumValue: number;
  minimumValue: number;
  orientation: "horizontal" | "vertical";
  originValue: number;
  thumbShape: "circle" | "pill" | "square";
  variant: "soft" | "surface";
}) => {
  const {
    color,
    hasEndIcon,
    hasFill,
    hasLabel,
    hasLabelDescription,
    hasStartIcon,
    hasValence,
    isDisabled,
    isRange,
    isSquished,
    maximumValue,
    minimumValue,
    orientation,
    originValue,
    thumbShape,
    variant,
  } = properties;
  const intl = useIntl();

  let thumbShapeClassName = "";

  switch (thumbShape) {
    case "pill": {
      thumbShapeClassName = "h-5 w-2.5 group-data-[orientation=vertical]:rotate-90";
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
        <Slider
          className="w-full"
          color={color}
          defaultValue={isRange ? [15, 35] : 25}
          hasValence={hasValence}
          isDisabled={isDisabled}
          key={`${isRange}`}
          maxValue={maximumValue}
          minValue={minimumValue}
          orientation={orientation}
          originValue={originValue}
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
            {orientation === "horizontal" ? (
              <SliderOutput>
                {({ state }) =>
                  state.values.length === 2
                    ? `${state.getThumbValue(0)}–${state.getThumbValue(1)} dB`
                    : `${state.getThumbValue(0)} dB`
                }
              </SliderOutput>
            ) : null}
          </SliderLabels>
          <SliderField className="group-data-[orientation=vertical]:h-56">
            {hasStartIcon ? <PreviewSliderDecrementButton /> : null}
            <SliderTrack className="flex-1">
              {hasFill ? <SliderFill /> : null}
              <SliderThumb className={thumbShapeClassName} index={0} />
              {isRange ? <SliderThumb className={thumbShapeClassName} index={1} /> : null}
            </SliderTrack>
            {hasEndIcon ? <PreviewSliderIncrementButton /> : null}
          </SliderField>
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
    orientation: "horizontal",
    originValue: 0,
    thumbShape: "circle",
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

/* eslint-disable react/jsx-props-no-spreading, react/no-array-index-key */
import {
  OneTimePasscodeInput,
  OneTimePasscodeInputDash,
  OneTimePasscodeInputSegment,
  OneTimePasscodeInputSlot,
} from "@spear-ai/ui/components/one-time-passcode-input";
import type { Meta, StoryObj } from "@storybook/react";
import { SlotProps } from "input-otp";

const PreviewOneTimePasscodeInput = (properties: { isDisabled: boolean }) => {
  const { isDisabled } = properties;

  return (
    <OneTimePasscodeInput
      isDisabled={isDisabled}
      maxLength={6}
      render={({ slots }: { slots: SlotProps[] }) => (
        <>
          <OneTimePasscodeInputSegment>
            {slots.slice(0, 3).map((slot, index) => (
              <OneTimePasscodeInputSlot key={index} {...slot} />
            ))}
          </OneTimePasscodeInputSegment>
          <OneTimePasscodeInputDash />
          <OneTimePasscodeInputSegment className="flex">
            {slots.slice(3).map((slot, index) => (
              <OneTimePasscodeInputSlot key={index} {...slot} />
            ))}
          </OneTimePasscodeInputSegment>
        </>
      )}
    />
  );
};

const meta = {
  component: PreviewOneTimePasscodeInput,
} satisfies Meta<typeof PreviewOneTimePasscodeInput>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    isDisabled: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

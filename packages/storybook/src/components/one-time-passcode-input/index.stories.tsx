/* eslint-disable react/jsx-props-no-spreading, react/no-array-index-key */
import {
  OneTimePasscodeInput,
  OneTimePasscodeInputDash,
  OneTimePasscodeInputSlot,
} from "@spear-ai/ui/components/one-time-passcode-input";
import type { Meta, StoryObj } from "@storybook/react";
import { SlotProps } from "input-otp";

const PreviewOneTimePasscodeInput = () => (
  <OneTimePasscodeInput
    maxLength={6}
    render={({ slots }: { slots: SlotProps[] }) => (
      <>
        <div className="flex">
          {slots.slice(0, 3).map((slot, index) => (
            <OneTimePasscodeInputSlot key={index} {...slot} />
          ))}
        </div>
        <OneTimePasscodeInputDash />
        <div className="flex">
          {slots.slice(3).map((slot, index) => (
            <OneTimePasscodeInputSlot key={index} {...slot} />
          ))}
        </div>
      </>
    )}
  />
);

const meta = {
  component: PreviewOneTimePasscodeInput,
} satisfies Meta<typeof PreviewOneTimePasscodeInput>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  parameters: {
    layout: "centered",
  },
};

export default meta;

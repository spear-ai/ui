/* eslint-disable react/jsx-props-no-spreading, react/no-array-index-key */
import {
  OneTimePasscodeInput,
  OneTimePasscodeInputDash,
  OneTimePasscodeInputSegment,
  OneTimePasscodeInputSlot,
} from "@spear-ai/ui/components/one-time-passcode-input";
import type { Meta, StoryObj } from "@storybook/react";
import { SlotProps } from "input-otp";
import { useRef, useState } from "react";
import { Button } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewOneTimePasscodeInput = (properties: { isDisabled: boolean }) => {
  const intl = useIntl();
  const { isDisabled } = properties;
  const [oneTimePasscodeState, setOneTimePasscodeState] = useState<string>("");
  const buttonReference = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex flex-col">
      <OneTimePasscodeInput
        isDisabled={isDisabled}
        maxLength={6}
        onChange={(changedValue: string) => {
          setOneTimePasscodeState(changedValue);
        }}
        onComplete={() => {
          buttonReference.current?.focus();
        }}
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
        value={oneTimePasscodeState}
      />
      <Button
        className="mt-10 rounded-full bg-primary-a-7 p-2 text-xl text-neutral-12"
        ref={buttonReference}
      >
        {intl.formatMessage({
          defaultMessage: "Confirm",
          id: "N2IrpM",
        })}
      </Button>
    </div>
  );
};

const meta = {
  component: PreviewOneTimePasscodeInput,
} satisfies Meta<typeof PreviewOneTimePasscodeInput>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isDisabled: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

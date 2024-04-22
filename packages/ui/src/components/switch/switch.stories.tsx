import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";
import { Switch, SwitchButton, SwitchLabel, SwitchThumb } from "./switch";

const PreviewSwitch = (properties: {
  hasLabel: boolean;
  isDisabled: boolean;
  isPrimary: boolean;
  isReadonly: boolean;
  isSquished: boolean;
}) => {
  const { hasLabel, isDisabled, isPrimary, isReadonly, isSquished } = properties;
  const intl = useIntl();

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-sm"}`}>
      <Form className="relative w-full">
        <Switch
          className="group inline-flex"
          isDisabled={isDisabled}
          isReadOnly={isReadonly}
          value="isLimitedToFriends"
        >
          <SwitchButton
            className={`group relative isolate inline-flex h-6 w-11 rounded-full border-2 border-transparent bg-neutral-a-3 transition duration-200 ease-in-out group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-primary-7 group-disabled:bg-neutral-a-3 ${isPrimary ? "group-selected:bg-primary-9" : "group-selected:bg-neutral-9"}`}
          >
            <SwitchThumb />
          </SwitchButton>
          {hasLabel ? (
            <SwitchLabel>
              {intl.formatMessage({
                defaultMessage: "Receive notifications",
                id: "D6jkwD",
              })}
            </SwitchLabel>
          ) : null}
        </Switch>
      </Form>
    </div>
  );
};

const meta = {
  component: PreviewSwitch,
} satisfies Meta<typeof PreviewSwitch>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    hasLabel: true,
    isDisabled: false,
    isPrimary: false,
    isReadonly: false,
    isSquished: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

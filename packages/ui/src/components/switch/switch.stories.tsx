import type { Meta, StoryObj } from "@storybook/react";
import { Form, Switch } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewSwitch = (properties: {
  isDisabled: boolean;
  isPrimary: boolean;
  isReadonly: boolean;
  isSquished: boolean;
}) => {
  const { isDisabled, isPrimary, isReadonly, isSquished } = properties;
  const intl = useIntl();

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-sm"}`}>
      <Form className="relative w-full">
        <div className="mt-3">
          <Switch
            className="group flex"
            isDisabled={isDisabled}
            isReadOnly={isReadonly}
            value="isLimitedToFriends"
          >
            <span
              className={`group relative isolate inline-flex h-6 w-11 rounded-full border-2 border-transparent bg-neutral-a-3 transition duration-200 ease-in-out group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-primary-7 group-disabled:bg-neutral-a-3 ${isPrimary ? "group-selected:bg-primary-9" : "group-selected:bg-neutral-9"}`}
            >
              <span className="pointer-events-none relative inline-block size-5 rounded-full bg-white shadow transition-all duration-200 ease-in-out will-change-transform translate-x-0 group-selected:translate-x-5 group-disabled:bg-neutral-2 group-disabled:shadow-none" />
            </span>
            <span className="ms-3 flex-1 text-sm font-medium leading-6 text-neutral-12 group-disabled:text-neutral-11">
              {intl.formatMessage({
                defaultMessage: "Enabled",
                id: "V52jNn",
              })}
            </span>
          </Switch>
        </div>
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

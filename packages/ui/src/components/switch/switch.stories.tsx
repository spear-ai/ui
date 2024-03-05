import { CheckIcon, MinusIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Form, Switch } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewSwitch = (properties: {
  hasLabelDescription: boolean;
  isDisabled: boolean;
  isInvalid: boolean;
  isReadonly: boolean;
  isSquished: boolean;
}) => {
  const { hasLabelDescription, isDisabled, isInvalid, isReadonly, isSquished } = properties;
  const intl = useIntl();

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form className="relative w-full">
        <div className="mt-3">
          <Switch
            className="group peer flex"
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            isReadOnly={isReadonly}
            value="isLimitedToFriends"
          >
            <div className="relative me-3 inline-flex size-4 items-center rounded border border-neutral-a-7 bg-white-a-3 text-neutral-12 group-invalid:border-x-negative-a-7 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-primary-7 group-selected:border-transparent group-selected:bg-primary-9 group-selected:text-primary-contrast group-invalid:group-selected:border-x-negative-a-7 group-disabled:border-neutral-a-6 group-disabled:bg-neutral-a-3 group-disabled:text-neutral-a-8 group-invalid:group-disabled:border-x-negative-a-6 theme-dfs:bg-canvas-1 theme-dfs:group-invalid:border-x-negative-a-7 theme-dfs:group-disabled:bg-neutral-a-3 theme-forerunner:group-selected:bg-black-a-12 theme-forerunner:group-selected:text-white theme-forerunner:group-disabled:border-neutral-a-6 theme-forerunner:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:text-neutral-a-8 theme-forerunner:group-invalid:group-disabled:border-x-negative-a-6 theme-galapago:bg-white dark:bg-white-a-3 theme-dfs:dark:bg-white-a-3 theme-dfs:group-selected:dark:border-neutral-a-7 theme-dfs:group-invalid:group-selected:dark:border-x-negative-a-7 theme-forerunner:dark:bg-black-a-3 theme-forerunner:group-selected:dark:border-neutral-a-7 theme-forerunner:group-selected:dark:bg-primary-a-5 theme-forerunner:group-selected:dark:text-primary-12 theme-forerunner:group-invalid:group-selected:dark:border-x-negative-a-7 theme-forerunner:group-disabled:dark:border-neutral-a-6 theme-forerunner:group-disabled:dark:bg-neutral-a-3 theme-forerunner:group-disabled:dark:text-neutral-a-8 theme-forerunner:group-invalid:group-disabled:dark:border-x-negative-a-6 theme-galapago:dark:bg-black-a-3 theme-galapago:dark:group-selected:bg-primary-a-9 theme-galapago:group-disabled:dark:bg-neutral-a-3 theme-galapago:group-disabled:dark:text-neutral-a-8 theme-galapago:dark:disabled:bg-neutral-a-3">
              <CheckIcon className="absolute -left-px -top-px size-4 opacity-0 group-indeterminate:!opacity-0 group-selected:opacity-100" />
              <MinusIcon className="h-full opacity-0 group-indeterminate:group-selected:opacity-100" />
            </div>
            <span className="-mt-1 flex-1 text-sm font-medium leading-6 text-neutral-12 group-invalid:text-x-negative-11 group-disabled:text-neutral-11 group-invalid:group-disabled:text-x-negative-9">
              {intl.formatMessage({
                defaultMessage: "Show only to friends",
                id: "709cRj",
              })}
            </span>
          </Switch>
          {hasLabelDescription ? (
            <p className="ms-7 text-sm leading-6 text-neutral-11 peer-disabled:text-neutral-9">
              {intl.formatMessage({
                defaultMessage: "Whether only friends can see this post.",
                id: "WuPCNC",
              })}
            </p>
          ) : null}
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
    hasLabelDescription: true,
    isDisabled: false,
    isInvalid: false,
    isReadonly: false,
    isSquished: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

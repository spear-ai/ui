import { CheckIcon, MinusIcon } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup, Form, Label } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewCheckbox = (properties: {
  firstOptionIsDisabled: boolean;
  firstOptionIsInvalid: boolean;
  firstOptionIsReadonly: boolean;
  groupIsDisabled: boolean;
  groupIsInvalid: boolean;
  hasGroupLabel: boolean;
  hasGroupLabelDescription: boolean;
  hasLabelDescription: boolean;
  isIndeterminateWhenSelected: boolean;
  isSquished: boolean;
}) => {
  const {
    firstOptionIsDisabled,
    firstOptionIsInvalid,
    firstOptionIsReadonly,
    groupIsDisabled,
    groupIsInvalid,
    hasGroupLabel,
    hasGroupLabelDescription,
    hasLabelDescription,
    isIndeterminateWhenSelected,
    isSquished,
  } = properties;
  const intl = useIntl();

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form className="relative w-full">
        <CheckboxGroup
          className="group/group w-full"
          isDisabled={groupIsDisabled}
          isInvalid={groupIsInvalid}
          isReadOnly={firstOptionIsReadonly}
          isRequired
          validationBehavior="aria"
        >
          {hasGroupLabel ? (
            <Label className="block select-none text-base/6 text-neutral-12 group-invalid/group:text-x-negative-11 group-disabled/group:text-neutral-11 group-invalid/group:group-disabled/group:text-x-negative-9 sm:text-sm/6">
              {intl.formatMessage({
                defaultMessage: "Privacy",
                id: "cXBJ7U",
              })}
            </Label>
          ) : null}
          {hasGroupLabel && hasGroupLabelDescription ? (
            <p className="mt-1 text-base/6 text-neutral-11 group-disabled/group:text-neutral-9 sm:text-sm/6">
              {intl.formatMessage({
                defaultMessage: "Control your post’s privacy settings.",
                id: "dBZIgO",
              })}
            </p>
          ) : null}
          <div className="mt-3">
            <Checkbox
              className="group peer flex"
              isDisabled={firstOptionIsDisabled}
              isIndeterminate={isIndeterminateWhenSelected ? true : undefined}
              isInvalid={firstOptionIsInvalid}
              value="isLimitedToFriends"
            >
              <div className="relative me-3 inline-flex size-4 items-center rounded border border-neutral-a-7 bg-white-a-3 text-neutral-12 group-invalid:border-x-negative-a-7 group-invalid:bg-x-negative-a-3 group-invalid:text-x-negative-12 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-primary-7 group-selected:border-transparent group-selected:bg-primary-9 group-selected:text-primary-contrast group-invalid:group-selected:bg-x-negative-9 group-invalid:group-selected:text-x-negative-contrast group-disabled:border-neutral-a-6 group-disabled:bg-neutral-a-3 group-disabled:text-neutral-a-8 group-invalid:group-disabled:border-x-negative-a-6 group-invalid:group-disabled:bg-x-negative-a-3 group-invalid:group-disabled:text-x-negative-a-8 theme-dfs:bg-canvas-1 theme-dfs:group-invalid:border-x-negative-a-7 theme-dfs:group-invalid:bg-canvas-1 theme-dfs:group-invalid:text-x-negative-12 theme-dfs:group-disabled:bg-neutral-a-3 theme-dfs:group-invalid:group-disabled:bg-x-negative-a-3 theme-dfs:group-invalid:group-disabled:text-x-negative-a-8 theme-forerunner:group-selected:bg-black-a-12 theme-forerunner:group-selected:text-white theme-forerunner:group-invalid:group-selected:bg-x-negative-a-9 theme-forerunner:group-invalid:group-selected:text-x-negative-contrast theme-forerunner:group-disabled:border-neutral-a-6 theme-forerunner:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:text-neutral-a-8 theme-forerunner:group-invalid:group-disabled:border-x-negative-a-6 theme-forerunner:group-invalid:group-disabled:bg-x-negative-a-3 theme-forerunner:group-invalid:group-disabled:text-x-negative-a-8 theme-galapago:bg-white dark:bg-white-a-3 theme-dfs:dark:bg-white-a-3 theme-dfs:group-invalid:dark:bg-x-negative-a-3 theme-dfs:group-selected:dark:border-neutral-a-7 theme-dfs:group-invalid:group-selected:dark:border-x-negative-a-7 theme-forerunner:dark:bg-black-a-3 theme-forerunner:group-invalid:dark:bg-x-negative-a-3 theme-forerunner:group-selected:dark:border-neutral-a-7 theme-forerunner:group-selected:dark:bg-primary-a-5 theme-forerunner:group-selected:dark:text-primary-12 theme-forerunner:group-invalid:group-selected:dark:border-x-negative-a-7 theme-forerunner:group-invalid:group-selected:dark:bg-x-negative-a-5 theme-forerunner:group-invalid:group-selected:dark:text-x-negative-12 theme-forerunner:group-disabled:dark:border-neutral-a-6 theme-forerunner:group-disabled:dark:bg-neutral-a-3 theme-forerunner:group-disabled:dark:text-neutral-a-8 theme-forerunner:group-invalid:group-disabled:dark:border-x-negative-a-6 theme-forerunner:group-invalid:group-disabled:dark:bg-x-negative-a-3 theme-forerunner:group-invalid:group-selected:group-disabled:dark:text-x-negative-a-8 theme-galapago:dark:bg-black-a-3 theme-galapago:dark:group-selected:bg-primary-a-9 theme-galapago:group-invalid:dark:group-selected:bg-x-negative-a-9 theme-galapago:group-disabled:dark:bg-neutral-a-3 theme-galapago:group-disabled:dark:text-neutral-a-8 theme-galapago:group-invalid:group-disabled:dark:bg-x-negative-a-3 theme-galapago:group-invalid:group-disabled:dark:text-x-negative-a-8 theme-galapago:dark:disabled:bg-neutral-a-3 theme-galapago:group-invalid:dark:disabled:bg-x-negative-a-3">
                <CheckIcon className="absolute -left-px -top-px size-4 opacity-0 group-indeterminate:!opacity-0 group-selected:opacity-100" />
                <MinusIcon className="h-full opacity-0 group-indeterminate:group-selected:opacity-100" />
              </div>
              <span className="-mt-1 flex-1 text-sm font-medium leading-6 text-neutral-12 group-invalid:text-x-negative-11 group-disabled:text-neutral-11 group-invalid:group-disabled:text-x-negative-9">
                {intl.formatMessage({
                  defaultMessage: "Show only to friends",
                  id: "709cRj",
                })}
              </span>
            </Checkbox>
            {hasLabelDescription ? (
              <p className="ms-7 text-sm leading-6 text-neutral-11 peer-disabled:text-neutral-9">
                {intl.formatMessage({
                  defaultMessage: "Whether only friends can see this post.",
                  id: "WuPCNC",
                })}
              </p>
            ) : null}
          </div>
          <div className="mt-3">
            <Checkbox
              className="group peer flex text-sm font-medium leading-6 text-neutral-12"
              isIndeterminate={isIndeterminateWhenSelected ? true : undefined}
              value="isShareable"
            >
              <div className="relative me-3 inline-flex size-4 items-center rounded border border-neutral-a-7 bg-white-a-3 text-neutral-12 group-invalid:border-x-negative-a-7 group-invalid:bg-x-negative-a-3 group-invalid:text-x-negative-12 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-primary-7 group-selected:border-transparent group-selected:bg-primary-9 group-selected:text-primary-contrast group-invalid:group-selected:bg-x-negative-9 group-invalid:group-selected:text-x-negative-contrast group-disabled:border-neutral-a-6 group-disabled:bg-neutral-a-3 group-disabled:text-neutral-a-8 group-invalid:group-disabled:border-x-negative-a-6 group-invalid:group-disabled:bg-x-negative-a-3 group-invalid:group-disabled:text-x-negative-a-8 theme-dfs:bg-canvas-1 theme-dfs:group-invalid:border-x-negative-a-7 theme-dfs:group-invalid:bg-canvas-1 theme-dfs:group-invalid:text-x-negative-12 theme-dfs:group-disabled:bg-neutral-a-3 theme-dfs:group-invalid:group-disabled:bg-x-negative-a-3 theme-dfs:group-invalid:group-disabled:text-x-negative-a-8 theme-forerunner:group-selected:bg-black-a-12 theme-forerunner:group-selected:text-white theme-forerunner:group-invalid:group-selected:bg-x-negative-a-9 theme-forerunner:group-invalid:group-selected:text-x-negative-contrast theme-forerunner:group-disabled:border-neutral-a-6 theme-forerunner:group-disabled:bg-neutral-a-3 theme-forerunner:group-disabled:text-neutral-a-8 theme-forerunner:group-invalid:group-disabled:border-x-negative-a-6 theme-forerunner:group-invalid:group-disabled:bg-x-negative-a-3 theme-forerunner:group-invalid:group-disabled:text-x-negative-a-8 theme-galapago:bg-white dark:bg-white-a-3 theme-dfs:dark:bg-white-a-3 theme-dfs:group-invalid:dark:bg-x-negative-a-3 theme-dfs:group-selected:dark:border-neutral-a-7 theme-dfs:group-invalid:group-selected:dark:border-x-negative-a-7 theme-forerunner:dark:bg-black-a-3 theme-forerunner:group-invalid:dark:bg-x-negative-a-3 theme-forerunner:group-selected:dark:border-neutral-a-7 theme-forerunner:group-selected:dark:bg-primary-a-5 theme-forerunner:group-selected:dark:text-primary-12 theme-forerunner:group-invalid:group-selected:dark:border-x-negative-a-7 theme-forerunner:group-invalid:group-selected:dark:bg-x-negative-a-5 theme-forerunner:group-invalid:group-selected:dark:text-x-negative-12 theme-forerunner:group-disabled:dark:border-neutral-a-6 theme-forerunner:group-disabled:dark:bg-neutral-a-3 theme-forerunner:group-disabled:dark:text-neutral-a-8 theme-forerunner:group-invalid:group-disabled:dark:border-x-negative-a-6 theme-forerunner:group-invalid:group-disabled:dark:bg-x-negative-a-3 theme-forerunner:group-invalid:group-selected:group-disabled:dark:text-x-negative-a-8 theme-galapago:dark:bg-black-a-3 theme-galapago:dark:group-selected:bg-primary-a-9 theme-galapago:group-invalid:dark:group-selected:bg-x-negative-a-9 theme-galapago:group-disabled:dark:bg-neutral-a-3 theme-galapago:group-disabled:dark:text-neutral-a-8 theme-galapago:group-invalid:group-disabled:dark:bg-x-negative-a-3 theme-galapago:group-invalid:group-disabled:dark:text-x-negative-a-8 theme-galapago:dark:disabled:bg-neutral-a-3 theme-galapago:group-invalid:dark:disabled:bg-x-negative-a-3">
                <CheckIcon className="absolute -left-px -top-px size-4 opacity-0 group-indeterminate:!opacity-0 group-selected:opacity-100" />
                <MinusIcon className="h-full opacity-0 group-indeterminate:group-selected:opacity-100" />
              </div>
              <span className="-mt-1 flex-1 text-sm font-medium leading-6 text-neutral-12 group-invalid:text-x-negative-11 group-disabled:text-neutral-11 group-invalid:group-disabled:text-x-negative-9">
                {intl.formatMessage({
                  defaultMessage: "Allow sharing",
                  id: "MmQn2H",
                })}
              </span>
            </Checkbox>
            {hasLabelDescription ? (
              <p className="ms-7 text-sm leading-6 text-neutral-11 peer-disabled:text-neutral-9">
                {intl.formatMessage({
                  defaultMessage: "Whether this post can be shared by others.",
                  id: "qysWYY",
                })}
              </p>
            ) : null}
          </div>
          {groupIsInvalid ? (
            <p className="mt-3 text-sm text-x-negative-11 group-disabled/group:text-x-negative-9">
              {intl.formatMessage({
                defaultMessage: "There’s a problem with the selection",
                id: "Nfuwo5",
              })}
            </p>
          ) : null}
        </CheckboxGroup>
      </Form>
    </div>
  );
};

const meta = {
  component: PreviewCheckbox,
} satisfies Meta<typeof PreviewCheckbox>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    firstOptionIsDisabled: false,
    firstOptionIsInvalid: false,
    firstOptionIsReadonly: false,
    groupIsDisabled: false,
    groupIsInvalid: false,
    hasGroupLabel: true,
    hasGroupLabelDescription: true,
    hasLabelDescription: true,
    isIndeterminateWhenSelected: false,
    isSquished: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

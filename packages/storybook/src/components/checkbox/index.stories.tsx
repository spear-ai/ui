/* eslint-disable react/jsx-props-no-spreading */
import {
  Checkbox,
  CheckboxButton,
  CheckboxCheckedIcon,
  CheckboxDescription,
  CheckboxField,
  CheckboxFields,
  CheckboxGroup,
  CheckboxGroupDescription,
  CheckboxGroupError,
  CheckboxGroupLabel,
  CheckboxIndeterminateIcon,
  CheckboxLabel,
} from "@spear-ai/ui/components/checkbox";
import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "react-aria-components";
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
          className="w-full"
          isDisabled={groupIsDisabled}
          isInvalid={groupIsInvalid}
          isReadOnly={firstOptionIsReadonly}
          isRequired
          validationBehavior="aria"
        >
          {hasGroupLabel ? (
            <CheckboxGroupLabel>
              {intl.formatMessage({
                defaultMessage: "Privacy",
                id: "cXBJ7U",
              })}
            </CheckboxGroupLabel>
          ) : null}
          {hasGroupLabel && hasGroupLabelDescription ? (
            <CheckboxGroupDescription>
              {intl.formatMessage({
                defaultMessage: "Control your post’s privacy settings.",
                id: "dBZIgO",
              })}
            </CheckboxGroupDescription>
          ) : null}
          <CheckboxFields>
            <CheckboxField>
              <Checkbox
                isDisabled={firstOptionIsDisabled}
                {...(isIndeterminateWhenSelected ? { isIndeterminate: true } : {})}
                isInvalid={firstOptionIsInvalid}
                value="isLimitedToFriends"
              >
                <CheckboxButton>
                  <CheckboxCheckedIcon />
                  <CheckboxIndeterminateIcon />
                </CheckboxButton>
                <CheckboxLabel>
                  {intl.formatMessage({
                    defaultMessage: "Show only to friends",
                    id: "709cRj",
                  })}
                </CheckboxLabel>
              </Checkbox>
              {hasLabelDescription ? (
                <CheckboxDescription>
                  {intl.formatMessage({
                    defaultMessage: "Whether only friends can see this post.",
                    id: "WuPCNC",
                  })}
                </CheckboxDescription>
              ) : null}
            </CheckboxField>
            <CheckboxField>
              <Checkbox
                {...(isIndeterminateWhenSelected ? { isIndeterminate: true } : {})}
                value="isShareable"
              >
                <CheckboxButton>
                  <CheckboxCheckedIcon />
                  <CheckboxIndeterminateIcon />
                </CheckboxButton>
                <CheckboxLabel>
                  {intl.formatMessage({
                    defaultMessage: "Allow sharing",
                    id: "MmQn2H",
                  })}
                </CheckboxLabel>
              </Checkbox>
              {hasLabelDescription ? (
                <CheckboxDescription>
                  {intl.formatMessage({
                    defaultMessage: "Whether this post can be shared by others.",
                    id: "qysWYY",
                  })}
                </CheckboxDescription>
              ) : null}
            </CheckboxField>
          </CheckboxFields>
          {groupIsInvalid ? (
            <CheckboxGroupError>
              {intl.formatMessage({
                defaultMessage: "There’s a problem with the selection",
                id: "Nfuwo5",
              })}
            </CheckboxGroupError>
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

export const Default: Story = {
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

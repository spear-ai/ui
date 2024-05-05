import {
  Radio,
  RadioButton,
  RadioDescription,
  RadioDot,
  RadioField,
  RadioFields,
  RadioGroup,
  RadioGroupDescription,
  RadioGroupError,
  RadioGroupLabel,
  RadioLabel,
} from "@spear-ai/ui/components/radio";
import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewRadio = (properties: {
  firstOptionIsDisabled: boolean;
  firstOptionIsReadonly: boolean;
  groupIsDisabled: boolean;
  groupIsInvalid: boolean;
  hasGroupLabel: boolean;
  hasGroupLabelDescription: boolean;
  hasLabelDescription: boolean;
  isSquished: boolean;
}) => {
  const {
    firstOptionIsDisabled,
    firstOptionIsReadonly,
    groupIsDisabled,
    groupIsInvalid,
    hasGroupLabel,
    hasGroupLabelDescription,
    hasLabelDescription,
    isSquished,
  } = properties;
  const intl = useIntl();

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form className="relative w-full">
        <RadioGroup
          className="w-full"
          isDisabled={groupIsDisabled}
          isInvalid={groupIsInvalid}
          isReadOnly={firstOptionIsReadonly}
          isRequired
          validationBehavior="aria"
        >
          {hasGroupLabel ? (
            <RadioGroupLabel>
              {intl.formatMessage({
                defaultMessage: "Privacy",
                id: "cXBJ7U",
              })}
            </RadioGroupLabel>
          ) : null}
          {hasGroupLabel && hasGroupLabelDescription ? (
            <RadioGroupDescription>
              {intl.formatMessage({
                defaultMessage: "Control your post’s privacy settings.",
                id: "dBZIgO",
              })}
            </RadioGroupDescription>
          ) : null}
          <RadioFields>
            <RadioField>
              <Radio isDisabled={firstOptionIsDisabled} value="isLimitedToFriends">
                <RadioButton>
                  <RadioDot />
                </RadioButton>
                <RadioLabel>
                  {intl.formatMessage({
                    defaultMessage: "Show only to friends",
                    id: "709cRj",
                  })}
                </RadioLabel>
              </Radio>
              {hasLabelDescription ? (
                <RadioDescription>
                  {intl.formatMessage({
                    defaultMessage: "Whether only friends can see this post.",
                    id: "WuPCNC",
                  })}
                </RadioDescription>
              ) : null}
            </RadioField>
            <RadioField>
              <Radio value="isShareable">
                <RadioButton>
                  <RadioDot />
                </RadioButton>
                <RadioLabel>
                  {intl.formatMessage({
                    defaultMessage: "Allow sharing",
                    id: "MmQn2H",
                  })}
                </RadioLabel>
              </Radio>
              {hasLabelDescription ? (
                <RadioDescription>
                  {intl.formatMessage({
                    defaultMessage: "Whether this post can be shared by others.",
                    id: "qysWYY",
                  })}
                </RadioDescription>
              ) : null}
            </RadioField>
          </RadioFields>
          {groupIsInvalid ? (
            <RadioGroupError>
              {intl.formatMessage({
                defaultMessage: "There’s a problem with the selection",
                id: "Nfuwo5",
              })}
            </RadioGroupError>
          ) : null}
        </RadioGroup>
      </Form>
    </div>
  );
};

const meta = {
  component: PreviewRadio,
} satisfies Meta<typeof PreviewRadio>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    firstOptionIsDisabled: false,
    firstOptionIsReadonly: false,
    groupIsDisabled: false,
    groupIsInvalid: false,
    hasGroupLabel: true,
    hasGroupLabelDescription: true,
    hasLabelDescription: true,
    isSquished: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

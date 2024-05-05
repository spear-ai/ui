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
                defaultMessage: "Side order",
                id: "Er8inG",
              })}
            </RadioGroupLabel>
          ) : null}
          {hasGroupLabel && hasGroupLabelDescription ? (
            <RadioGroupDescription>
              {intl.formatMessage({
                defaultMessage: "Round off your dish with a side order.",
                id: "5biyWl",
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
                    defaultMessage: "Veggies",
                    id: "DmB6s4",
                  })}
                </RadioLabel>
              </Radio>
              {hasLabelDescription ? (
                <RadioDescription>
                  {intl.formatMessage({
                    defaultMessage: "Lower in calories and yummies.",
                    id: "Ti5D0d",
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
                    defaultMessage: "Fruit",
                    id: "V35hcy",
                  })}
                </RadioLabel>
              </Radio>
              {hasLabelDescription ? (
                <RadioDescription>
                  {intl.formatMessage({
                    defaultMessage: "Higher in yummies and calories.",
                    id: "+iJVw/",
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

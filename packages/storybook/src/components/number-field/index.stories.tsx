import {
  NumberField,
  NumberFieldDescription,
  NumberFieldError,
  NumberFieldInput,
  NumberFieldLabel,
} from "@spear-ai/ui/components/number-field";
import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewNumberField = (properties: {
  hasLabel: boolean;
  hasLabelDescription: boolean;
  isDisabled: boolean;
  isInvalid: boolean;
  isSquished: boolean;
}) => {
  const { hasLabel, hasLabelDescription, isDisabled, isInvalid, isSquished } = properties;
  const intl = useIntl();

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form className="relative w-full">
        <NumberField
          className="w-full"
          formatOptions={{
            currency: "USD",
            style: "currency",
          }}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isRequired
          validationBehavior="aria"
        >
          {hasLabel ? (
            <NumberFieldLabel>
              {intl.formatMessage({
                defaultMessage: "Widget cost",
                id: "FIbuUD",
              })}
            </NumberFieldLabel>
          ) : null}
          {hasLabel && hasLabelDescription ? (
            <NumberFieldDescription>
              {intl.formatMessage({
                defaultMessage: "The cost of this widget.",
                id: "HaWlvS",
              })}
            </NumberFieldDescription>
          ) : null}
          <NumberFieldInput
            placeholder={intl.formatMessage({
              defaultMessage: "0.00",
              id: "TkDtvw",
            })}
          />
          <NumberFieldError>
            {intl.formatMessage({
              defaultMessage: "Widget cost is invalid",
              id: "sd1nQi",
            })}
          </NumberFieldError>
        </NumberField>
      </Form>
    </div>
  );
};

const meta = {
  component: PreviewNumberField,
} satisfies Meta<typeof PreviewNumberField>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    hasLabel: true,
    hasLabelDescription: true,
    isDisabled: false,
    isInvalid: false,
    isSquished: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

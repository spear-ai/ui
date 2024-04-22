import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";
import {
  TextField,
  TextFieldDescription,
  TextFieldError,
  TextFieldInput,
  TextFieldLabel,
} from "./text-field";

const PreviewTextField = (properties: {
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
        <TextField
          className="w-full"
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isRequired
          type="email"
          validationBehavior="aria"
        >
          {hasLabel ? (
            <TextFieldLabel>
              {intl.formatMessage({
                defaultMessage: "Email address",
                id: "hJZwTS",
              })}
            </TextFieldLabel>
          ) : null}
          {hasLabel && hasLabelDescription ? (
            <TextFieldDescription>
              {intl.formatMessage({
                defaultMessage: "A standard email address.",
                id: "4L7p9M",
              })}
            </TextFieldDescription>
          ) : null}
          <TextFieldInput
            placeholder={intl.formatMessage({
              defaultMessage: "example@email.com",
              id: "SvELQW",
            })}
          />
          <TextFieldError>
            {intl.formatMessage({ defaultMessage: "Email address is invalid", id: "sVgB+Q" })}
          </TextFieldError>
        </TextField>
      </Form>
    </div>
  );
};

const meta = {
  component: PreviewTextField,
} satisfies Meta<typeof PreviewTextField>;

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

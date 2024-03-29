import type { Meta, StoryObj } from "@storybook/react";
import { FieldError, Form, Input, Label, TextField } from "react-aria-components";
import { useIntl } from "react-intl";

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
          className="group w-full"
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isRequired
          type="email"
          validationBehavior="aria"
        >
          {hasLabel ? (
            <Label className="block select-none text-base/6 text-neutral-12 group-disabled:text-neutral-11 sm:text-sm/6">
              {intl.formatMessage({
                defaultMessage: "Email address",
                id: "hJZwTS",
              })}
            </Label>
          ) : null}
          {hasLabel && hasLabelDescription ? (
            <p className="mt-1 text-base/6 text-neutral-11 group-disabled:text-neutral-9 sm:text-sm/6">
              {intl.formatMessage({
                defaultMessage: "A standard email address.",
                id: "4L7p9M",
              })}
            </p>
          ) : null}
          <Input
            className="mt-2 h-9 w-full rounded-lg border-none bg-white-a-3 pe-2 ps-3.5 text-base leading-none text-neutral-12 shadow outline outline-offset-0 outline-neutral-a-7 placeholder:text-neutral-11 invalid:outline-x-negative-a-7 focus-visible:outline-offset-0 focus-visible:outline-primary-a-8 group-disabled:pointer-events-none group-disabled:text-neutral-a-8 invalid:group-disabled:outline-x-negative-a-6 theme-dfs:bg-canvas-1 theme-galapago:bg-white dark:bg-white-a-3 theme-dfs:dark:bg-white-a-3 theme-forerunner:dark:bg-black-a-3 theme-galapago:dark:bg-black-a-3 sm:ps-3 sm:text-sm"
            placeholder={intl.formatMessage({
              defaultMessage: "example@email.com",
              id: "SvELQW",
            })}
          />
          <FieldError className="mt-2 block text-base/6 text-x-negative-11 group-disabled:opacity-50 sm:text-sm/6">
            {intl.formatMessage({ defaultMessage: "Email address is invalid", id: "sVgB+Q" })}
          </FieldError>
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

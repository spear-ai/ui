import { Button, ButtonSpinner, LinkButton } from "@spear-ai/ui/components/button";
import type { Meta, StoryObj } from "@storybook/react";
import { useIntl } from "react-intl";

const PreviewButton = ({
  color,
  isDisabled,
  isLink,
  isLoading,
  isSkeleton,
  size,
  variant,
}: {
  color: "negative" | "neutral" | "positive" | "primary" | "x-negative" | "x-positive";
  isDisabled: boolean;
  isLink: boolean;
  isLoading: boolean;
  isSkeleton: boolean;
  size: "large" | "medium" | "small" | "x-large" | "x-small";
  variant: "ghost" | "outline" | "soft" | "solid";
}) => {
  const intl = useIntl();

  if (isLink) {
    return (
      <LinkButton
        color={color}
        href="/"
        isDisabled={isDisabled}
        isSkeleton={isSkeleton}
        rel="nofollow"
        size={size}
        target="_blank"
        variant={variant}
      >
        {isLoading ? <ButtonSpinner /> : null}
        {isLoading
          ? intl.formatMessage({
              defaultMessage: "Sending email…",
              id: "y/tCC5",
            })
          : intl.formatMessage({
              defaultMessage: "Send email",
              id: "sZIoMy",
            })}
      </LinkButton>
    );
  }

  return (
    <Button color={color} isDisabled={isDisabled} isSkeleton={isSkeleton} size={size} variant={variant}>
      {isLoading ? <ButtonSpinner /> : null}
      {isLoading
        ? intl.formatMessage({
            defaultMessage: "Sending email…",
            id: "y/tCC5",
          })
        : intl.formatMessage({
            defaultMessage: "Send email",
            id: "sZIoMy",
          })}
    </Button>
  );
};

const meta = {
  component: PreviewButton,
} satisfies Meta<typeof PreviewButton>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    color: "neutral",
    isDisabled: false,
    isLink: false,
    isLoading: false,
    isSkeleton: false,
    size: "medium",
    variant: "ghost",
  },
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["neutral", "primary", "negative", "x-negative", "positive", "x-positive"],
    },
    size: {
      control: { type: "select" },
      options: ["x-small", "small", "medium", "large", "x-large"],
    },
    variant: {
      control: { type: "select" },
      options: ["ghost", "outline", "soft", "solid"],
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

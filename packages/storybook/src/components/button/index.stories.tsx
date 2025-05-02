import { ArrowTopRightIcon, EnvelopeOpenIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button, ButtonIcon, ButtonSpinner, LinkButton } from "@spear-ai/ui/components/button";
import type { Meta, StoryObj } from "@storybook/react";
import { useIntl } from "react-intl";

const PreviewButton = ({
  color,
  hasEndIcon,
  hasStartIcon,
  isDisabled,
  isLink,
  isLoading,
  isSkeleton,
  size,
  variant,
}: {
  color: "negative" | "neutral" | "positive" | "primary" | "x-negative" | "x-positive";
  hasEndIcon: boolean;
  hasStartIcon: boolean;
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
        {hasStartIcon && !isLoading ? (
          <ButtonIcon asChild>
            <EnvelopeOpenIcon />
          </ButtonIcon>
        ) : null}
        {isLoading
          ? intl.formatMessage({
              defaultMessage: "Opening email…",
              id: "lO6cYZ",
            })
          : intl.formatMessage({
              defaultMessage: "Open email",
              id: "+y4Ldn",
            })}
        {hasEndIcon ? (
          <ButtonIcon asChild>
            <ArrowTopRightIcon />
          </ButtonIcon>
        ) : null}
      </LinkButton>
    );
  }

  return (
    <Button color={color} isDisabled={isDisabled} isSkeleton={isSkeleton} size={size} variant={variant}>
      {hasStartIcon && !isLoading ? (
        <ButtonIcon asChild>
          <PaperPlaneIcon />
        </ButtonIcon>
      ) : null}
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
      {hasEndIcon ? (
        <ButtonIcon asChild>
          <PaperPlaneIcon />
        </ButtonIcon>
      ) : null}
    </Button>
  );
};

const meta = {
  component: PreviewButton,
} satisfies Meta<typeof PreviewButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "neutral",
    hasEndIcon: false,
    hasStartIcon: false,
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

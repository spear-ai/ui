import { Button } from "@spear-ai/ui/components/button";
// Import { } from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { useIntl } from "react-intl";

const PreviewButton = (properties: {
  color: "negative" | "neutral" | "positive" | "primary" | "x-negative" | "x-positive";
  hasIcon: boolean;
  isLoading: boolean;
  isSkeleton: boolean;
  size: "large" | "medium" | "small" | "x-large" | "x-small";
  variant: "ghost" | "outline" | "soft" | "solid";
}) => {
  const intl = useIntl();
  const { color, hasIcon, isLoading, isSkeleton, size, variant } = properties;

  return (
    <Button color={color} size={size} variant={variant}>
      {intl.formatMessage({
        defaultMessage: "Click me",
        id: "wESdnU",
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
    hasIcon: false,
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

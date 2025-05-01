import { Spinner } from "@spear-ai/ui/components/spinner";
import type { Meta, StoryObj } from "@storybook/react";

const PreviewSpinner = (properties: { isPrimary: boolean }) => {
  const { isPrimary } = properties;
  const color = isPrimary ? "text-primary-11" : "text-neutral-11";
  return <Spinner className={color} />;
};

const meta = {
  component: PreviewSpinner,
} satisfies Meta<typeof PreviewSpinner>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isPrimary: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

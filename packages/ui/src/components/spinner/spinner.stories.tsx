import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";

const PreviewSpinner = (properties: { isPrimary: boolean }) => {
  const { isPrimary } = properties;
  return <Spinner isPrimary={isPrimary} />;
};

const meta = {
  component: PreviewSpinner,
} satisfies Meta<typeof PreviewSpinner>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    isPrimary: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

import { Separator } from "@spear-ai/ui/components/separator";
import type { Meta, StoryObj } from "@storybook/react";

const PreviewSeparator = () => (
  <div className="w-full max-w-xs">
    <Separator />
  </div>
);

const meta = {
  component: PreviewSeparator,
} satisfies Meta<typeof PreviewSeparator>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  parameters: {
    layout: "centered",
  },
};

export default meta;

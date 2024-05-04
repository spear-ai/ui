import {
  Tooltip,
  TooltipArrow,
  TooltipArrowSvg,
  TooltipBody,
  TooltipContent,
  TooltipTrigger,
} from "@spear-ai/ui/components/tooltip";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, TooltipProps } from "react-aria-components";
import { useIntl } from "react-intl";
import { useStorybook } from "@/components/storybook-provider/storybook-provider";

const PreviewTooltip = (properties: {
  isAlwaysOpen: boolean;
  placement: Exclude<TooltipProps["placement"], undefined>;
}) => {
  const { isAlwaysOpen, placement } = properties;
  const intl = useIntl();
  const { portalContainer } = useStorybook();

  return (
    <TooltipTrigger>
      <Button className="cursor-default rounded-md text-neutral-12">
        {intl.formatMessage({
          defaultMessage: "Trigger",
          id: "B3Q5mz",
        })}
      </Button>
      <Tooltip
        UNSTABLE_portalContainer={portalContainer}
        isOpen={isAlwaysOpen ? true : undefined}
        placement={placement}
      >
        <TooltipBody>
          <TooltipContent>
            {intl.formatMessage({
              defaultMessage: "Some tooltip text",
              id: "p6+EZV",
            })}
          </TooltipContent>
          <TooltipArrow>
            <TooltipArrowSvg />
          </TooltipArrow>
        </TooltipBody>
      </Tooltip>
    </TooltipTrigger>
  );
};

const meta = {
  argTypes: {
    placement: {
      control: { type: "select" },
      options: ["top", "top start", "top end", "end", "bottom", "bottom start", "bottom end", "start"],
    },
  },
  component: PreviewTooltip,
} satisfies Meta<typeof PreviewTooltip>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    isAlwaysOpen: false,
    placement: "top",
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

/* eslint-disable react/jsx-props-no-spreading */
import {
  EyeClosedIcon,
  EyeOpenIcon,
  LetterCaseCapitalizeIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import { ToggleButton } from "react-aria-components";
import { useIntl } from "react-intl";
import { useStorybook } from "@/components/storybook-provider/storybook-provider";
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowSvg,
  TooltipBody,
  TooltipContent,
  TooltipTrigger,
} from "@/components/tooltip/tooltip";

const ToggleButtonTooltip = (properties: { children: ReactNode; text: ReactNode }) => {
  const { children, text } = properties;
  const { portalContainer } = useStorybook();

  return (
    <TooltipTrigger>
      {children}
      <Tooltip UNSTABLE_portalContainer={portalContainer} offset={4}>
        <TooltipBody>
          <TooltipContent>{text}</TooltipContent>
          <TooltipArrow>
            <TooltipArrowSvg />
          </TooltipArrow>
        </TooltipBody>
      </Tooltip>
    </TooltipTrigger>
  );
};

const PreviewToggleButton = (properties: {
  isAlternating: boolean;
  isDisabled: boolean;
  isReady: boolean;
  isVanishing: boolean;
  style: "Ghost";
}) => {
  const { isAlternating, isDisabled, isReady, isVanishing } = properties;
  const intl = useIntl();

  if (isVanishing) {
    return (
      <ToggleButtonTooltip
        text={intl.formatMessage({
          defaultMessage: "Toggle visibility",
          id: "a7/VNt",
        })}
      >
        <ToggleButton
          className={`group size-8 cursor-default rounded-md p-2 opacity-0 active:bg-primary-a-5 hover:bg-primary-a-4 hover:text-primary-11 hover:opacity-100 focus-visible:text-primary-11 focus-visible:opacity-100 focus-visible:outline-primary-7 selected:text-neutral-9 selected:opacity-100 disabled:pointer-events-none disabled:text-neutral-9 ${isReady ? "" : "pointer-events-none"}`}
          defaultSelected
          isDisabled={isDisabled}
        >
          <EyeClosedIcon className={`hidden size-4 group-selected:block ${isReady ? "" : "!hidden"}`} />
          <EyeOpenIcon className={`block size-4 group-selected:hidden ${isReady ? "" : "!hidden"}`} />
        </ToggleButton>
      </ToggleButtonTooltip>
    );
  }

  if (isAlternating) {
    return (
      <ToggleButtonTooltip
        text={intl.formatMessage({
          defaultMessage: "Toggle dark mode",
          id: "Uzzhfy",
        })}
      >
        <ToggleButton
          className={`group size-8 cursor-default rounded-md p-2 text-primary-11 active:bg-primary-a-5 hover:bg-primary-a-4 focus-visible:outline-primary-7 disabled:pointer-events-none disabled:text-neutral-9 ${isReady ? "" : "pointer-events-none"}`}
          isDisabled={isDisabled}
        >
          <MoonIcon className={`hidden size-4 group-selected:block ${isReady ? "" : "!hidden"}`} />
          <SunIcon className={`block size-4 group-selected:hidden ${isReady ? "" : "!hidden"}`} />
        </ToggleButton>
      </ToggleButtonTooltip>
    );
  }

  return (
    <ToggleButtonTooltip
      text={intl.formatMessage({
        defaultMessage: "Capitalize",
        id: "lXTsbd",
      })}
    >
      <ToggleButton
        className={`group size-8 cursor-default rounded-md p-2 text-primary-11 active:bg-primary-a-5 hover:bg-primary-a-4 focus-visible:outline-primary-7 selected:bg-primary-5 disabled:pointer-events-none disabled:text-neutral-9 ${isReady ? "" : "pointer-events-none"}`}
        isDisabled={isDisabled}
      >
        <LetterCaseCapitalizeIcon className={`size-4 ${isReady ? "" : "!hidden"}`} />
      </ToggleButton>
    </ToggleButtonTooltip>
  );
};

const meta = {
  argTypes: {
    style: { control: { type: "select" }, options: ["Ghost"] },
  },
  component: PreviewToggleButton,
} satisfies Meta<typeof PreviewToggleButton>;

type Story = StoryObj<typeof meta>;

export const Activating: Story = {
  args: {
    isAlternating: false,
    isDisabled: false,
    isReady: true,
    isVanishing: false,
    style: "Ghost",
  },
  parameters: {
    controls: {
      exclude: /(?:isAlternating|isVanishing)/gu,
    },
    layout: "centered",
  },
  render: (arguments_) => <PreviewToggleButton {...arguments_} isAlternating={false} />,
};

export const Alternating: Story = {
  args: {
    isAlternating: false,
    isDisabled: false,
    isReady: true,
    isVanishing: false,
    style: "Ghost",
  },
  parameters: {
    controls: {
      exclude: /(?:isAlternating|isVanishing)/gu,
    },
    layout: "centered",
  },
  render: (arguments_) => <PreviewToggleButton {...arguments_} isAlternating />,
};

export const Vanishing: Story = {
  args: {
    isAlternating: false,
    isDisabled: false,
    isReady: true,
    isVanishing: false,
    style: "Ghost",
  },
  parameters: {
    controls: {
      exclude: /(?:isAlternating|isVanishing)/gu,
    },
    layout: "centered",
  },

  render: (arguments_) => <PreviewToggleButton {...arguments_} isVanishing />,
};

export default meta;

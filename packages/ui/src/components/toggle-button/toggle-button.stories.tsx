/* eslint-disable react/jsx-props-no-spreading */
import {
  EyeClosedIcon,
  EyeOpenIcon,
  LetterCaseCapitalizeIcon,
  MoonIcon,
  SunIcon,
  TriangleDownIcon,
} from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import { OverlayArrow, ToggleButton, Tooltip, TooltipTrigger } from "react-aria-components";
import { useIntl } from "react-intl";
import { useStorybook } from "@/components/storybook-provider/storybook-provider";

const ToggleButtonTooltip = (properties: { children: ReactNode; text: ReactNode }) => {
  const { children, text } = properties;
  const { portalContainer } = useStorybook();

  return (
    <TooltipTrigger>
      {children}
      <Tooltip
        UNSTABLE_portalContainer={portalContainer}
        className="group select-none will-change-transform entering:duration-100 entering:animate-in entering:fade-in-0 entering:zoom-in-95 placement-left:entering:slide-in-from-right-1 placement-right:entering:slide-in-from-left-1 placement-top:entering:slide-in-from-bottom-1 placement-bottom:entering:slide-in-from-top-1 exiting:duration-75 exiting:animate-out exiting:fade-out-0 exiting:zoom-out-95 placement-left:exiting:slide-out-to-right-1 placement-right:exiting:slide-out-to-left-1 placement-top:exiting:slide-out-to-bottom-1 placement-bottom:exiting:slide-out-to-top-1"
      >
        <div className="rounded-sm bg-black-a-12 p-1.5 text-xs leading-none text-white-a-12 shadow-sm group-placement-left:-translate-x-3 group-placement-right:translate-x-3 group-placement-top:-translate-y-3 group-placement-bottom:translate-y-3 dark:bg-white-a-12 dark:text-black-a-12">
          <OverlayArrow>
            <TriangleDownIcon className="block size-5 text-black-a-12 group-placement-left:-ml-2 group-placement-left:-rotate-90 group-placement-right:-mr-2 group-placement-right:rotate-90 group-placement-top:-mt-2 group-placement-bottom:-mb-2 group-placement-bottom:rotate-180 dark:text-white-a-12" />
          </OverlayArrow>
          {text}
        </div>
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

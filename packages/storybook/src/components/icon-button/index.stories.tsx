import { ArrowTopRightIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  IconButton,
  IconButtonIcon,
  IconButtonSpinner,
  LinkIconButton,
} from "@spear-ai/ui/components/icon-button";
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowSvg,
  TooltipBody,
  TooltipContent,
  TooltipTrigger,
} from "@spear-ai/ui/components/tooltip";
import type { Meta, StoryObj } from "@storybook/react";
import { useIntl } from "react-intl";

const PreviewIconButton = (properties: {
  color: "negative" | "neutral" | "positive" | "primary" | "x-negative" | "x-positive";
  hasIcon: boolean;
  isCircle: boolean;
  isDisabled: boolean;
  isLink: boolean;
  isLoading: boolean;
  isSkeleton: boolean;
  size: "size-7" | "size-8" | "size-9";
  variant: "ghost" | "outline" | "soft" | "solid";
}) => {
  const { color, hasIcon, isCircle, isDisabled, isLink, isLoading, isSkeleton, size, variant } = properties;
  const rounded = isCircle ? "rounded-full" : "";
  const intl = useIntl();

  if (isLink) {
    return (
      <TooltipTrigger>
        <LinkIconButton
          aria-label={intl.formatMessage({ defaultMessage: "Fusce dignissim", id: "uEMDBb" })}
          className={`${size} ${rounded}`}
          color={color}
          href="https://ui.spear.ai"
          isDisabled={isDisabled}
          isLoading={isLoading}
          isSkeleton={isSkeleton}
          rel="nofollow"
          target="_blank"
          variant={variant}
        >
          {isLoading ? <IconButtonSpinner /> : null}
          {!isLoading && hasIcon ? (
            <IconButtonIcon asChild>
              <ArrowTopRightIcon className="rtl:-scale-x-100" />
            </IconButtonIcon>
          ) : null}
        </LinkIconButton>
        <Tooltip offset={4}>
          <TooltipBody>
            <TooltipContent>
              {intl.formatMessage({
                defaultMessage: "Open",
                id: "JfG49w",
              })}
            </TooltipContent>
            <TooltipArrow>
              <TooltipArrowSvg />
            </TooltipArrow>
          </TooltipBody>
        </Tooltip>
      </TooltipTrigger>
    );
  }

  return (
    <TooltipTrigger>
      <IconButton
        aria-label={intl.formatMessage({ defaultMessage: "Fusce dignissim", id: "uEMDBb" })}
        className={`${size} ${rounded}`}
        color={color}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isSkeleton={isSkeleton}
        variant={variant}
      >
        {isLoading ? <IconButtonSpinner /> : null}
        {!isLoading && hasIcon ? (
          <IconButtonIcon asChild>
            <PlusIcon />
          </IconButtonIcon>
        ) : null}
      </IconButton>
      <Tooltip offset={4}>
        <TooltipBody>
          <TooltipContent>
            {intl.formatMessage({
              defaultMessage: "Add",
              id: "2/2yg+",
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
    variant: { control: { type: "select" }, options: ["solid"] },
  },
  component: PreviewIconButton,
} satisfies Meta<typeof PreviewIconButton>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    color: "neutral",
    hasIcon: true,
    isCircle: false,
    isDisabled: false,
    isLink: false,
    isLoading: false,
    isSkeleton: false,
    size: "size-8",
    variant: "soft",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["neutral", "primary", "negative", "x-negative", "positive", "x-positive"],
    },
    size: {
      control: {
        labels: {
          "size-7": "7",
          "size-8": "8",
          "size-9": "9",
        },
        type: "select",
      },
      options: ["size-7", "size-8", "size-9"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["ghost", "outline", "soft", "solid"],
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

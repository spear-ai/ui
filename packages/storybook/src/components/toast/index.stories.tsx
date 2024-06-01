import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import {
  closeToast,
  Toast,
  ToastCloseButtonPrimitive,
  ToastCloseIconButton,
  ToastCloseIconButtonIcon,
  ToastDescription,
  Toaster,
  ToastIcon,
  ToastTitle,
  useRenderToast,
} from "@spear-ai/ui/components/toast";
import { cx } from "@spear-ai/ui/helpers/cx";
import type { Meta, StoryObj } from "@storybook/react";
import { useCallback } from "react";
import { Button } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewToast = (properties: {
  hasActionButton1: boolean;
  hasActionButton2: boolean;
  hasCloseButton: boolean;
  hasDescription: boolean;
  hasIcon: boolean;
  hasInlineActionButton: boolean;
  kind: "error" | "info" | "success" | "warning" | null;
  position:
    | "bottom-center"
    | "bottom-end"
    | "bottom-left"
    | "bottom-right"
    | "bottom-start"
    | "top-center"
    | "top-end"
    | "top-left"
    | "top-right"
    | "top-start";
  shouldRemainOpen: boolean;
}) => {
  const intl = useIntl();
  const renderToast = useRenderToast();
  const {
    hasActionButton1,
    hasActionButton2,
    hasCloseButton,
    hasDescription,
    hasIcon,
    hasInlineActionButton,
    kind,
    position,
    shouldRemainOpen,
  } = properties;
  let icon = null;

  if (hasIcon) {
    switch (kind) {
      case "error": {
        icon = (
          <ToastIcon asChild>
            <CrossCircledIcon className="text-x-negative-11" />
          </ToastIcon>
        );
        break;
      }
      case "info": {
        icon = (
          <ToastIcon asChild>
            <InfoCircledIcon className="text-positive-11" />
          </ToastIcon>
        );
        break;
      }
      case "success": {
        icon = (
          <ToastIcon asChild>
            <CheckCircledIcon className="text-x-positive-11" />
          </ToastIcon>
        );
        break;
      }
      case "warning": {
        icon = (
          <ToastIcon asChild>
            <ExclamationTriangleIcon className="text-negative-11" />
          </ToastIcon>
        );
        break;
      }
      default: {
        icon = (
          <ToastIcon asChild>
            <PaperPlaneIcon />
          </ToastIcon>
        );
        break;
      }
    }
  }

  const render = useCallback(() => {
    const id = renderToast(
      <Toast className="items-start p-4">
        {icon}
        <div className="w-0 flex-1">
          <header className="flex justify-between">
            <ToastTitle
              className={cx(
                "flex-1",
                kind === "info" ? "text-positive-12" : undefined,
                kind === "success" ? "text-x-positive-12" : undefined,
                kind === "warning" ? "text-negative-12" : undefined,
                kind === "error" ? "text-x-negative-12" : undefined,
              )}
            >
              {intl.formatMessage({
                defaultMessage: "Nullam mattis sollicitudin",
                id: "ErlK/z",
              })}
            </ToastTitle>
            <div className="-my-1 -me-2 flex shrink-0">
              {hasActionButton1 && hasInlineActionButton && !hasActionButton2 ? (
                <Button
                  className="ms-1 cursor-default rounded-md px-2 py-1 text-sm font-medium text-primary-11 hover:bg-primary-a-4 pressed:bg-primary-a-5"
                  onPress={() => closeToast(id)}
                >
                  {intl.formatMessage({
                    defaultMessage: "Undo",
                    id: "JkS37H",
                  })}
                </Button>
              ) : null}
              {hasCloseButton ? (
                <ToastCloseIconButton>
                  <ToastCloseIconButtonIcon />
                </ToastCloseIconButton>
              ) : null}
            </div>
          </header>
          {hasDescription ? (
            <ToastDescription>
              {intl.formatMessage({
                defaultMessage:
                  "Proin vestibulum metus purus vel vulputate ante sollicitudin quis phasellus.",
                id: "hlCqEj",
              })}
            </ToastDescription>
          ) : null}
          {hasActionButton1 && !hasInlineActionButton ? (
            <div className="-ms-3 mt-2 flex space-x-2">
              <Button
                className="ms-1 cursor-default rounded-md px-2 py-1 text-sm font-medium text-primary-11 hover:bg-primary-a-4 pressed:bg-primary-a-5"
                onPress={() => closeToast(id)}
              >
                {intl.formatMessage({
                  defaultMessage: "Undo",
                  id: "JkS37H",
                })}
              </Button>
              {hasActionButton2 ? (
                <ToastCloseButtonPrimitive className="ms-1 cursor-default rounded-md px-2 py-1 text-sm font-medium text-neutral-11 hover:bg-neutral-a-4 pressed:bg-neutral-a-5">
                  {intl.formatMessage({
                    defaultMessage: "Dismiss",
                    id: "TDaF6J",
                  })}
                </ToastCloseButtonPrimitive>
              ) : null}
            </div>
          ) : null}
        </div>
      </Toast>,
      {
        duration: shouldRemainOpen ? Number.POSITIVE_INFINITY : undefined,
        position,
      },
    );
  }, [
    hasCloseButton,
    hasDescription,
    hasActionButton1,
    hasActionButton2,
    hasInlineActionButton,
    icon,
    intl,
    kind,
    position,
    renderToast,
    shouldRemainOpen,
  ]);

  return (
    <>
      <Button className="cursor-default rounded-md text-neutral-12" onPress={render}>
        {intl.formatMessage({
          defaultMessage: "Trigger",
          id: "B3Q5mz",
        })}
      </Button>
      <Toaster />
    </>
  );
};

const meta = {
  component: PreviewToast,
} satisfies Meta<typeof PreviewToast>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    hasActionButton1: false,
    hasActionButton2: false,
    hasCloseButton: false,
    hasDescription: false,
    hasIcon: false,
    hasInlineActionButton: true,
    kind: null,
    position: "bottom-end",
    shouldRemainOpen: false,
  },
  argTypes: {
    position: {
      control: {
        type: "select",
      },
      options: [
        "bottom-center",
        "bottom-end",
        "bottom-left",
        "bottom-right",
        "bottom-start",
        "top-center",
        "top-end",
        "top-left",
        "top-right",
        "top-start",
      ],
    },
  },
  parameters: {
    controls: {
      exclude: /kind/gu,
    },
    layout: "centered",
  },
};

export const Info: Story = {
  ...Standard,
  args: {
    ...Standard.args,
    hasIcon: true,
    kind: "info",
  },
};

export const Success: Story = {
  ...Standard,
  args: {
    ...Standard.args,
    hasIcon: true,
    kind: "success",
  },
};

export const Warning: Story = {
  ...Standard,
  args: {
    ...Standard.args,
    hasIcon: true,
    kind: "warning",
  },
};

export const Error: Story = {
  ...Standard,
  args: {
    ...Standard.args,
    hasIcon: true,
    kind: "error",
  },
};

export default meta;

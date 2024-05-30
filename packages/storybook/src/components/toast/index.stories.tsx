import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import { Toast, Toaster, useRenderToast } from "@spear-ai/ui/components/toast";
import { cx } from "@spear-ai/ui/helpers/cx";
import type { Meta, StoryObj } from "@storybook/react";
import { useCallback } from "react";
import { Button } from "react-aria-components";
import { useIntl } from "react-intl";

const PreviewToast = (properties: {
  hasDescription: boolean;
  hasIcon: boolean;
  hasTitle: boolean;
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
  const { hasDescription, hasIcon, hasTitle, kind, position, shouldRemainOpen } = properties;
  let icon = null;

  if (hasIcon) {
    switch (kind) {
      case "error": {
        icon = <CrossCircledIcon className="size-full text-x-negative-11" />;
        break;
      }
      case "info": {
        icon = <InfoCircledIcon className="size-full text-positive-11" />;
        break;
      }
      case "success": {
        icon = <CheckCircledIcon className="size-full text-x-positive-11" />;
        break;
      }
      case "warning": {
        icon = <ExclamationTriangleIcon className="size-full text-negative-11" />;
        break;
      }
      default: {
        break;
      }
    }
  }

  const render = useCallback(() => {
    renderToast(
      <Toast className="flex p-4">
        {icon == null ? null : <div className="me-2.5 size-5 shrink-0">{icon}</div>}
        <div>
          {hasTitle ? (
            <h1
              className={cx(
                "text-sm font-medium text-neutral-12",
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
            </h1>
          ) : null}
          {hasDescription ? (
            <p className="mt-1 text-sm text-neutral-11">
              {intl.formatMessage({
                defaultMessage:
                  "Proin vestibulum metus purus vel vulputate ante sollicitudin quis phasellus.",
                id: "hlCqEj",
              })}
            </p>
          ) : null}
        </div>
      </Toast>,
      {
        duration: shouldRemainOpen ? Number.POSITIVE_INFINITY : undefined,
        position,
      },
    );
  }, [hasDescription, icon, intl, hasTitle, kind, position, renderToast, shouldRemainOpen]);

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
    hasDescription: false,
    hasIcon: false,
    hasTitle: true,
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

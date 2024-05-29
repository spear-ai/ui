import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
} from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { ReactElement, useCallback } from "react";
import { Button } from "react-aria-components";
import { useIntl } from "react-intl";
import { toast as sonner, Toaster, ToastT } from "sonner";

const renderToast = (
  element: ReactElement,
  options: {
    duration?: number | undefined;
    id?: number | string | undefined;
    isDismissable?: boolean | undefined;
    isImportant?: boolean | undefined;
    onAutoClose?: ((toast: ToastT) => void) | undefined;
    onDismiss?: ((toast: ToastT) => void) | undefined;
    position?: "bottom-left" | "bottom-right" | "top-left" | "top-right" | undefined;
  } = {},
) => {
  const {
    /** The amount of time in milliseconds that the toast automatically remains open. */
    duration,
    /** The unique identifier of the toast. */
    id,
    /** Whether to mark the toast as important to screen readers. */
    isImportant = false,
    /** The event handler called when the toast automatically closes. */
    onAutoClose,
    /** The event handler called when the toast is intentionally dismissed. */
    onDismiss,
    /** The position of the toast. */
    position,
  } = options;

  return sonner.custom(() => element, {
    duration,
    id,
    important: isImportant,
    onAutoClose,
    onDismiss,
    position,
    unstyled: true,
  });
};

const PreviewToast = (properties: {
  color: "negative" | "neutral" | "positive" | "primary" | "x-negative" | "x-positive";
  hasDescription: boolean;
  hasTitle: boolean;
  icon: "CheckCircled" | "CrossCircled" | "ExclamationTriangle" | "InfoCircled" | null;
  position: "bottom-left" | "bottom-right" | "top-left" | "top-right";
  variant?: "soft" | "solid" | undefined;
}) => {
  const intl = useIntl();
  const {
    color = "neutral",
    hasDescription,
    hasTitle,
    icon: iconName,
    position,
    variant = "soft",
  } = properties;
  let icon = null;

  switch (iconName) {
    case "CheckCircled": {
      icon = <CheckCircledIcon className="size-full" />;
      break;
    }
    case "CrossCircled": {
      icon = <CrossCircledIcon className="size-full" />;
      break;
    }
    case "ExclamationTriangle": {
      icon = <ExclamationTriangleIcon className="size-full" />;
      break;
    }
    case "InfoCircled": {
      icon = <InfoCircledIcon className="size-full" />;
      break;
    }
    default: {
      break;
    }
  }

  const render = useCallback(() => {
    renderToast(
      <div
        className="flex w-screen max-w-sm overflow-hidden rounded-2xl bg-white p-4 shadow-xl outline-1 -outline-offset-1 outline-neutral-6 dark:bg-neutral-2 dark:outline"
        data-color={color}
        data-variant={variant}
      >
        {icon == null ? null : <div className="me-2.5 size-5 shrink-0">{icon}</div>}
        <div>
          {hasTitle ? (
            <h1 className="text-sm font-medium text-neutral-12">
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
      </div>,
      {
        position,
      },
    );
  }, [color, hasDescription, icon, intl, hasTitle, position, variant]);

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
    color: "neutral",
    hasDescription: true,
    hasTitle: true,
    icon: null,
    position: "bottom-right",
  },
  argTypes: {
    icon: {
      labels: {
        CheckCircled: "CheckCircled",
        CrossCircled: "CrossCircled",
        ExclamationTriangle: "ExclamationTriangle",
        InfoCircled: "InfoCircled",
        None: null,
      },
      options: ["None", "CheckCircled", "CrossCircled", "ExclamationTriangle", "InfoCircled"],
    },
    position: {
      control: {
        type: "select",
      },
      options: ["bottom-left", "bottom-right", "top-left", "top-right"],
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

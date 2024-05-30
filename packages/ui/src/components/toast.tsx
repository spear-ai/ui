"use client";

import { Slot } from "@radix-ui/react-slot";
import { forwardRef, HTMLAttributes, ReactElement, ReactNode } from "react";
import { useLocale } from "react-aria-components";
import { toast as sonner, Toaster as ToasterPrimitive, ToastT } from "sonner";
import { cx } from "@/helpers/cx";

export const useRenderToast = () => {
  const { direction } = useLocale();

  return (
    element: ReactElement,
    options: {
      duration?: number | undefined;
      id?: number | string | undefined;
      isDismissable?: boolean | undefined;
      isImportant?: boolean | undefined;
      onAutoClose?: ((toast: ToastT) => void) | undefined;
      onDismiss?: ((toast: ToastT) => void) | undefined;
      position?:
        | "bottom-center"
        | "bottom-end"
        | "bottom-left"
        | "bottom-right"
        | "bottom-start"
        | "top-center"
        | "top-end"
        | "top-left"
        | "top-right"
        | "top-start"
        | undefined;
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
      position: smartPosition = "bottom-end",
    } = options;

    let position: "bottom-center" | "bottom-left" | "bottom-right" | "top-center" | "top-left" | "top-right";

    switch (smartPosition) {
      case "bottom-end": {
        position = direction === "ltr" ? "bottom-right" : "bottom-left";
        break;
      }
      case "bottom-start": {
        position = direction === "ltr" ? "bottom-left" : "bottom-right";
        break;
      }
      case "top-end": {
        position = direction === "ltr" ? "top-right" : "top-left";
        break;
      }
      case "top-start": {
        position = direction === "ltr" ? "top-left" : "top-right";
        break;
      }
      default: {
        position = smartPosition;
        break;
      }
    }

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
};

export const Toaster = (properties: { className?: string | undefined; gap?: number | undefined }) => {
  const { className, gap } = properties;
  return <ToasterPrimitive className={className} gap={gap} />;
};

export const Toast = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {
    asChild?: boolean | undefined;
    children?: ReactNode;
  }
>(({ asChild = false, className, ...properties }, reference) => {
  const Component = asChild ? Slot : "div";
  const mergedClassName = cx(
    "dark:bg-neutral-dark-2 outline-neutral-light-a-3 dark:outline-neutral-dark-a-6 w-[var(--width)] overflow-hidden rounded-lg bg-white font-sans shadow-lg outline outline-1 -outline-offset-1",
    className,
  );
  return <Component className={mergedClassName} ref={reference} {...properties} />;
});

Toast.displayName = "Toast";

import { Cross1Icon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, SVGAttributes, useContext } from "react";
import {
  Button as ButtonPrimitive,
  Dialog as DialogPrimitive,
  Heading as HeadingPrimitive,
  Modal as ModalPrimitive,
  ModalOverlay as ModalOverlayPrimitive,
  OverlayTriggerStateContext,
} from "react-aria-components";
import { cx } from "@/helpers/cx";

export const DialogModalOverlay = forwardRef<
  ElementRef<typeof ModalOverlayPrimitive>,
  ComponentPropsWithoutRef<typeof ModalOverlayPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "exiting:animate-out exiting:fade-out exiting:duration-200 exiting:ease-in entering:animate-in entering:fade-in entering:duration-300 entering:ease-out bg-black-a-6 dark:bg-black-a-8 fixed inset-0 z-10 flex min-h-full items-end justify-center overflow-y-auto p-4 text-center backdrop-blur sm:items-center sm:p-0",
    className,
  );
  return <ModalPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

DialogModalOverlay.displayName = "DialogModalOverlay";

export const DialogModal = forwardRef<
  ElementRef<typeof ModalPrimitive>,
  ComponentPropsWithoutRef<typeof ModalPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "exiting:animate-out exiting:slide-out-from-top-4 exiting:sm:slide-out-from-top-0 exiting:sm:zoom-out-95 exiting:ease-in exiting:duration-200 entering:animate-in entering:sm:zoom-in-95 entering:slide-in-from-bottom-4 entering:sm:slide-in-from-bottom-0 entering:ease-out entering:duration-300 dark:bg-neutral-2 outline-neutral-6 overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl outline-1 -outline-offset-1 dark:outline",
    className,
  );
  return <ModalPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

DialogModal.displayName = "DialogModal";

export const Dialog = forwardRef<
  ElementRef<typeof DialogPrimitive>,
  ComponentPropsWithoutRef<typeof DialogPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("relative outline-none", className);
  return <DialogPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

Dialog.displayName = "Dialog";

export const DialogCloseButtonPrimitive = forwardRef<
  ElementRef<typeof ButtonPrimitive>,
  ComponentPropsWithoutRef<typeof ButtonPrimitive> & { className?: string | undefined }
>((properties, reference) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { close } = useContext(OverlayTriggerStateContext);
  return <ButtonPrimitive onPress={close} {...properties} ref={reference} />;
});

export const DialogCloseIconButton = forwardRef<
  ElementRef<typeof DialogCloseButtonPrimitive>,
  ComponentPropsWithoutRef<typeof DialogCloseButtonPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-a-11 hover:bg-neutral-a-4 focus-visible:bg-neutral-a-5 absolute hidden size-7 cursor-default rounded-md p-1.5 sm:block",
    className,
  );
  return <DialogCloseButtonPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

DialogCloseIconButton.displayName = "DialogCloseIconButton";

export const DialogCloseIconButtonIcon = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGElement> & { asChild?: boolean | undefined }
>(({ asChild = false, className, ...properties }, reference) => {
  const Component = asChild ? Slot : Cross1Icon;
  const mergedClassName = cx("h-full w-full", className);
  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} ref={reference} {...properties} />;
});

DialogCloseIconButtonIcon.displayName = "DialogCloseIconButtonIcon";

export const DialogTitle = forwardRef<
  ElementRef<typeof HeadingPrimitive>,
  ComponentPropsWithoutRef<typeof HeadingPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("text-neutral-12 text-base font-semibold leading-6", className);
  return <HeadingPrimitive className={mergedClassName} slot="title" {...properties} ref={reference} />;
});

DialogTitle.displayName = "DialogTitle";

export { DialogTrigger } from "react-aria-components";

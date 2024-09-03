import { Cross1Icon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useContext } from "react";
import {
  Button as ButtonPrimitive,
  Dialog as DialogPrimitive,
  Heading as HeadingPrimitive,
  Modal as ModalPrimitive,
  ModalOverlay as ModalOverlayPrimitive,
  OverlayTriggerStateContext,
} from "react-aria-components";
import { IconButton, IconButtonIcon } from "@/components/icon-button";
import { cx } from "@/helpers/cx";

export const DialogModalOverlay = forwardRef<
  ElementRef<typeof ModalOverlayPrimitive>,
  ComponentPropsWithoutRef<typeof ModalOverlayPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "before:exiting:animate-out before:exiting:fade-out before:exiting:duration-200 before:exiting:ease-in before:entering:animate-in before:entering:fade-in before:entering:duration-200 before:entering:ease-out before:bg-black-a-6 before:dark:bg-black-a-8 fixed inset-0 grid min-h-full w-screen grid-rows-[1fr_auto] justify-items-center overflow-y-auto p-4 pt-6 before:pointer-events-none before:fixed before:inset-0 before:backdrop-blur before:content-[''] sm:grid-rows-[1fr_auto_3fr]",
    className,
  );
  return <ModalOverlayPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

DialogModalOverlay.displayName = "DialogModalOverlay";

export const DialogModal = forwardRef<
  ElementRef<typeof ModalPrimitive>,
  ComponentPropsWithoutRef<typeof ModalPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "entering:fade-in exiting:fade-out exiting:animate-out exiting:slide-out-from-top-4 exiting:sm:slide-out-from-top-0 exiting:sm:zoom-out-95 exiting:ease-in exiting:duration-100 entering:animate-in entering:sm:zoom-in-95 entering:slide-in-from-bottom-4 entering:sm:slide-in-from-bottom-0 entering:ease-out entering:duration-200 row-start-2",
    className,
  );
  return <ModalPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

DialogModal.displayName = "DialogModal";

export const Dialog = forwardRef<
  ElementRef<typeof DialogPrimitive>,
  ComponentPropsWithoutRef<typeof DialogPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "dark:bg-neutral-2 outline-neutral-6 relative w-full min-w-0 rounded-2xl bg-white shadow-lg outline-none outline-1 -outline-offset-1 transition duration-100 will-change-transform sm:mb-auto sm:max-w-xl dark:outline",
    className,
  );
  return <DialogPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

Dialog.displayName = "Dialog";

export const DialogCloseButtonPrimitive = forwardRef<
  ElementRef<typeof ButtonPrimitive>,
  ComponentPropsWithoutRef<typeof ButtonPrimitive> & { asChild?: boolean | undefined }
>(({ asChild = false, ...properties }, reference) => {
  const Component = asChild ? Slot : ButtonPrimitive;
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { close } = useContext(OverlayTriggerStateContext);
  // @ts-expect-error the Slot component’s type definition is missing
  return <Component onPress={close} {...properties} ref={reference} />;
});

DialogCloseButtonPrimitive.displayName = "DialogCloseButtonPrimitive";

export const DialogCloseIconButton = forwardRef<
  ElementRef<typeof IconButton>,
  ComponentPropsWithoutRef<typeof IconButton>
>(({ className, variant = "ghost", ...properties }, reference) => {
  const mergedClassName = cx("absolute end-3 top-3 hidden size-7 sm:block", className);
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { close } = useContext(OverlayTriggerStateContext);
  return (
    <IconButton
      className={mergedClassName}
      onPress={close}
      variant={variant}
      {...properties}
      ref={reference}
    />
  );
});

DialogCloseIconButton.displayName = "DialogCloseIconButton";

export const DialogCloseIconButtonIcon = forwardRef<
  ElementRef<typeof IconButtonIcon>,
  ComponentPropsWithoutRef<typeof IconButtonIcon>
>((properties, reference) => (
  <IconButtonIcon aria-hidden asChild ref={reference} {...properties}>
    <Cross1Icon />
  </IconButtonIcon>
));

DialogCloseIconButtonIcon.displayName = "DialogCloseIconButtonIcon";

export const DialogTitle = forwardRef<
  ElementRef<typeof HeadingPrimitive>,
  ComponentPropsWithoutRef<typeof HeadingPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("text-neutral-12 text-base font-semibold leading-6 rtl:text-right", className);
  return <HeadingPrimitive className={mergedClassName} slot="title" {...properties} ref={reference} />;
});

DialogTitle.displayName = "DialogTitle";

export { DialogTrigger } from "react-aria-components";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import React, {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  SVGAttributes,
} from "react";
import {
  Header as HeaderPrimitive,
  Keyboard as KeyboardPrimitive,
  Menu as MenuPrimitive,
  MenuItem as MenuItemPrimitive,
  Popover as PopoverPrimitive,
  Section as SectionPrimitive,
  Separator as SeparatorPrimitive,
  Text as TextPrimitive,
} from "react-aria-components";
import { cx } from "@/helpers/cx";

export const MenuPopover = forwardRef<
  ElementRef<typeof PopoverPrimitive>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "min-w-trigger-width bg-canvas-1 outline-neutral-a-6 theme-forerunner:bg-white-a-3 theme-galapago:bg-white theme-underway:shadow-2xl placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2 entering:duration-100 entering:animate-in entering:fade-in exiting:duration-75 exiting:animate-out exiting:fade-out exiting:zoom-out-95 theme-galapago:dark:bg-black-a-3 isolate overflow-auto rounded-xl border-transparent p-1 shadow-lg outline outline-1 outline-offset-0 backdrop-blur",
    className,
  );
  return <PopoverPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

MenuPopover.displayName = "MenuPopover";

export const Menu = forwardRef<
  ElementRef<typeof MenuPrimitive>,
  ComponentPropsWithoutRef<typeof MenuPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("outline-none", className);
  return <MenuPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

Menu.displayName = "Menu";

export const MenuSeparator = forwardRef<
  ElementRef<typeof SeparatorPrimitive>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitive>
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "bg-neutral-a-6 theme-forerunner:dark:bg-white-a-6 mx-2 my-1 h-px px-4",
    className,
  );
  return <SeparatorPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

MenuSeparator.displayName = "MenuSeparator";

export const MenuSection = forwardRef<
  ElementRef<typeof SectionPrimitive>,
  ComponentPropsWithoutRef<typeof SectionPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx("", className);
  return <SectionPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

MenuSection.displayName = "MenuSection";

export const MenuHeader = forwardRef<
  ElementRef<typeof HeaderPrimitive>,
  ComponentPropsWithoutRef<typeof HeaderPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-11 select-none px-2 pt-2 text-sm/5 font-medium sm:text-xs/5",
    className,
  );
  return <HeaderPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

MenuHeader.displayName = "MenuHeader";

export const MenuItem = forwardRef<
  ElementRef<typeof MenuItemPrimitive>,
  ComponentPropsWithoutRef<typeof MenuItemPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "group/item hover:bg-primary-4 focus:bg-primary-5 relative block cursor-default select-none rounded-lg py-2.5 pe-7 ps-2 outline-none sm:py-1.5 rtl:text-right",
    className,
  );
  return <MenuItemPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

MenuItem.displayName = "MenuItem";

export const MenuItemLabel = forwardRef<
  ElementRef<typeof TextPrimitive>,
  ComponentPropsWithoutRef<typeof TextPrimitive>
>(({ className, slot = "label", ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled/item:text-neutral-10 me-1 block text-base leading-none sm:text-sm",
    className,
  );
  return <TextPrimitive className={mergedClassName} slot={slot} {...properties} ref={reference} />;
});

MenuItemLabel.displayName = "MenuItemLabel";

export const MenuItemDescription = forwardRef<
  ElementRef<typeof TextPrimitive>,
  ComponentPropsWithoutRef<typeof TextPrimitive>
>(({ className, slot = "description", ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-11 group-disabled/item:text-neutral-9 mt-1 block text-sm sm:text-xs",
    className,
  );
  return <TextPrimitive className={mergedClassName} slot={slot} {...properties} ref={reference} />;
});

MenuItemDescription.displayName = "MenuItemDescription";

export const MenuItemKeyboard = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx("absolute end-2 top-1", className);
    return <span className={mergedClassName} {...properties} ref={reference} />;
  },
);

MenuItemKeyboard.displayName = "MenuItemKeyboard";

export const MenuItemKeyboardShortcut = forwardRef<
  ElementRef<typeof KeyboardPrimitive>,
  ComponentPropsWithoutRef<typeof KeyboardPrimitive>
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-a-11 group-disabled/item:text-neutral-a-9 font-mono text-sm",
    className,
  );
  return <KeyboardPrimitive className={mergedClassName} {...properties} ref={reference} />;
});

MenuItemKeyboardShortcut.displayName = "MenuItemKeyboardShortcut";

export const MenuItemExpand = forwardRef<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "text-neutral-a-12 group-disabled/item:text-neutral-a-10 absolute end-1 top-1 size-6 p-1",
      className,
    );
    return <span className={mergedClassName} {...properties} ref={reference} />;
  },
);

MenuItemExpand.displayName = "MenuItemExpand";

export const MenuItemExpandIcon = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGElement> & { asChild?: boolean | undefined }
>(({ asChild = false, className, ...properties }, reference) => {
  const Component = asChild ? Slot : ChevronRightIcon;
  const mergedClassName = cx("relative h-full w-auto rtl:-scale-x-100", className);
  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} ref={reference} {...properties} />;
});

MenuItemExpandIcon.displayName = "MenuItemExpandIcon";

export { MenuTrigger, SubmenuTrigger } from "react-aria-components";

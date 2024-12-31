import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, HTMLAttributes, SVGAttributes } from "react";
import {
  Header as HeaderPrimitive,
  Keyboard as KeyboardPrimitive,
  Menu as MenuPrimitive,
  MenuItem as MenuItemPrimitive,
  MenuSection as MenuSectionPrimitive,
  Popover as PopoverPrimitive,
  Separator as SeparatorPrimitive,
  Text as TextPrimitive,
} from "react-aria-components";
import { cx } from "@/helpers/cx";

export const MenuPopover = ({
  className,
  ...properties
}: ComponentProps<typeof PopoverPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx(
    "min-w-trigger-width bg-canvas-a-1 outline-neutral-a-6 theme-omega:bg-white theme-horizon:shadow-2xl placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2 entering:duration-100 entering:animate-in entering:fade-in exiting:duration-75 exiting:animate-out exiting:fade-out exiting:zoom-out-95 theme-omega:dark:bg-black-a-3 isolate overflow-auto rounded-xl border-transparent p-1 shadow-lg outline outline-1 outline-offset-0 backdrop-blur-xl",
    className,
  );

  return <PopoverPrimitive className={mergedClassName} {...properties} />;
};

MenuPopover.displayName = "MenuPopover";

export const Menu = ({
  className,
  ...properties
}: ComponentProps<typeof MenuPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx("outline-none", className);
  return <MenuPrimitive className={mergedClassName} {...properties} />;
};

Menu.displayName = "Menu";

export const MenuSeparator = ({ className, ...properties }: ComponentProps<typeof SeparatorPrimitive>) => {
  const mergedClassName = cx("bg-neutral-a-6 mx-2 my-1 h-px px-4", className);
  return <SeparatorPrimitive className={mergedClassName} {...properties} />;
};

MenuSeparator.displayName = "MenuSeparator";

export const MenuSection = ({ className, ...properties }: ComponentProps<typeof MenuSectionPrimitive>) => {
  const mergedClassName = cx(
    "before:bg-neutral-a-6 relative mt-2 pt-2 before:absolute before:left-2 before:right-2 before:top-0 before:h-px before:content-[''] first:mt-0 first:pt-0 first:before:content-none",
    className,
  );

  return <MenuSectionPrimitive className={mergedClassName} {...properties} />;
};

MenuSection.displayName = "MenuSection";

export const MenuHeader = ({
  className,
  ...properties
}: ComponentProps<typeof HeaderPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx(
    "text-neutral-11 select-none px-2 pt-1 text-sm/5 font-medium sm:text-xs/5",
    className,
  );

  return <HeaderPrimitive className={mergedClassName} {...properties} />;
};

MenuHeader.displayName = "MenuHeader";

export const MenuItem = ({
  className,
  ...properties
}: ComponentProps<typeof MenuItemPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx(
    "group/item hover:bg-primary-4 focus:bg-primary-5 relative block cursor-default select-none rounded-lg py-2.5 pe-7 ps-2 outline-none sm:py-1.5 rtl:text-right",
    className,
  );

  return <MenuItemPrimitive className={mergedClassName} {...properties} />;
};

MenuItem.displayName = "MenuItem";

export const MenuItemLabel = ({
  className,
  slot = "label",
  ...properties
}: ComponentProps<typeof TextPrimitive>) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled/item:text-neutral-10 me-1 block text-base leading-none sm:text-sm",
    className,
  );

  return <TextPrimitive className={mergedClassName} slot={slot} {...properties} />;
};

MenuItemLabel.displayName = "MenuItemLabel";

export const MenuItemDescription = ({
  className,
  slot = "description",
  ...properties
}: ComponentProps<typeof TextPrimitive>) => {
  const mergedClassName = cx(
    "text-neutral-11 group-disabled/item:text-neutral-9 mt-1 block text-sm sm:text-xs",
    className,
  );

  return <TextPrimitive className={mergedClassName} slot={slot} {...properties} />;
};

MenuItemDescription.displayName = "MenuItemDescription";

export const MenuItemKeyboard = ({ className, ...properties }: HTMLAttributes<HTMLSpanElement>) => {
  const mergedClassName = cx("absolute end-2 top-1", className);
  return <span className={mergedClassName} {...properties} />;
};

MenuItemKeyboard.displayName = "MenuItemKeyboard";

export const MenuItemKeyboardShortcut = ({
  className,
  ...properties
}: ComponentProps<typeof KeyboardPrimitive>) => {
  const mergedClassName = cx(
    "text-neutral-a-11 group-disabled/item:text-neutral-a-9 font-mono text-sm",
    className,
  );

  return <KeyboardPrimitive className={mergedClassName} {...properties} />;
};

MenuItemKeyboardShortcut.displayName = "MenuItemKeyboardShortcut";

export const MenuItemExpand = ({ className, ...properties }: HTMLAttributes<HTMLSpanElement>) => {
  const mergedClassName = cx(
    "text-neutral-a-12 group-disabled/item:text-neutral-a-10 absolute end-1 top-1 size-6 p-1",
    className,
  );

  return <span className={mergedClassName} {...properties} />;
};

MenuItemExpand.displayName = "MenuItemExpand";

export const MenuItemExpandIcon = ({
  asChild = false,
  className,
  ...properties
}: SVGAttributes<SVGElement> & { asChild?: boolean | undefined }) => {
  const Component = asChild ? Slot : ChevronRightIcon;
  const mergedClassName = cx("relative h-full w-auto rtl:-scale-x-100", className);
  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} {...properties} />;
};

MenuItemExpandIcon.displayName = "MenuItemExpandIcon";

export { MenuTrigger, SubmenuTrigger } from "react-aria-components";

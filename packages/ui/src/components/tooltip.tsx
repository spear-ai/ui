import { TriangleDownIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, HTMLAttributes, SVGAttributes } from "react";
import { Tooltip as TooltipPrimitive } from "react-aria-components";
import { cx } from "@/helpers/cx";

export const Tooltip = ({
  className,
  ...properties
}: ComponentProps<typeof TooltipPrimitive> & { className?: string | undefined }) => {
  const mergedClassName = cx(
    "entering:duration-100 entering:animate-in entering:fade-in-0 entering:zoom-in-95 placement-left:entering:slide-in-from-right-1 placement-right:entering:slide-in-from-left-1 placement-top:entering:slide-in-from-bottom-1 placement-bottom:entering:slide-in-from-top-1 exiting:duration-75 exiting:animate-out exiting:fade-out-0 exiting:zoom-out-95 placement-left:exiting:slide-out-to-right-1 placement-right:exiting:slide-out-to-left-1 placement-top:exiting:slide-out-to-bottom-1 placement-bottom:exiting:slide-out-to-top-1 group select-none will-change-transform",
    className,
  );
  return <TooltipPrimitive className={mergedClassName} {...properties} />;
};

Tooltip.displayName = "Tooltip";

export const TooltipBody = ({ className, ...properties }: HTMLAttributes<HTMLDivElement>) => {
  const mergedClassName = cx(
    "bg-black-a-12 text-white-a-12 group-placement-left:-translate-x-3 group-placement-right:translate-x-3 group-placement-top:-translate-y-2 group-placement-bottom:translate-y-2 dark:bg-white-a-12 dark:text-black-a-12 rounded-sm p-1.5 text-xs leading-none shadow-sm",
    className,
  );

  return <div className={mergedClassName} {...properties} />;
};

TooltipBody.displayName = "TooltipBody";

export const TooltipArrowSvg = ({
  asChild = false,
  className,
  ...properties
}: SVGAttributes<SVGElement> & { asChild?: boolean | undefined }) => {
  const Component = asChild ? Slot : TriangleDownIcon;
  const mergedClassName = cx(
    "text-black-a-12 group-placement-left:-ml-2 group-placement-left:-rotate-90 group-placement-right:-mr-2 group-placement-right:rotate-90 group-placement-top:-mt-2 group-placement-bottom:-mb-2 group-placement-bottom:rotate-180 dark:text-white-a-12 block size-5",
    className,
  );

  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} {...properties} />;
};

TooltipArrowSvg.displayName = "TooltipArrowSvg";

export { OverlayArrow as TooltipArrow, TooltipTrigger } from "react-aria-components";

export const TooltipContent = (properties: HTMLAttributes<HTMLDivElement>) => <div {...properties} />;

TooltipContent.displayName = "TooltipContent";
